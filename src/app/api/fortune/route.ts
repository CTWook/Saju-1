import { NextResponse } from 'next/server';
import { Anthropic } from '@anthropic-ai/sdk';
import { getZodiac, getStem, getBranch, getElement } from '../../../lib/saju';
import { buildFortunePrompt } from '../../../lib/fortunePrompts';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { category, year, month, day, hour } = await req.json();

    if (!category || !year || !month || !day) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    const sajuData = {
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
      hour,
      zodiac: getZodiac(parseInt(year)),
      stem: getStem(parseInt(year)),
      branch: getBranch(parseInt(year)),
      element: getElement(parseInt(year)),
    };

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const client = new Anthropic({ apiKey });
    const prompt = buildFortunePrompt(category, sajuData);

    const msg = await client.messages.create({
      model: 'claude-3-5-sonnet-20240620', // Updated to latest available
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }],
    });

    const content = msg.content[0].type === 'text' ? msg.content[0].text : '';
    try {
      // Find the JSON part if Claude adds any preamble
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
      
      return NextResponse.json(parsed, {
        headers: { 'Cache-Control': 'public, s-maxage=3600' }
      });
    } catch (error) {
      console.error('Parse failure:', content);
      return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
