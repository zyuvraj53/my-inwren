// components/features/FeaturesCTA.js

export default function FeaturesCTA() {
  return (
    <div className="py-24 text-center border-t border-[#1E1E1E] mt-12 bg-gradient-to-b from-[#050505] to-[#121212]">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Need more than 100k sends?
      </h2>
      <p className="text-[#888888] mb-8 max-w-lg mx-auto">
        Our enterprise infrastructure handles billions of events. Get a custom
        quote for high-volume sending.
      </p>
      <div className="inline-flex items-center justify-center">
        <button className="px-8 py-4 rounded border border-[#FF9F1C] text-[#FF9F1C] font-mono text-sm uppercase tracking-widest hover:bg-[#FF9F1C] hover:text-black transition-all duration-300">
          Talk to an expert
        </button>
      </div>
    </div>
  );
}