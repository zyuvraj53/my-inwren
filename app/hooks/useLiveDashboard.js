'use client';

import { useEffect, useRef } from 'react';

export function useLiveDashboard() {
  const graphRef = useRef(null);
  const throughputRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const container = graphRef.current;
    const throughputStat = throughputRef.current;

    if (!container || !throughputStat) return;

    // Create initial bars
    const bars = 12;
    container.innerHTML = '';

    for (let i = 0; i < bars; i++) {
      const bar = document.createElement('div');
      bar.className =
        'w-full bg-brand-orange/20 rounded-t bar-anim hover:bg-brand-orange/60 transition-colors';
      bar.style.height = Math.floor(Math.random() * 80 + 20) + '%';
      container.appendChild(bar);
    }

    // Animate bars periodically
    intervalRef.current = setInterval(() => {
      const allBars = container.children;
      const updateIndex = Math.floor(Math.random() * bars);

      if (allBars[updateIndex]) {
        allBars[updateIndex].style.height =
          Math.floor(Math.random() * 80 + 20) + '%';
      }

      // Update throughput stat
      const baseVal = 240;
      const randomFlux = Math.floor(Math.random() * 50 - 25);
      throughputStat.innerText = (baseVal + randomFlux).toLocaleString() + '/m';
    }, 800);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { graphRef, throughputRef };
}

export default useLiveDashboard;