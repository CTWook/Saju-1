import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-[52px] bg-[#2D1B69] flex items-center justify-between px-4">
      <Link to="/" className="text-white text-[16px] font-medium">
        오늘의 사주
      </Link>
      
      <nav className="hidden sm:flex space-x-4">
        <Link to="/tarot" className="text-white text-[13px]">타로점</Link>
        <Link to="/goonghap" className="text-white text-[13px]">궁합</Link>
        <Link to="/today" className="text-white text-[13px]">오늘의운세</Link>
      </nav>
      
      <button className="sm:hidden text-white" aria-label="메뉴">
        <Menu size={24} />
      </button>
    </header>
  );
}
