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
    <div className={`flex items-center gap-3 ${sizeClasses[size]} ${className}`}>
      {/* Modern architectural logo icon */}
      <svg 
        viewBox="0 0 40 40" 
        className={`${sizeClasses[size]} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Framed monogram with architectural geometry */}
        <rect x="3.5" y="3.5" width="33" height="33" rx="8" className={primary} stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 28V14.5L20 10L28 14.5V28"
          className={accent}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 28V20.5C16 19.4 16.9 18.5 18 18.5H22C23.1 18.5 24 19.4 24 20.5V28"
          className={accent}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      
      {/* Logo text */}
      <div className="flex flex-col leading-none">
        <span className={`font-semibold tracking-tight ${text} text-[1.05em]`}>
          Rent in Kigali
        </span>
        <span className={`text-[0.55em] tracking-[0.25em] uppercase ${accent} mt-1`}>
          Real Estate
        </span>
      </div>
    </div>
  );
}
