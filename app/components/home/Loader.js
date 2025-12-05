// components/home/Loader.js
'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to('.logo-path', { 
      strokeDashoffset: 0, 
      duration: 1.5, 
      ease: 'power2.inOut' 
    })
    .to('.logo-wing-l', { 
      strokeDashoffset: 0, 
      duration: 0.8, 
      ease: 'power2.out' 
    }, '-=1')
    .to('.logo-wing-r', { 
      strokeDashoffset: 0, 
      duration: 0.8, 
      ease: 'power2.out' 
    }, '-=1')
    .to('#loader', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });
  }, [onComplete]);

  return (
    <div
      id="loader"
      className="loader-overlay fixed inset-0 bg-brand-black z-[100] flex justify-center items-center"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg
          viewBox="0 0 100 60"
          className="w-20 h-20 stroke-brand-orange fill-none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            className="logo-path"
            d="M10 25 L35 10 L50 35 L65 10 L90 25"
            strokeDasharray="200"
            strokeDashoffset="200"
          />
          <path
            className="logo-wing-l"
            d="M10 25 Q 15 35 30 30"
            strokeDasharray="100"
            strokeDashoffset="100"
          />
          <path
            className="logo-wing-r"
            d="M90 25 Q 85 35 70 30"
            strokeDasharray="100"
            strokeDashoffset="100"
          />
        </svg>
      </div>
    </div>
  );
}