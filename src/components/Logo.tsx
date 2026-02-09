interface LogoProps {
  variant?: 'default' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'default', size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
  };

  const colors = {
    default: {
      primary: 'text-primary',
      accent: 'text-primary/80',
      text: 'text-foreground'
    },
    white: {
      primary: 'text-white',
      accent: 'text-white/80',
      text: 'text-white'
    },
    dark: {
      primary: 'text-slate-900',
      accent: 'text-slate-700',
      text: 'text-slate-900'
    }
  };

  const { primary, accent, text } = colors[variant];

  return (
    <div className={`flex items-center gap-2.5 ${sizeClasses[size]} ${className}`}>
      {/* Modern architectural logo icon */}
      <svg 
        viewBox="0 0 40 40" 
        className={`${sizeClasses[size]} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Building outline with door */}
        <path
          d="M8 38V16L20 8L32 16V38H24V28C24 26.8954 23.1046 26 22 26H18C16.8954 26 16 26.8954 16 28V38H8Z"
          className={primary}
          fill="currentColor"
        />
        {/* Window accents */}
        <rect x="11" y="20" width="4" height="4" rx="0.5" className={accent} fill="currentColor" />
        <rect x="18" y="20" width="4" height="4" rx="0.5" className={accent} fill="currentColor" />
        <rect x="25" y="20" width="4" height="4" rx="0.5" className={accent} fill="currentColor" />
        {/* Roof accent line */}
        <path
          d="M4 16L20 6L36 16"
          className={accent}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      {/* Logo text */}
      <div className="flex flex-col leading-none">
        <span className={`font-semibold tracking-tight ${text} text-[1.1em]`}>
          RENT IN KIGALI
        </span>
        <span className={`text-[0.5em] tracking-wider uppercase ${accent} mt-0.5`}>
          Premium Real Estate
        </span>
      </div>
    </div>
  );
}
