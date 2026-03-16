
const TopNavBar = () => {
  return (
    <nav className="glass-nav sticky top-0 z-50 border-b border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="font-headline text-2xl font-bold text-primary tracking-tight">오늘의 사주</span>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-label-md font-medium hover:text-secondary duration-200">사주</a>
            <a href="#" className="text-label-md font-medium hover:text-secondary duration-200">궁합</a>
            <a href="#" className="text-label-md font-medium hover:text-secondary duration-200">타로</a>
            <a href="#" className="text-label-md font-medium hover:text-secondary duration-200">운세</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block relative">
            <input 
              type="text" 
              placeholder="검색어를 입력하세요" 
              className="bg-surface-container-high rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary/30 w-64 border-none"
            />
          </div>
          <button className="material-symbols-outlined text-primary p-2">menu</button>
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
