"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import useLiveDashboard from "../hooks/useLiveDashboard";
import VerticalCarouselSinSec from "./VerticalCarouselSinSec";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ isLoaderComplete }) {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const { graphRef, throughputRef } = useLiveDashboard();
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only animate if loader is complete and hasn't animated yet
    if (!isLoaderComplete || hasAnimated.current) return;
    
    hasAnimated.current = true;

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
  }, [isLoaderComplete]);

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] grid-bg pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange opacity-[0.03] blur-[120px] rounded-full animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-surface/50 mb-8 hero-stagger opacity-0 backdrop-blur-sm">
          {/* Badge content if needed */}
        </div>

        <h1
          ref={titleRef}
          id="hero-title"
          className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-center"
        >
          <span className="hero-line tracking-wide block">THE INTELLIGENT</span>
          <span className="hero-line tracking-normal block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600">
            EMAIL ENGINE
          </span>
        </h1>

        <div
          ref={underlineRef}
          id="hero-underline"
          className="mx-auto my-6 h-[1px] w-0 bg-brand-orange rounded-full relative"
        ></div>

        <p className="text-lg lg:pt-2 md:text-xl text-brand-textMuted max-w-2xl mx-auto mb-14 hero-stagger opacity-0 font-light leading-relaxed">
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
        <VerticalCarouselSinSec/>
      </div>
    </header>
  );
}