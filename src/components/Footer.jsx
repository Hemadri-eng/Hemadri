import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';
import ScrollReveal from './ScrollReveal';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-obsidian-border bg-obsidian-950 py-16 px-6 lg:px-8 text-ivory">
      <ScrollReveal direction="up">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Monogram and identity */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded border border-champagne-500/40 bg-obsidian-900 flex items-center justify-center font-display text-xs tracking-wider text-champagne-400">
              HB
            </div>
            <span className="font-mono text-sm tracking-[0.2em] uppercase font-semibold text-ivory">
              {profileData.name}
            </span>
          </div>

          <p className="font-serif italic text-sm text-champagne-300">
            "{profileData.tagline}"
          </p>

          <p className="font-mono text-xs text-ivory-faint">
            {profileData.institution} • B.Tech Computer Engineering (2024–2028)
          </p>
        </div>

        {/* Center: Nav shortcuts */}
        <div className="flex flex-wrap gap-6 text-xs font-mono text-ivory-muted tracking-wider uppercase">
          <a href="#about" className="hover:text-champagne-300 transition-colors">About</a>
          <a href="#work" className="hover:text-champagne-300 transition-colors">Work</a>
          <a href="#experience" className="hover:text-champagne-300 transition-colors">Experience</a>
          <a href="#research" className="hover:text-champagne-300 transition-colors">Research</a>
          <a href="#gallery" className="hover:text-champagne-300 transition-colors">Gallery</a>
          <button onClick={onOpenResume} className="hover:text-champagne-300 transition-colors uppercase">
            Résumé
          </button>
        </div>

        {/* Right: Back to top and location clock indicator */}
        <div className="flex flex-col items-start md:items-end space-y-3">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-obsidian-900 border border-obsidian-border text-xs font-mono text-ivory-muted hover:text-champagne-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

          <div className="font-mono text-[11px] text-ivory-faint flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Mumbai, India • IST (UTC +5:30)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-obsidian-border/60 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-ivory-faint gap-3">
        <span>© {new Date().getFullYear()} Hemadri Bhatnagar. All rights reserved.</span>
        <span>Crafted with mathematical intent & precision.</span>
      </div>
      </ScrollReveal>
    </footer>
  );
}
