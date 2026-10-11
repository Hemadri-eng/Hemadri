import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
  duration = 700,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const currentElem = domRef.current;
    if (!currentElem) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold]);

  const getTransformClasses = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100';

    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-8';
      case 'down':
        return 'opacity-0 -translate-y-8';
      case 'left':
        return 'opacity-0 translate-x-8';
      case 'right':
        return 'opacity-0 -translate-x-8';
      case 'scale':
        return 'opacity-0 scale-95';
      case 'fade':
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all ${getTransformClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}
