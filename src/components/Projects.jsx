import React from 'react';
import { ArrowUpRight, Network, CloudRain, Globe } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/projects';
import ScrollReveal from './ScrollReveal';

export default function Projects({ onOpenCaseStudy }) {
  const flagshipProjects = projectsData.filter(p => p.isFlagship);
  const secondaryProjects = projectsData.filter(p => !p.isFlagship);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="work" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border/80">
      {/* Section Header */}
      <ScrollReveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
              <span>03 / SELECTED WORKS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory tracking-wider uppercase font-semibold">
              Engineering & Systems
            </h2>
          </div>
          <p className="font-mono text-xs text-ivory-muted max-w-lg tracking-wide">
            Flagship computational architectures, research-grade models, and practical software engineering systems designed with mathematical precision.
          </p>
        </div>
      </ScrollReveal>

      {/* Flagship Projects: Editorial Large-Format Cards */}
      <div className="space-y-16">
        {flagshipProjects.map((project, idx) => (
          <ScrollReveal key={project.id} direction="up" delay={idx * 160}>
            <div
              onMouseMove={handleMouseMove}
              className="group relative rounded-2xl glass-panel glass-panel-hover card-spotlight border border-champagne-500/25 p-8 sm:p-10 lg:p-12 overflow-hidden shadow-2xl transition-all duration-500"
            >
              {/* Ambient Background Gradient for Card */}
              <div 
                className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15 pointer-events-none rounded-full filter blur-[100px] transition-opacity duration-700 group-hover:opacity-25"
                style={{
                  background: idx === 0 
                    ? 'radial-gradient(circle, #c5a880 0%, transparent 70%)' 
                    : 'radial-gradient(circle, #80182a 0%, transparent 70%)'
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                {/* Left Column: Information (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Meta Top: Number + Category + Flagship Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.25em] text-champagne-400 font-bold">
                      {project.number} // FLAGSHIP
                    </span>
                    <span className="text-obsidian-600 font-mono">•</span>
                    <span className="font-mono text-xs tracking-wider text-ivory-muted uppercase">
                      {project.category}
                    </span>
                    <span className="text-obsidian-600 font-mono">•</span>
                    <span className="font-mono text-xs text-ivory-faint">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl text-ivory uppercase tracking-wide group-hover:text-champagne-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-serif italic text-lg sm:text-xl text-champagne-300 mt-1">
                      {project.subtitle}
                    </p>

                    {project.role && (
                      <div className="mt-2 text-xs font-mono text-ivory-faint">
                        <span className="text-champagne-400 font-semibold">Role:</span> {project.role}
                      </div>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-base text-ivory-muted font-light leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-obsidian-border/80">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2.5 text-xs font-mono text-ivory-300">
                        <span className="text-champagne-400 mt-0.5">✦</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded text-[11px] font-mono tracking-wider bg-obsidian-950 border border-obsidian-border text-ivory-muted group-hover:border-champagne-500/25 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    {project.caseStudy && (
                      <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="btn-luxury btn-primary rounded group/btn text-xs"
                      >
                        <span className="flex items-center space-x-2">
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </span>
                      </button>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-luxury btn-secondary rounded text-xs flex items-center space-x-2"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-ivory-muted" />
                        <span>REPOSITORY</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-luxury btn-secondary rounded text-xs flex items-center space-x-2"
                      >
                        <Globe className="w-3.5 h-3.5 text-champagne-400" />
                        <span>LIVE DEMO</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Visual Telemetry Simulation (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-xl bg-obsidian-950/90 border border-obsidian-border p-6 shadow-2xl overflow-hidden min-h-[310px] flex flex-col justify-between">
                    {/* Decorative Terminal Header */}
                    <div className="flex items-center justify-between border-b border-obsidian-border pb-3 mb-4 text-[10px] font-mono text-ivory-faint uppercase">
                      <span className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80 animate-pulse" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-ivory-muted">{project.id.toUpperCase()}_ENGINE</span>
                      </span>
                      <span className="text-champagne-400 font-mono tracking-wider">ONLINE</span>
                    </div>

                    {/* Visual Domain Diagram Simulation */}
                    {project.id === 'cryptatrace' ? (
                      <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-4">
                        <div className="relative">
                          <div 
                            className="w-24 h-24 rounded-full border border-dashed border-champagne-400/40 flex items-center justify-center animate-spin" 
                            style={{ animationDuration: '30s' }}
                          >
                            <div className="w-14 h-14 rounded-full border border-champagne-500/60 flex items-center justify-center bg-obsidian-900 shadow-[0_0_20px_rgba(197,168,128,0.3)]">
                              <Network className="w-7 h-7 text-champagne-300" />
                            </div>
                          </div>
                          {/* Satellite nodes */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-obsidian-800 border border-champagne-400/70 flex items-center justify-center text-[8px] font-mono text-champagne-300 shadow-md">
                            H1
                          </div>
                          <div className="absolute -bottom-1 -left-2 w-6 h-6 rounded-full bg-obsidian-800 border border-rose-400/70 flex items-center justify-center text-[8px] font-mono text-rose-300 shadow-md">
                            H2
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-mono text-champagne-300 font-semibold tracking-wide">Multi-Hop Directed Multigraph</div>
                          <div className="text-[11px] font-mono text-ivory-faint">Neo4j • Peel Chain & Mixer Detection</div>
                        </div>
                      </div>
                    ) : (
                      <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-4">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full border border-champagne-500/35 flex items-center justify-center bg-obsidian-900/90 shadow-[0_0_25px_rgba(140,24,48,0.25)] animate-float-slow">
                            <CloudRain className="w-9 h-9 text-champagne-300" />
                          </div>
                          <div className="absolute -top-1 -right-3 px-2 py-0.5 rounded bg-obsidian-800 border border-champagne-500/50 text-[9px] font-mono text-champagne-300 shadow-md">
                            ERA5 + NWP
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-mono text-champagne-300 font-semibold tracking-wide">Synoptic Circulation Classifier</div>
                          <div className="text-[11px] font-mono text-ivory-faint">Monsoon Regime ML Error Residuals</div>
                        </div>
                      </div>
                    )}

                    {/* Bottom Stats Footer */}
                    <div className="pt-3 border-t border-obsidian-border/70 flex items-center justify-between text-[10px] font-mono text-ivory-faint">
                      <span>ARCHITECTURE: DISTRIBUTED</span>
                      <span className="text-emerald-400 font-medium">STATUS: VERIFIED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Secondary Projects Grid: WayFinder & Zomato */}
      <div className="mt-20">
        <ScrollReveal direction="up">
          <div className="flex items-center space-x-3 mb-8">
            <span className="h-[1px] w-6 bg-champagne-500/50" />
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-champagne-400">
              ADDITIONAL SYSTEMS & COMPUTATIONAL STUDIES
            </h4>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 140}>
              <div
                onMouseMove={handleMouseMove}
                className="glass-panel glass-panel-hover card-spotlight rounded-xl p-8 flex flex-col justify-between h-full border border-obsidian-border hover:border-champagne-500/30 transition-all duration-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs tracking-widest text-champagne-400 font-semibold">
                      PROJECT {project.number}
                    </span>
                    <span className="font-mono text-[11px] text-ivory-faint">
                      {project.year}
                    </span>
                  </div>

                  <h4 className="font-display text-2xl text-ivory mb-1">
                    {project.title}
                  </h4>
                  <p className="font-serif italic text-sm text-champagne-300 mb-2">
                    {project.subtitle}
                  </p>

                  {project.role && (
                    <div className="mb-4 text-[11px] font-mono text-ivory-faint">
                      <span className="text-champagne-400 font-semibold">Role:</span> {project.role}
                    </div>
                  )}

                  <p className="text-sm text-ivory-muted font-light leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs font-mono text-ivory-300">
                        <span className="text-champagne-400">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-obsidian-border">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-obsidian-950 border border-obsidian-border text-ivory-faint"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-champagne-300 hover:text-ivory inline-flex items-center space-x-1.5 transition-colors group/link"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repository</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-champagne-300 hover:text-ivory inline-flex items-center space-x-1.5 transition-colors group/live"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Live</span>
                          <ArrowUpRight className="w-3 h-3 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-[10px] text-ivory-faint uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
