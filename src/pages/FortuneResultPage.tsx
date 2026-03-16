import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import FortuneResult from '../components/fortune/FortuneResult';
import { FortuneData } from '../types';
import { CATEGORIES } from '../lib/categories';

const FortuneResultPage: React.FC = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [data, setData] = useState<FortuneData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');
  const hour = searchParams.get('hour') || '';

  useEffect(() => {
    if (!category || !CATEGORIES.some(c => c.slug === category)) {
      navigate('/');
      return;
    }

    if (!year || !month || !day) {
      navigate('/');
      return;
    }

    const fetchFortune = async () => {
      try {
        setLoading(true);
        // In a real app, this would be a POST request to your API
        // For this demo, we'll simulate the API call
        const response = await fetch('/api/fortune', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category, year, month, day, hour }),
        });

        if (!response.ok) throw new Error('API fetch failed');
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError('운세를 가져오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    };

    fetchFortune();
  }, [category, year, month, day, hour, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#2D1B69] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#2D1B69] font-medium">AI가 사주를 분석 중입니다...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center max-w-sm">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-[#2D1B69] font-medium mb-6">{error || '데이터를 찾을 수 없습니다.'}</p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-[#2D1B69] text-white h-12 rounded-lg"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <FortuneResult
        category={category!}
        year={year!}
        month={month!}
        day={day!}
        hour={hour}
        data={data}
      />
    </main>
  );
};

export default FortuneResultPage;
