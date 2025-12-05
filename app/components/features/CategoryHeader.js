// components/features/CategoryHeader.js

export default function CategoryHeader({ title }) {
  return (
    <div className="grid grid-cols-5 bg-[#0A0A0A] border-y border-[#1E1E1E] sticky top-[180px] z-20">
      <div className="col-span-5 py-3 px-6 text-xs font-mono font-bold uppercase tracking-widest text-[#FF9F1C] flex items-center gap-2">
        {title}
      </div>
    </div>
  );
}