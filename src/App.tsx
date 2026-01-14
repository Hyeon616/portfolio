/**
 * App.tsx - 메인 애플리케이션 컴포넌트
 *
 * 포트폴리오 웹사이트의 루트 컴포넌트입니다.
 * - 상단 고정 네비게이션 바
 * - 각 섹션 컴포넌트 렌더링
 * - 스크롤 시 나타나는 Top 버튼
 */

import { useEffect, useState } from "react";

// 섹션 컴포넌트
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Educations from "./sections/Educations";
import Contact from "./sections/Contact";

// 스타일
import "./styles/nav.css";

function App() {
  // 스크롤 상태 (10px 이상 스크롤 시 true)
  const [scrolled, setScrolled] = useState(false);

  /**
   * 특정 섹션으로 부드럽게 스크롤
   * @param id - 스크롤할 섹션의 ID
   */
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* ========== 상단 고정 네비게이션 ========== */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: "64px",
          zIndex: 1000,
        }}
      >
        {/* 네비게이션 배경 (스크롤 시 페이드인) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#fff",
            borderBottom: "1px solid #ddd",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />

        {/* 네비게이션 버튼 컨테이너 */}
        <div
          className={scrolled ? "nav scrolled" : "nav"}
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
          <button className="nav-button" onClick={() => scrollTo("about")}>
            About
          </button>
          <button className="nav-button" onClick={() => scrollTo("skills")}>
            Skills
          </button>
          <button className="nav-button" onClick={() => scrollTo("projects")}>
            Projects
          </button>
          <button className="nav-button" onClick={() => scrollTo("educations")}>
            Educations
          </button>
          <button className="nav-button" onClick={() => scrollTo("contact")}>
            Contact
          </button>
        </div>
      </nav>

      {/* ========== 메인 섹션들 ========== */}
      <About />
      <Skills />
      <Projects />
      <Educations />
      <Contact />

      {/* ========== Top 버튼 (스크롤 시 표시) ========== */}
      {scrolled && (
        <button
          className="top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "50px",
            height: "50px",
            padding: 0,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <img
            src="/topbutton.png"
            alt="Top"
            style={{ width: "100%", height: "100%" }}
          />
        </button>
      )}
    </div>
  );
}

export default App;
