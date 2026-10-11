import React from 'react';
import { GraduationCap, BookOpen, MapPin } from 'lucide-react';
import { educationData } from '../data/education';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  const primaryEdu = educationData.find(e => e.isPrimary);
  const secondaryEdu = educationData.find(e => !e.isPrimary);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section id="education" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border">
      {/* Section Header */}
      <ScrollReveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
              <span>06 / ACADEMIC FOUNDATIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory tracking-wider uppercase font-semibold">
              Education
            </h2>
          </div>
          <p className="font-mono text-xs text-ivory-muted max-w-md tracking-wide">
            Formal engineering foundations in computational theory, algorithmic complexity, distributed systems, and applied mathematics.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-8">
        {/* Primary Degree: Large Editorial Feature */}
        {primaryEdu && (
          <ScrollReveal direction="up" delay={150}>
            <div 
              onMouseMove={handleMouseMove}
              className="card-spotlight glass-panel glass-panel-hover rounded-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden border border-obsidian-border transition-all duration-300"
            >
            {/* Subtle corner badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-obsidian-border mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-obsidian-950 border border-champagne-500/30">
                  <GraduationCap className="w-6 h-6 text-champagne-400" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-widest text-champagne-400 uppercase font-semibold block">
                    UNDERGRADUATE DEGREE
                  </span>
                  <span className="font-mono text-[11px] text-ivory-faint">
                    {primaryEdu.period} • {primaryEdu.status}
                  </span>
                </div>
              </div>

              {primaryEdu.score && (
                <div className="px-4 py-2 rounded-lg bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 font-mono text-sm tracking-wider font-semibold">
                  {primaryEdu.score}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display text-2xl sm:text-3xl text-ivory tracking-wide uppercase">
                  {primaryEdu.degree}
                </h3>
                <h4 className="font-serif italic text-lg text-champagne-300">
                  {primaryEdu.institution}
                </h4>
                <p className="text-sm text-ivory-muted font-light leading-relaxed">
                  {primaryEdu.description}
                </p>

                <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-ivory-faint">
                  <MapPin className="w-3.5 h-3.5 text-champagne-400" />
                  <span>{primaryEdu.location}</span>
                </div>
              </div>

              {/* Coursework pill list */}
              <div className="lg:col-span-5 rounded-xl bg-obsidian-950/80 border border-obsidian-border p-6">
                <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 uppercase tracking-widest mb-4">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Key Coursework & Domains</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {primaryEdu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-obsidian-900 border border-obsidian-border text-ivory-300 hover:border-champagne-500/40 hover:text-champagne-200 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        )}

        {/* Secondary Education: Refined Compact Format */}
        {secondaryEdu && (
          <ScrollReveal direction="up" delay={250}>
            <div 
              onMouseMove={handleMouseMove}
              className="card-spotlight glass-panel glass-panel-hover rounded-xl p-6 sm:p-7 border border-obsidian-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded bg-obsidian-950 text-champagne-400 border border-obsidian-border">
                    SECONDARY EDUCATION
                  </span>
                  <span className="font-mono text-xs text-ivory-faint">{secondaryEdu.period}</span>
                </div>
                <h4 className="font-display text-lg text-ivory">
                  {secondaryEdu.degree}
                </h4>
                <p className="text-xs text-ivory-muted font-sans font-light">
                  {secondaryEdu.institution} • {secondaryEdu.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 shrink-0">
                {secondaryEdu.coursework.map((sub, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-obsidian-950 border border-obsidian-border text-ivory-faint hover:text-champagne-300 transition-colors"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
