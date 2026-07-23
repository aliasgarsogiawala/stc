// Shared inline SVG icons — crisp, consistent, animate on hover via .ico-arrow.

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg className={`ico-arrow ${className}`} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.75M10.5 3.5V9.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={`ico-arrow ${className}`} width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
      <path d="M2 7H13.5M13.5 7L8.5 2M13.5 7L8.5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg className={`ico-arrow ${className}`} width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
      <path d="M14 7H2.5M2.5 7L7.5 2M2.5 7L7.5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
