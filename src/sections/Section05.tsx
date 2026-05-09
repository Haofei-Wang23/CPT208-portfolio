import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    text: 'This unlocking method gives me a greater sense of achievement, far superior to simply viewing labels. I hope to add recommended tour routes for new visitors.',
    author: 'Student A',
  },
  {
    text: "I didn't know about this story of canal transportation before. It's quite interesting. But the tourism route is not very prominent. I hope to add visual effects to highlight the route.",
    author: 'Local Resident',
  },
  {
    text: 'This page is very suitable for posting on social media. The design is very fashionable. I hope it can be displayed together with augmented reality technology for more immersion.',
    author: 'Student B',
  },
];

const iterations = [
  'Added a route advancement function to the map interface for check-ins',
  'Highlighted and emphasized the route for clearer starting/ending points',
  'Added augmented reality functionality to enhance immersion',
];

const screenshots = ['/images/图片13.png', '/images/图片14.png', '/images/图片15.png'];

export default function Section05() {
  const sectionRef = useRef<HTMLElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cols = colsRef.current?.querySelectorAll('.eval-col') || [];
      gsap.fromTo(
        cols,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: colsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        finalRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: finalRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="evaluation" className="px-5 md:px-12" style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ marginTop: '64px' }}>
        <SectionHeader number="05" title="EVALUATION & REFLECTION" icon={MessageSquare} />

        {/* Two-column layout: feedback + refinement */}
        <div ref={colsRef} className="grid grid-cols-1 lg:grid-cols-2" style={{ marginTop: '20px', gap: '20px' }}>
          {/* Left — User Feedback (taller content) */}
          <Card className="eval-col">
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
              User Feedback
            </h3>

            {/* Testing protocol summary */}
            <div
              style={{
                marginTop: '14px',
                padding: '12px 14px',
                backgroundColor: 'rgba(61, 79, 65, 0.05)',
                borderRadius: '6px',
                border: '1px solid rgba(61, 79, 65, 0.1)',
              }}
            >
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--accent-green)' }}>Testing Protocol:</strong> 3 real users
                (2 XJTLU students, 1 local resident) tested the Alpha version onsite at Changmen Gate in Week 9.
              </p>
            </div>

            <div style={{ marginTop: '16px' }}>
              {quotes.map((q) => (
                <div
                  key={q.author}
                  style={{
                    backgroundColor: 'rgba(212, 118, 74, 0.06)',
                    borderLeft: '3px solid var(--accent-orange)',
                    padding: '12px 16px',
                    borderRadius: '0 6px 6px 0',
                    marginBottom: '12px',
                  }}
                >
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    "{q.text}"
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                      marginTop: '8px',
                    }}
                  >
                    — {q.author}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Right — Iterative Refinement + Screenshots */}
          <Card className="eval-col">
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
              Iterative Refinement
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginTop: '14px',
              }}
            >
              Based on the feedback, we made three key improvements:
            </p>
            <div style={{ marginTop: '12px' }}>
              {iterations.map((item) => (
                <div key={item} className="flex items-start gap-3" style={{ marginBottom: '10px' }}>
                  <span
                    className="inline-block flex-shrink-0 mt-1.5 rounded-full"
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'var(--accent-orange)',
                    }}
                  />
                  <span style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" style={{ marginTop: '20px' }}>
              {screenshots.map((src) => (
                <div
                  key={src}
                  className="overflow-hidden"
                  style={{
                    backgroundColor: '#1A1A1A',
                    padding: '5px',
                    borderRadius: '6px',
                  }}
                >
                  <img
                    src={src}
                    alt="Iteration screenshot"
                    className="w-full rounded transition-transform duration-300 hover:scale-[1.02]"
                    style={{ aspectRatio: '16/10', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Final Reflection — Full width */}
        <div ref={finalRef} style={{ marginTop: '20px' }}>
          <Card>
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
              Final Reflection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginTop: '16px' }}>
              <div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--accent-orange)',
                    letterSpacing: '0.05em',
                  }}
                >
                  A.
                </span>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginTop: '2px',
                    marginBottom: '8px',
                  }}
                >
                  Cultural Integrity
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  We consciously avoided turning Changmen Gate into a trivial game. Our narrative is
                  grounded in local history — Ming Dynasty architecture, the Grand Canal's function —
                  ensuring playfulness serves as a medium for education, not a distraction.
                </p>
              </div>
              <div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--accent-orange)',
                    letterSpacing: '0.05em',
                  }}
                >
                  B.
                </span>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginTop: '2px',
                    marginBottom: '8px',
                  }}
                >
                  Accessibility
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  We chose a Web App over a native App to lower the barrier to entry. We designed the
                  interface with high contrast colors and large touch targets to ensure usability for
                  older residents who may have declining eyesight.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
