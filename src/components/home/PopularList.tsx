import React from 'react';

const PopularList: React.FC = () => {
  const popularItems = [
    { id: 1, title: '2026년 대운의 흐름
운명의 변화를 읽다', views: '45,201', color: '#FAEEDA', icon: '★' },
    { id: 2, title: '올해 연애운 집중 분석
인연의 시작과 끝', views: '38,124', color: '#FBEAF0', icon: '♡' },
    { id: 3, title: '재물운의 타이밍
황금빛 기운의 도래', views: '29,450', color: '#E1F5EE', icon: '◉' },
    { id: 4, title: '직장운과 승진운
커리어 도약의 기회', views: '21,059', color: '#E6F1FB', icon: '▲' },
    { id: 5, title: '학업운과 시험운
최고의 결과는 언제?', views: '15,672', color: '#F1EFE8', icon: '✦' },
  ];

  return (
    <div className="py-5">
      <h2 className="text-[#2D1B69] text-base font-medium mb-4">오늘 많이 본 운세</h2>
      <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4">
        {popularItems.map((item) => (
          <div key={item.id} className="min-w-[120px] max-w-[120px] flex-shrink-0 cursor-pointer">
            <div
              className="w-full aspect-[1/0.53] rounded-lg flex items-center justify-center text-2xl mb-2"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <div className="text-[#2D1B69] text-[11px] font-medium leading-[1.3] line-clamp-2 h-7">
              {item.title}
            </div>
            <div className="text-gray-400 text-[10px] mt-1">조회수 {item.views}회</div>
          </div>
        ))}
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default PopularList;
