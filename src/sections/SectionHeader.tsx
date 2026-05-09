import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  number: string;
  title: string;
  icon: LucideIcon;
}

export default function SectionHeader({ number, title, icon: Icon }: SectionHeaderProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: barRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={barRef}
      className="flex items-center gap-2.5 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--accent-green)',
        borderRadius: '6px',
        padding: '14px 20px',
      }}
    >
      <Icon size={18} style={{ color: '#FFFFFF', opacity: 0.8 }} strokeWidth={1.5} />
      <span
        className="uppercase"
        style={{
          fontSize: '13px',
          fontWeight: 600,
          lineHeight: 1.4,
          letterSpacing: '0.08em',
          color: '#FFFFFF',
        }}
      >
        {number}. {title}
      </span>
      <span
        className="ml-auto select-none"
        style={{
          color: 'rgba(255,255,255,0.15)',
          fontSize: '20px',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {'\u300C \u300D'}
      </span>
    </div>
  );
}
