// components/compare/CompareHero.js

export default function CompareHero() {
  return (
    <div className="relative pt-24 pb-8 px-6 text-center border-b border-[#1E1E1E]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF9F1C] opacity-[0.04] blur-[150px] rounded-full pointer-events-none"></div>

      {/* Badge */}
      <div className="inline-block px-3 py-1 mb-6 rounded-full border border-[#FF9F1C]/30 bg-[#FF9F1C]/5">
        <span className="text-xs font-mono text-[#FF9F1C] uppercase tracking-widest">
          Head to Head
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
        Invest in Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9F1C] to-[#ffbe0b]">
          Growth
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[#888] text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
        See how INWREN stacks up. Enterprise-grade power at a price that empowers
        you to scale.
      </p>
    </div>
  );
}