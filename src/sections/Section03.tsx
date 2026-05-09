import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

const crazyEights = [
  'images/图片5.jpg',
  'images/图片6.jpg',
  'images/图片7.jpg',
  'images/图片8.jpg',
  'images/图片9.jpg',
  'images/图片10.jpg',
  'images/图片11.jpg',
  'images/图片12.jpg',
];

export default function Section03() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const protoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gallery stagger
      const images = galleryRef.current?.querySelectorAll('.gallery-img') || [];
      gsap.fromTo(
        images,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Design selection
      gsap.fromTo(
        designRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: designRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );

      // Prototype card
      gsap.fromTo(
        protoRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: protoRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ideation" className="px-5 md:px-12" style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ marginTop: '64px' }}>
        <SectionHeader number="03" title="IDEATION & ALTERNATIVES" icon={Lightbulb} />

        {/* Crazy Eights Gallery */}
        <div style={{ marginTop: '20px' }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: '22px',
              lineHeight: 1.3,
              color: 'var(--text-primary)',
              marginBottom: '16px',
            }}
          >
            The Crazy Eights — Creative Divergence
          </h3>
          <div ref={galleryRef} className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: '12px' }}>
            {crazyEights.map((src, i) => (
              <div
                key={src}
                className="gallery-img overflow-hidden"
                style={{ aspectRatio: '4/5', borderRadius: '4px', border: '1px solid var(--border-color)' }}
              >
                <img
                  src={src}
                  alt={`Crazy Eights sketch ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Selection */}
        <div ref={designRef} style={{ marginTop: '24px' }}>
          <Card>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Selected image */}
              <div className="md:w-2/5 flex-shrink-0">
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '4px',
                    border: '3px solid var(--accent-orange)',
                  }}
                >
                  <span
                    className="absolute top-0 left-0 z-10 uppercase"
                    style={{
                      backgroundColor: 'var(--accent-orange)',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      borderRadius: '0 0 4px 0',
                    }}
                  >
                    SELECTED
                  </span>
                  <img
                    src="images/图片10.jpg"
                    alt="Selected design sketch"
                    className="w-full object-cover"
                    style={{ aspectRatio: '4/5' }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Design description */}
              <div className="md:w-3/5">
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
                  Design Alternative
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginTop: '14px',
                  }}
                >
                  After team discussion, we selected the fifth sketch as our design direction. This
                  option is simple and clear with no excessive information. Our strategy: a clean
                  design with attractive landscape images and interesting interactive effects to
                  engage users, enhancing reading interest and increasing time spent on the page.
                  Other proposals contained too much content on a single page, making it difficult
                  for readers to quickly find sections of interest.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Low-Fi Prototype */}
        <div ref={protoRef} style={{ marginTop: '20px' }}>
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
              Low-Fidelity Prototype
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginTop: '14px',
              }}
            >
              We created a clickable Figma prototype focusing on user flow. The initial version
              tested navigation between the Timeline, Map, and Gallery sections, ensuring users
              could intuitively switch contexts without getting lost.
            </p>
            <a
              href="https://www.figma.com/design/CazJ6r2vcYeeYvwbtAglHR/%E7%BD%91%E5%9D%80?node-id=0-1&t=3hL3Kj3pcYpt7W8N-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 uppercase transition-all duration-200 hover:-translate-y-px"
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
              View Figma Prototype
              <ExternalLink size={14} />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
