import React from 'react';
import useInView from '../hooks/useInView';

/**
 * Wraps children with a fade-in + slide-up animation when scrolled into view.
 * Props:
 *   delay  — animation-delay in ms (for staggering siblings)
 *   from   — direction: 'bottom' (default) | 'left' | 'right'
 */
export default function FadeIn({ children, delay = 0, from = 'bottom', style = {} }) {
  const [ref, inView] = useInView();

  const translate = {
    bottom: 'translateY(36px)',
    left:   'translateX(-36px)',
    right:  'translateX(36px)',
  }[from] || 'translateY(36px)';

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0)' : translate,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
