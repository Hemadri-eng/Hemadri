import React, { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor
 * Luxury subtle cursor with a center pinpoint and an ambient trailing ring.
 * Features spring inertia and expands over interactive elements.
 * Automatically disabled on touch screens and mobile devices.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Check if pointer is fine (mouse, trackpad) and not a touch-only screen
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive target
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [data-interactive="true"], [role="button"]');
      setIsHovering(Boolean(isInteractive));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth trailing ring loop
    const animateRing = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animFrameId.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Pinpoint dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-champagne-300 rounded-full pointer-events-none shadow-[0_0_8px_rgba(236,218,185,0.8)]"
        style={{ willChange: 'transform' }}
      />

      {/* Trailing ambient ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full pointer-events-none transition-[width,height,border-color,background-color] duration-200 ease-out ${
          isHovering
            ? 'w-10 h-10 -ml-5 -mt-5 border border-champagne-400 bg-champagne-500/10 shadow-[0_0_20px_rgba(197,168,128,0.25)]'
            : 'w-8 h-8 border border-champagne-500/30 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
