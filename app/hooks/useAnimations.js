'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useHeroAnimations() {
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Split text animation helper
      const splitTextGradientSafe = (element) => {
        if (!element) return [];
        const lines = element.querySelectorAll('.hero-line');
        const chars = [];

        lines.forEach((line) => {
          const text = line.textContent;
          const hasGradient = line.classList.contains('bg-clip-text');
          const gradientClasses = hasGradient
            ? Array.from(line.classList).filter(
                (cls) =>
                  cls.startsWith('bg-') ||
                  cls.startsWith('from-') ||
                  cls.startsWith('to-') ||
                  cls === 'text-transparent' ||
                  cls === 'bg-clip-text'
              )
            : [];

          line.innerHTML = '';

          text.split('').forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';

            if (hasGradient) {
              span.classList.add(...gradientClasses);
            }

            line.appendChild(span);
            chars.push(span);
          });
        });

        return chars;
      };

      const heroTitle = document.querySelector('#hero-title');
      if (heroTitle) {
        const heroChars = splitTextGradientSafe(heroTitle);
        heroTitle.style.display = 'block';
        gsap.set(heroTitle, { opacity: 1 });
        gsap.set(heroChars, { opacity: 0, y: 18, filter: 'blur(6px)' });

        tl.to(heroChars, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.05,
          duration: 1.05,
          ease: 'power3.out',
        });

        tl.to(
          '#hero-underline',
          {
            width: 180,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        );

        tl.to(
          '.hero-stagger',
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.8'
        );
      }

      // Parallax for hero blob
      gsap.to('.animate-pulse-slow', {
        y: 60,
        scrollTrigger: {
          trigger: 'header',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);
}

export function useSectionAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pricing cards
      gsap.from('#pricing .group', {
        scrollTrigger: {
          trigger: '#pricing',
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
      });

      // How it works steps
      gsap.utils.toArray('#how-it-works .group').forEach((step, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          },
          x: -30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.2,
        });
      });
    });

    return () => ctx.revert();
  }, []);
}

export function useMagneticButtons(selector = '.magnetic-btn', strength = 0.35) {
  useEffect(() => {
    const buttons = document.querySelectorAll(selector);
    if (!buttons.length) return;

    const handlers = [];

    buttons.forEach((btn) => {
      btn.style.willChange = 'transform';

      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: relX * strength,
          y: relY * strength,
          duration: 0.25,
          ease: 'power3.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.4)',
        });
      };

      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);

      handlers.push({ btn, handleMouseMove, handleMouseLeave });
    });

    return () => {
      handlers.forEach(({ btn, handleMouseMove, handleMouseLeave }) => {
        btn.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [selector, strength]);
}

export function use3DTilt(selector, maxTilt = 10) {
  useEffect(() => {
    const card = document.querySelector(selector);
    if (!card) return;

    card.style.transformStyle = 'preserve-3d';

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: 'power3.out',
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [selector, maxTilt]);
}