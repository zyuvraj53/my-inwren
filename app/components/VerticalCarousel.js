'use client';

import { useRef, useEffect, useState } from 'react';
import { Sparkles, GitBranch, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Stunning Email Composer',
    subtitle: 'AI Assisted',
    description: 'Design emails effortlessly with our AI-assisted, drag-and-drop editor. Focus on strategy, let AI handle the heavy lifting for copy and optimization.',
    visual: 'composer'
  },
  {
    icon: GitBranch,
    title: 'Email Automations',
    subtitle: 'Sequences & Flows',
    description: 'Build complex, multi-step sequences with our smart WYSIWYG builder. Utilize powerful if/else logic for true personalization.',
    visual: 'automation'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    subtitle: 'Drill-down & Rollups',
    description: 'Track real performance across campaigns, segments, and individuals. Drill down into full details or view aggregated rollups.',
    visual: 'analytics'
  }
];

export default function VerticalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const totalCards = features.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && !isPaused) {
        nextCard();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating, isPaused]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
      if (isAnimating) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0) {
        // Scroll down - next card
        const nextIndex = (currentIndex + 1) % totalCards;
        goToCard(nextIndex);
      } else if (e.deltaY < 0) {
        // Scroll up - previous card
        const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
        goToCard(prevIndex);
      }
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      carousel.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex, isAnimating, totalCards]);

  const nextCard = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
      setIsAnimating(false);
    }, 800);
  };

  const goToCard = (index) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 800);
    }
  };

  const currentFeature = features[currentIndex];

  return (
    <section id="carousel-section" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-3">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Experience The INWREN Difference
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex gap-8 justify-center items-center">
          {/* Progress Dots - Left Side */}
          <div className="flex flex-col justify-center gap-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-orange-500 h-8'
                    : 'bg-gray-700 hover:bg-orange-500/50 h-2'
                }`}
                aria-label={`Go to card ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Card Display Area */}
          <div 
            ref={carouselRef}
            className="relative w-full max-w-[1200px] h-[500px] lg:h-[650px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`w-full h-full transition-all duration-800 ease-in-out ${
                isAnimating ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              <div className="glass-card rounded-3xl overflow-hidden h-full">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="bg-zinc-900 p-10">
                    <currentFeature.icon className="w-8 h-8 text-orange-500 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {currentFeature.title}{' '}
                      <span className="text-orange-500">({currentFeature.subtitle})</span>
                    </h3>
                    <p className="text-gray-400 max-w-lg">{currentFeature.description}</p>
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-zinc-950 border-t border-zinc-800 p-6 shadow-2xl">
                    {currentFeature.visual === 'composer' && <ComposerVisual />}
                    {currentFeature.visual === 'automation' && <AutomationVisual />}
                    {currentFeature.visual === 'analytics' && <AnalyticsVisual />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          background: #0A0A0A;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}

// Visual Components
function ComposerVisual() {
  return (
    <div className="flex h-full">
      <div className="w-1/4 pr-4 border-r border-zinc-800 flex flex-col">
        <h4 className="font-bold text-sm mb-3 text-white">Blocks</h4>
        <div className="space-y-2">
          <div className="p-2 bg-zinc-800/50 rounded flex items-center justify-between text-xs text-gray-300">
            Text <span className="text-orange-500">≡</span>
          </div>
          <div className="p-2 bg-zinc-800/50 rounded flex items-center justify-between text-xs text-gray-300">
            Image <span className="text-orange-500">⊡</span>
          </div>
          <div className="p-2 bg-zinc-800/50 rounded flex items-center justify-between text-xs text-gray-300">
            Button <span className="text-orange-500">◉</span>
          </div>
        </div>
        <h4 className="font-bold text-sm mt-6 mb-3 text-white">AI Copilot</h4>
        <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg text-xs text-gray-300">
          "Draft a subject line that increases open rate by 15%."
        </div>
      </div>
      
      <div className="w-3/4 pl-6 relative">
        <div className="h-full border border-dashed border-zinc-800 p-4 rounded-md overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h5 className="text-xl font-bold text-black mb-2">👋 Welcome, [FIRST_NAME]!</h5>
            <p className="text-gray-600 mb-4 text-sm">
              Thanks for joining the waitlist! Our AI noticed you're interested in scaling SaaS marketing.
            </p>
            <div className="h-4 bg-blue-500 rounded-full w-48 mx-auto mt-6"></div>
          </div>
          <div className="mt-4 p-4 bg-zinc-950 border border-zinc-800 rounded-lg flex justify-between items-center">
            <span className="text-xs font-mono text-orange-500">AI Generated Copy: 95% Match</span>
            <span className="text-green-500">✓</span>
          </div>
        </div>
        <span className="absolute top-2 right-2 px-3 py-1 bg-orange-500 text-black text-xs rounded-full font-bold">
          Preview: Desktop/Mobile
        </span>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="flex justify-center items-center h-full overflow-auto">
      <div className="scale-90">
        <div className="p-3 bg-green-700/50 border border-green-500 rounded-full text-sm font-mono text-white text-center max-w-xs mx-auto">
          Trigger: Contact Subscribes
        </div>
        <div className="h-8 w-px bg-zinc-800 mx-auto my-3"></div>
        
        <div className="p-4 bg-zinc-950 border border-orange-500/50 rounded-lg text-center shadow-lg max-w-xs mx-auto">
          <span className="text-sm font-mono text-white">✉ Action: Send Welcome Email</span>
          <div className="text-xs text-gray-400 mt-1">Delay: 1 Hour</div>
        </div>
        <div className="h-8 w-px bg-zinc-800 mx-auto my-3"></div>
        
        <div className="flex gap-4">
          <div className="flex flex-col items-center w-1/2">
            <div className="p-2 bg-blue-700/50 border border-blue-500 rounded-lg text-xs font-bold text-white text-center">
              IF: Clicked Offer Link (YES)
            </div>
            <div className="w-px h-8 bg-zinc-800 my-2"></div>
            <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-center text-xs">
              <span className="font-mono text-white">🏷 Action: Add Tag 'Hot Lead'</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center w-1/2">
            <div className="p-2 bg-red-700/50 border border-red-500 rounded-lg text-xs font-bold text-white text-center">
              ELSE: (NO Click)
            </div>
            <div className="w-px h-8 bg-zinc-800 my-2"></div>
            <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-center text-xs">
              <span className="font-mono text-white">📧 Action: Send Nurture Email 2</span>
              <div className="text-xs text-gray-400 mt-1">Delay: 3 Days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-6 mb-6">
        <div className="w-1/3 p-4 bg-black/50 border border-zinc-800 rounded-lg">
          <p className="text-xs text-gray-400 uppercase">Open Rate</p>
          <div className="text-3xl font-bold text-white">42.5%</div>
          <span className="text-green-400 text-sm flex items-center">↑ +4.1% WoW</span>
        </div>
        <div className="w-1/3 p-4 bg-black/50 border border-zinc-800 rounded-lg">
          <p className="text-xs text-gray-400 uppercase">Conversions</p>
          <div className="text-3xl font-bold text-white">1,489</div>
          <span className="text-red-400 text-sm flex items-center">↓ -0.8% WoW</span>
        </div>
        <div className="w-1/3 p-4 bg-black/50 border border-zinc-800 rounded-lg">
          <p className="text-xs text-gray-400 uppercase">Estimated Revenue</p>
          <div className="text-3xl font-bold text-orange-500">$14,500</div>
          <span className="text-green-400 text-sm flex items-center">↑ +12.5% MoM</span>
        </div>
      </div>
      
      <h4 className="font-bold text-sm mb-3 text-white">Campaign Rollup</h4>
      <table className="w-full text-left text-sm text-gray-400">
        <thead>
          <tr className="uppercase text-xs border-b border-zinc-800">
            <th className="py-2">Campaign</th>
            <th className="py-2">Opens</th>
            <th className="py-2">Clicks</th>
            <th className="py-2">Conversions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-zinc-800/50">
            <td className="py-2 text-white">Welcome Sequence A</td>
            <td className="py-2">68%</td>
            <td className="py-2">15%</td>
            <td className="py-2 text-orange-500">8.2%</td>
          </tr>
          <tr className="border-b border-zinc-800/50">
            <td className="py-2 text-white">Q4 Promo - Black Friday</td>
            <td className="py-2">22%</td>
            <td className="py-2">4%</td>
            <td className="py-2 text-orange-500">2.1%</td>
          </tr>
          <tr>
            <td className="py-2 text-white">Nurture Flow - SaaS Trial</td>
            <td className="py-2">55%</td>
            <td className="py-2">12%</td>
            <td className="py-2 text-orange-500">5.9%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}