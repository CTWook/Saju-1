"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const [year, setYear] = useState('1990');
  const [month, setMonth] = useState('1');
  const [day, setDay] = useState('1');
  const [hour, setHour] = useState('');

  const years = Array.from({ length: 71 }, (_, idx) => 1940 + idx);
  const months = Array.from({ length: 12 }, (_, idx) => idx + 1);
  const days = Array.from({ length: 31 }, (_, idx) => idx + 1);
  const hours = [
    { value: '', label: '시간 모름' },
    { value: '00', label: '자시 (23~01시)' },
    { value: '02', label: '축시 (01~03시)' },
    { value: '04', label: '인시 (03~05시)' },
    { value: '06', label: '묘시 (05~07시)' },
    { value: '08', label: '진시 (07~09시)' },
    { value: '10', label: '사시 (09~11시)' },
    { value: '12', label: '오시 (11~13시)' },
    { value: '14', label: '미시 (13~15시)' },
    { value: '16', label: '신시 (15~17시)' },
    { value: '18', label: '유시 (17~19시)' },
    { value: '20', label: '술시 (19~21시)' },
    { value: '22', label: '해시 (21~23시)' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // GA4 event tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'fortune_request', {
        category: 'yearly',
        birth_year: year,
      });
    }

    const queryParams = new URLSearchParams({
      year,
      month,
      day,
      hour,
    });
    router.push(`/fortune/yearly?${queryParams.toString()}`);
  };

  return (
    <section className="bg-[#2D1B69] px-5 py-10 md:py-12 text-center overflow-hidden">
      <div className="max-w-xl mx-auto">
        <h1 className="text-white font-bold text-[clamp(22px,5vw,32px)] leading-tight mb-2">
          당신의 오늘을 사주로 읽다
        </h1>
        <p className="text-white/65 text-sm mb-8">
          생년월일만 입력하면 AI가 사주를 무료로 풀이해드립니다
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="bg-white/12 border border-white/25 text-white h-[42px] rounded-lg px-2 outline-none focus:border-white/50"
            >
              {years.map((y) => (
                <option key={y} value={y.toString()} className="text-black">{y}년</option>
              ))}
            </select>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="bg-white/12 border border-white/25 text-white h-[42px] rounded-lg px-2 outline-none focus:border-white/50"
            >
              {months.map((m) => (
                <option key={m} value={m.toString()} className="text-black">{m}월</option>
              ))}
            </select>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="bg-white/12 border border-white/25 text-white h-[42px] rounded-lg px-2 outline-none focus:border-white/50"
            >
              {days.map((d) => (
                <option key={d} value={d.toString()} className="text-black">{d}일</option>
              ))}
            </select>
          </div>
          <select
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="w-full bg-white/12 border border-white/25 text-white h-[42px] rounded-lg px-2 outline-none focus:border-white/50"
          >
            {hours.map((h) => (
              <option key={h.value} value={h.value} className="text-black">{h.label}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-[#C9A84C] text-white h-12 rounded-[10px] text-base font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            내 사주 보기 →
          </button>
        </form>

        <p className="text-white/50 text-[12px] mt-4">
          로그인 없이 무료로 이용하세요
        </p>
      </div>
    </section>
  );
};

export default HeroSection;