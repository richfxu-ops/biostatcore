'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsCounter.module.css';

const ANIMATION_DURATION_MS = 1800;
const FRAME_MS = 16; // ~60 fps

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 1000, prefix: '~',  label: 'Professionals Worldwide'  },
  { value: 150,  suffix: '+',  label: 'Regulatory Submissions'   },
  { value: 100,  suffix: '+',  label: 'Clinical Trials Supported' },
  { value: 5,                  label: 'Global Regions'            },
];

function useCountUp(target: number, active: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / (ANIMATION_DURATION_MS / FRAME_MS);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, FRAME_MS);
    return () => clearInterval(timer);
  }, [active, target]);

  return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, active);
  return (
    <div className={styles.stat}>
      <div className={styles.number}>
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
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
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.grid}>
      {STATS.map(stat => (
        <StatItem key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  );
}
