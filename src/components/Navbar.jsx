import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'CURRENTLY', href: '#currently' },
  { name: 'WORK', href: '#work' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'RESEARCH', href: '#research' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'UPDATES', href: '#updates' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-champagne-500/20 py-3 shadow-2xl shadow-black/60' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a 
            href="#" 
            className="group flex items-center space-x-3 text-ivory transition-opacity hover:opacity-95"
            aria-label="Hemadri Bhatnagar Portfolio Home"
          >
            <div className="relative w-8 h-8 rounded border border-champagne-500/50 bg-obsidian-900 flex items-center justify-center font-display text-xs tracking-wider text-champagne-300 group-hover:border-champagne-400 group-hover:shadow-[0_0_15px_rgba(197,168,128,0.3)] transition-all">
              HB
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs tracking-[0.2em] uppercase font-semibold text-ivory group-hover:text-champagne-300 transition-colors">
                Hemadri Bhatnagar
              </span>
              <span className="text-[10px] tracking-wider text-ivory-faint flex items-center space-x-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>B.Tech Computer Eng • NMIMS</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation with Animated Pill/Indicator */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`font-mono text-[11px] tracking-[0.16em] uppercase transition-all duration-300 relative py-1 px-1.5 ${
                    isActive 
                      ? 'text-champagne-300 font-semibold' 
                      : 'text-ivory-muted hover:text-ivory'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-champagne-500/30 via-champagne-400 to-champagne-500/30 rounded-full shadow-[0_0_8px_rgba(197,168,128,0.6)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenResume}
              className="btn-luxury rounded text-xs font-mono tracking-wider uppercase border border-champagne-500/40 bg-champagne-500/10 text-champagne-300 hover:bg-champagne-500/20 hover:border-champagne-400 transition-all duration-300 px-4 py-2"
            >
              <FileText className="w-3.5 h-3.5 text-champagne-400 mr-2 inline" />
              <span>{profileData.resume.actionLabel}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center px-2.5 py-1.5 rounded text-[11px] font-mono tracking-wider uppercase border border-champagne-500/30 text-champagne-300 mr-1"
            >
              <FileText className="w-3 h-3 mr-1" />
              <span>RÉSUMÉ</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ivory hover:text-champagne-400 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-400 ease-out ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/85 backdrop-blur-lg"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-obsidian-900 border-l border-obsidian-border p-6 pt-24 flex flex-col justify-between overflow-y-auto shadow-2xl">
          <div className="space-y-6">
            <div className="border-b border-obsidian-border pb-4 flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest text-champagne-400 uppercase font-semibold">
                Menu Navigation
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-ivory-muted hover:text-ivory"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-mono text-sm tracking-widest uppercase text-ivory hover:text-champagne-300 transition-colors flex items-center justify-between py-1"
                  style={{
                    transitionDelay: `${idx * 25}ms`,
                  }}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-ivory-faint font-mono">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-obsidian-border space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded text-center text-xs font-mono tracking-widest uppercase border border-champagne-500/50 bg-champagne-500/15 text-champagne-200 hover:bg-champagne-500/25 flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4 text-champagne-400" />
              <span>{profileData.resume.actionLabel}</span>
            </button>

            <div className="text-[11px] font-mono text-ivory-faint text-center">
              <span>hemadri.bhatnagar07@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
