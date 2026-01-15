/**
 * Projects.tsx - 프로젝트 섹션 (홈페이지용)
 *
 * 메인 페이지에 표시되는 프로젝트 미리보기 섹션입니다.
 * - 좌측: 프로젝트 이미지
 * - 우측: 프로젝트 설명 및 태그
 */

import { Link } from "react-router-dom";
import SectionLayout from "../components/SectionLayout";
import { projectsData, getTagColor } from "../data/projectsData";
import "../styles/projects.css";

// 프로젝트 페이지 이동 전 스크롤 위치 저장
const saveScrollPosition = () => {
  sessionStorage.setItem("mainScrollY", window.scrollY.toString());
};

export default function Projects() {
  return (
    <SectionLayout id="projects">
      <h2 className="section-title">PROJECTS</h2>

      {/* 모든 프로젝트 보기 링크 */}
      <div className="projects-header">
        <Link to="/projects" className="projects-view-all" onClick={saveScrollPosition}>
          모든 프로젝트 보기
        </Link>
      </div>

      {/* 프로젝트 목록 */}
      <div className="projects-container">
        {projectsData.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="project-card-link"
            onClick={saveScrollPosition}
          >
            <div className="project-card">
              {/* 좌측: 이미지 */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              {/* 우측: 정보 */}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* 태그 */}
                <div className="project-tags">
                  {project.tags.map((tag, index) => {
                    const color = getTagColor(tag);
                    return (
                      <span
                        key={index}
                        className="project-tag"
                        style={{
                          backgroundColor: color.bg,
                          color: color.text,
                        }}
                      >
                        # {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
}
