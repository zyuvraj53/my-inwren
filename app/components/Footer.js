// components/Footer.js
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
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
              <span className="font-bold text-xl text-white">INWREN</span>
            </a>
            <p className="text-brand-textMuted max-w-sm mb-6">
              The intelligent email platform for teams who value growth over guesswork.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-textMuted hover:text-brand-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-textMuted hover:text-brand-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-textMuted hover:text-brand-orange transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-brand-textMuted">
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Developers
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500">System Normal</span>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-brand-textMuted">
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Email Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-textMuted font-mono">
          <p>&copy; 2024 INWREN Inc. All rights reserved.</p>
          <p>Bengaluru • San Francisco</p>
        </div>
      </div>
    </footer>
  );
}