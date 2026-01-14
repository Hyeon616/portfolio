import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Educations from "./sections/Educations";
import Contact from "./sections/Contact";
import { useEffect, useState } from "react";

import "./styles/nav.css";

function App() {
    const [scrolled, setScrolled] = useState(false);

    const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      element?.scrollIntoView({behavior:"smooth"});
    };
  
    useEffect(() => {
      const onScroll = () => {
      setScrolled(window.scrollY >10);
    };

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll);
    },[]);


    return (
      <div>
        {/* 상단 고정 네비게이션 */}
        <nav
          style={{
             position: "fixed",
             top: 0,
             width: "100%",
             height: "64px",
             zIndex: 1000,
          }}
        >
          {/* 배경 레이어 */}
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

          {/* 버튼 레이어 */}
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
            <button
              className="nav-button"
              onClick={()=> scrollTo("about")}>
                About
            </button>

            <button
              className="nav-button"
              onClick={()=> scrollTo("skills")}>
                Skills
            </button>

            <button
              className="nav-button"
              onClick={()=> scrollTo("projects")}>
                Projects
            </button>

            <button 
              className="nav-button"
              onClick={()=> scrollTo("educations")}>
                Educations
            </button>

            <button 
              className="nav-button"
              onClick={()=> scrollTo("contact")}>
                Contact
            </button>

          </div>
        </nav>
            <About />
            <Skills />
            <Projects />
            <Educations />
            <Contact />
      </div>
    )

};

export default App;
  