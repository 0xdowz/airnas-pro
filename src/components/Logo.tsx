export default function Logo({ className = "w-8 h-8", strokeWidth = 6 }: { className?: string, strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path 
        d="M20 75 L45 25 L60 55" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M30 55 L55 40 L70 70 L90 25" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M75 25 L90 25 L90 40" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
