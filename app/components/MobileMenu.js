// components/MobileMenu.js
'use client';

import { X } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 bg-brand-black z-40 transform transition-transform duration-300 flex flex-col justify-center items-center gap-8 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-brand-textMuted hover:text-white"
      >
        <X className="w-8 h-8" />
      </button>

      <a
        href="#features"
        onClick={onClose}
        className="text-2xl font-bold hover:text-brand-orange transition-colors"
      >
        Platform
      </a>
      <a
        href="#pricing"
        onClick={onClose}
        className="text-2xl font-bold hover:text-brand-orange transition-colors"
      >
        Pricing
      </a>
      <a href="#" className="text-xl font-mono text-brand-textMuted">
        Login
      </a>
    </div>
  );
}