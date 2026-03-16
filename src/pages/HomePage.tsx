import CategoryCard from '../components/CategoryCard';

const categoryData = [
  {
    icon: 'favorite',
    title: '연애·궁합운',
    description: '그 사람과의 인연의 끈을 확인하세요',
    badge: 'BEST',
    badgeColor: 'bg-secondary-container text-on-secondary-container',
  },
  {
    icon: 'calendar_today',
    title: '신년운세',
    description: '2024년 청룡의 해, 당신의 흐름은?',
    badge: '인기',
    badgeColor: 'bg-primary text-on-primary',
  },
  {
    icon: 'style',
    title: '타로점',
    description: '카드가 말해주는 신비로운 대답',
  },
  {
    icon: 'auto_stories',
    title: '오늘의 운세',
    description: '매일 아침 배달되는 나만의 운세',
    badge: '매일 업데이트',
    badgeColor: 'bg-surface-container-highest text-on-surface-variant border border-outline-variant/30',
  },
  {
    icon: 'work',
    title: '취업·직장운',
    description: '성공적인 커리어를 위한 조언',
  },
  {
    icon: 'payments',
    title: '재물·금전운',
    description: '대운이 들어오는 시기를 잡으세요',
  },
  {
    icon: 'school',
    title: '학업·수험운',
    description: '목표 달성을 위한 지혜로운 길',
  },
];

const HomePage = () => {
  return (
    <>
      {/* Top Ad Banner */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="w-full h-[90px] bg-surface-container-highest flex items-center justify-center rounded-lg border border-outline-variant/10">
          <span className="text-on-surface-variant font-label text-sm">광고</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-headline text-5xl lg:text-6xl text-primary leading-tight tracking-tight">
            당신의 오늘을<br/><span className="text-secondary italic">사주</span>로 읽다
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md">
            생년월일만 입력하면 AI가 당신의 기운을 분석하여 깊이 있는 사주 풀이를 제공해드립니다.
          </p>
          <div className="bg-surface-container-low p-8 rounded-xl editorial-shadow border border-outline-variant/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Year</label>
                <input type="number" placeholder="1990" className="w-full bg-surface-container-lowest border-none rounded-lg p-3 focus:ring-2 focus:ring-secondary-container" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Month</label>
                <input type="number" placeholder="01" className="w-full bg-surface-container-lowest border-none rounded-lg p-3 focus:ring-2 focus:ring-secondary-container" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Day</label>
                <input type="number" placeholder="01" className="w-full bg-surface-container-lowest border-none rounded-lg p-3 focus:ring-2 focus:ring-secondary-container" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Hour</label>
                <select className="w-full bg-surface-container-lowest border-none rounded-lg p-3 focus:ring-2 focus:ring-secondary-container">
                  <option>모름</option>
                  <option>자시 (23:30~01:29)</option>
                  <option>축시 (01:30~03:29)</option>
                  <option>인시 (03:30~05:29)</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-secondary-container text-on-secondary-container font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:brightness-105 transition-all">
              내 사주 보기
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="aspect-square rounded-full bg-gradient-to-tr from-primary to-primary-container p-1 shadow-2xl overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb1JZxSypJCaB2TMQShJDh5a-dHMzdqgnXFdYgzpMz_TI8_FIpFkq-7-KeHtKCdwPhOC8Z23jLnHPWdmvA9ega6CV9QdpsdNpMKuo36A7u-NIcXLKScWQx7v0fwtJFuGnqlUDqeKMvFDwHrAPeeKptv8JADa640Vr0w9iKE9q6oI3L2c2lPLb5hAl2UQ1wchKv11kGzL20YZvha8ryDaqpEoejRglLjp3gUkr3IO80x8PuEF3D_aP6GnlRlXHFZTO-NtJ8TAtP7h64" alt="Mystical celestial pattern" className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl editorial-shadow border border-outline-variant/10 max-w-[240px]">
            <div className="flex items-center gap-2 text-secondary mb-2">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-bold text-sm">오늘의 명언</span>
            </div>
            <p className="text-sm leading-relaxed text-on-surface">"흐르는 물처럼 순리에 맡기면 길운이 찾아옵니다."</p>
          </div>
        </div>
      </section>

      {/* Category Navigation Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="font-headline text-3xl mb-10 text-primary">무엇이 궁금하세요?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryData.map((card, index) => (
            <CategoryCard key={index} {...card} />
          ))}
           <div className="group flex flex-col items-center justify-center p-6 border-2 border-dashed border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer">
            <span className="material-symbols-outlined text-outline">add_circle</span>
            <span className="mt-2 font-medium text-on-surface-variant">더 보기</span>
          </div>
        </div>
      </section>

      {/* Popular Readings (Horizontal Scroll) */}
      <section className="py-16 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
          <div>
            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">Trending Insights</span>
            <h2 className="font-headline text-3xl text-primary">지금 인기 있는 풀이</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-white transition-all">
              <span className="material-symbols-outlined text-sm">arrow_back_ios</span>
            </button>
            <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-white transition-all">
              <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </button>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto px-6 pb-8 scrollbar-hide no-scrollbar max-w-7xl mx-auto">
          {/* Scroll items will be dynamically generated here */}
        </div>
      </section>
    </>
  );
}

export default HomePage;
