// components/home/CarouselSection.js
'use client';

import { useRef, useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

export default function CarouselSection({ title, subtitle, features, id }) {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollSpeed = 1; // pixels per frame
  const totalCards = features.length;

  // Get card width including gap
  const getCardWidth = () => {
    const container = scrollContainerRef.current;
    if (!container || !container.firstElementChild) return 0;
    const card = container.firstElementChild;
    const style = window.getComputedStyle(card);
    const gap = 24; // 6 * 4px (gap-6 in Tailwind)
    return card.offsetWidth + gap;
  };

  // Snap to nearest card
  const snapToNearestCard = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();
    if (cardWidth === 0) return;

    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    
    // Calculate which card should be centered
    const centerOffset = (containerWidth - cardWidth + 24) / 2;
    const nearestIndex = Math.round((scrollLeft - centerOffset) / cardWidth);
    
    // Clamp to valid range
    const clampedIndex = Math.max(0, Math.min(nearestIndex, totalCards - 1));
    
    // Scroll to center that card
    const targetScroll = clampedIndex * cardWidth + centerOffset;
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    setCurrentIndex(clampedIndex);
  };

  // Scroll to specific card index
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
    
    setCurrentIndex(index);
  };

  // Handle wheel scroll while hovering
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (isHovering) {
        e.preventDefault();
        
        // Determine scroll direction
        const delta = e.deltaY;
        
        if (delta > 0) {
          // Scroll down/right - next card
          const nextIndex = (currentIndex + 1) % totalCards;
          scrollToCard(nextIndex);
        } else if (delta < 0) {
          // Scroll up/left - previous card
          const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
          scrollToCard(prevIndex);
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isHovering, currentIndex, totalCards]);

  // Auto-scroll animation when not hovering
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;

    const animate = () => {
      if (!isPaused && !isHovering && container) {
        const maxScroll = container.scrollWidth / 2; // Half because we duplicated cards
        
        if (container.scrollLeft >= maxScroll) {
          // Reset to beginning for seamless loop
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, isHovering]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    setIsHovering(true);
    // Small delay to let auto-scroll stop, then snap
    setTimeout(() => {
      snapToNearestCard();
    }, 50);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setIsHovering(false);
  };

  return (
    <section id={id} className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {title}
          </h2>
          <p className="text-brand-textMuted text-lg max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scrollable Cards */}
          <div
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-scroll scrollbar-hide pb-4 ${
              isHovering ? 'snap-x snap-mandatory' : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
            {/* Duplicate cards for seamless infinite scroll */}
            {features.map((feature, index) => (
              <FeatureCard key={`duplicate-${index}`} feature={feature} />
            ))}
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-brand-orange w-8'
                  : 'bg-brand-border hover:bg-brand-orange/50'
              }`}
              aria-label={`Go to card ${index + 1}`}
            ></button>
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