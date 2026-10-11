import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { profileData } from '../data/profile';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [copiedCollege, setCopiedCollege] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };

  const copyEmail = (email, type) => {
    navigator.clipboard.writeText(email);
    if (type === 'personal') {
      setCopiedPersonal(true);
      setTimeout(() => setCopiedPersonal(false), 2000);
    } else {
      setCopiedCollege(true);
      setTimeout(() => setCopiedCollege(false), 2000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profileData.contact.primaryEmail}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border">
      {/* Top Header */}
      <ScrollReveal direction="up">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
            <span>11 / INQUIRIES & COLLABORATION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-ivory uppercase tracking-wider font-semibold">
            {profileData.contact.headline}
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-champagne-300 max-w-2xl mx-auto">
            "{profileData.contact.subtext}"
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
        {/* Left Column: Direct Inquiries & Channel Dossier (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal direction="right" delay={100}>
            {/* Primary Email Card */}
            <div 
              onMouseMove={handleMouseMove}
              className="card-spotlight glass-panel glass-panel-hover rounded-xl p-6 border border-champagne-500/30 transition-all duration-300"
            >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] tracking-widest text-champagne-400 uppercase font-semibold">
                PRIMARY EMAIL
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-champagne-500/15 text-champagne-300 border border-champagne-500/30">
                RECOMMENDED
              </span>
            </div>

            <a
              href={`mailto:${profileData.contact.primaryEmail}`}
              className="font-mono text-sm text-ivory hover:text-champagne-300 transition-colors block break-all font-medium my-2"
            >
              {profileData.contact.primaryEmail}
            </a>

            <div className="pt-2 flex items-center justify-between text-xs font-mono">
              <a
                href={`mailto:${profileData.contact.primaryEmail}`}
                className="text-champagne-400 hover:text-champagne-300 inline-flex items-center space-x-1"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => copyEmail(profileData.contact.primaryEmail, 'personal')}
                className="text-ivory-faint hover:text-ivory inline-flex items-center space-x-1"
              >
                {copiedPersonal ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* College Academic Email Card */}
          <div 
            onMouseMove={handleMouseMove}
            className="card-spotlight glass-panel glass-panel-hover rounded-xl p-6 border border-obsidian-border transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] tracking-widest text-ivory-faint uppercase font-semibold">
                INSTITUTIONAL EMAIL
              </span>
              <span className="text-[10px] font-mono text-ivory-faint">
                NMIMS ACADEMIC
              </span>
            </div>

            <a
              href={`mailto:${profileData.contact.collegeEmail}`}
              className="font-mono text-xs sm:text-sm text-ivory-muted hover:text-ivory transition-colors block break-all my-2"
            >
              {profileData.contact.collegeEmail}
            </a>

            <div className="pt-2 flex items-center justify-between text-xs font-mono">
              <a
                href={`mailto:${profileData.contact.collegeEmail}`}
                className="text-ivory-muted hover:text-champagne-300 inline-flex items-center space-x-1"
              >
                <span>Academic Inquiries</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => copyEmail(profileData.contact.collegeEmail, 'college')}
                className="text-ivory-faint hover:text-ivory inline-flex items-center space-x-1"
              >
                {copiedCollege ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Professional Networks */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              className="card-spotlight glass-panel glass-panel-hover rounded-xl p-5 border border-obsidian-border flex flex-col justify-between group transition-all duration-300"
            >
              <div className="flex items-center justify-between text-champagne-400 mb-2">
                <LinkedinIcon className="w-5 h-5" />
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="font-mono text-xs text-ivory font-semibold block">LinkedIn</span>
                <span className="font-mono text-[10px] text-ivory-faint">/in/hemadribhatnagar</span>
              </div>
            </a>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              className="card-spotlight glass-panel glass-panel-hover rounded-xl p-5 border border-obsidian-border flex flex-col justify-between group transition-all duration-300"
            >
              <div className="flex items-center justify-between text-champagne-400 mb-2">
                <GithubIcon className="w-5 h-5" />
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="font-mono text-xs text-ivory font-semibold block">GitHub</span>
                <span className="font-mono text-[10px] text-ivory-faint">@Hemadri-eng</span>
              </div>
            </a>
          </div>
        </ScrollReveal>
        </div>

        {/* Right Column: Direct Dispatch Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="left" delay={150}>
            <form
              onSubmit={handleFormSubmit}
              onMouseMove={handleMouseMove}
              className="card-spotlight glass-panel rounded-xl p-8 border border-obsidian-border space-y-5 transition-all duration-300"
            >
              <div className="border-b border-obsidian-border pb-4 mb-2">
                <h3 className="font-display text-lg text-ivory uppercase tracking-wider">
                  Direct Dispatch Note
                </h3>
                <p className="text-xs text-ivory-muted font-sans font-light mt-1">
                  Fires directly into Hemadri's inbox with pre-formatted transmission details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-ivory-muted uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Prof. / Recruiter / Engineer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded bg-obsidian-950/80 border border-obsidian-border text-ivory text-xs font-mono focus:outline-none focus:border-champagne-500/60 focus:ring-1 focus:ring-champagne-500/30 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-ivory-muted uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded bg-obsidian-950/80 border border-obsidian-border text-ivory text-xs font-mono focus:outline-none focus:border-champagne-500/60 focus:ring-1 focus:ring-champagne-500/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-ivory-muted uppercase tracking-wider">
                  Subject Focus
                </label>
                <input
                  type="text"
                  placeholder="Research Inquiry / Summer Internship / Project Review"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded bg-obsidian-950/80 border border-obsidian-border text-ivory text-xs font-mono focus:outline-none focus:border-champagne-500/60 focus:ring-1 focus:ring-champagne-500/30 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-ivory-muted uppercase tracking-wider">
                  Message Brief
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share context on your opportunity, research topic, or technical question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded bg-obsidian-950/80 border border-obsidian-border text-ivory text-xs font-mono focus:outline-none focus:border-champagne-500/60 focus:ring-1 focus:ring-champagne-500/30 transition-all resize-none"
                />
              </div>

              {formSubmitted && (
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email client initiated with dispatch details. Looking forward to connecting!</span>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] font-mono text-ivory-faint">
                  Response SLA: Typically &lt; 24h
                </span>

                <button
                  type="submit"
                  className="btn-luxury btn-primary rounded text-xs flex items-center space-x-2"
                >
                  <span>TRANSMIT DISPATCH</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
