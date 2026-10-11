import React, { useState } from 'react';
import { FileCheck2, Clock, ArrowUpRight, Mail } from 'lucide-react';
import { researchData } from '../data/research';
import ScrollReveal from './ScrollReveal';

export default function Research() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredResearch = activeTab === 'all' 
    ? researchData 
    : activeTab === 'published' 
      ? researchData.filter(r => !r.isOngoing) 
      : researchData.filter(r => r.isOngoing);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section id="research" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border">
      {/* Section Header */}
      <ScrollReveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
              <span>07 / SCHOLARLY INQUIRY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory tracking-wider uppercase font-semibold">
              Research & Publications
            </h2>
          </div>
          <p className="font-mono text-xs text-ivory-muted max-w-md tracking-wide">
            Investigating sustainable public computing frameworks and carbon-aware distributed AI architectures.
          </p>
        </div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <ScrollReveal direction="up" delay={100}>
        <div className="flex items-center space-x-2 mb-10 border-b border-obsidian-border pb-4">
          {[
            { key: 'all', label: 'All Investigations' },
            { key: 'published', label: 'Published Papers' },
            { key: 'ongoing', label: 'Ongoing Research' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-champagne-500/20 text-champagne-300 border border-champagne-500/40 shadow-sm'
                  : 'text-ivory-muted hover:text-ivory hover:bg-obsidian-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Research Cards */}
      <div className="space-y-8">
        {filteredResearch.map((item, index) => (
          <ScrollReveal key={item.id} direction="up" delay={index * 120}>
            <div
              id={item.id}
              onMouseMove={handleMouseMove}
              className="card-spotlight glass-panel glass-panel-hover rounded-2xl p-8 sm:p-10 border border-obsidian-border relative overflow-hidden transition-all duration-300"
            >
            {/* Top Bar: Status Badge + Venue + Year */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-obsidian-border mb-6">
              <div className="flex items-center space-x-3">
                {item.isOngoing ? (
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-mono tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    <Clock className="w-3.5 h-3.5" />
                    <span>STATUS: IN PROGRESS</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-mono tracking-wider uppercase bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>STATUS: PUBLISHED</span>
                  </span>
                )}

                <span className="font-mono text-xs text-ivory-faint hidden sm:inline">
                  {item.venue}
                </span>
              </div>

              <span className="font-mono text-xs text-champagne-400 font-semibold">
                {item.year}
              </span>
            </div>

            {/* Title & Lead Summary */}
            <div className="space-y-4 mb-6">
              <h3 className="font-display text-2xl sm:text-3xl text-ivory uppercase tracking-wide leading-snug">
                {item.title}
              </h3>
              <p className="font-serif italic text-base sm:text-lg text-champagne-200">
                "{item.leadSummary}"
              </p>
            </div>

            {/* Abstract */}
            <div className="p-5 rounded-xl bg-obsidian-950/80 border border-obsidian-border mb-6">
              <div className="text-[11px] font-mono tracking-widest text-champagne-400 uppercase mb-2">
                Abstract & Methodology Focus
              </div>
              <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed font-sans font-light">
                {item.abstract}
              </p>
            </div>

            {/* Topics & Contact / Link */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-obsidian-border">
              <div className="flex flex-wrap gap-2">
                {item.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-[11px] font-mono tracking-wider bg-obsidian-900 border border-obsidian-border text-ivory-muted"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div>
                <a
                  href={`mailto:hemadri.bhatnagar07@gmail.com?subject=Inquiry: Research on ${encodeURIComponent(item.title)}`}
                  className="inline-flex items-center space-x-2 text-xs font-mono text-champagne-300 hover:text-ivory transition-colors group/link"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Request Full Preprint / Manuscript</span>
                  <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
