import React from 'react';

interface AdBannerProps {
  slot: string;
  format: 'horizontal' | 'rectangle' | 'vertical';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ slot, format, className = '' }) => {
  const styles: Record<string, string> = {
    horizontal: 'w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400 text-xs',
    rectangle: 'w-full aspect-[4/3] bg-gray-100 flex items-center justify-center text-gray-400 text-xs',
    vertical: 'w-[180px] h-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs',
  };

  return (
    <div className={`${styles[format]} ${className}`}>
      [AD: {slot}]
    </div>
  );
};

export default AdBanner;