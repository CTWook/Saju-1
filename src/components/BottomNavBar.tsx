
const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/20 md:hidden flex justify-around py-3 z-50">
      <button className="flex flex-col items-center gap-1 text-primary">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="text-[10px] font-bold">홈</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-on-surface-variant">
        <span className="material-symbols-outlined">auto_stories</span>
        <span className="text-[10px] font-bold">운세</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-on-surface-variant">
        <span className="material-symbols-outlined">favorite</span>
        <span className="text-[10px] font-bold">궁합</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-on-surface-variant">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px] font-bold">내정보</span>
      </button>
    </div>
  );
}

export default BottomNavBar;
