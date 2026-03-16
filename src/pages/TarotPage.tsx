import React, { useState } from 'react';
import CardSpread from '../components/tarot/CardSpread';
import CardResult from '../components/tarot/CardResult';
import { TarotResult } from '../types';
import AdBanner from '../components/layout/AdBanner';

const TarotPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [orientation, setOrientation] = useState<'upright' | 'reversed'>('upright');
  const [cardIndex, setCardIndex] = useState<number | null>(null);
  const [result, setResult] = useState<TarotResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCardSelect = async (index: number, questionType: string, orient: 'upright' | 'reversed') => {
    setLoading(true);
    setCardIndex(index);
    setOrientation(orient);
    setSelectedCard(0); // For UI indication in spread (we only show 1 card selected)

    try {
      const response = await fetch('/api/tarot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardIndex: index, questionType, orientation: orient }),
      });

      if (!response.ok) throw new Error('API fetch failed');
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSelectedCard(null);
    setCardIndex(null);
    setResult(null);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <AdBanner slot="타로_상단" format="horizontal" className="mb-8" />

      <div className="max-w-xl mx-auto px-4 text-center mb-10">
        <h1 className="text-[#2D1B69] text-2xl font-bold mb-2">타로로 묻고 답하다</h1>
        <p className="text-gray-500 text-sm">
          마음속 질문을 떠올리고 카드를 선택하세요. AI가 당신의 궁금증을 풀어드립니다.
        </p>
      </div>

      {!result && (
        <CardSpread
          onCardSelect={handleCardSelect}
          loading={loading}
          selectedCard={selectedCard}
        />
      )}

      {loading && (
        <div className="text-center py-10">
          <div className="w-10 h-10 border-4 border-[#2D1B69] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#2D1B69] font-medium">카드를 해석 중입니다...</p>
        </div>
      )}

      {result && cardIndex !== null && (
        <CardResult
          cardIndex={cardIndex}
          orientation={orientation}
          result={result}
          onReset={reset}
        />
      )}

      <div className="h-20" />
    </main>
  );
};

export default TarotPage;
