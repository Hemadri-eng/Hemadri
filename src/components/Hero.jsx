import React, { useState } from 'react';
import { ArrowDown, ExternalLink, Mail, Copy, Check, FileText, Terminal } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { profileData } from '../data/profile';
import CinematicText from './CinematicText';
import heroImg from '../assets/hero.png';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileData.contact.primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[94vh] flex flex-col justify-between pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-obsidian-border/80 pb-6 animate-fade-in">
        <div className="flex items-center space-x-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne-400"></span>
          </span>
          <span className="font-mono text-xs tracking-[0.25em] text-champagne-400 uppercase font-medium">
            PORTFOLIO & RESEARCH ARCHIVE
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-6 font-mono text-xs text-ivory-muted tracking-widest">
          <span>{profileData.institution}</span>
          <span className="text-obsidian-600">•</span>
          <span>GRADUATION {profileData.graduationYear}</span>
          <span className="text-obsidian-600">•</span>
          <span>{profileData.location}</span>
        </div>
      </div>

      {/* Main Hero Showcase Grid */}
      <div className="my-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Signature Typography & Narrative (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Identity Subtitle with Animated Reveal */}
          <div className="flex items-center space-x-3">
            <span className="h-[1px] w-8 bg-champagne-500/70" />
            <p className="font-mono text-xs sm:text-sm tracking-[0.26em] uppercase text-champagne-400 font-semibold">
              {profileData.primaryIdentity}
            </p>
          </div>

          {/* Awakening Name Typography */}
          <div className="overflow-visible">
            <CinematicText
              text="HEMADRI BHATNAGAR"
              as="h1"
              delay={150}
              staggerMs={100}
              className="font-display tracking-[0.08em] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-ivory leading-[1.05]"
            />
          </div>

          {/* Awakening Tagline Statement */}
          <div className="pt-2">
            <CinematicText
              text="“I build. I research. I explore.”"
              as="h2"
              delay={550}
              staggerMs={90}
              highlightWords={['build.', 'research.', 'explore.']}
              highlightClassName="text-luminous-gold font-normal italic"
              className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory-100 max-w-4xl leading-[1.18] tracking-tight"
            />
          </div>

          {/* Supporting Original Human Paragraph */}
          <p className="max-w-2xl text-base sm:text-lg text-ivory-muted font-sans font-light leading-relaxed pt-2">
            {profileData.supportingParagraph}
          </p>

          {/* Quick Jump Shortcuts */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-ivory-faint">
            <span className="text-champagne-400/80 uppercase tracking-widest mr-1">Direct Index:</span>
            {[
              { label: 'Selected Works', href: '#work' },
              { label: 'Leadership', href: '#experience' },
              { label: 'Scholarly Papers', href: '#research' },
              { label: 'Visual Archive', href: '#gallery' },
            ].map((shortcut, sIdx) => (
              <a
                key={sIdx}
                href={shortcut.href}
                className="px-2.5 py-1 rounded bg-obsidian-900/80 border border-obsidian-border text-ivory-muted hover:text-champagne-300 hover:border-champagne-500/30 transition-colors"
              >
                {shortcut.label} →
              </a>
            ))}
          </div>

          {/* Primary CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              onClick={onOpenResume}
              className="btn-luxury btn-primary rounded group"
              aria-label="View Resume"
            >
              <span className="flex items-center space-x-2">
                <FileText className="w-3.5 h-3.5 text-obsidian-950" />
                <span>{profileData.resume.actionLabel}</span>
              </span>
            </button>

            <button
              onClick={scrollToWork}
              className="btn-luxury btn-secondary rounded group"
              aria-label="Explore Projects and Engineering Work"
            >
              <span className="flex items-center space-x-2">
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-3.5 h-3.5 text-champagne-400 transition-transform group-hover:translate-y-0.5" />
              </span>
            </button>

            {/* Quick Copy Email Action */}
            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center space-x-2 px-3.5 py-3 rounded font-mono text-xs text-ivory-muted hover:text-champagne-300 border border-transparent hover:border-obsidian-border transition-colors"
              title="Copy primary email"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-ivory-faint" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Holographic Systems Artifact (4 cols) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col items-center justify-center relative">
          <div className="relative group w-full max-w-sm">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-champagne-500/20 via-wine-500/10 to-champagne-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />

            {/* Isometric Glass Showcase Card */}
            <div className="relative glass-panel rounded-2xl p-7 border border-champagne-500/30 overflow-hidden shadow-2xl shadow-black/80">
              {/* Corner badge */}
              <div className="flex items-center justify-between border-b border-obsidian-border pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-champagne-400" />
                  <span className="font-mono text-[10px] tracking-widest text-champagne-300 uppercase">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  ONLINE
                </span>
              </div>

              {/* Floating Isometric Graphic with Gentle Float Animation */}
              <div className="relative py-4 flex items-center justify-center animate-float-slow">
                <img
                  src={heroImg}
                  alt="Computational Systems & Layered Architecture"
                  className="w-48 h-auto object-contain drop-shadow-[0_20px_35px_rgba(197,168,128,0.2)] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Technical Telemetry Specs */}
              <div className="mt-6 pt-4 border-t border-obsidian-border/80 space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-ivory-muted">
                  <span className="text-ivory-faint">Core Focus:</span>
                  <span className="text-ivory">Distributed Systems & AI</span>
                </div>
                <div className="flex items-center justify-between text-ivory-muted">
                  <span className="text-ivory-faint">Flagship:</span>
                  <span className="text-champagne-300">CryptaTrace + RITU</span>
                </div>
                <div className="flex items-center justify-between text-ivory-muted">
                  <span className="text-ivory-faint">Standing:</span>
                  <span className="text-emerald-400">7.7 CGPA • NMIMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Social Links & Live Status */}
      <div className="pt-8 border-t border-obsidian-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-mono text-ivory-muted hover:text-champagne-300 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-champagne-500/80" />
            <span>LinkedIn</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>

          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-mono text-ivory-muted hover:text-champagne-300 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-champagne-500/80" />
            <span>GitHub</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>

          <a
            href={`mailto:${profileData.contact.primaryEmail}`}
            className="flex items-center space-x-2 text-xs font-mono text-ivory-muted hover:text-champagne-300 transition-colors"
          >
            <Mail className="w-4 h-4 text-champagne-500/80" />
            <span>hemadri.bhatnagar07@gmail.com</span>
          </a>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center space-x-3 bg-obsidian-900/60 border border-obsidian-border px-3.5 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne-500"></span>
          </span>
          <span className="font-mono text-[11px] text-ivory-muted tracking-wider">
            {profileData.currently.statusBadge}
          </span>
        </div>
      </div>
    </section>
  );
}
