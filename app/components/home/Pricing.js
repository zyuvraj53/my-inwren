// components/home/Pricing.js
"use client";

import { useState } from "react";
import {
  Zap,
  Layout,
  ShieldCheck,
  Settings,
  Sparkles,
  Server,
  Code,
} from "lucide-react";
import gsap from "gsap";

const pricingPlans = [
  {
    name: "Launch",
    description: "Perfect for testing & side projects.",
    monthlyPrice: 4.99,
    yearlyPrice: 3.99,
    features: [
      { icon: "text", label: "500 Contacts" },
      { icon: "text", label: "2,000 Emails/mo" },
      { icon: Zap, label: "High-Speed Delivery" },
      { icon: Layout, label: "Drag & Drop Builder" },
    ],
    highlight: false,
    cta: "Start Basic",
  },
  {
    name: "Growth",
    description: "For professional marketers.",
    monthlyPrice: 15.99,
    yearlyPrice: 12.99,
    features: [
      { icon: "text", label: "2,500 Contacts" },
      { icon: "text", label: "10,000 Emails/mo" },
      {
        icon: ShieldCheck,
        label: "Whitelabel Sending Domain",
        highlight: true,
      },
      { icon: Settings, label: "Easy DNS Setup" },
      { icon: Sparkles, label: "AI Suggestions" },
    ],
    highlight: true,
    cta: "Go Premium",
    note: '*Removes "via inwren.com" label from emails',
  },
  {
    name: "Ultra",
    description: "Maximum performance.",
    monthlyPrice: 29.99,
    yearlyPrice: 23.99,
    features: [
      { icon: "text", label: "UNLIMITED Contacts" },
      { icon: "text", label: "100,000 Emails/mo" },
      { icon: Zap, label: "Priority Support" },
      { icon: Server, label: "Dedicated IP Available ($)" },
      { icon: Code, label: "Full API Access" },
    ],
    highlight: false,
    cta: "Get Ultra",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);

    // Animate price change
    const prices = document.querySelectorAll(".price-display");
    prices.forEach(price => {
      const newVal = !isYearly ? price.dataset.yearly : price.dataset.monthly;

      gsap.to(price, {
        opacity: 0,
        duration: 0.1,
        y: -5,
        onComplete: () => {
          price.innerHTML = "$" + newVal;
          gsap.to(price, { opacity: 1, y: 0, duration: 0.1 });
        },
      });
    });
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-brand-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-brand-textMuted">
            Pay for what you use. Scale as you grow.
          </p>
        </div>
        {/* <div className="flex-row"> */}
          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-16">
            <span
              className={`text-sm font-mono ${
                !isYearly ? "text-brand-textMain" : "text-brand-textMuted"
              }`}
            >
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isYearly}
                onChange={togglePricing}
              />
              <div className="w-14 h-7 bg-brand-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-orange"></div>
            </label>
            <span
              className={`text-sm font-mono ${
                isYearly ? "text-brand-textMain" : "text-brand-textMuted"
              }`}
            >
              Yearly{" "}
              <span className="text-brand-orange text-xs ml-1 font-bold">
                -20%
              </span>
            </span>
          </div>
          {/* <div>
            <a
              href="/compare"
              className="btn-swipe px-8 py-4 border border-brand-border text-brand-textMain font-mono text-sm rounded-md shadow-sm bg-brand-orange/30 transition-colors"
            >
              <span>Compare</span>
            </a>
          </div> */}
        {/* </div> */}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card p-8 border rounded-lg transition-colors relative group ${
                plan.highlight
                  ? "border-brand-orange bg-brand-surface shadow-[0_0_30px_rgba(255,159,28,0.05)] transform md:-translate-y-4"
                  : "border-brand-border bg-brand-surface/50 hover:bg-brand-surface"
              }`}
            >
              {!plan.highlight && <div className="noise-overlay"></div>}

              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="text-xs font-mono text-brand-textMuted mt-1 mb-6">
                {plan.description}
              </p>

              <div className="mb-6 h-12 flex items-baseline">
                <span
                  className={`price-display text-3xl font-bold ${
                    plan.highlight ? "text-brand-orange text-4xl" : "text-white"
                  }`}
                  data-monthly={plan.monthlyPrice}
                  data-yearly={plan.yearlyPrice}
                >
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-brand-textMuted text-sm ml-1">/mo</span>
              </div>
              <a
                href="#"
                className={`btn-shine block w-full py-3 text-center text-sm font-mono rounded-md transition-all ${
                  plan.highlight
                    ? "bg-brand-orange text-black font-bold hover:bg-white shadow-[0_0_20px_rgba(255,159,28,0.3)] hover:shadow-[0_0_30px_rgba(255,159,28,0.5)]"
                    : "border border-brand-border text-white hover:bg-white hover:text-black"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-4 text-sm text-brand-textMuted">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.icon === "text" ? (
                      <>
                        <span className="text-white font-mono text-xs">
                          {feature.label.split(" ")[0]}
                        </span>
                        {feature.label.split(" ").slice(1).join(" ")}
                      </>
                    ) : (
                      <>
                        <feature.icon
                          className={`w-4 h-4 ${
                            feature.highlight ? "text-brand-orange" : ""
                          }`}
                        />
                        <span
                          className={
                            feature.highlight ? "text-brand-orange" : ""
                          }
                        >
                          {feature.label}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="mt-6 text-[10px] text-brand-textMuted italic">
                  {plan.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
