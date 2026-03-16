import { SajuData } from '../types';

export const buildFortunePrompt = (category: string, sajuData: SajuData): string => {
  let prompt = `당신은 한국의 전통 사주명리학 전문가입니다.
사용자의 사주 정보를 바탕으로 운세를 따뜻하고 위로가 되는 어조로 풀이해주세요.
지나치게 낙관적이지 않게 현실적인 조언도 포함하세요.
반드시 순수 JSON만 출력하세요. 마크다운 코드블록(\`\\\\`)을 절대 사용하지 마세요.

사주 정보:
생년: ${sajuData.year}년 / 띠: ${sajuData.zodiac} / 천간: ${sajuData.stem} / 지지: ${sajuData.branch} / 오행: ${sajuData.element} / 태어난 시: ${sajuData.hour || '모름'}

Required JSON schema:
{
  "summary": "한 문장 요약",
  "overallScore": 1에서5사이정수,
  "scores": { "love": 정수, "wealth": 정수, "health": 정수, "career": 정수 },
  "paragraphs": ["단락1(200자이상)", "단락2(200자이상)", "단락3(200자이상)", "단락4(200자이상)"],
  "monthly": [{"month":1,"text":"1월운세(100자이상)"},{"month":2,...},...총12개],
  "advice": "개운조언(150자이상)"
}
`;

  switch (category) {
    case 'love':
    case 'yearly':
      prompt += '\n인간관계, 이성운, 인연의 흐름을 중점적으로 풀이하세요.';
      break;
    case 'career':
      prompt += '\n이직 타이밍, 직장 환경, 동료 관계를 중점적으로 풀이하세요.';
      break;
    case 'wealth':
      prompt += '\n투자 시기, 금전 흐름, 주의해야 할 시기를 중점적으로 풀이하세요.';
      break;
    case 'study':
      prompt += '\n집중 시기, 시험 타이밍, 학습 환경을 중점적으로 풀이하세요.';
      break;
    case 'today':
      prompt += '\nparagraphs는 2개로 단축하고 monthly 배열은 빈 배열로 반환하세요.';
      break;
  }

  return prompt;
};
