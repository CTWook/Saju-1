import { NextResponse } from 'next/server';
import { Anthropic } from '@anthropic-ai/sdk';
import { TAROT_CARDS } from '../../../lib/tarotCards';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { cardIndex, questionType, orientation } = await req.json();

    if (cardIndex === undefined || !questionType || !orientation) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    const card = TAROT_CARDS[cardIndex];
    if (!card) {
      return NextResponse.json({ error: 'Invalid card index' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const client = new Anthropic({ apiKey });
    const prompt = `당신은 타로 전문가입니다. 다음 카드를 한국어로 해석해주세요.
카드: ${card.koreanName}(${card.name}) - ${orientation === 'upright' ? '정방향' : '역방향'}
질문 유형: ${questionType}
순수 JSON만 출력 (마크다운 금지):
{ 
  "interpretation": ["단락1(150자이상)", "단락2(150자이상)"], 
  "keywords": "키워드1, 키워드2, 키워드3" 
}`;

    const msg = await client.messages.create({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }],
    });

    const content = msg.content[0].type === 'text' ? msg.content[0].text : '';
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
      return NextResponse.json(parsed);
    } catch (error) {
      console.error('Parse failure:', content);
      return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
