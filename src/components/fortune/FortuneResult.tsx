"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import type { FortuneData } from '../../types';
import AdBanner from '../layout/AdBanner';
import { CATEGORIES } from '../../lib/categories';

interface FortuneResultProps {
  category: string;
  year: string;
  month: string;
  day: string;
  hour?: string;
  data: FortuneData;
}

const StarRating: React.FC<{ score: number }> = ({ score }) => {
  return (
    <div className="flex gap-1 justify-center my-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`text-2xl ${star <= score ? 'text-[#C9A84C]' : 'text-gray-400'}`}>
          ★
        </span>
      ))}
    </div>
  );
};

const FortuneResult: React.FC<FortuneResultProps> = ({ category, year, month, day, data }) => {
  const router = useRouter();
  const categoryData = CATEGORIES.find((c) => c.slug === category) || CATEGORIES[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* 1. Page header */}
      <header className="flex items-center justify-between mb-6">
        <button onClick={() => router.back()} className="text-2xl">←</button>
        <h1 className="text-lg font-bold text-[#2D1B69]">{categoryData.label} 운세</h1>
        <div className="bg-[#EEEDFE] text-[#534AB7] text-[12px] px-3 py-1 rounded-full font-medium">
          {year}년 {month}월 {day}일생
        </div>
      </header>

      {/* 2. AdBanner slot="결과_상단" */}
      <AdBanner slot="결과_상단" format="horizontal" className="mb-6" />

      <div className="lg:grid lg:grid-cols-[1fr_180px] lg:gap-8">
        <div className="space-y-8">
          {/* 3. Summary card */}
          <section className="bg-[#2D1B69] text-white rounded-[16px] p-6 text-center">
            <div className="text-white/70 text-sm mb-1">{year}년생 {categoryData.label}</div>
            <div className="text-[15px] font-medium leading-relaxed mb-4">{data.summary}</div>
            <StarRating score={data.overallScore} />
            <div className="flex justify-center gap-4 mt-6">
              {[
                { label: '금전', score: data.scores.wealth, color: '#FFD700' },
                { label: '건강', score: data.scores.health, color: '#4CAF50' },
                { label: '연애', score: data.scores.love, color: '#FF69B4' },
                { label: '직장', score: data.scores.career, color: '#2196F3' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[11px] opacity-70">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold">{item.score}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Paragraphs 0-1 */}
          <section className="space-y-5 text-[#2A2A3A] text-[15px] leading-[1.9]">
            <p>{data.paragraphs[0]}</p>
            <p>{data.paragraphs[1]}</p>
          </section>

          {/* 5. AdBanner slot="결과_중간" */}
          <div>
            <div className="text-[10px] text-gray-400 mb-1">광고</div>
            <AdBanner slot="결과_중간" format="rectangle" />
          </div>

          {/* 6. Paragraphs 2+ */}
          <section className="space-y-5 text-[#2A2A3A] text-[15px] leading-[1.9]">
            {data.paragraphs.slice(2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* 7. MonthlyAccordion */}
          <section className="mt-8">
            <h3 className="text-[#2D1B69] text-lg font-bold mb-4">월별 운세</h3>
            <div className="border border-[#E5E5EE] rounded-xl overflow-hidden">
              {data.monthly.map((m) => (
                <details key={m.month} className="group border-b border-[#E5E5EE] last:border-0">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 list-none">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#2D1B69]">{m.month}월</span>
                      <span className="text-sm text-gray-500 line-clamp-1">{m.text.substring(0, 20)}...</span>
                    </div>
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 bg-[#F8F7FF] text-sm leading-relaxed text-[#2A2A3A]">
                    {m.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* 8. AdBanner slot="결과_하단" */}
          <AdBanner slot="결과_하단" format="rectangle" />

          {/* 9. Advice block */}
          <section className="bg-[#FAF8F4] border-l-[3px] border-[#C9A84C] p-4 italic text-[#2A2A3A] leading-relaxed">
            {data.advice}
          </section>

          {/* 10. CrossSellCards */}
          <section className="mt-10">
            <h3 className="text-[#2D1B69] text-base font-bold mb-4">이런 운세도 확인해보세요</h3>
            <div className="flex overflow-x-auto gap-3 no-scrollbar -mx-4 px-4 pb-4">
              {CATEGORIES.filter(c => c.slug !== category).map((cat) => (
                <div
                  key={cat.slug}
                  onClick={() => router.push(`${cat.href}?year=${year}&month=${month}&day=${day}`)}
                  className="min-w-[130px] bg-white border border-[#E5E5EE] rounded-xl p-3 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl mb-2" style={{ backgroundColor: cat.color }}>
                    {cat.icon}
                  </div>
                  <div className="text-[#2D1B69] text-[13px] font-medium leading-tight">{cat.label}</div>
                  <div className="text-gray-400 text-[10px] mt-1 line-clamp-1">{cat.tagline}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-20" />
        </div>

        {/* 11. Desktop Rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <AdBanner slot="결과_사이드" format="vertical" />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FortuneResult;