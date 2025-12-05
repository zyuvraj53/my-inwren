// components/compare/CompareCTA.js

export default function CompareCTA() {
  return (
    <div className="max-w-4xl mx-auto mt-24 mb-24 text-center px-6">
      <div className="glass-panel p-12 rounded-2xl border border-[#FF9F1C]/20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9F1C]/10 to-transparent opacity-50"></div>

        {/* Content */}
        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
          Ready to make the switch?
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
          <a
            href="#pricing"
            className="px-8 py-4 bg-[#FF9F1C] text-black font-bold rounded-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,159,28,0.4)]"
          >
            Migrate for Free
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 border border-[#333] text-white font-mono rounded-lg hover:bg-[#222] transition-all"
          >
            View Full Plans
          </a>
        </div>

        <p className="mt-6 text-[#666] text-sm relative z-10">
          *Migration concierge included on Growth and Ultra plans.
        </p>
      </div>
    </div>
  );
}