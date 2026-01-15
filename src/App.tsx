/**
 * App.tsx - 메인 애플리케이션 컴포넌트
 *
 * 포트폴리오 웹사이트의 루트 컴포넌트입니다.
 * - 상단 고정 네비게이션 바
 * - 각 섹션 컴포넌트 렌더링
 * - 스크롤 시 나타나는 Top 버튼
 */

import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// 컴포넌트
import Navigation from "./components/Navigation";

// 섹션 컴포넌트
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Educations from "./sections/Educations";
import Contact from "./sections/Contact";

// 스타일
import "./styles/nav.css";

function App() {
  const location = useLocation();

  // 스크롤 상태 (10px 이상 스크롤 시 true)
  const [scrolled, setScrolled] = useState(false);

  // 저장된 스크롤 위치 복원 (렌더링 전에 실행)
  useLayoutEffect(() => {
    const savedScrollY = sessionStorage.getItem("mainScrollY");
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY));
      sessionStorage.removeItem("mainScrollY"); // 사용 후 제거
    }
  }, []);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 해시가 있으면 해당 섹션으로 이동 (다른 페이지에서 돌아올 때 - 네비게이션 바 높이 고려)
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 64; // 네비게이션 바 높이
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementTop - navHeight, behavior: "instant" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div>
      {/* ========== 상단 고정 네비게이션 ========== */}
      <Navigation />

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
