"use client";

import { useEffect, useRef, useState } from "react";
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
  const [titleReady, setTitleReady] = useState(false);

  useEffect(() => {
    // Only animate if loader is complete and hasn't animated yet
    if (!isLoaderComplete || hasAnimated.current) return;
    
    hasAnimated.current = true;

    // First, hide the entire title
    const heroTitle = titleRef.current;
    gsap.set(heroTitle, { opacity: 0 });

    // Create the character spans without showing original text
    const lines = heroTitle.querySelectorAll(".hero-line");
    const chars = [];

    lines.forEach(line => {
      const text = line.dataset.text || line.textContent;
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

      // Clear the line content
      line.innerHTML = "";

      // Create character spans
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

    // Now make the title visible and animate
    gsap.set(heroTitle, { opacity: 1 });
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

    // Mark title as ready
    setTitleReady(true);
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
          {!titleReady ? (
            // Render invisible placeholder during initial render
            <>
              <span className="hero-line tracking-wide block opacity-0">THE INTELLIGENT</span>
              <span className="hero-line tracking-normal block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600 opacity-0">
                EMAIL ENGINE
              </span>
            </>
          ) : (
            // Render actual text that will be split
            <>
              <span 
                className="hero-line tracking-wide block"
                data-text="THE INTELLIGENT"
              >
                THE INTELLIGENT
              </span>
              <span 
                className="hero-line tracking-normal block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600"
                data-text="EMAIL ENGINE"
              >
                EMAIL ENGINE
              </span>
            </>
          )}
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



// There was a problem with the rendering of the tile text, the text would show up instantly when the javascript loaded, and then go to opacity-0 and then start animating the text with opacity-100

/*

Problem Solved
The flash occurred because React was rendering the text before the animation could split it into characters. The browser briefly showed the original text before it was replaced with individual character spans.

Solution Implemented
We used a two-phase rendering approach:

Phase 1: Initial Render (titleReady = false)
jsx
{!titleReady ? (
  // Render invisible placeholder during initial render
  <>
    <span className="hero-line tracking-wide block opacity-0">THE INTELLIGENT</span>
    <span className="hero-line tracking-normal block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600 opacity-0">
      EMAIL ENGINE
    </span>
  </>
) : (
  // Phase 2: Render actual text that will be split
  <>
    <span 
      className="hero-line tracking-wide block"
      data-text="THE INTELLIGENT"
    >
      THE INTELLIGENT
    </span>
    <span 
      className="hero-line tracking-normal block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600"
      data-text="EMAIL ENGINE"
    >
      EMAIL ENGINE
    </span>
  </>
)}
Phase 2: After Animation Setup (titleReady = true)
Once the animation is ready, we re-render with the actual text that will be split into characters.

How It Works Step-by-Step
1. Initial State
titleReady starts as false

Component renders with opacity: 0 text (completely invisible)

No flash occurs because text is hidden

2. Loader Completes
isLoaderComplete becomes true

useEffect triggers

3. Animation Setup in useEffect
javascript
// Immediately hide the entire title
gsap.set(heroTitle, { opacity: 0 });

// Process text from the invisible placeholder
const text = line.textContent; // Gets "THE INTELLIGENT", "EMAIL ENGINE"

// Clear and replace with character spans
line.innerHTML = ""; // Clear the placeholder
// Create individual character spans
4. Animation Execution
Character spans are created (initially hidden)

Title opacity is set to 1 (now visible)

Characters animate in one by one

5. Final State
setTitleReady(true) triggers re-render

Component now renders with data-text attributes

Animation continues on the new DOM elements

Key Techniques Used
A. Dual Rendering Strategy
First render: Invisible placeholder text

Second render: Actual text with data-text attributes

Prevents flash by never showing original text

B. Data Attributes for Text Storage
jsx
<span data-text="THE INTELLIGENT">THE INTELLIGENT</span>
Stores text in data-text attribute

Allows access via line.dataset.text || line.textContent

Provides fallback to original textContent

C. Immediate Hiding
javascript
gsap.set(heroTitle, { opacity: 0 });
Hides title before any character splitting

Ensures no visible text during processing

D. State-Controlled Rendering
titleReady state determines which version to render

State only updates after animation is set up

Prevents race conditions between React and GSAP

Why This Works
No Original Text Visibility: The text is never visible in its original form

Synchronous Processing: Animation setup happens before making text visible

Clean Handoff: React renders structure, GSAP handles animation timing

Fallback Safety: Uses dataset.text with textContent fallback

Performance Considerations
No extra DOM nodes: We replace existing nodes rather than adding duplicates

Minimal state updates: Only one state change (titleReady)

Efficient animation: GSAP handles performance-intensive character animations

This approach ensures a smooth, flash-free experience where users only see the animated text, never the static version that causes the flash.

*/