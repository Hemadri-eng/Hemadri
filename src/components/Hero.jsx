import React, { useState } from 'react';
import { ArrowDown, ExternalLink, Mail, Copy, Check, FileText } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { profileData } from '../data/profile';

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
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Top Meta Tagline */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-obsidian-border pb-6">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2 h-2 rounded-full bg-champagne-400" />
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

      {/* Main Typographic Core */}
      <div className="my-auto py-12 md:py-16">
        {/* Name and Identity */}
        <div className="mb-4">
          <h1 className="font-display tracking-[0.12em] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-ivory uppercase">
            Hemadri Bhatnagar
          </h1>
          <div className="mt-3 flex items-center space-x-3">
            <span className="h-[1px] w-8 bg-champagne-500/60" />
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-champagne-400 font-medium">
              {profileData.primaryIdentity}
            </p>
          </div>
        </div>

        {/* Editorial Statement */}
        <div className="mt-8 md:mt-10">
          <h2 className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory-100 max-w-5xl leading-[1.15] tracking-tight">
            “I build. I research. I explore.”
          </h2>
        </div>

        {/* Supporting original narrative */}
        <p className="mt-8 max-w-2xl text-base sm:text-lg text-ivory-muted font-sans font-light leading-relaxed">
          {profileData.supportingParagraph}
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
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

      {/* Bottom Bar: Social Links & Live Status */}
      <div className="pt-8 border-t border-obsidian-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
