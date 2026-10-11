import React, { useEffect, useState } from 'react';

/**
 * CinematicText
 * Implements the signature typography awakening sequence:
 * 1. Low-intensity start with reduced opacity and muted color.
 * 2. Words emerge through smooth staggered fade-in and upward movement.
 * 3. Contrast & intensity increase progressively.
 * 4. Controlled luminous color transition sweeps across the text.
 * 5. Soft golden/champagne glow sweeps across the words.
 * 6. Settles into a crisp, bold, readable final state.
 */
export default function CinematicText({
  text,
  as: Component = 'h2',
  className = '',
  highlightWords = [],
  highlightClassName = 'text-luminous-gold font-semibold',
  delay = 200,
  staggerMs = 85,
}) {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(' ');

  return (
    <Component className={`${className} inline-flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]`}>
      {words.map((word, idx) => {
        const isHighlighted = highlightWords.some(
          hw => word.toLowerCase().includes(hw.toLowerCase())
        );

        const wordDelay = `${idx * staggerMs}ms`;

        return (
          <span
            key={idx}
            className={`inline-block transition-all ${
              hasStarted ? 'animate-awaken' : 'opacity-0 translate-y-3'
            } ${isHighlighted ? highlightClassName : ''}`}
            style={{
              animationDelay: wordDelay,
              willChange: 'transform, opacity, filter',
            }}
          >
            {word}
          </span>
        );
      })}
    </Component>
  );
}
