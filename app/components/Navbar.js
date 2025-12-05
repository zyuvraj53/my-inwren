'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Add background when scrolled
          setIsScrolled(currentScrollY > 50);
          
          // Auto-hide logic
          if (currentScrollY < 120) {
            setIsHidden(false);
          } else if (currentScrollY > lastScrollY + 6) {
            setIsHidden(true);
          } else if (currentScrollY < lastScrollY - 6) {
            setIsHidden(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav' : 'bg-transparent'
        } ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
        style={{ willChange: 'transform' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <svg
              viewBox="0 0 100 60"
              className="w-8 h-8 stroke-brand-orange fill-none group-hover:drop-shadow-[0_0_8px_rgba(255,159,28,0.5)] transition-all"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 25 L35 10 L50 35 L65 10 L90 25"></path>
              <path d="M10 25 Q 15 35 30 30"></path>
              <path d="M90 25 Q 85 35 70 30"></path>
            </svg>
            <span className="font-bold text-xl tracking-tight text-white">
              INWREN
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="/features"
              className="text-sm font-mono text-brand-textMuted hover:text-brand-orange transition-colors"
            >
              Platform
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-mono text-brand-textMuted hover:text-brand-orange transition-colors"
            >
              Process
            </a>
            <a
              href="/compare"
              className="text-sm font-mono text-brand-textMuted hover:text-brand-orange transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-mono text-brand-textMain hover:text-white transition-colors"
            >
              Login
            </a>
            <a
              href="#pricing"
              className="btn-shine px-5 py-2 border border-brand-orange text-brand-orange font-mono text-xs uppercase tracking-wider hover:bg-brand-orange hover:text-black transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
}