// components/features/FeaturesHero.js

export default function FeaturesHero() {
  return (
    <div className="relative pt-20 pb-12 px-6 border-b border-[#1E1E1E] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF9F1C] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="block text-[#E1E1E1]">Feature</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF9F1C] to-amber-600">
            Comparison
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#888888] text-lg max-w-2xl mx-auto mb-10 font-light">
          Explore our plans side-by-side to find the perfect set of tools for your growth.
        </p>
      </div>
    </div>
  );
}