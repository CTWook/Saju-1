
const Footer = () => {
  return (
    <footer className="bg-primary text-on-primary/60 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-on-primary/10 pb-12 mb-12">
          <div className="space-y-4">
            <span className="font-headline text-2xl font-bold text-on-primary tracking-tight">오늘의 사주</span>
            <p className="max-w-xs text-sm leading-relaxed">
              전통 명리학의 지혜를 데이터와 AI 기술로 풀어내는 현대적인 운세 솔루션입니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            <a href="#" className="text-sm hover:text-secondary-fixed duration-200">이용약관</a>
            <a href="#" className="text-sm hover:text-secondary-fixed duration-200">개인정보처리방침</a>
            <a href="#" className="text-sm hover:text-secondary-fixed duration-200">고객센터</a>
            <a href="#" className="text-sm hover:text-secondary-fixed duration-200">회사소개</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 오늘의 사주. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined">share</span>
            <span className="material-symbols-outlined">language</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
