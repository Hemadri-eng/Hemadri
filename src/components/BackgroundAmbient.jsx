import React from 'react';

/**
 * BackgroundAmbient
 * Slow, subtle, cinematic background with low-intensity radial atmospheric glows,
 * soft noise grain overlay, and non-distracting motion.
 * Designed to look exquisite even when completely static.
 */
export default function BackgroundAmbient() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0" 
      aria-hidden="true"
    >
      {/* Base deep obsidian fill */}
      <div className="absolute inset-0 bg-[#09090c]" />

      {/* Atmospheric Radial Glow 1 - Muted Champagne (Upper Left/Center) */}
      <div 
        className="absolute -top-[15%] left-[10%] w-[650px] h-[650px] rounded-full opacity-[0.14] filter blur-[110px] animate-slow-drift"
        style={{
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.45) 0%, rgba(197, 168, 128, 0.08) 55%, transparent 75%)',
          willChange: 'transform',
        }}
      />

      {/* Atmospheric Radial Glow 2 - Deep Subtle Wine/Crimson (Right Mid/Lower) */}
      <div 
        className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-[0.11] filter blur-[120px] animate-subtle-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(128, 24, 42, 0.5) 0%, rgba(72, 10, 21, 0.1) 60%, transparent 80%)',
          willChange: 'transform, opacity',
          animationDuration: '14s',
        }}
      />

      {/* Atmospheric Radial Glow 3 - Neutral Champagne/Gold Floor Glow */}
      <div 
        className="absolute -bottom-[20%] left-[25%] w-[800px] h-[550px] rounded-full opacity-[0.08] filter blur-[130px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(197, 168, 128, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Subtle Noise / Grain Texture Layer */}
      <div className="absolute inset-0 grain-overlay opacity-[0.35]" />

      {/* Very subtle editorial grid lines (non-intrusive, 1px fine borders) */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-4 pointer-events-none opacity-[0.03]">
        <div className="border-r border-ivory" />
        <div className="border-r border-ivory" />
        <div className="border-r border-ivory" />
        <div />
      </div>
    </div>
  );
}
