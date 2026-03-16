import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D1B69] text-white p-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-left">
        <p className="text-[13px] mb-2">© 2026 오늘의 사주</p>
        <p className="text-[12px] opacity-70 mb-4">
          본 서비스는 오락 목적으로 제공되며 실제 미래를 예측하지 않습니다.
        </p>
        <div className="flex space-x-4 text-[13px] opacity-80">
          <Link href="/terms" className="hover:underline">이용약관</Link>
          <Link href="/privacy" className="hover:underline">개인정보처리방침</Link>
        </div>
      </div>
    </footer>
  );
}