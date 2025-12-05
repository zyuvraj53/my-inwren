// components/home/LogoStrip.js

export default function LogoStrip() {
  return (
    <div className="border-y border-brand-border bg-brand-black/50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-mono text-xs text-brand-textMuted uppercase tracking-widest mb-8">
          Trusted by Growth Teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {/* AgencyOS */}
          <div className="h-8 w-32 relative group">
            <svg viewBox="0 0 120 30" className="w-full h-full fill-white">
              <rect x="0" y="5" width="20" height="20" rx="4" fill="currentColor" />
              <circle cx="15" cy="10" r="2" fill="#050505" />
              <text x="30" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="16">
                AgencyOS
              </text>
            </svg>
          </div>

          {/* SaaSFlow */}
          <div className="h-8 w-32 relative group">
            <svg viewBox="0 0 120 30" className="w-full h-full fill-white">
              <path
                d="M10 5 L20 15 L10 25 M0 15 L30 15"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <text x="40" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="16">
                Flow
              </text>
            </svg>
          </div>

          {/* EcomScale */}
          <div className="h-8 w-32 relative group">
            <svg viewBox="0 0 120 30" className="w-full h-full fill-white">
              <rect x="0" y="10" width="10" height="15" />
              <rect x="12" y="5" width="10" height="20" />
              <rect x="24" y="15" width="10" height="10" />
              <text x="45" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="16">
                Scale
              </text>
            </svg>
          </div>

          {/* NewsletterPro */}
          <div className="h-8 w-32 relative group">
            <svg viewBox="0 0 140 30" className="w-full h-full fill-white">
              <circle
                cx="10"
                cy="15"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="10" cy="15" r="3" fill="currentColor" />
              <text x="30" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="16">
                NewsPro
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}