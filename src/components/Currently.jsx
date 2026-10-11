import React from 'react';
import { ArrowUpRight, Cpu, Compass, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Currently({ onSelectProject, onSelectResearch }) {
  const { currently } = profileData;

  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <Cpu className="w-5 h-5 text-champagne-400" />;
      case 1:
        return <BookOpen className="w-5 h-5 text-champagne-400" />;
      default:
        return <Compass className="w-5 h-5 text-champagne-400" />;
    }
  };

  return (
    <section id="currently" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
            <span>01 / LIVING PROFILE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-ivory tracking-wider uppercase font-semibold">
            Currently
          </h2>
        </div>
        <p className="font-mono text-xs text-ivory-muted max-w-md tracking-wide">
          An ongoing snapshot of current engineering prototypes, research investigations, and exploratory technical frontiers.
        </p>
      </div>

      {/* Grid of 3 Active Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currently.items.map((item, idx) => (
          <div
            key={idx}
            className="group relative glass-panel glass-panel-hover rounded-lg p-7 flex flex-col justify-between"
          >
            {/* Top Row: Label & Tag */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-champagne-400/90 font-medium">
                  {item.label}
                </span>
                <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-obsidian-800 text-ivory-muted border border-obsidian-border">
                  {item.tag}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-serif text-2xl text-ivory group-hover:text-champagne-200 transition-colors">
                  {item.title}
                </h3>
                <div className="p-2 rounded bg-obsidian-900 border border-obsidian-border">
                  {getIcon(idx)}
                </div>
              </div>

              {/* Detail paragraph */}
              <p className="text-sm text-ivory-muted font-light leading-relaxed mb-6">
                {item.detail}
              </p>
            </div>

            {/* Bottom action trigger if applicable */}
            <div className="pt-4 border-t border-obsidian-border flex items-center justify-between">
              {item.projectId ? (
                <button
                  onClick={() => onSelectProject && onSelectProject(item.projectId)}
                  className="font-mono text-xs text-champagne-300 hover:text-ivory flex items-center space-x-1.5 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>{item.linkText || "View Project"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              ) : item.researchId ? (
                <button
                  onClick={() => onSelectResearch && onSelectResearch(item.researchId)}
                  className="font-mono text-xs text-champagne-300 hover:text-ivory flex items-center space-x-1.5 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>{item.linkText || "Read Overview"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="font-mono text-[11px] text-ivory-faint tracking-wider">
                  Active Focus Area
                </span>
              )}

              <span className="font-mono text-[10px] text-ivory-faint">
                [ 0{idx + 1} ]
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
