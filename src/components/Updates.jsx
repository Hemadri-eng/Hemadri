import React from 'react';
import { Radio, ArrowUpRight } from 'lucide-react';
import { updatesData } from '../data/updates';
import ScrollReveal from './ScrollReveal';

export default function Updates() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section id="updates" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border">
      {/* Section Header */}
      <ScrollReveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <Radio className="w-3.5 h-3.5 text-champagne-400 animate-pulse" />
              <span>10 / CHRONOLOGICAL LOG</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory tracking-wider uppercase font-semibold">
              Field Notes & Updates
            </h2>
          </div>
          <p className="font-mono text-xs text-ivory-muted max-w-md tracking-wide">
            A running stream of technical milestones, publications, hackathon dispatches, and recent engineering breakthroughs.
          </p>
        </div>
      </ScrollReveal>

      {/* Feed List */}
      <div className="space-y-4">
        {updatesData.map((item, index) => (
          <ScrollReveal key={item.id} direction="up" delay={index * 60}>
            <div
              onMouseMove={handleMouseMove}
              className="card-spotlight glass-panel glass-panel-hover rounded-xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 group transition-all duration-300"
            >
              {/* Left: Date + Badge + Content */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 flex-1">
                {/* Date Column */}
                <div className="sm:w-36 shrink-0">
                  <span className="font-mono text-xs text-champagne-400 font-medium block">
                    {item.date}
                  </span>
                  <span className="inline-block mt-1 font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-obsidian-950 border border-obsidian-border text-ivory-faint">
                    {item.category}
                  </span>
                </div>

                {/* Text Block */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base sm:text-lg text-ivory uppercase tracking-wide group-hover:text-champagne-200 transition-colors">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-champagne-500/10 text-champagne-300 border border-champagne-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-ivory-muted font-sans font-light leading-relaxed">
                    {item.text}
                  </p>

                  {/* Optional Attached Image Thumbnail */}
                  {item.image && (
                    <div className="pt-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-32 object-cover rounded-md border border-obsidian-border hover:border-champagne-500/40 transition-colors"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Optional Link Action */}
              {item.linkUrl && (
                <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-obsidian-border/50">
                  <a
                    href={item.linkUrl}
                    className="font-mono text-xs text-champagne-300 hover:text-ivory inline-flex items-center space-x-1.5 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{item.linkText || 'Details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
