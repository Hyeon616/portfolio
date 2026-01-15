/**
 * main.tsx - 애플리케이션 진입점
 *
 * React Router를 사용한 라우팅 설정
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<App />} />

        {/* 프로젝트 목록 페이지 */}
        <Route path="/projects" element={<ProjectsPage />} />

        {/* 프로젝트 상세 페이지 */}
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
