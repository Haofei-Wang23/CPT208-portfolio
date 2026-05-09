import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

const techStack = ['React', 'SVG', 'Geolocation API', 'AR.js'];

const contributions = [
  { member: 'Haofei Wang', responsibility: 'Front-end Development', percentage: '25%' },
  { member: 'Haonan Cheng', responsibility: 'UI Design & Figma', percentage: '25%' },
  { member: 'Xingquan Hou', responsibility: 'User Research & Content', percentage: '25%' },
  { member: 'Zhixiang Wu', responsibility: 'Testing & Video Editing', percentage: '25%' },
];

export default function Section04() {
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
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      const rows = cardsRef.current?.querySelectorAll('.table-row') || [];
      gsap.fromTo(
        rows,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rows[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="technical" className="px-5 md:px-12" style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ marginTop: '64px' }}>
        <SectionHeader number="04" title="TECHNICAL IMPLEMENTATION" icon={Code2} />

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2" style={{ marginTop: '20px', gap: '20px' }}>
          {/* Left — System Architecture */}
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
              System Architecture
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginTop: '14px',
              }}
            >
              The web app is built on a React.js frontend. Data is structured to handle bilingual
              content seamlessly. We utilized SVG graphics for smooth parallax scrolling effects
              and integrated AR libraries to link physical GPS coordinates with digital content
              layers.
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: '16px' }}>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    backgroundColor: 'rgba(61, 79, 65, 0.08)',
                    color: 'var(--accent-green)',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Right — High-Fi Prototype & Contributions */}
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
              High-Fi Prototype
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginTop: '14px',
              }}
            >
              The final build features a responsive design optimized for both desktop and mobile
              browsers, with cinematic transitions and interactive SVG elements.
            </p>
            <a
              href="https://haofei-wang23.github.io/version/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 uppercase transition-all duration-200 hover:-translate-y-px"
              style={{
                backgroundColor: 'var(--accent-green)',
                color: '#FFFFFF',
                padding: '10px 24px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.05em',
              }}
            >
              Experience Live Demo
              <ExternalLink size={14} />
            </a>

            {/* Contributions Table */}
            <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '20px', paddingTop: '20px' }}>
              <h4
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: 1.3,
                  color: 'var(--text-primary)',
                }}
              >
                Individual Contributions
              </h4>
              <table className="w-full" style={{ marginTop: '12px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--accent-green)' }}>
                    <th
                      className="text-left pb-2 uppercase"
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: 'var(--accent-green)',
                      }}
                    >
                      Member
                    </th>
                    <th
                      className="text-left pb-2 uppercase"
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: 'var(--accent-green)',
                      }}
                    >
                      Responsibility
                    </th>
                    <th
                      className="text-right pb-2 uppercase"
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: 'var(--accent-green)',
                      }}
                    >
                      %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contributions.map((row) => (
                    <tr
                      key={row.member}
                      className="table-row"
                      style={{ borderBottom: '1px solid var(--border-color)' }}
                    >
                      <td className="py-2.5" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        {row.member}
                      </td>
                      <td className="py-2.5" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        {row.responsibility}
                      </td>
                      <td
                        className="py-2.5 text-right"
                        style={{ fontSize: '14px', color: 'var(--text-secondary)' }}
                      >
                        {row.percentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
