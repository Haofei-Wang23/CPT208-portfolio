import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

export default function Section01() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.section-card') || [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="motivation" className="px-5 md:px-12" style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ marginTop: '64px' }}>
        <SectionHeader number="01" title="MOTIVATION & RESEARCH" icon={Search} />

        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{ marginTop: '20px', gap: '20px' }}
        >
          {/* Card 1 — The Why */}
          <Card className="section-card">
            <h3
              className="flex items-center gap-2"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: 1.3,
                color: 'var(--text-primary)',
              }}
            >
              <span style={{ color: 'var(--accent-orange)' }}>⊟</span>
              The Why
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginTop: '14px',
              }}
            >
              The Changmen Gate in Suzhou is an important node of the Beijing-Hangzhou Grand Canal
              and a daily activity area for XJTLU students. Most tourists merely "pass by and take
              photos," and local residents lack motivation to interact with this historical space. We
              chose A1 because it involves both Digital Heritage and Playful Experience — it can
              activate cultural memories through technology and promote emotional connections between
              tourists, residents, and historical spaces.
            </p>
          </Card>

          {/* Card 2 — Academic Gap */}
          <Card className="section-card">
            <h3
              className="flex items-center gap-2"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: 1.3,
                color: 'var(--text-primary)',
              }}
            >
              <span style={{ color: 'var(--accent-orange)' }}>⊟</span>
              Academic &amp; Commercial Gap
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginTop: '14px',
              }}
            >
              After reviewing four academic papers on VR/AR heritage, location-based games, and
              value co-creation, we identified three consistent gaps: (1) overemphasis on technical
              hardware analysis while neglecting user interaction experience, (2) reliance on
              high-cost AR/VR devices rather than lightweight web solutions, and (3) lack of design
              for emotional resonance and "playfulness." Commercial products like Suzhou Local
              Guide, Dianping, and official tourist signs are either non-interactive, culturally
              shallow, or static and uninteresting.
            </p>
          </Card>

          {/* Card 3 — Stakeholders */}
          <Card className="section-card">
            <h3
              className="flex items-center gap-2"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: 1.3,
                color: 'var(--text-primary)',
              }}
            >
              <span style={{ color: 'var(--accent-orange)' }}>⊟</span>
              Stakeholders
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginTop: '14px',
              }}
            >
              Most young people and some foreigners are interested in Changmen but lack feasible ways
              to learn about it.
            </p>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginTop: '12px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  color: 'var(--accent-orange)',
                }}
              >
                PRIMARY
              </span>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '4px' }}>
                Young tourists under 30, fond of exploring novel AR experiences.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginTop: '12px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  color: 'var(--accent-orange)',
                }}
              >
                SECONDARY
              </span>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '4px' }}>
                Local residents like Wang Auntie — interested in intergenerational cultural
                transmission.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
