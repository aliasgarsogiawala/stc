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

export function WhatsApp({ className = "" }: { className?: string }) {
  return (
    <svg className={`ico-wa ${className}`} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.86 9.86 0 0 0 4.76 1.21h.004c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.73c0 4.47-3.64 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.13.82.83-3.05-.2-.31a8.05 8.05 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.1-8.1Zm-4.5 4.35c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62 0 1.55 1.13 3.04 1.28 3.25.16.21 2.2 3.36 5.34 4.58.74.29 1.32.46 1.77.59.74.24 1.42.2 1.96.12.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.7.16-.21.31-.8 1.01-.98 1.22-.18.21-.36.24-.67.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.55.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.61-.51-.53-.7-.54-.18-.01-.39-.01-.6-.01Z" />
    </svg>
  );
}
