'use client';

import React, { useState } from 'react';
import InputForm from '@/components/goonghap/InputForm';
import CompatResult from '@/components/goonghap/CompatResult';

export default function GoonghapPage() {
  const [result, setResult] = useState<any>(null); // Still using any here for simplicity with mock data, but fixed others
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (user1: { year: string, month: string, day: string, gender: string }, user2: { year: string, month: string, day: string, gender: string }) => {
    setLoading(true);
    try {
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: 'goonghap',
          user1,
          user2,
        }),
      });

      if (!response.ok) throw new Error('API fetch failed');
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert('궁합 정보를 가져오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white py-10">
      <div className="max-w-2xl mx-auto px-4 mb-10 text-center">
        <h1 className="text-[#2D1B69] text-3xl font-bold mb-4">운명적인 인연의 깊이</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          두 사람의 생년월일을 입력하여 서로의 기운이 어떻게 어우러지는지 확인해보세요.<br />
          AI가 상세한 궁합 점수와 조언을 제공합니다.
        </p>
      </div>

      <InputForm onSubmit={handleSubmit} loading={loading} />

      {result && (
        <CompatResult
          score={result.score || 85}
          data={{
            summary: result.summary,
            paragraphs: result.paragraphs,
            scores: {
              emotion: result.scores?.love || 80,
              personality: result.scores?.personality || 75,
              wealth: result.scores?.wealth || 70,
              future: result.scores?.career || 85,
            }
          }}
        />
      )}

      <div className="h-20" />
    </main>
  );
}