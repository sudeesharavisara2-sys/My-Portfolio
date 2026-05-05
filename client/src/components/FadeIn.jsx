import React, { useState } from 'react';
import useInView from '../hooks/useInView';

/**
 * FadeIn Component
 * Wraps children with an entrance animation (fade + slide) when scrolled into view,
 * and adds an interactive 3D tilt effect that follows the mouse cursor.
 * * Props:
 * @param {number} delay - Animation delay in milliseconds for staggered effects.
 * @param {string} from  - Starting direction: 'bottom', 'left', or 'right'.
 */
export default function FadeIn({ children, delay = 0, from = 'bottom', style = {} }) {
  // Hook to detect when the element enters the viewport
  const [ref, inView] = useInView();
  
  // State to track normalized mouse coordinates (-0.5 to 0.5)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // State to toggle between smooth entrance transition and fast-response hover transition
  const [isHovered, setIsHovered] = useState(false);

  // Map the 'from' prop to specific CSS transform starting positions
  const translate = {
    bottom: 'translateY(36px)',
    left:   'translateX(-36px)',
    right:  'translateX(36px)',
  }[from] || 'translateY(36px)';

  /**
   * Calculates the mouse position relative to the element's center.
   * Converts absolute pixel coordinates into a range from -0.5 (left/top) to 0.5 (right/bottom).
   */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate percentage across the width/height and subtract 0.5 to center the origin
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePos({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 }); // Reset tilt when mouse leaves
      }}
      style={{
        // Animate opacity based on visibility
        opacity: inView ? 1 : 0,
        
        // 1. Entrance: If not in view, apply the 'translate' offset.
        // 2. Interaction: If in view, apply 3D perspective and rotate based on mouse position.
        transform: inView 
          ? `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -10}deg)` 
          : translate,
        
        // Dynamic transition: 
        // Use a short, snappy duration for mouse tracking.
        // Use a longer, delayed duration for the initial entrance animation.
        transition: isHovered 
          ? 'transform 0.1s ease-out' 
          : `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
          
        // Optimization: Informs the browser to prepare for transform and opacity changes
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </div>
  );
}