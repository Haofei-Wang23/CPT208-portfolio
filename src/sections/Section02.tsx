import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

const journeySteps = ['Arrive', 'Follow Signs', 'Take Photos', 'Leave'];

const challenges = [
  "Not knowing 'What happened here?'",
  'No reason to stay for more than 5 minutes',
  'Will not actively share',
];

const requirements = ['Location-triggered Interaction', 'Playful Narrative', 'Shareable Outcome'];

const evidenceImages = [
  { src: 'images/图片1.jpg', caption: 'Changmen monument stone' },
  { src: 'images/图片2.jpg', caption: 'Tourist at the canal' },
  { src: 'images/图片3.jpg', caption: 'Changmen gate tower' },
];

export default function Section02() {
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
    <section ref={sectionRef} id="requirements" className="px-5 md:px-12" style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ marginTop: '64px' }}>
        <SectionHeader number="02" title="USER REQUIREMENTS" icon={MapPin} />

        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ marginTop: '20px', gap: '20px' }}
        >
          {/* Left card — User Journey & Challenges */}
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
              User Journey Map
            </h3>

            {/* Journey flow */}
            <div className="flex flex-wrap items-center gap-2" style={{ marginTop: '20px' }}>
              {journeySteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span
                    className="inline-block px-3.5 py-1.5 text-xs font-medium"
                    style={{
                      borderRadius: '9999px',
                      border: i === journeySteps.length - 1 ? '1.5px dashed var(--accent-green)' : '1.5px solid var(--accent-green)',
                      color: 'var(--accent-green)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    {step}
                  </span>
                  {i < journeySteps.length - 1 && (
                    <span style={{ color: 'var(--accent-green)', fontSize: '14px' }}>→</span>
                  )}
                </div>
              ))}
            </div>

            {/* Challenges */}
            <div style={{ marginTop: '24px' }}>
              {challenges.map((c) => (
                <div key={c} className="flex items-start gap-2.5" style={{ marginBottom: '8px' }}>
                  <span
                    className="inline-block flex-shrink-0 mt-2 rounded-full"
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'var(--accent-orange)',
                    }}
                  />
                  <span style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Right card — Requirements */}
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
              Requirements List
            </h3>

            <div style={{ marginTop: '16px' }}>
              {requirements.map((req, i) => (
                <div key={req} className="flex items-start gap-3" style={{ marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--accent-orange)',
                      flexShrink: 0,
                      minWidth: '22px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Evidence of Life — Full width photo row */}
        <div style={{ marginTop: '20px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            Evidence of Life
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ marginTop: '10px', gap: '16px' }}>
            {evidenceImages.map(({ src, caption }) => (
              <div
                key={src}
                className="overflow-hidden"
                style={{ borderRadius: '6px', border: '1px solid var(--border-color)' }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img
                    src={src}
                    alt={caption}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <p
                  className="text-center"
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    padding: '8px 0',
                    backgroundColor: 'var(--bg-card)',
                  }}
                >
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
