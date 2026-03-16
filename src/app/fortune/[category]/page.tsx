import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { CATEGORIES } from '../../../lib/categories';
import type { Category } from '../../../lib/categories';
import FortuneResult from '../../../components/fortune/FortuneResult';

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ year: string; month: string; day: string; hour?: string }>;
}

export const runtime = 'edge';

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { category } = await params;
  const { year, month, day } = await searchParams;
  const categoryData = CATEGORIES.find((c: Category) => c.slug === category);
  
  if (!categoryData) return {};
  
  const title = `${year}년생 ${categoryData.label} | 오늘의 사주`;
  const description = `${year}년 ${month}월 ${day}일생의 ${categoryData.label}을 AI가 무료로 풀이해드립니다.`;
  
  return {
    title,
    description,
    openGraph: { title, description, type: 'website' },
  };
}

export default async function FortuneCategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { year, month, day, hour } = await searchParams;
  
  const categoryData = CATEGORIES.find((c: Category) => c.slug === category);
  if (!categoryData) notFound();
  
  if (!year || !month || !day) redirect('/');
  
  // Server-side fetch from own API
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/fortune`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category, year, month, day, hour }),
    next: { revalidate: 3600 }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch fortune');
  }
  
  const data = await response.json();
  
  return (
    <FortuneResult
      category={category}
      year={year}
      month={month}
      day={day}
      hour={hour}
      data={data}
    />
  );
}
