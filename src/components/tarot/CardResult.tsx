"use client";

import React from 'react';
import type { TarotResult } from '../../types';
import { TAROT_CARDS } from '../../lib/tarotCards';
import AdBanner from '../layout/AdBanner';
import { useRouter } from 'next/navigation';

interface CardResultProps {
  cardIndex: number;
  orientation: 'upright' | 'reversed';
  result: TarotResult;
  onReset: () => void;
}

const CardResult: React.FC<CardResultProps> = ({ cardIndex, orientation, result, onReset }) => {
  const router = useRouter();
  const card = TAROT_CARDS[cardIndex];

  return (
    <div className="max-w-xl mx-auto px-4 py-8 bg-white rounded-2xl shadow-sm border border-[#E5E5EE]">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-[#2D1B69] mb-1">
          {card.koreanName} ({card.name})
        </h2>
        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            orientation === 'upright'
              ? 'bg-[#E1F5EE] text-[#0F6E56]'
              : 'bg-[#FBEAF0] text-[#993556]'
          }`}
        >
          {orientation === 'upright' ? '정방향' : '역방향'}
        </div>
      </div>

      <div className="space-y-6 text-[#2A2A3A] text-base leading-relaxed">
        <p>{result.interpretation[0]}</p>

        <div className="py-2">
          <div className="text-[10px] text-gray-400 mb-1 text-center">광고</div>
          <AdBanner slot="타로_중간" format="rectangle" />
        </div>

        <p>{result.interpretation[1]}</p>

        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {result.keywords.split(',').map((keyword, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#EEEDFE] text-[#534AB7] rounded-full text-sm font-medium"
            >
              #{keyword.trim()}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-8">
          <button
            onClick={onReset}
            className="h-12 border border-[#E5E5EE] text-[#2D1B69] rounded-xl font-medium"
          >
            다시 뽑기
          </button>
          <button
            onClick={() => router.push('/')}
            className="h-12 bg-[#2D1B69] text-white rounded-xl font-medium"
          >
            내 사주와 함께 보기 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardResult;