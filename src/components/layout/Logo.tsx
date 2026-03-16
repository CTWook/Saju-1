import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  textColor?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  size = 24, 
  textColor = "text-white",
  showText = true 
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 
        Saju/Fortune style icon: 
        A sophisticated circular symbol combining a diamond (fate) and a star (destiny).
      */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="18" stroke="#C9A84C" strokeWidth="2.5"/>
        <path 
          d="M20 6L23.5 16.5L34 20L23.5 23.5L20 34L16.5 23.5L6 20L16.5 16.5L20 6Z" 
          fill="#C9A84C"
        />
        <circle cx="20" cy="20" r="4" fill="#2D1B69"/>
      </svg>
      
      {showText && (
        <span className={`${textColor} font-bold tracking-tight`} style={{ fontSize: size * 0.75 }}>
          오늘의 사주
        </span>
      )}
    </div>
  );
};

export default Logo;
