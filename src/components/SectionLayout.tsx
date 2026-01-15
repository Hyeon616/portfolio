/**
 * SectionLayout.tsx - 섹션 레이아웃 컴포넌트
 *
 * 각 섹션(About, Skills, Projects 등)의 공통 레이아웃을 제공합니다.
 *
 * @param id - 섹션 ID (네비게이션 스크롤 타겟)
 * @param children - 섹션 내용
 * @param minHeight - 최소 높이 (기본값: "100vh")
 * @param backgroundColor - 배경색 (기본값: "transparent")
 */

import type { ReactNode } from "react";

interface SectionLayoutProps {
  id: string;
  children: ReactNode;
  minHeight?: string;
  backgroundColor?: string;
  className?: string;
}

export default function SectionLayout({
  id,
  children,
  minHeight = "100vh",
  backgroundColor = "transparent",
  className = "",
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        minHeight,
        width: "100vw",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor,
      }}
    >
      {/* 콘텐츠 컨테이너 (최대 너비 제한) */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          padding: "80px 24px",
          textAlign: "center",
          color: "#213547",
        }}
      >
        {children}
      </div>
    </section>
  );
}
