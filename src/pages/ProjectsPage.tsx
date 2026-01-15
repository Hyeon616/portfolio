/**
 * ProjectsPage.tsx - 프로젝트 목록 페이지 (/projects)
 *
 * 모든 프로젝트를 목록으로 보여주는 페이지입니다.
 * 메인 페이지의 Projects 섹션과 동일한 레이아웃을 사용합니다.
 */

import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import SectionLayout from "../components/SectionLayout";
import { projectsData, getTagColor } from "../data/projectsData";
import "../styles/projects.css";

export default function ProjectsPage() {
  return (
    <div>
      {/* 네비게이션 바 */}
      <Navigation />

      {/* Projects 섹션과 동일한 레이아웃 */}
      <SectionLayout id="projects">
        <h2 className="section-title">PROJECTS</h2>

        {/* 프로젝트 목록 */}
        <div className="projects-container">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="project-card-link"
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
    </div>
  );
}
