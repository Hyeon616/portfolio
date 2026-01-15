/**
 * Navigation.tsx - 공통 네비게이션 바 컴포넌트
 *
 * 모든 페이지에서 사용되는 상단 고정 네비게이션입니다.
 * - 메인 페이지: 해당 섹션으로 스크롤
 * - 다른 페이지: 메인 페이지로 이동 후 해당 섹션으로 스크롤
 */

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/nav.css";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects";
  const isProjectDetailPage = location.pathname.startsWith("/projects/") && location.pathname !== "/projects";

  // 스크롤 상태 (10px 이상 스크롤 시 true)
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * 섹션으로 이동
   * - 메인 페이지: 해당 섹션으로 스크롤
   * - 다른 페이지: 메인으로 이동 후 해당 섹션으로 스크롤
   */
  const navigateToSection = (sectionId: string) => {
    if (isHome) {
      // 메인 페이지에서는 바로 스크롤
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // 다른 페이지에서는 메인으로 이동 후 해시로 섹션 지정
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "64px",
        zIndex: 1000,
      }}
    >
      {/* 네비게이션 배경 (스크롤 시 또는 메인이 아닐 때 표시) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#fff",
          borderBottom: "1px solid #ddd",
          opacity: scrolled || !isHome ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      {/* 네비게이션 버튼 컨테이너 */}
      <div
        className={scrolled || !isHome ? "nav scrolled" : "nav"}
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "36px",
          padding: "0 24px",
        }}
      >
        {/* 프로젝트 페이지: 이전 페이지로 돌아가기 (스크롤 위치 유지) */}
        {(isProjectsPage || isProjectDetailPage) && (
          <button className="nav-button" onClick={() => navigate(-1)} style={{ marginRight: "auto" }}>
            ← 돌아가기
          </button>
        )}

        <button className="nav-button" onClick={() => navigateToSection("about")}>
          About
        </button>
        <button className="nav-button" onClick={() => navigateToSection("skills")}>
          Skills
        </button>
        <button className="nav-button" onClick={() => navigateToSection("projects")}>
          Projects
        </button>
        <button className="nav-button" onClick={() => navigateToSection("educations")}>
          Educations
        </button>
        <button className="nav-button" onClick={() => navigateToSection("contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
}
