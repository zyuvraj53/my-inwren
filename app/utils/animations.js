import gsap from 'gsap';

/**
 * Split text into individual characters while preserving gradient classes
 */
export function splitTextGradientSafe(element) {
  if (!element) return [];
  const lines = element.querySelectorAll('.hero-line');
  const chars = [];

  lines.forEach((line) => {
    const text = line.textContent;
    const hasGradient = line.classList.contains('bg-clip-text');

    const gradientClasses = hasGradient
      ? Array.from(line.classList).filter(
          (cls) =>
            cls.startsWith('bg-') ||
            cls.startsWith('from-') ||
            cls.startsWith('to-') ||
            cls === 'text-transparent' ||
            cls === 'bg-clip-text'
        )
      : [];

    line.innerHTML = '';

    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';

      if (hasGradient) {
        span.classList.add(...gradientClasses);
      }

      line.appendChild(span);
      chars.push(span);
    });
  });

  return chars;
}

/**
 * Enable magnetic effect on buttons
 */
export function enableMagneticButtons(selector = '.magnetic-btn', strength = 0.01) {
  const buttons = document.querySelectorAll(selector);
  if (!buttons.length) return () => {};

  const cleanup = [];

  buttons.forEach((btn) => {
    btn.style.willChange = 'transform';

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.25,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    cleanup.push(() => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    });
  });

  return () => cleanup.forEach((fn) => fn());
}

/**
 * Enable 3D tilt effect on cards
 */
export function enable3DTilt(selector, maxTilt = 10) {
  const card = document.querySelector(selector);
  if (!card) return () => {};

  card.style.transformStyle = 'preserve-3d';

  const handleMouseMove = (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power3.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    card.removeEventListener('mousemove', handleMouseMove);
    card.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/**
 * Animate pricing card on billing toggle
 */
export function animatePriceChange(priceElement, newValue, callback) {
  gsap.to(priceElement, {
    opacity: 0,
    duration: 0.1,
    y: -5,
    onComplete: () => {
      if (callback) callback(newValue);
      gsap.to(priceElement, { opacity: 1, y: 0, duration: 0.1 });
    },
  });
}

/**
 * Initialize live dashboard bars
 */
export function initLiveDashboard(containerId, statId) {
  const container = document.getElementById(containerId);
  const throughputStat = document.getElementById(statId);

  if (!container || !throughputStat) return null;

  const bars = 12;
  container.innerHTML = '';

  for (let i = 0; i < bars; i++) {
    const bar = document.createElement('div');
    bar.className =
      'w-full bg-brand-orange/20 rounded-t bar-anim hover:bg-brand-orange/60 transition-colors';
    bar.style.height = Math.floor(Math.random() * 80 + 20) + '%';
    container.appendChild(bar);
  }

  const interval = setInterval(() => {
    const allBars = container.children;
    const updateIndex = Math.floor(Math.random() * bars);

    if (allBars[updateIndex]) {
      allBars[updateIndex].style.height = Math.floor(Math.random() * 80 + 20) + '%';
    }

    const baseVal = 240;
    const randomFlux = Math.floor(Math.random() * 50 - 25);
    throughputStat.innerText = (baseVal + randomFlux).toLocaleString() + '/m';
  }, 800);

  return () => clearInterval(interval);
}

/**
 * Enable pricing spotlight effect
 */
export function enablePricingSpotlight(selector = '.pricing-card') {
  const cards = document.querySelectorAll(selector);
  if (!cards.length) return () => {};

  const cleanup = [];

  cards.forEach((card) => {
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty('--x', `${x}%`);
      card.style.setProperty('--y', `${y}%`);
    };

    const handleMouseLeave = () => {
      card.style.setProperty('--x', `50%`);
      card.style.setProperty('--y', `50%`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    cleanup.push(() => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    });
  });

  return () => cleanup.forEach((fn) => fn());
}