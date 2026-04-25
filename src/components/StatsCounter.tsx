'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsCounter.module.css';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 1000, suffix: '~', label: 'Professionals Worldwide' },
  { value: 150, suffix: '+', label: 'Regulatory Submissions' },
  { value: 100, suffix: '+', label: 'Clinical Trials Supported' },
  { value: 5, suffix: '', label: 'Global Regions' },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);
  return (
    <div className={styles.stat}>
      <div className={styles.number}>
        {stat.suffix === '~' ? '~' : ''}{count.toLocaleString()}{stat.suffix !== '~' ? stat.suffix : ''}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.grid}>
      {stats.map(stat => (
        <StatItem key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  );
}
