import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });
      tl.fromTo(
        titleRef.current?.querySelectorAll('.title-word') || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-main)',
        backgroundImage: 'radial-gradient(circle, var(--border-color) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Decorative code brackets */}
      <div
        className="absolute select-none pointer-events-none hidden lg:block"
        style={{
          top: '60px',
          right: '100px',
          fontSize: '140px',
          fontWeight: 300,
          color: 'var(--code-gray)',
          opacity: 0.25,
          zIndex: 0,
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1,
        }}
      >
        {'<>'}
      </div>

      {/* Vertical label */}
      <div
        className="absolute hidden lg:block select-none"
        style={{
          left: '-8px',
          top: '180px',
          fontSize: '12px',
          fontWeight: 500,
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          transform: 'rotate(-90deg)',
          transformOrigin: 'left center',
        }}
      >
        DESIGN 2025
      </div>

      {/* Content block */}
      <div
        className="relative z-10 mx-auto px-5 md:px-12"
        style={{ maxWidth: '1280px', paddingTop: '120px', paddingBottom: '80px' }}
      >
        <div style={{ maxWidth: '680px' }}>
          <div ref={titleRef}>
            <h1
              className="uppercase"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: 'clamp(42px, 5.5vw, 72px)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              <span className="title-word block">PROCESS</span>
              <span className="title-word inline-flex items-baseline gap-2">
                PORTFOLIO
                <span
                  className="inline-block rounded-full flex-shrink-0"
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'var(--accent-orange)',
                    marginLeft: '4px',
                  }}
                />
              </span>
            </h1>
          </div>

          <span
            ref={badgeRef}
            className="inline-block uppercase"
            style={{
              backgroundColor: 'var(--accent-orange)',
              color: '#FFFFFF',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              marginTop: '20px',
              borderRadius: '4px',
            }}
          >
            DEVELOPMENT JOURNEY
          </span>

          <p
            ref={descRef}
            style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              marginTop: '24px',
            }}
          >
            An interactive heritage experience for Changmen Gate in Suzhou — transforming a historical
            landmark from a place to be viewed into a place to be participated in.
          </p>
        </div>
      </div>
    </section>
  );
}
