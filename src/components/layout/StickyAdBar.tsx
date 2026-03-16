"use client";

import { useState, useEffect } from 'react';
import AdBanner from './AdBanner';
import { X } from 'lucide-react';

export default function StickyAdBar() {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return !sessionStorage.getItem('stickyAdClosed');
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    const mql = window.matchMedia('(min-width: 768px)');
    const updatePadding = () => {
      if (mql.matches || !isVisible) {
        mainElement.style.paddingBottom = '0px';
      } else {
        mainElement.style.paddingBottom = '56px';
      }
    };

    updatePadding();
    mql.addEventListener('change', updatePadding);

    return () => {
      mainElement.style.paddingBottom = '0px';
      mql.removeEventListener('change', updatePadding);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('stickyAdClosed', 'true');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[56px] bg-white border-t border-gray-200 z-50 md:hidden flex justify-center items-center">
      <AdBanner slot="STICKY_AD_SLOT" format="horizontal" className="!w-full !h-full border-none" />
      <button 
        onClick={handleClose} 
        className="absolute top-1 right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-200"
        aria-label="광고 닫기"
      >
        <X size={16} className="text-gray-500" />
      </button>
    </div>
  );
}
