import { forwardRef, type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className = '', style }, ref) => {
  return (
    <div
      ref={ref}
      className={`transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        padding: '28px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
      }}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
