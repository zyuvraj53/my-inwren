// components/home/VerticalCarousel.js
'use client';

import { useRef, useEffect, useState } from 'react';
import { Sparkles, GitBranch, BarChart3 } from 'lucide-react';
import { VERTICAL_FEATURES } from '../../data/VerticalCarouselData';
import { ComposerVisual, AutomationVisual, AnalyticsVisual } from './VerticalCarouselVisuals';

const ICONS = {
  Sparkles,
  GitBranch,
  BarChart3,
};

const VISUALS = {
  composer: ComposerVisual,
  automation: AutomationVisual,
  analytics: AnalyticsVisual,
};

export default function VerticalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const totalCards = VERTICAL_FEATURES.length;

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && !isPaused) {
        nextCard();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating, isPaused]);

  // Handle wheel scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
      if (isAnimating) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0) {
        // Scroll down - next card
        const nextIndex = (currentIndex + 1) % totalCards;
        goToCard(nextIndex);
      } else if (e.deltaY < 0) {
        // Scroll up - previous card
        const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
        goToCard(prevIndex);
      }
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      carousel.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex, isAnimating, totalCards]);

  const nextCard = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
      setIsAnimating(false);
    }, 800);
  };

  const goToCard = (index) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 800);
    }
  };

  const currentFeature = VERTICAL_FEATURES[currentIndex];
  const Icon = ICONS[currentFeature.icon];
  const Visual = VISUALS[currentFeature.visual];

  return (
    <section id="vertical-carousel" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-brand-orange uppercase tracking-widest mb-3">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Experience The INWREN Difference
          </h2>
          <p className="text-brand-textMuted text-lg max-w-2xl mx-auto">
            Everything you need to create, automate, and analyze your email campaigns in one powerful platform.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex gap-8 justify-center items-center">
          {/* Progress Dots - Left Side */}
          <div className="hidden lg:flex flex-col justify-center gap-4">
            {VERTICAL_FEATURES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-orange h-8'
                    : 'bg-brand-border hover:bg-brand-orange/50 h-2'
                }`}
                aria-label={`Go to card ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Card Display Area */}
          <div 
            ref={carouselRef}
            className="relative w-full max-w-5xl h-[500px] lg:h-[550px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`w-full h-full transition-all duration-700 ease-in-out ${
                isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              <div className="glass-card rounded-3xl overflow-hidden h-full border border-brand-border">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="bg-brand-surface p-8 lg:p-10 border-b border-brand-border">
                    <Icon className="w-8 h-8 text-brand-orange mb-4" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {currentFeature.title}{' '}
                      <span className="text-brand-orange">({currentFeature.subtitle})</span>
                    </h3>
                    <p className="text-brand-textMuted max-w-2xl text-sm lg:text-base">
                      {currentFeature.description}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-brand-black border-t border-brand-border p-6 lg:p-8 shadow-2xl overflow-auto">
                    <Visual />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Progress Dots - Bottom */}
          <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {VERTICAL_FEATURES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-orange w-8'
                    : 'bg-brand-border hover:bg-brand-orange/50 w-2'
                }`}
                aria-label={`Go to card ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-8 text-xs font-mono text-brand-textMuted">
          Scroll or hover to explore features
        </div>
      </div>
    </section>
  );
}