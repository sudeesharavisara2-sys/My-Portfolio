import React, { useEffect, useRef, useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './index.css';

/* =========================================================
   INTERACTIVE EMERALD PARTICLE SPHERE
========================================================= */

function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!ctx) return undefined;

    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const emerald =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--green')
        .trim() || '#10b981';

    let width = 1;
    let height = 1;
    let frameId = null;
    let previousTime = null;
    let elapsed = 0;

    let targetScroll = window.scrollY;
    let currentScroll = targetScroll;

    const pointer = {
      active: false,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      tiltX: 0,
      tiltY: 0,
    };

    /* -----------------------------------------------------
       BUILD EVENLY SPACED PARTICLES ON A SPHERE
    ----------------------------------------------------- */

    const particles = [];
    const particleCount = 620;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < particleCount; i += 1) {
      const y = 1 - (i / (particleCount - 1)) * 2;
      const radius = Math.sqrt(Math.max(0, 1 - y * y));
      const angle = goldenAngle * i;

      particles.push({
        x: Math.cos(angle) * radius,
        y,
        z: Math.sin(angle) * radius,

        // Smooth displacement caused by the cursor.
        offsetX: 0,
        offsetY: 0,
      });
    }

    /* -----------------------------------------------------
       DRAW THE PARTICLE SPHERE
    ----------------------------------------------------- */

    function draw(delta = 0, snap = false) {
      ctx.clearRect(0, 0, width, height);

      const isMobile = width <= 768;
      const reducedMotion = motionQuery.matches;

      const time = reducedMotion ? 0 : elapsed;

      const scroll = reducedMotion
        ? 0
        : currentScroll / Math.max(height, 1);

      const easing =
        snap || reducedMotion
          ? 1
          : 1 - Math.exp(-delta * 9);

      const targetTiltX =
        pointer.active && !reducedMotion
          ? pointer.targetX
          : 0;

      const targetTiltY =
        pointer.active && !reducedMotion
          ? pointer.targetY
          : 0;

      pointer.tiltX +=
        (targetTiltX - pointer.tiltX) * easing;

      pointer.tiltY +=
        (targetTiltY - pointer.tiltY) * easing;

      // Slowly drift across the page while scrolling.
      const centerX =
        width *
          (
            isMobile
              ? 0.64
              : 0.53 + 0.2 * Math.cos(scroll * 0.65)
          ) +
        pointer.tiltX * (isMobile ? 8 : 24);

      const centerY =
        height *
          (0.5 + Math.sin(scroll * 0.55) * 0.07) +
        pointer.tiltY * 18;

      const sphereRadius = Math.min(
        width * (isMobile ? 0.4 : 0.225),
        height * 0.36
      );

      // Mouse position controls the tilt.
      const angleX =
        -0.15 +
        pointer.tiltY * 0.3 +
        Math.sin(scroll * 0.4) * 0.1;

      const angleY =
        time * 0.065 +
        scroll * 0.13 +
        pointer.tiltX * 0.45;

      const sinX = Math.sin(angleX);
      const cosX = Math.cos(angleX);

      const sinY = Math.sin(angleY);
      const cosY = Math.cos(angleY);

      const interactionRadius = isMobile ? 90 : 150;
      const projected = [];

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        // A small surface ripple gives the sphere an organic shape.
        const ripple =
          1 +
          Math.sin(
            particle.x * 3.2 +
            particle.y * 2.4 +
            time * 0.55
          ) *
            Math.cos(
              particle.z * 3.5 - time * 0.3
            ) *
            0.055;

        const x = particle.x * ripple;
        const y = particle.y * ripple;
        const z = particle.z * ripple;

        const y1 = y * cosX - z * sinX;
        const z1 = y * sinX + z * cosX;

        const x2 = x * cosY + z1 * sinY;
        const z2 = -x * sinY + z1 * cosY;

        const perspective = 4 / (4 - z2);

        const screenX =
          centerX + x2 * sphereRadius * perspective;

        const screenY =
          centerY + y1 * sphereRadius * perspective;

        let desiredOffsetX = 0;
        let desiredOffsetY = 0;
        let proximity = 0;

        // Nearby particles move away from the cursor.
        if (pointer.active && !reducedMotion) {
          const dx = screenX - pointer.x;
          const dy = screenY - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (distance < interactionRadius) {
            proximity = 1 - distance / interactionRadius;

            const force = proximity * proximity * 48;

            // Give a particle directly under the cursor
            // a stable direction instead of dividing by zero.
            const directionX =
              distance > 0.001
                ? dx / distance
                : Math.cos(i * goldenAngle);

            const directionY =
              distance > 0.001
                ? dy / distance
                : Math.sin(i * goldenAngle);

            desiredOffsetX = directionX * force;
            desiredOffsetY = directionY * force;
          }
        }

        particle.offsetX +=
          (desiredOffsetX - particle.offsetX) * easing;

        particle.offsetY +=
          (desiredOffsetY - particle.offsetY) * easing;

        projected.push({
          x: screenX + particle.offsetX,
          y: screenY + particle.offsetY,
          depth: z2,
          proximity,
          index: i,
        });
      }

      // Draw the back first, then the brighter front particles.
      projected.sort((a, b) => a.depth - b.depth);

      ctx.fillStyle = emerald;

      for (const point of projected) {
        // Use fewer particles on narrow screens.
        if (isMobile && point.index % 2 !== 0) {
          continue;
        }

        const depth = Math.max(
          0,
          Math.min(1, (point.depth + 1.1) / 2.2)
        );

        const opacity =
          (isMobile ? 0.055 : 0.07) +
          depth * (isMobile ? 0.26 : 0.4) +
          point.proximity * 0.2;

        const size =
          0.65 +
          depth * 0.85 +
          point.proximity * 0.6;

        // A soft halo only on particles near the cursor.
        if (point.proximity > 0.05) {
          ctx.globalAlpha = point.proximity * 0.065;

          ctx.beginPath();
          ctx.arc(
            point.x,
            point.y,
            size * 4,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }

        ctx.globalAlpha = Math.min(opacity, 0.75);

        ctx.beginPath();
        ctx.arc(
          point.x,
          point.y,
          size,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    /* -----------------------------------------------------
       ANIMATION LOOP
    ----------------------------------------------------- */

    function animate(timestamp) {
      const delta =
        previousTime === null
          ? 0
          : Math.min(
              (timestamp - previousTime) / 1000,
              0.05
            );

      previousTime = timestamp;
      elapsed += delta;

      currentScroll +=
        (targetScroll - currentScroll) *
        (1 - Math.exp(-delta * 7));

      draw(delta);

      frameId =
        window.requestAnimationFrame(animate);
    }

    /* -----------------------------------------------------
       MOUSE INTERACTION
       Listen on window because the canvas is behind content.
    ----------------------------------------------------- */

    function handlePointerMove(event) {
      if (
        event.pointerType === 'touch' ||
        motionQuery.matches
      ) {
        return;
      }

      pointer.active = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      pointer.targetX = Math.max(
        -1,
        Math.min(1, (event.clientX / width) * 2 - 1)
      );

      pointer.targetY = Math.max(
        -1,
        Math.min(1, (event.clientY / height) * 2 - 1)
      );
    }

    function resetPointer() {
      pointer.active = false;
      pointer.targetX = 0;
      pointer.targetY = 0;
    }

    function handlePointerOut(event) {
      // Reset only when the pointer leaves the browser content.
      if (event.relatedTarget === null) {
        resetPointer();
      }
    }

    /* -----------------------------------------------------
       SCROLL / RESIZE
    ----------------------------------------------------- */

    function handleScroll() {
      targetScroll = window.scrollY;
    }

    function resize() {
      width = Math.max(window.innerWidth, 1);
      height = Math.max(window.innerHeight, 1);

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        1.5
      );

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      ctx.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
      );

      resetPointer();
      draw(0, true);
    }

    /* -----------------------------------------------------
       PAUSE WHEN HIDDEN / RESPECT REDUCED MOTION
    ----------------------------------------------------- */

    function syncAnimation() {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }

      previousTime = null;
      resetPointer();

      if (document.hidden) return;

      targetScroll = window.scrollY;

      if (motionQuery.matches) {
        draw(0, true);
      } else {
        frameId =
          window.requestAnimationFrame(animate);
      }
    }

    resize();
    syncAnimation();

    window.addEventListener('resize', resize);

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      'pointermove',
      handlePointerMove,
      { passive: true }
    );

    window.addEventListener(
      'pointerout',
      handlePointerOut
    );

    window.addEventListener(
      'pointercancel',
      resetPointer
    );

    window.addEventListener('blur', resetPointer);

    document.addEventListener(
      'visibilitychange',
      syncAnimation
    );

    motionQuery.addEventListener(
      'change',
      syncAnimation
    );

    /* -----------------------------------------------------
       CLEANUP
    ----------------------------------------------------- */

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);

      window.removeEventListener(
        'pointermove',
        handlePointerMove
      );

      window.removeEventListener(
        'pointerout',
        handlePointerOut
      );

      window.removeEventListener(
        'pointercancel',
        resetPointer
      );

      window.removeEventListener('blur', resetPointer);

      document.removeEventListener(
        'visibilitychange',
        syncAnimation
      );

      motionQuery.removeEventListener(
        'change',
        syncAnimation
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="portfolio-wireframe"
      aria-hidden="true"
    />
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadPortfolio() {
      try {
        const response = await fetch('/api/portfolio');

        if (!response.ok) {
          throw new Error('Unable to load portfolio');
        }

        const portfolioData = await response.json();

        if (active) {
          setData(portfolioData);
        }
      } catch {
        // Existing components can use their fallback content.
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadPortfolio();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div
        className="portfolio-loading"
        role="status"
      >
        <div>
          <div className="portfolio-loading-logo">
            SR.
          </div>

          <p>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <InteractiveBackground />

      <div className="portfolio-content">
        <Navbar name={data?.name} />
        <Hero data={data} />
        <About data={data} />
        <Skills data={data} />
        <Projects data={data} />
        <Experience data={data} />
        <Contact data={data} />
        <Footer data={data} />
      </div>
    </>
  );
}