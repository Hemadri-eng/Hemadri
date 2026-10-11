import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
            <span>05 / EXPERIENCE & LEADERSHIP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-ivory tracking-wider uppercase font-semibold">
            Track Record
          </h2>
        </div>
        <p className="font-mono text-xs text-ivory-muted max-w-md tracking-wide">
          Community outreach coordination, institutional public relations at premier collegiate venues, and departmental service leadership.
        </p>
      </div>

      {/* Editorial Timeline */}
      <div className="relative border-l border-obsidian-border ml-3 md:ml-6 space-y-12 pl-6 md:pl-10">
        {experienceData.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
              item.current 
                ? 'bg-champagne-400 border-obsidian-950 ring-4 ring-champagne-400/20' 
                : 'bg-obsidian-900 border-champagne-500/40 group-hover:border-champagne-400'
            }`} />

            <div className="glass-panel glass-panel-hover rounded-xl p-7 md:p-8">
              {/* Header: Role + Period + Current Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-ivory uppercase tracking-wide group-hover:text-champagne-200 transition-colors">
                    {item.role}
                  </h3>
                  <div className="font-serif italic text-base text-champagne-300 mt-0.5">
                    {item.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center space-x-1.5 font-mono text-xs text-ivory-muted bg-obsidian-950 px-3 py-1 rounded border border-obsidian-border">
                    <Calendar className="w-3.5 h-3.5 text-champagne-400" />
                    <span>{item.period}</span>
                  </span>

                  {item.current && (
                    <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      CURRENT
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-ivory-muted font-light leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Responsibilities List */}
              <div className="space-y-2 mb-6 border-t border-obsidian-border/70 pt-4">
                {item.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start space-x-2.5 text-xs text-ivory-300 font-sans leading-relaxed">
                    <span className="text-champagne-400 shrink-0 font-mono mt-0.5">›</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tags & Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-obsidian-border/70">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider bg-obsidian-950 border border-obsidian-border text-ivory-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2 text-[11px] font-mono text-ivory-faint">
                  <MapPin className="w-3.5 h-3.5 text-champagne-500/70" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
