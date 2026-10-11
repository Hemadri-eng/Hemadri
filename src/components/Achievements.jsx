import React from 'react';
import { Award, Trophy, Medal, BookCheck } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import ScrollReveal from './ScrollReveal';

export default function Achievements() {
  const getIcon = (category) => {
    switch (category) {
      case 'Hackathons & Innovation':
        return <Trophy className="w-5 h-5 text-champagne-400" />;
      case 'Athletics & Leadership':
        return <Medal className="w-5 h-5 text-champagne-400" />;
      case 'Academic & Scholarly':
        return <BookCheck className="w-5 h-5 text-champagne-400" />;
      default:
        return <Award className="w-5 h-5 text-champagne-400" />;
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section id="achievements" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border">
      {/* Section Header */}
      <ScrollReveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
              <span>08 / RECOGNITION & HONORS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory tracking-wider uppercase font-semibold">
              Honors & Milestones
            </h2>
          </div>
          <p className="font-mono text-xs text-ivory-muted max-w-md tracking-wide">
            National innovation final standings, athletic championships, peer-reviewed publications, and specialized accreditations.
          </p>
        </div>
      </ScrollReveal>

      {/* Editorial Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item, index) => (
          <ScrollReveal key={item.id} direction="up" delay={index * 80}>
            <div
              onMouseMove={handleMouseMove}
              className="card-spotlight glass-panel glass-panel-hover rounded-xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 h-full"
            >
              {/* Top Row: Icon + Stat / Metric Badge */}
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-obsidian-border text-champagne-400 group-hover:border-champagne-500/40 group-hover:shadow-[0_0_12px_rgba(197,168,128,0.2)] transition-all">
                    {getIcon(item.category)}
                  </div>

                  <div className="text-right">
                    <span className="font-display text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-champagne-300 via-champagne-200 to-champagne-400 block drop-shadow-sm">
                      {item.stat}
                    </span>
                    <span className="text-[10px] font-mono text-ivory-faint uppercase tracking-widest block">
                      {item.statLabel}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display text-lg text-ivory uppercase tracking-wide group-hover:text-champagne-200 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <div className="font-serif italic text-xs text-champagne-300 mb-4">
                  {item.issuer}
                </div>

                {/* Description */}
                <p className="text-xs text-ivory-muted font-sans font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row: Badge & Year */}
              <div className="pt-4 border-t border-obsidian-border flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-obsidian-950 border border-obsidian-border text-ivory-muted group-hover:border-champagne-500/30 transition-colors">
                  {item.badge}
                </span>
                <span className="font-mono text-xs text-ivory-faint font-medium">
                  {item.year}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
