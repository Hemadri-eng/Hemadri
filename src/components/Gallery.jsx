import React, { useState, useEffect, useCallback } from 'react';
import { Image as ImageIcon, X, Maximize2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryCategories, galleryData } from '../data/gallery';
import ScrollReveal from './ScrollReveal';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Filter items
  const filteredItems = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (activeImageIndex !== null) {
      if (activeImageIndex < filteredItems.length - 1) {
        setActiveImageIndex(activeImageIndex + 1);
      } else {
        setActiveImageIndex(0);
      }
    }
  }, [activeImageIndex, filteredItems.length]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (activeImageIndex !== null) {
      if (activeImageIndex > 0) {
        setActiveImageIndex(activeImageIndex - 1);
      } else {
        setActiveImageIndex(filteredItems.length - 1);
      }
    }
  }, [activeImageIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-obsidian-border">
      {/* Section Header */}
      <ScrollReveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-champagne-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
              <span>09 / VISUAL ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory tracking-wider uppercase font-semibold">
              Gallery & Moments
            </h2>
          </div>
          <p className="font-mono text-xs text-ivory-muted max-w-md tracking-wide">
            A living photographic archive documenting collegiate hackathons, lab research sessions, athletic meets, and campus life.
          </p>
        </div>
      </ScrollReveal>

      {/* Category Filter Tabs */}
      <ScrollReveal direction="up" delay={100}>
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-obsidian-border">
          {galleryCategories.map((category) => {
            const count = category === 'All' 
              ? galleryData.length 
              : galleryData.filter(i => i.category.toLowerCase() === category.toLowerCase()).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center space-x-2 ${
                  selectedCategory === category
                    ? 'bg-champagne-500/20 text-champagne-300 border border-champagne-500/40 shadow-sm'
                    : 'bg-obsidian-950/60 text-ivory-muted hover:text-ivory border border-obsidian-border'
                }`}
              >
                <span>{category}</span>
                <span className="text-[10px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Gallery Grid or Graceful Empty State */}
      {filteredItems.length === 0 ? (
        <div className="glass-panel rounded-2xl p-16 text-center max-w-md mx-auto my-12 border border-obsidian-border">
          <ImageIcon className="w-10 h-10 text-champagne-500/40 mx-auto mb-4" />
          <h3 className="font-display text-lg text-ivory uppercase tracking-wider mb-2">
            Archive In Preparation
          </h3>
          <p className="text-xs text-ivory-muted font-sans font-light leading-relaxed">
            No visual captures added for category <span className="text-champagne-300 font-mono">"{selectedCategory}"</span> yet. Hemadri can add items directly via <code className="text-champagne-400 font-mono">src/data/gallery.js</code>.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 70}>
              <div
                onClick={() => setActiveImageIndex(index)}
                className="group relative rounded-xl overflow-hidden glass-panel border border-obsidian-border cursor-pointer transition-all duration-300 hover:border-champagne-500/40 hover:shadow-xl hover:shadow-black/60 h-full"
              >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-obsidian-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to stylized abstract background if local image is missing
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                
                {/* Fallback pattern if image is missing */}
                <div className="hidden absolute inset-0 bg-obsidian-900 flex-col items-center justify-center p-6 text-center">
                  <ImageIcon className="w-8 h-8 text-champagne-400/50 mb-2" />
                  <span className="font-mono text-xs text-champagne-300">{item.title}</span>
                  <span className="font-mono text-[10px] text-ivory-faint mt-1">{item.category}</span>
                </div>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Corner Expand Indicator */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-obsidian-900/80 backdrop-blur-sm text-ivory-muted opacity-0 group-hover:opacity-100 transition-opacity border border-obsidian-border">
                  <Maximize2 className="w-3.5 h-3.5 text-champagne-300" />
                </div>

                {/* Bottom Caption Overlay on Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-champagne-400 uppercase tracking-widest mb-1">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span className="text-ivory-faint">{item.date}</span>
                  </div>
                  <h3 className="font-display text-base text-ivory tracking-wide uppercase line-clamp-1 group-hover:text-champagne-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-muted font-sans font-light line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-obsidian-800 text-ivory-muted hover:text-ivory transition-colors z-20 border border-obsidian-border"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-obsidian-900/80 text-ivory hover:text-champagne-300 transition-colors z-20 border border-obsidian-border"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-obsidian-900/80 text-ivory hover:text-champagne-300 transition-colors z-20 border border-obsidian-border"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Lightbox Content Container */}
          <div 
            className="relative max-w-4xl w-full bg-obsidian-900 border border-obsidian-border rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[65vh] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Metadata Bar */}
            <div className="p-6 sm:p-8 bg-obsidian-950 border-t border-obsidian-border">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center space-x-3 text-xs font-mono text-champagne-400 uppercase tracking-widest">
                  <span className="px-2 py-0.5 rounded bg-obsidian-900 border border-obsidian-border">
                    {activeItem.category}
                  </span>
                  <span>•</span>
                  <span className="text-ivory-faint">{activeItem.date}</span>
                </div>

                <span className="font-mono text-xs text-ivory-faint">
                  {activeImageIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl text-ivory uppercase tracking-wide">
                {activeItem.title}
              </h3>
              <p className="text-sm text-ivory-muted font-light mt-2 max-w-2xl leading-relaxed">
                {activeItem.caption}
              </p>

              {activeItem.externalLink && (
                <div className="mt-4 pt-4 border-t border-obsidian-border">
                  <a
                    href={activeItem.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-mono text-champagne-300 hover:text-ivory"
                  >
                    <span>View Related Resource</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
