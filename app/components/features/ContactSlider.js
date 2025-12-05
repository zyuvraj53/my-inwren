// components/features/ContactSlider.js
'use client';

export default function ContactSlider({ tiers, sliderIndex, onSliderChange }) {
  return (
    <div className="w-full max-w-lg mt-8">
      <div className="relative h-12 flex items-center">
        {/* Track background line */}
        <div className="absolute w-full h-1 bg-[#1E1E1E] rounded top-1/2 -translate-y-1/2"></div>

        {/* Dots & Numbers on the line */}
        <div className="absolute w-full flex justify-between px-1 pointer-events-none">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center relative"
              style={{ width: '0px' }}
            >
              {/* Number Label */}
              <span
                className={`absolute -top-10 font-mono whitespace-nowrap transition-all duration-300 ${
                  idx === sliderIndex
                    ? 'text-[#FF9F1C] text-xl font-bold -translate-y-1'
                    : 'text-[#666] text-xs font-medium'
                }`}
              >
                {tier.display}
              </span>
              {/* Dot */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full z-0 transition-colors duration-300 ${
                  idx <= sliderIndex ? 'bg-[#FF9F1C]' : 'bg-[#333]'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max={tiers.length - 1}
          step="1"
          value={sliderIndex}
          onChange={(e) => onSliderChange(parseInt(e.target.value))}
          className="w-full relative z-10 opacity-100 cursor-pointer"
        />
      </div>

      <style jsx>{`
        input[type='range'] {
          -webkit-appearance: none;
          background: transparent;
        }

        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #ff9f1c;
          cursor: pointer;
          margin-top: -10px;
          box-shadow: 0 0 15px rgba(255, 159, 28, 0.6);
          border: 2px solid #050505;
          position: relative;
          z-index: 20;
        }

        input[type='range']::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: transparent;
          border-radius: 2px;
        }

        input[type='range']:focus {
          outline: none;
        }

        input[type='range']::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #ff9f1c;
          cursor: pointer;
          border: 2px solid #050505;
          box-shadow: 0 0 15px rgba(255, 159, 28, 0.6);
        }

        input[type='range']::-moz-range-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: transparent;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}