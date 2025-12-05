// components/home/CarouselSection.js
'use client';

import { useRef, useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

export default function CarouselSection({ title, subtitle, features, id }) {
  const scrollContainerRef = useRef(null); // Fixed: was typed as HTMLDivElement
  const [isHovering, setIsHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = features.length;
  const autoPlayInterval = 3000; // 3 seconds per card

  // Get card width + gap
  const getCardWidth = () => {
    const container = scrollContainerRef.current;
    if (!container || !container.firstElementChild) return 0;
    const card = container.firstElementChild;
    const gap = 24; // gap-6 = 24px
    return card.offsetWidth + gap;
  };

  // Smoothly scroll to a specific card (centered)
  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();
    if (cardWidth === 0) return;

    const containerWidth = container.offsetWidth;
    const centerOffset = (containerWidth - cardWidth + 24) / 2;
    const targetScroll = index * cardWidth + centerOffset;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setCurrentIndex(index % totalCards);
  };

  // Snap to nearest card on drag/touch end
  const snapToNearestCard = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();
    if (cardWidth === 0) return;

    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const centerOffset = (containerWidth - cardWidth + 24) / 2;
    const nearestIndex = Math.round((scrollLeft - centerOffset) / cardWidth);
    const clampedIndex = Math.max(0, Math.min(nearestIndex, totalCards - 1));

    scrollToCard(clampedIndex);
  };

  // Wheel navigation when hovering
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (!isHovering) return;
      e.preventDefault();

      if (e.deltaY > 0) {
        scrollToCard(currentIndex + 1);
      } else if (e.deltaY < 0) {
        scrollToCard(currentIndex - 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [isHovering, currentIndex]);

  // Auto-play: advance one card every few seconds
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      scrollToCard(currentIndex + 1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isHovering]);

  // Hover handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
    setTimeout(snapToNearestCard, 100); // Clean snap when hovering
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Snap on touch/mouse release (mobile + trackpad)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleRelease = () => {
      if (isHovering) snapToNearestCard();
    };

    container.addEventListener('touchend', handleRelease);
    container.addEventListener('mouseup', handleRelease);

    return () => {
      container.removeEventListener('touchend', handleRelease);
      container.removeEventListener('mouseup', handleRelease);
    };
  }, [isHovering]);

  return (
    <section id={id} className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {title}
          </h2>
          <p className="text-brand-textMuted text-lg max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth' // This enables ease-in-out globally
            }}
          >
            {/* Original cards */}
            {features.map((feature, i) => (
              <div key={i} className="snap-center flex-shrink-0">
                <FeatureCard feature={feature} />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {features.map((feature, i) => (
              <div key={`dup-${i}`} className="snap-center flex-shrink-0">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex % totalCards
                  ? 'bg-brand-orange w-8'
                  : 'bg-brand-border hover:bg-brand-orange/50'
              }`}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}