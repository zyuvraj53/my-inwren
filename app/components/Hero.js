"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import useLiveDashboard from "../hooks/useLiveDashboard";

export default function Hero() {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const { graphRef, throughputRef } = useLiveDashboard();

  useEffect(() => {
    // Split text into characters
    const heroTitle = titleRef.current;
    const lines = heroTitle.querySelectorAll(".hero-line");
    const chars = [];

    lines.forEach(line => {
      const text = line.textContent;
      const hasGradient = line.classList.contains("bg-clip-text");

      const gradientClasses = hasGradient
        ? Array.from(line.classList).filter(
            cls =>
              cls.startsWith("bg-") ||
              cls.startsWith("from-") ||
              cls.startsWith("to-") ||
              cls === "text-transparent" ||
              cls === "bg-clip-text"
          )
        : [];

      line.innerHTML = "";

      text.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";

        if (hasGradient) {
          span.classList.add(...gradientClasses);
        }

        line.appendChild(span);
        chars.push(span);
      });
    });

    // Animate
    gsap.set(chars, { opacity: 0, y: 18, filter: "blur(6px)" });

    const tl = gsap.timeline();
    tl.to(chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.05,
      duration: 1.05,
      ease: "power3.out",
      delay: 0.3,
    })
      .to(
        underlineRef.current,
        {
          width: 180,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        ".hero-stagger",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.8"
      );

    // Parallax effect
    gsap.to(".animate-pulse-slow", {
      y: 60,
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] grid-bg pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange opacity-[0.03] blur-[120px] rounded-full animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-surface/50 mb-8 hero-stagger opacity-0 backdrop-blur-sm">
          <div className="flex gap-1">
            <span className="w-1 h-2 rounded-sm bg-brand-orange animate-pulse"></span>
            <span className="w-1 h-2 rounded-sm bg-brand-orange/50"></span>
            <span className="w-1 h-2 rounded-sm bg-brand-orange/20"></span>
          </div>

          {/* <div className="flex gap-1 items-center">
            <span className="w-1 h-2 rounded-sm bg-brand-orange animate-wave-pulse delay-0"></span>
            <span className="w-1 h-2 rounded-sm bg-brand-orange/70 animate-wave-pulse delay-150"></span>
            <span className="w-1 h-2 rounded-sm bg-brand-orange/40 animate-wave-pulse delay-300"></span>
          </div> */}

          <span className="text-xs font-mono text-brand-textMuted uppercase tracking-widest ml-1">
            New: Visual Journey Builder
          </span>
        </div>

        <h1
          ref={titleRef}
          id="hero-title"
          className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-center"
        >
          <span className="hero-line tracking-wide block">THE INTELLIGENT</span>
          <span className="hero-line tracking-normal block text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-amber-600">
            EMAIL ENGINE
          </span>
        </h1>

        <div
          ref={underlineRef}
          id="hero-underline"
          className="mx-auto my-4 h-[1px] w-0 bg-brand-orange rounded-full relative"
        ></div>

        <p className="text-lg md:text-xl text-brand-textMuted max-w-2xl mx-auto mb-10 hero-stagger opacity-0 font-light leading-relaxed">
          Send emails with precision. Optimize campaigns with clarity. Built for
          agencies, SaaS, and high-volume teams who need{" "}
          <span className="text-white">marketing power</span> without the
          complexity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-stagger opacity-0">
          <a
            href="#pricing"
            className="btn-shine magnetic-btn group relative px-8 py-4 bg-brand-orange text-black font-semibold text-lg transition-colors rounded-md duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start for Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#how-it-works"
            className="btn-swipe px-8 py-4 border border-brand-border text-brand-textMain font-mono text-sm rounded-md shadow-sm bg-white/10 transition-colors"
          >
            <span>See How It Works</span>
          </a>
        </div>

        {/* Live Dashboard */}
        <div className="mt-20 border border-brand-border bg-brand-surface/80 rounded-lg p-2 max-w-4xl mx-auto hero-stagger opacity-0 backdrop-blur-md shadow-2xl shadow-brand-orange/5 dashboard-tilt">
          <div className="bg-brand-black rounded border border-brand-border p-4 aspect-[16/9] relative overflow-hidden group">
            <div className="noise-overlay"></div>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="font-mono text-[10px] text-brand-textMuted flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  CAMPAIGN_ACTIVE
                </div>
                <div className="font-mono text-[10px] text-brand-textMuted">
                  status: sending
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 h-full">
              {/* Sidebar */}
              <div className="col-span-3 border-r border-brand-border pr-4 space-y-3 pt-2">
                <div className="flex items-center justify-between group/item cursor-pointer">
                  <div className="h-2 w-16 bg-brand-border rounded group-hover/item:bg-brand-orange/50 transition-colors"></div>
                  <div className="w-1 h-1 bg-brand-textMuted rounded-full"></div>
                </div>
                <div className="flex items-center justify-between group/item cursor-pointer">
                  <div className="h-2 w-24 bg-brand-border/50 rounded group-hover/item:bg-brand-orange/50 transition-colors"></div>
                </div>
                <div className="mt-8 pt-4 border-t border-brand-border/30">
                  <div className="font-mono text-[9px] text-brand-textMuted mb-1">
                    REAL-TIME OPENS
                  </div>
                  <div
                    ref={throughputRef}
                    className="text-brand-orange font-mono text-xs"
                  >
                    240/m
                  </div>
                </div>
              </div>

              {/* Main Graph Area */}
              <div className="col-span-9 relative flex flex-col justify-end pb-8 px-4">
                <div
                  className="absolute inset-0 border-b border-brand-border/20"
                  style={{ bottom: "20%" }}
                ></div>
                <div
                  className="absolute inset-0 border-b border-brand-border/20"
                  style={{ bottom: "40%" }}
                ></div>
                <div
                  className="absolute inset-0 border-b border-brand-border/20"
                  style={{ bottom: "60%" }}
                ></div>
                <div
                  ref={graphRef}
                  className="flex items-end justify-between h-[180px] gap-2 w-full"
                ></div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-40 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
