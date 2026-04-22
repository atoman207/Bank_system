type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
    </svg>
  );
}

/** Primary orange pill CTA matching Elementor button styling */
export function CtaButton({ href, children, className = "" }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex flex-row-reverse items-center justify-center gap-[17px] rounded-[38px] bg-im-accent px-10 py-3 text-2xl font-medium text-white transition-colors duration-300 hover:bg-white hover:text-im-primary max-lg:rounded-[20px] max-lg:px-[50px] max-lg:py-3 max-lg:text-lg max-md:rounded-[20px] max-md:px-[50px] max-md:py-3 max-md:text-[18px] lg:px-[80px] lg:py-[15px] ${className}`}
    >
      <PlayIcon className="h-[1em] w-[1em] shrink-0" />
      <span>{children}</span>
    </a>
  );
}
