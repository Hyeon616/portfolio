/**
 * ProjectDetailPage.tsx - 프로젝트 상세 페이지 (/projects/:slug)
 *
 * 개별 프로젝트의 상세 정보를 보여주는 페이지입니다.
 */

import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import Navigation from "../components/Navigation";
import SectionLayout from "../components/SectionLayout";
import { getProjectBySlug, getTagColor } from "../data/projectsData";
import "../styles/projects.css";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // 프로젝트를 찾지 못한 경우
  if (!project) {
    return (
      <div className="projects-page">
        <Navigation />
        <div className="projects-page-content">
          <div className="projects-page-header">
            <h1 className="projects-page-title">프로젝트를 찾을 수 없습니다</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* 네비게이션 바 */}
      <Navigation />

      {/* SectionLayout으로 중앙 정렬 */}
      <SectionLayout id="project-detail">
        {/* 프로젝트 상세 */}
        <div className="project-detail">
          {/* 이미지 */}
          <div className="project-detail-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="project-detail-image"
            />
          </div>

          {/* 정보 */}
          <div className="project-detail-info">
            <h1 className="project-detail-title">{project.title}</h1>

            {/* 태그 */}
            <div className="project-tags">
              {project.tags.map((tag, index) => {
                const color = getTagColor(tag);
                return (
                  <span
                    key={index}
                    className="project-tag project-tag-visible"
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

            <p className="project-detail-description">{project.description}</p>

            {/* 상세 내용 (마크다운 지원) */}
            {project.content && (
              <div className="project-detail-content">
                <Markdown>{project.content}</Markdown>
              </div>
            )}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
