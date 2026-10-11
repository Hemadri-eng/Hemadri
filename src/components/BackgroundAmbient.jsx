import React, { useEffect, useRef } from 'react';

/**
 * BackgroundAmbient
 * Cinematic living atmosphere:
 * - Fluid atmospheric radial light orbs with slow organic drift.
 * - Lightweight HTML5 canvas particle field (floating celestial light specks)
 * - Gentle mouse parallax response.
 * - Fine-grain filmic texture overlay.
 * - Highly optimized with requestAnimationFrame, pauses on hidden tabs.
 */
export default function BackgroundAmbient() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse movement parallax
    const handleMouseMove = (e) => {
      mousePos.current.targetX = e.clientX / window.innerWidth;
      mousePos.current.targetY = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initialize subtle particles
    const particleCount = prefersReducedMotion ? 0 : Math.min(32, Math.floor(width / 45));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.6,
        baseOpacity: Math.random() * 0.45 + 0.15,
        speedX: (Math.random() - 0.5) * 0.18,
        speedY: -Math.random() * 0.28 - 0.08, // Slow upward drift
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleDistance: Math.random() * 18 + 6,
        wobbleOffset: Math.random() * Math.PI * 2,
        color: Math.random() > 0.4 ? 'rgba(236, 218, 185,' : 'rgba(215, 140, 160,', // Gold vs soft wine
      });
    }

    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let time = 0;

    // Render loop
    const render = () => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse interpolation
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      const parallaxOffsetX = (mousePos.current.x - 0.5) * 35;
      const parallaxOffsetY = (mousePos.current.y - 0.5) * 35;

      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Draw light specks
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += p.speedX;

        // Reset if drifted off screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentWobble = Math.sin(time * p.wobbleSpeed + p.wobbleOffset) * p.wobbleDistance;
        const currentOpacity = p.baseOpacity * (0.8 + 0.2 * Math.sin(time + p.wobbleOffset));

        ctx.beginPath();
        ctx.arc(
          p.x + currentWobble - parallaxOffsetX * 0.3,
          p.y - parallaxOffsetY * 0.3,
          p.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `${p.color} ${currentOpacity})`;
        ctx.shadowColor = 'rgba(236, 218, 185, 0.4)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Base deep obsidian fill */}
      <div className="absolute inset-0 bg-[#060609]" />

      {/* Atmospheric Radial Glow 1 - Muted Champagne Gold (Top Left / Hero focal) */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[750px] h-[750px] rounded-full opacity-[0.16] filter blur-[125px] animate-slow-drift"
        style={{
          background: 'radial-gradient(circle, rgba(212, 178, 131, 0.55) 0%, rgba(197, 168, 128, 0.12) 55%, transparent 75%)',
          willChange: 'transform',
        }}
      />

      {/* Atmospheric Radial Glow 2 - Deep Wine / Crimson (Right Mid / Systems showcase) */}
      <div
        className="absolute top-[35%] -right-[15%] w-[700px] h-[700px] rounded-full opacity-[0.13] filter blur-[140px] animate-subtle-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(140, 24, 48, 0.55) 0%, rgba(72, 10, 21, 0.14) 55%, transparent 80%)',
          willChange: 'transform, opacity',
          animationDuration: '16s',
        }}
      />

      {/* Atmospheric Radial Glow 3 - Celestial Starlight Silver (Bottom Left / Research & Gallery) */}
      <div
        className="absolute -bottom-[25%] left-[20%] w-[850px] h-[650px] rounded-full opacity-[0.11] filter blur-[140px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(197, 168, 128, 0.35) 0%, rgba(100, 110, 140, 0.08) 60%, transparent 75%)',
        }}
      />

      {/* Canvas Particle Layer (Subtle floating light specks with gentle parallax) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Subtle Noise / Grain Texture Layer */}
      <div className="absolute inset-0 grain-overlay opacity-[0.38]" />

      {/* Very subtle editorial architectural grid lines */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-4 pointer-events-none opacity-[0.025]">
        <div className="border-r border-ivory" />
        <div className="border-r border-ivory" />
        <div className="border-r border-ivory" />
        <div />
      </div>
    </div>
  );
}
