import React from 'react';
import AdBanner from '../layout/AdBanner';

interface CompatResultProps {
  score: number;
  data: {
    summary: string;
    paragraphs: string[];
    scores: {
      emotion: number;
      personality: number;
      wealth: number;
      future: number;
    };
  };
}

const ProgressBar: React.FC<{ label: string; score: number }> = ({ label, score }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-[13px] font-medium text-[#2D1B69]">
      <span>{label}</span>
      <span>{score}%</span>
    </div>
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#2D1B69] transition-all duration-1000"
        style={{ width: `${score}%` }}
      />
    </div>
  </div>
);

const CompatResult: React.FC<CompatResultProps> = ({ score, data }) => {
  const scoreColor = score >= 80 ? 'text-green-500' : score >= 60 ? 'text-amber-500' : 'text-coral-500';

  return (
    <div className="max-w-xl mx-auto px-4 py-8 bg-white rounded-2xl shadow-sm border border-[#E5E5EE] mt-10">
      <div className="text-center mb-8">
        <div className="relative inline-block w-24 h-24 mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48" cy="48" r="44" fill="none" stroke="#F3F4F6" strokeWidth="8"
            />
            <circle
              cx="48" cy="48" r="44" fill="none" stroke="currentColor" strokeWidth="8"
              className={scoreColor}
              strokeDasharray={`${2 * Math.PI * 44}`}
              strokeDashoffset={`${2 * Math.PI * 44 * (1 - score / 100)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${scoreColor}`}>{score}</span>
          </div>
        </div>
        <p className="text-[#2D1B69] font-bold text-lg mb-2">종합 궁합 점수</p>
        <p className="text-gray-500 text-sm leading-relaxed">{data.summary}</p>
      </div>

      <div className="py-6">
        <div className="text-[10px] text-gray-400 mb-1 text-center">광고</div>
        <AdBanner slot="궁합_중간" format="rectangle" />
      </div>

      <div className="space-y-5 mb-10">
        <ProgressBar label="감정궁합" score={data.scores.emotion} />
        <ProgressBar label="성격궁합" score={data.scores.personality} />
        <ProgressBar label="재물궁합" score={data.scores.wealth} />
        <ProgressBar label="미래궁합" score={data.scores.future} />
      </div>

      <div className="space-y-6 text-[#2A2A3A] text-base leading-relaxed mb-10">
        {data.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100">
        <button
          onClick={() => {
            if (window.navigator.share) {
              window.navigator.share({
                title: '나와 상대방의 궁합은?',
                text: `나와 상대방의 궁합은 ${score}점! 당신의 궁합도 확인해보세요.`,
                url: window.location.href,
              });
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('링크가 복사되었습니다!');
            }
          }}
          className="h-12 bg-[#FEE500] text-[#3C1E1E] rounded-xl font-bold text-sm flex items-center justify-center gap-2"
        >
          <span>💬</span> 카카오 공유
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert('복사됨!');
          }}
          className="h-12 bg-gray-100 text-[#2D1B69] rounded-xl font-bold text-sm"
        >
          링크 복사
        </button>
      </div>
    </div>
  );
};

export default CompatResult;
