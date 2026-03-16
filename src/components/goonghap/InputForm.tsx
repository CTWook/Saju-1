import React, { useState } from 'react';

interface UserInput {
  year: string;
  month: string;
  day: string;
  gender: 'male' | 'female';
}

interface InputFormProps {
  onSubmit: (user1: UserInput, user2: UserInput) => void;
  loading: boolean;
}

const UserBlock = ({ title, data, setData }: { title: string, data: UserInput, setData: React.Dispatch<React.SetStateAction<UserInput>> }) => {
  const years = Array.from({ length: 71 }, (_, i) => 1940 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex-1 bg-white p-6 rounded-2xl border border-[#E5E5EE]">
      <h3 className="text-[#2D1B69] font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <select
            value={data.year}
            onChange={(e) => setData({ ...data, year: e.target.value })}
            className="h-10 bg-gray-50 border border-gray-200 rounded-lg px-2 text-sm"
          >
            {years.map(y => <option key={y} value={y.toString()}>{y}년</option>)}
          </select>
          <select
            value={data.month}
            onChange={(e) => setData({ ...data, month: e.target.value })}
            className="h-10 bg-gray-50 border border-gray-200 rounded-lg px-2 text-sm"
          >
            {months.map(m => <option key={m} value={m.toString()}>{m}월</option>)}
          </select>
          <select
            value={data.day}
            onChange={(e) => setData({ ...data, day: e.target.value })}
            className="h-10 bg-gray-50 border border-gray-200 rounded-lg px-2 text-sm"
          >
            {days.map(d => <option key={d} value={d.toString()}>{d}일</option>)}
          </select>
        </div>
        <div className="flex gap-2">
          {(['male', 'female'] as const).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setData({ ...data, gender: g })}
              className={`flex-1 h-10 rounded-lg text-sm font-medium border transition-colors ${
                data.gender === g ? 'bg-[#2D1B69] text-white border-[#2D1B69]' : 'bg-white text-gray-500 border-gray-200'
              }`}
            >
              {g === 'male' ? '남성' : '여성'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const InputForm: React.FC<InputFormProps> = ({ onSubmit, loading }) => {
  const [user1, setUser1] = useState<UserInput>({ year: '1990', month: '1', day: '1', gender: 'male' });
  const [user2, setUser2] = useState<UserInput>({ year: '1990', month: '1', day: '1', gender: 'female' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user1, user2);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <UserBlock title="나" data={user1} setData={setUser1} />
        <div className="text-3xl text-pink-400 animate-pulse">❤️</div>
        <UserBlock title="상대방" data={user2} setData={setUser2} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-[#C9A84C] text-white rounded-xl font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {loading ? '궁합을 보는 중...' : '궁합 보기 →'}
      </button>
    </form>
  );
};

export default InputForm;