export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32"
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      {/* Mandala backdrop */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const x1 = 50 + 25 * Math.cos(angle);
          const y1 = 50 + 25 * Math.sin(angle);
          const x2 = 50 + 45 * Math.cos(angle);
          const y2 = 50 + 45 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4AF37" strokeWidth="0.5"/>;
        })}
      </svg>
      
      {/* Traditional Kalash pot */}
      <svg className="relative w-full h-full" viewBox="0 0 100 100">
        {/* Pot base */}
        <ellipse cx="50" cy="85" rx="20" ry="5" fill="#D4AF37"/>
        
        {/* Pot body */}
        <path 
          d="M 35 85 Q 30 65 35 45 L 65 45 Q 70 65 65 85 Z" 
          fill="#F4C430"
          stroke="#D4AF37"
          strokeWidth="1"
        />
        
        {/* Pot decorative pattern */}
        <path d="M 38 65 Q 50 68 62 65" fill="none" stroke="#E85D75" strokeWidth="1.5"/>
        <path d="M 38 55 Q 50 58 62 55" fill="none" stroke="#E85D75" strokeWidth="1.5"/>
        <circle cx="50" cy="75" r="2" fill="#E85D75"/>
        
        {/* Pot neck */}
        <rect x="42" y="35" width="16" height="10" fill="#F4C430" stroke="#D4AF37" strokeWidth="1"/>
        
        {/* Pot top rim */}
        <ellipse cx="50" cy="35" rx="10" ry="3" fill="#D4AF37"/>
        
        {/* Coconut on top */}
        <circle cx="50" cy="28" r="7" fill="#8B4513"/>
        <circle cx="50" cy="28" r="5" fill="#A0522D"/>
        
        {/* Leaves */}
        <path d="M 50 28 Q 42 22 38 18" fill="none" stroke="#2D5016" strokeWidth="2"/>
        <path d="M 50 28 Q 58 22 62 18" fill="none" stroke="#2D5016" strokeWidth="2"/>
        <path d="M 50 28 Q 45 20 43 15" fill="none" stroke="#2D5016" strokeWidth="1.5"/>
        <path d="M 50 28 Q 55 20 57 15" fill="none" stroke="#2D5016" strokeWidth="1.5"/>
        <path d="M 50 28 L 50 18" fill="none" stroke="#2D5016" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}
