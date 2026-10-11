import React, { useEffect, useState } from 'react';
import { X, Printer, ExternalLink, GraduationCap, Briefcase, Code, Award, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';
import { researchData } from '../data/research';
import { achievementsData } from '../data/achievements';
import { skillsData } from '../data/skills';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('dossier'); // 'dossier' or 'pdf'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-obsidian-900 border border-champagne-500/30 rounded-2xl shadow-2xl shadow-black overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        {/* Modal Action Header */}
        <div className="p-4 sm:p-6 border-b border-obsidian-border bg-obsidian-950 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-champagne-400 uppercase tracking-widest font-semibold">
              DOCUMENT VIEWER // RÉSUMÉ
            </span>
            <span className="hidden sm:inline text-obsidian-600">•</span>
            <span className="hidden sm:inline font-mono text-xs text-ivory-faint">
              UPDATED {profileData.resume.lastUpdated}
            </span>
          </div>

          {/* View Mode Tabs */}
          <div className="flex items-center bg-obsidian-900 border border-obsidian-border rounded-lg p-0.5">
            <button
              onClick={() => setActiveTab('dossier')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                activeTab === 'dossier'
                  ? 'bg-champagne-500/20 text-champagne-300 font-semibold'
                  : 'text-ivory-muted hover:text-ivory'
              }`}
            >
              Digital Dossier
            </button>
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                activeTab === 'pdf'
                  ? 'bg-champagne-500/20 text-champagne-300 font-semibold'
                  : 'text-ivory-muted hover:text-ivory'
              }`}
            >
              Original PDF
            </button>
          </div>

          {/* Action Tools */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-1.5 rounded bg-obsidian-800 hover:bg-obsidian-700 text-ivory-muted hover:text-ivory text-xs font-mono border border-obsidian-border flex items-center space-x-1.5 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={profileData.resume.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-1.5 rounded bg-champagne-500/15 hover:bg-champagne-500/25 text-champagne-300 text-xs font-mono border border-champagne-500/30 flex items-center space-x-1.5 transition-colors"
              title="Open raw PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-obsidian-800 text-ivory-muted hover:text-ivory transition-colors border border-obsidian-border"
              aria-label="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Active Tab View */}
        {activeTab === 'pdf' ? (
          <div className="w-full h-[75vh] bg-black">
            <iframe
              src={profileData.resume.filePath}
              title="Hemadri Bhatnagar Resume PDF"
              className="w-full h-full border-none"
            />
          </div>
        ) : (
          <div className="overflow-y-auto p-6 sm:p-10 md:p-12 space-y-8 bg-[#0c0c11] text-ivory font-sans">
            {/* Header Block */}
            <div className="border-b border-obsidian-border pb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 id="resume-title" className="font-display text-3xl sm:text-4xl text-ivory uppercase tracking-wider font-bold">
                  {profileData.name}
                </h1>
                <p className="font-serif italic text-base text-champagne-300 mt-1">
                  {profileData.primaryIdentity} • NMIMS MPSTME
                </p>
              </div>

              <div className="text-xs font-mono text-ivory-muted space-y-1">
                <div>{profileData.contact.primaryEmail}</div>
                <div>{profileData.contact.collegeEmail}</div>
                <div className="text-champagne-400">linkedin.com/in/hemadribhatnagar</div>
                <div className="text-champagne-400">github.com/Hemadri-eng</div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-[0.2em] text-champagne-400 uppercase font-semibold flex items-center space-x-2 border-b border-obsidian-border/80 pb-1">
                <GraduationCap className="w-4 h-4 text-champagne-400" />
                <span>EDUCATION</span>
              </h2>

              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div>
                    <span className="font-semibold text-ivory text-sm">{edu.institution}</span>
                    <div className="text-champagne-300 font-serif italic">{edu.degree}</div>
                    {edu.score && <div className="font-mono text-ivory-muted text-[11px] mt-0.5">{edu.score}</div>}
                  </div>
                  <div className="font-mono text-ivory-faint text-[11px] sm:text-right mt-1 sm:mt-0">
                    {edu.period} • {edu.location}
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-[0.2em] text-champagne-400 uppercase font-semibold flex items-center space-x-2 border-b border-obsidian-border/80 pb-1">
                <Code className="w-4 h-4 text-champagne-400" />
                <span>KEY ENGINEERING PROJECTS</span>
              </h2>

              <div className="space-y-4">
                {projectsData.map((p) => (
                  <div key={p.id} className="text-xs space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <span className="font-semibold text-ivory text-sm">
                        {p.title} <span className="font-normal text-champagne-300">— {p.subtitle}</span>
                      </span>
                      <span className="font-mono text-ivory-faint text-[11px]">{p.year}</span>
                    </div>
                    <div className="font-mono text-[11px] text-champagne-400/90">
                      Technologies: {p.technologies.join(', ')}
                    </div>
                    <p className="text-ivory-muted font-light leading-relaxed">
                      {p.shortDescription}
                    </p>
                    <ul className="list-disc list-inside text-ivory-muted text-[11px] space-y-0.5 pl-1">
                      {p.highlights.slice(0, 2).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Leadership */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-[0.2em] text-champagne-400 uppercase font-semibold flex items-center space-x-2 border-b border-obsidian-border/80 pb-1">
                <Briefcase className="w-4 h-4 text-champagne-400" />
                <span>EXPERIENCE & LEADERSHIP</span>
              </h2>

              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="text-xs space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <div>
                        <span className="font-semibold text-ivory">{exp.role}</span>
                        <span className="text-champagne-300 font-serif italic"> — {exp.organization}</span>
                      </div>
                      <span className="font-mono text-ivory-faint text-[11px]">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-ivory-muted text-[11px] space-y-0.5 pl-1">
                      {exp.responsibilities.slice(0, 2).map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Publications */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-[0.2em] text-champagne-400 uppercase font-semibold flex items-center space-x-2 border-b border-obsidian-border/80 pb-1">
                <BookOpen className="w-4 h-4 text-champagne-400" />
                <span>RESEARCH & PUBLICATIONS</span>
              </h2>

              <div className="space-y-3">
                {researchData.map((res) => (
                  <div key={res.id} className="text-xs space-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <span className="font-semibold text-ivory">"{res.title}"</span>
                      <span className="font-mono text-champagne-400 text-[11px]">[{res.status}]</span>
                    </div>
                    <p className="text-ivory-muted text-[11px] font-light leading-relaxed">
                      {res.leadSummary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Certifications */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-[0.2em] text-champagne-400 uppercase font-semibold flex items-center space-x-2 border-b border-obsidian-border/80 pb-1">
                <Award className="w-4 h-4 text-champagne-400" />
                <span>HONORS & CERTIFICATIONS</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {achievementsData.map((ach) => (
                  <div key={ach.id} className="p-2.5 rounded bg-obsidian-950 border border-obsidian-border">
                    <div className="font-semibold text-ivory">{ach.title}</div>
                    <div className="text-[11px] text-ivory-faint font-mono">{ach.issuer} ({ach.year})</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div className="space-y-2 border-t border-obsidian-border pt-4 text-xs">
              <div className="font-mono text-xs text-champagne-400 uppercase tracking-widest font-semibold mb-2">
                TECHNICAL PROFICIENCIES
              </div>
              {skillsData.map((cat, idx) => (
                <div key={idx} className="text-[11px]">
                  <span className="font-mono font-semibold text-ivory">{cat.category}: </span>
                  <span className="text-ivory-muted">{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
