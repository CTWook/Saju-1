import React, { useState } from 'react';
import { TarotResult } from '../../types';

interface CardSpreadProps {
  onCardSelect: (cardIndex: number, questionType: string, orientation: 'upright' | 'reversed') => void;
  loading: boolean;
  selectedCard: number | null;
}

const CardSpread: React.FC<CardSpreadProps> = ({ onCardSelect, loading, selectedCard }) => {
  const [questionType, setQuestionType] = useState('연애');

  const questionTypes = ['연애', '취업', '재물', '건강', '인간관계', '기타'];

  const cards = Array.from({ length: 5 }, (_, i) => i);
  const rotations = [-8, -4, 0, 4, 8];

  const handleCardClick = (index: number) => {
    if (loading || selectedCard !== null) return;
    const orientation = Math.random() < 0.6 ? 'upright' : 'reversed';
    const cardIndex = Math.floor(Math.random() * 22);
    onCardSelect(cardIndex, questionType, orientation);
  };

  return (
    <div className="py-8 text-center overflow-hidden">
      <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-sm mx-auto">
        {questionTypes.map((type) => (
          <button
            key={type}
            onClick={() => setQuestionType(type)}
            disabled={loading || selectedCard !== null}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              questionType === type
                ? 'bg-[#2D1B69] text-white border-[#2D1B69]'
                : 'bg-white text-gray-500 border-gray-200 hover:border-[#2D1B69]'
            } disabled:opacity-50`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="relative h-[200px] flex items-center justify-center perspective-[1000px]">
        {cards.map((card, i) => (
          <div
            key={card}
            onClick={() => handleCardClick(i)}
            className={`absolute w-[72px] h-[110px] bg-[#2D1B69] border-[1.5px] border-[#C9A84C] rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center justify-center ${
              selectedCard !== null && selectedCard !== i ? 'opacity-30 grayscale' : ''
            } ${selectedCard === i ? 'scale-110 -translate-y-4 shadow-xl z-10' : ''} ${
              loading || (selectedCard !== null && selectedCard !== i) ? 'pointer-events-none' : ''
            }`}
            style={{
              transformOrigin: 'bottom center',
              transform: `rotate(${rotations[i]}deg) translateX(${(i - 2) * 40}px)`,
              background: 'repeating-conic-gradient(#C9A84C 0% 25%, #2D1B69 0% 50%) 50% / 10px 10px',
            }}
          >
            <div className="w-full h-full bg-[#2D1B69]/80 rounded-lg flex items-center justify-center p-1">
              <div className="w-full h-full border border-[#C9A84C]/30 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        {selectedCard !== null ? '카드를 확인해보세요' : '마음속 질문을 떠올리고 카드를 선택하세요'}
      </p>
    </div>
  );
};

export default CardSpread;
