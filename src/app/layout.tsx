import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "오늘의 사주 | AI 무료 운세 풀이",
  description: "생년월일만 입력하면 AI가 사주를 무료로 풀이해드립니다. 연애, 재물, 직장, 건강운 등 다양한 운세를 확인하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
