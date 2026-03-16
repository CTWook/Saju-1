export interface FortuneData {
  summary: string;
  overallScore: number; // 1-5
  scores: {
    love: number;
    wealth: number;
    health: number;
    career: number;
  };
  paragraphs: string[]; // 4-6 items
  monthly: { month: number; text: string }[]; // 12 items
  advice: string;
}

export interface TarotResult {
  interpretation: string[];
  keywords: string;
}

export interface SajuData {
  year: number;
  month: number;
  day: number;
  hour?: string;
  zodiac: string;
  stem: string;
  branch: string;
  element: string;
}
