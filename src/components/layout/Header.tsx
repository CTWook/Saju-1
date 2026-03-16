"use client";

import { Menu } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="h-[52px] bg-[#2D1B69] flex items-center justify-between px-4 border-b border-white/5">
      <Link href="/" className="flex items-center">
        <Logo size={22} textColor="text-white" />
      </Link>
      
      <nav className="hidden sm:flex space-x-6">
        <Link href="/today" className="text-white text-[13px] hover:text-[#C9A84C] transition-colors">오늘의운세</Link>
        <Link href="/tarot" className="text-white text-[13px] hover:text-[#C9A84C] transition-colors">타로점</Link>
        <Link href="/goonghap" className="text-white text-[13px] hover:text-[#C9A84C] transition-colors">궁합</Link>
      </nav>
      
      <button className="text-white hover:text-[#C9A84C] transition-colors" aria-label="메뉴">
        <Menu size={22} />
      </button>
    </header>
  );
}