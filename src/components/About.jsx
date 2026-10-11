import React from 'react';
import { MapPin, GraduationCap, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const { about } = profileData;

  return (
    <section id="about" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border">
      {/* Section Subtitle & Tag */}
      <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
        <span>02 / ABOUT ME</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Editorial Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-wide uppercase font-semibold leading-tight">
            Engineering Systems. <br />
            <span className="font-serif italic font-normal text-champagne-300">
              Inquiring with Rigor.
            </span>
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-ivory-200 leading-relaxed border-l-2 border-champagne-500/50 pl-4 py-1">
            "{about.lead}"
          </p>

          <div className="space-y-4 text-ivory-muted font-sans font-light leading-relaxed text-base sm:text-lg">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Philosophy / Mindset Tags */}
          <div className="pt-4 flex flex-wrap gap-2">
            {[
              "Systems Thinking",
              "Graph Forensics",
              "Empirical ML",
              "Atmospheric AI",
              "Public Relations & Leadership",
              "Athletic Discipline"
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded text-xs font-mono tracking-wider bg-obsidian-900 border border-obsidian-border text-ivory-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Information Card (5 cols) */}
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-xl p-8 border border-obsidian-border relative overflow-hidden">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-champagne-500/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-obsidian-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-obsidian-900 border border-champagne-500/30 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-champagne-400" />
                </div>
                <div>
                  <h3 className="font-mono text-xs tracking-widest text-champagne-300 uppercase font-semibold">
                    PROFILE DOSSIER
                  </h3>
                  <span className="text-[11px] font-mono text-ivory-faint">
                    HEMADRI BHATNAGAR
                  </span>
                </div>
              </div>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-champagne-500/10 text-champagne-300 border border-champagne-500/20">
                ACTIVE
              </span>
            </div>

            {/* Quick Facts List */}
            <div className="divide-y divide-obsidian-border">
              {about.quickFacts.map((fact, idx) => (
                <div key={idx} className="py-3.5 flex items-center justify-between text-xs font-mono">
                  <span className="text-ivory-faint tracking-wider uppercase">
                    {fact.label}
                  </span>
                  <span className="text-ivory font-medium text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Institutional Summary */}
            <div className="mt-6 pt-5 border-t border-obsidian-border rounded-lg bg-obsidian-900/60 p-4 border border-obsidian-border/60">
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-5 h-5 text-champagne-400 shrink-0 mt-0.5" />
                <div className="text-xs font-sans">
                  <div className="text-ivory font-medium">Mukesh Patel School of Technology (NMIMS)</div>
                  <div className="text-ivory-muted text-[11px] mt-0.5">
                    Rigorous undergraduate engineering program in Computer Engineering with academic standing of 7.7 CGPA.
                  </div>
                </div>
              </div>
            </div>

            {/* Location Note */}
            <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-ivory-faint">
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-champagne-400" />
                <span>India • UTC +5:30</span>
              </span>
              <span>Available Globally</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
