import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current?.children || [],
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50 pointer-events-none" style={{ padding: '20px 24px' }}>
      <div className="flex justify-between items-center max-w-[1280px] mx-auto">
        <button
          onClick={scrollToTop}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium tracking-wide shadow-sm hover:opacity-90 hover:-translate-y-px transition-all duration-200"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          <ArrowLeft size={14} />
          Changmen Heritage
        </button>
        <a
          href="https://haofei-wang23.github.io/version/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium tracking-wide shadow-sm hover:opacity-90 hover:-translate-y-px transition-all duration-200"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          Live Demo
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
