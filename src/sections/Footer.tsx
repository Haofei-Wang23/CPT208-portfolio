export default function Footer() {
  return (
    <footer
      className="w-full text-center"
      style={{
        backgroundColor: 'var(--accent-green)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '32px 24px',
        marginTop: '80px',
      }}
    >
      <p style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>
        Changmen Heritage — Process Portfolio · XJTLU DES404 A1 · 2025
      </p>
    </footer>
  );
}
