import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saju-1.pages.dev'; // Replace with actual domain
  
  return [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' },
    { url: `${baseUrl}/tarot`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/goonghap`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/today`, priority: 0.9, changeFrequency: 'daily' },
    { url: `${baseUrl}/fortune/love`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/fortune/yearly`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/fortune/career`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/fortune/wealth`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/fortune/study`, priority: 0.8, changeFrequency: 'weekly' },
  ];
}