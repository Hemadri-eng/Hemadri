import React, { useEffect, useState } from 'react';
import { 
  X, ArrowUpRight, Layers, ShieldCheck, Terminal, Cpu, 
  CheckCircle2, Sparkles, Image as ImageIcon, Milestone, UserCheck, 
  ExternalLink
} from 'lucide-react';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedScreenshot) {
          setSelectedScreenshot(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, selectedScreenshot]);

  if (!isOpen || !project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-obsidian-900 border border-champagne-500/30 rounded-2xl shadow-2xl shadow-black overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-6 sm:p-8 border-b border-obsidian-border bg-obsidian-950/85 flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase">
              <span className="font-semibold">PROJECT {project.number}</span>
              <span className="text-obsidian-600">•</span>
              <span>10-STAGE CASE STUDY</span>
              <span className="text-obsidian-600">•</span>
              <span className="text-ivory-faint">{project.year}</span>
            </div>

            <h2 id="case-study-title" className="font-display text-2xl sm:text-4xl text-ivory tracking-wide uppercase font-semibold">
              {project.title}
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-champagne-200">
              {project.subtitle}
            </p>

            {project.role && (
              <div className="pt-1 flex items-center space-x-2 text-xs font-mono text-ivory-muted">
                <UserCheck className="w-3.5 h-3.5 text-champagne-400" />
                <span>Primary Role: <span className="text-ivory font-medium">{project.role}</span></span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-obsidian-800 text-ivory-muted hover:text-ivory hover:bg-obsidian-700 transition-colors border border-obsidian-border shrink-0"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-12 divide-y divide-obsidian-border">
          
          {/* 01 — Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-champagne-400" />
              <span>01 — Overview</span>
            </div>
            <p className="text-lg sm:text-xl text-ivory-100 font-serif leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* 02 — Problem & 03 — Approach */}
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-wine-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-wine-500" />
                <span>02 — Problem Statement</span>
              </div>
              <p className="text-sm text-ivory-muted leading-relaxed font-sans font-light">
                {caseStudy.problem}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-champagne-400" />
                <span>03 — Technical Approach</span>
              </div>
              <p className="text-sm text-ivory-muted leading-relaxed font-sans font-light">
                {caseStudy.approach}
              </p>
            </div>
          </div>

          {/* 04 — Architecture */}
          {caseStudy.architecture && (
            <div className="pt-10 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
                <Layers className="w-4 h-4 text-champagne-400" />
                <span>04 — System Architecture</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.architecture.map((layer, idx) => (
                  <div key={idx} className="p-5 rounded-lg bg-obsidian-950 border border-obsidian-border">
                    <div className="flex items-center justify-between text-xs font-mono text-champagne-300 font-semibold mb-2">
                      <span>Layer 0{idx + 1}: {layer.layer}</span>
                      <span className="text-ivory-faint text-[10px]">MODULE</span>
                    </div>
                    <p className="text-xs text-ivory-muted leading-relaxed">
                      {layer.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 05 — Technology */}
          {caseStudy.technologies && (
            <div className="pt-10 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
                <Cpu className="w-4 h-4 text-champagne-400" />
                <span>05 — Technology Stack</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {caseStudy.technologies.map((tech, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-obsidian-950 border border-obsidian-border">
                    <span className="font-mono text-xs text-ivory font-semibold block mb-1">
                      {tech.name}
                    </span>
                    <span className="text-[11px] text-ivory-muted leading-snug block">
                      {tech.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 06 — Key Features */}
          {caseStudy.keyFeatures && (
            <div className="pt-10 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4 text-champagne-400" />
                <span>06 — Key Features & Capabilities</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 rounded-lg bg-obsidian-950/60 border border-obsidian-border/80">
                    <CheckCircle2 className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-ivory-muted leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 07 — Results / Impact */}
          {caseStudy.results && (
            <div className="pt-10 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-champagne-400" />
                <span>07 — Results & Verified Impact</span>
              </div>

              <div className="p-6 rounded-xl bg-obsidian-950 border border-champagne-500/25">
                <p className="text-sm text-ivory-100 leading-relaxed font-sans font-light">
                  {caseStudy.results}
                </p>
              </div>
            </div>
          )}

          {/* 08 — Screenshots / System Visuals */}
          <div className="pt-10 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
              <ImageIcon className="w-4 h-4 text-champagne-400" />
              <span>08 — Screenshots & Interface Telemetry</span>
            </div>

            {caseStudy.screenshots && caseStudy.screenshots.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {caseStudy.screenshots.map((shot, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedScreenshot(shot)}
                    className="group rounded-xl overflow-hidden bg-obsidian-950 border border-obsidian-border hover:border-champagne-500/40 cursor-pointer transition-all duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img 
                        src={shot.image} 
                        alt={shot.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="font-mono text-xs text-ivory font-semibold group-hover:text-champagne-200 transition-colors">
                        {shot.title}
                      </h4>
                      <p className="text-[11px] text-ivory-muted line-clamp-2 leading-relaxed">
                        {shot.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-xl bg-obsidian-950/60 border border-obsidian-border text-center">
                <p className="text-xs font-mono text-ivory-muted">
                  Interactive diagrams simulated in the primary showcase card. Telemetry snapshots available in research logs.
                </p>
              </div>
            )}
          </div>

          {/* 09 — Learnings */}
          {caseStudy.learnings && (
            <div className="pt-10 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
                <Terminal className="w-4 h-4 text-champagne-400" />
                <span>09 — Learnings & Retrospective</span>
              </div>

              <div className="p-6 rounded-xl bg-obsidian-950 border border-obsidian-border">
                <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed font-sans font-light">
                  {caseStudy.learnings}
                </p>
              </div>
            </div>
          )}

          {/* Future Updates / Roadmap (Optional) */}
          {project.futureUpdates && project.futureUpdates.length > 0 && (
            <div className="pt-10 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
                <Milestone className="w-4 h-4 text-champagne-400" />
                <span>Roadmap & Future Extensions</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.futureUpdates.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-obsidian-950 border border-obsidian-border text-xs text-ivory-muted font-mono">
                    <span className="text-champagne-400 mr-2">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 10 — Links */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-champagne-400 tracking-widest uppercase">
              <ExternalLink className="w-4 h-4 text-champagne-400" />
              <span>10 — Links & Documentation</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {caseStudy.links && caseStudy.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-champagne-500/10 border border-champagne-500/40 text-champagne-300 text-xs font-mono tracking-wider uppercase hover:bg-champagne-500/20 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}

                {project.githubUrl && !caseStudy.links?.some(l => l.url === project.githubUrl) && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-obsidian-950 border border-obsidian-border text-ivory-muted text-xs font-mono tracking-wider uppercase hover:text-ivory transition-colors"
                  >
                    <span>GitHub Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono text-ivory-faint hover:text-ivory transition-colors uppercase tracking-widest"
              >
                Close Case Study [ESC]
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Screenshot Zoom Modal */}
      {selectedScreenshot && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] bg-obsidian-900 border border-obsidian-border rounded-xl overflow-hidden p-2">
            <img 
              src={selectedScreenshot.image} 
              alt={selectedScreenshot.title}
              className="max-h-[70vh] w-auto mx-auto object-contain"
            />
            <div className="p-4 text-center">
              <h4 className="font-mono text-sm text-ivory">{selectedScreenshot.title}</h4>
              <p className="text-xs text-ivory-muted mt-1">{selectedScreenshot.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
