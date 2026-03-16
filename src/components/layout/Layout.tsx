import Header from './Header';
import Footer from './Footer';
import StickyAdBar from './StickyAdBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-['Noto_Sans_KR']">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>
      <StickyAdBar />
      <Footer />
    </div>
  );
}
