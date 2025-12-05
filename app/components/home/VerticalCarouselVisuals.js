// components/home/VerticalCarouselVisuals.js

export function ComposerVisual() {
  return (
    <div className="flex h-full">
      <div className="w-1/4 pr-4 border-r border-brand-border flex flex-col">
        <h4 className="font-bold text-sm mb-3 text-white">Blocks</h4>
        <div className="space-y-2">
          <div className="p-2 bg-brand-surface rounded flex items-center justify-between text-xs text-gray-300">
            Text <span className="text-brand-orange">≡</span>
          </div>
          <div className="p-2 bg-brand-surface rounded flex items-center justify-between text-xs text-gray-300">
            Image <span className="text-brand-orange">⊡</span>
          </div>
          <div className="p-2 bg-brand-surface rounded flex items-center justify-between text-xs text-gray-300">
            Button <span className="text-brand-orange">◉</span>
          </div>
        </div>
        <h4 className="font-bold text-sm mt-6 mb-3 text-white">AI Copilot</h4>
        <div className="p-3 bg-brand-orange/10 border border-brand-orange/30 rounded-lg text-xs text-gray-300">
          "Draft a subject line that increases open rate by 15%."
        </div>
      </div>
      
      <div className="w-3/4 pl-6 relative">
        <div className="h-full border border-dashed border-brand-border p-4 rounded-md overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h5 className="text-xl font-bold text-black mb-2">👋 Welcome, [FIRST_NAME]!</h5>
            <p className="text-gray-600 mb-4 text-sm">
              Thanks for joining the waitlist! Our AI noticed you're interested in scaling SaaS marketing.
            </p>
            <div className="h-4 bg-blue-500 rounded-full w-48 mx-auto mt-6"></div>
          </div>
          <div className="mt-4 p-4 bg-brand-black border border-brand-border rounded-lg flex justify-between items-center">
            <span className="text-xs font-mono text-brand-orange">AI Generated Copy: 95% Match</span>
            <span className="text-green-500">✓</span>
          </div>
        </div>
        <span className="absolute top-2 right-2 px-3 py-1 bg-brand-orange text-black text-xs rounded-full font-bold">
          Preview: Desktop/Mobile
        </span>
      </div>
    </div>
  );
}

export function AutomationVisual() {
  return (
    <div className="flex justify-center items-center h-full overflow-auto">
      <div className="scale-90">
        <div className="p-3 bg-green-700/50 border border-green-500 rounded-full text-sm font-mono text-white text-center max-w-xs mx-auto">
          Trigger: Contact Subscribes
        </div>
        <div className="h-8 w-px bg-brand-border mx-auto my-3"></div>
        
        <div className="p-4 bg-brand-black border border-brand-orange/50 rounded-lg text-center shadow-lg max-w-xs mx-auto">
          <span className="text-sm font-mono text-white">✉ Action: Send Welcome Email</span>
          <div className="text-xs text-gray-400 mt-1">Delay: 1 Hour</div>
        </div>
        <div className="h-8 w-px bg-brand-border mx-auto my-3"></div>
        
        <div className="flex gap-4">
          <div className="flex flex-col items-center w-1/2">
            <div className="p-2 bg-blue-700/50 border border-blue-500 rounded-lg text-xs font-bold text-white text-center">
              IF: Clicked Offer Link (YES)
            </div>
            <div className="w-px h-8 bg-brand-border my-2"></div>
            <div className="p-3 bg-brand-black border border-brand-border rounded-lg text-center text-xs">
              <span className="font-mono text-white">🏷 Action: Add Tag 'Hot Lead'</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center w-1/2">
            <div className="p-2 bg-red-700/50 border border-red-500 rounded-lg text-xs font-bold text-white text-center">
              ELSE: (NO Click)
            </div>
            <div className="w-px h-8 bg-brand-border my-2"></div>
            <div className="p-3 bg-brand-black border border-brand-border rounded-lg text-center text-xs">
              <span className="font-mono text-white">📧 Action: Send Nurture Email 2</span>
              <div className="text-xs text-gray-400 mt-1">Delay: 3 Days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsVisual() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-6 mb-6">
        <div className="w-1/3 p-4 bg-black/50 border border-brand-border rounded-lg">
          <p className="text-xs text-gray-400 uppercase">Open Rate</p>
          <div className="text-3xl font-bold text-white">42.5%</div>
          <span className="text-green-400 text-sm flex items-center">↑ +4.1% WoW</span>
        </div>
        <div className="w-1/3 p-4 bg-black/50 border border-brand-border rounded-lg">
          <p className="text-xs text-gray-400 uppercase">Conversions</p>
          <div className="text-3xl font-bold text-white">1,489</div>
          <span className="text-red-400 text-sm flex items-center">↓ -0.8% WoW</span>
        </div>
        <div className="w-1/3 p-4 bg-black/50 border border-brand-border rounded-lg">
          <p className="text-xs text-gray-400 uppercase">Estimated Revenue</p>
          <div className="text-3xl font-bold text-brand-orange">$14,500</div>
          <span className="text-green-400 text-sm flex items-center">↑ +12.5% MoM</span>
        </div>
      </div>
      
      <h4 className="font-bold text-sm mb-3 text-white">Campaign Rollup</h4>
      <table className="w-full text-left text-sm text-gray-400">
        <thead>
          <tr className="uppercase text-xs border-b border-brand-border">
            <th className="py-2">Campaign</th>
            <th className="py-2">Opens</th>
            <th className="py-2">Clicks</th>
            <th className="py-2">Conversions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-brand-border/50">
            <td className="py-2 text-white">Welcome Sequence A</td>
            <td className="py-2">68%</td>
            <td className="py-2">15%</td>
            <td className="py-2 text-brand-orange">8.2%</td>
          </tr>
          <tr className="border-b border-brand-border/50">
            <td className="py-2 text-white">Q4 Promo - Black Friday</td>
            <td className="py-2">22%</td>
            <td className="py-2">4%</td>
            <td className="py-2 text-brand-orange">2.1%</td>
          </tr>
          <tr>
            <td className="py-2 text-white">Nurture Flow - SaaS Trial</td>
            <td className="py-2">55%</td>
            <td className="py-2">12%</td>
            <td className="py-2 text-brand-orange">5.9%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}