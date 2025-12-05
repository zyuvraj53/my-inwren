'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useStackingCards() {
  useEffect(() => {
    const panels = gsap.utils.toArray('.feature-panel');
    const dots = document.querySelectorAll('.progress-dot');
    const label = document.getElementById('features-stack-label');
    const progress = document.getElementById('feature-progress');

    if (!panels.length) return;

    const bgClasses = [
      'bg-deliverability',
      'bg-reputation',
      'bg-journey',
      'bg-developer',
    ];

    const setActive = (index) => {
      dots.forEach((dot, i) => {
        dot.style.background =
          i === index ? 'rgba(255,159,28,1)' : 'rgba(255,255,255,0.15)';
      });

      document.body.classList.remove(...bgClasses);
      if (bgClasses[index]) {
        document.body.classList.add(bgClasses[index]);
      }
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.panels-container',
        pin: true,
        start: 'top top',
        end: () => '+=' + panels.length * 100 + '%',
        scrub: 1,

        onEnter: () => {
          if (label) label.style.opacity = 1;
          if (progress) progress.style.opacity = 1;
          setActive(0);
        },

        onEnterBack: () => {
          if (label) label.style.opacity = 1;
          if (progress) progress.style.opacity = 1;
        },

        onLeave: () => {
          if (label) label.style.opacity = 0;
          if (progress) progress.style.opacity = 0;
          document.body.classList.remove(...bgClasses);
        },

        onLeaveBack: () => {
          if (label) label.style.opacity = 0;
          if (progress) progress.style.opacity = 0;
          document.body.classList.remove(...bgClasses);
        },
      },
    });

    panels.forEach((panel, i) => {
      if (i !== 0) {
        tl.to(panel, {
          yPercent: -100,
          ease: 'none',
          duration: 1,
          onUpdate: () => {
            setActive(i);
          },
        });
      }
    });

    setActive(0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.body.classList.remove(...bgClasses);
    };
  }, []);
}

export function usePricingSpotlight(selector = '.pricing-card') {
  useEffect(() => {
    const cards = document.querySelectorAll(selector);
    if (!cards.length) return;

    const handlers = [];

    cards.forEach((card) => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
      };

      const handleMouseLeave = () => {
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      handlers.push({ card, handleMouseMove, handleMouseLeave });
    });

    return () => {
      handlers.forEach(({ card, handleMouseMove, handleMouseLeave }) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [selector]);
}

export function useScrollVelocityBlur() {
  useEffect(() => {
    const wrappers = [
      document.querySelector('#page-blur-wrapper'),
      document.querySelector('#page-blur-wrapper-2'),
    ].filter(Boolean);

    if (!wrappers.length) return;

    let lastY = window.scrollY;
    let lastTime = performance.now();
    let blurTimeout;

    const handleScroll = () => {
      const now = performance.now();
      const currentY = window.scrollY;
      const deltaY = Math.abs(currentY - lastY);
      const deltaTime = now - lastTime;

      const velocity = deltaY / Math.max(deltaTime, 1);
      const blur = Math.min(velocity * 10, 6);

      wrappers.forEach((el) => {
        gsap.to(el, {
          filter: `blur(${blur}px)`,
          duration: 0.15,
          ease: 'power2.out',
        });
      });

      lastY = currentY;
      lastTime = now;

      clearTimeout(blurTimeout);
      blurTimeout = setTimeout(() => {
        wrappers.forEach((el) => {
          gsap.to(el, {
            filter: 'blur(0px)',
            duration: 0.25,
            ease: 'power2.out',
          });
        });
      }, 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(blurTimeout);
    };
  }, []);
}