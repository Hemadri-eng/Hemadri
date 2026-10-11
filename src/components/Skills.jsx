import React from 'react';
import { Code2, Globe, BrainCircuit, DatabaseZap, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skills';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming':
        return <Code2 className="w-5 h-5 text-champagne-300" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-champagne-300" />;
      case 'Data & AI':
        return <BrainCircuit className="w-5 h-5 text-champagne-300" />;
      case 'Databases & Tools':
        return <DatabaseZap className="w-5 h-5 text-champagne-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-champagne-300" />;
    }
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="skills" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border/80">
      {/* Section Header */}
      <ScrollReveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
              <span>04 / TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory tracking-wider uppercase font-semibold">
              Skills & Ecosystem
            </h2>
          </div>
          <p className="font-mono text-xs text-ivory-muted max-w-md tracking-wide">
            A focused technical repertoire rooted in systems engineering, high-throughput backend services, exploratory data science, and modern machine learning pipelines.
          </p>
        </div>
      </ScrollReveal>

      {/* Categorized Skills Grid with Staggered Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((cat, idx) => (
          <ScrollReveal key={idx} direction="up" delay={idx * 130}>
            <div
              onMouseMove={handleMouseMove}
              className="glass-panel glass-panel-hover card-spotlight rounded-2xl p-8 flex flex-col justify-between h-full border border-obsidian-border hover:border-champagne-500/35 transition-all duration-400"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-5 border-b border-obsidian-border mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-obsidian-950 border border-champagne-500/30 shadow-[0_0_15px_rgba(197,168,128,0.15)]">
                      {getCategoryIcon(cat.category)}
                    </div>
                    <div>
                      <h3 className="font-display text-lg tracking-wide text-ivory uppercase font-semibold">
                        {cat.category}
                      </h3>
                      <p className="font-mono text-[11px] text-ivory-faint mt-0.5">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-champagne-400/90 font-medium">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skills List inside Category */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-obsidian-950/70 border border-obsidian-border/80 flex items-center justify-between group/item hover:border-champagne-500/40 hover:bg-obsidian-900 transition-all duration-200"
                    >
                      <div>
                        <div className="font-mono text-xs text-ivory-100 font-medium group-hover/item:text-champagne-300 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-ivory-faint font-sans mt-0.5">
                          {skill.experience}
                        </div>
                      </div>

                      <span className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded bg-obsidian-900 border border-obsidian-border text-champagne-400 group-hover/item:border-champagne-500/30 transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="mt-6 pt-4 border-t border-obsidian-border/60 flex items-center justify-between text-[10px] font-mono text-ivory-faint uppercase">
                <span>Domain Verified</span>
                <span>{cat.skills.length} Core Technologies</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
