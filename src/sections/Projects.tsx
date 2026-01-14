/**
 * Projects.tsx - 프로젝트 섹션
 *
 * 개인/팀 프로젝트 포트폴리오를 표시합니다.
 * - 좌측: 프로젝트 이미지
 * - 우측: 프로젝트 설명 및 태그
 *
 * 프로젝트 추가 방법:
 * projectsData 배열에 새 객체를 추가하세요.
 */

import SectionLayout from "../components/SectionLayout";
import "../styles/projects.css";

/* ========================================
   태그 색상 맵 (Skills 색상과 동일)
   - 태그명을 소문자로 입력하면 해당 색상 적용
   ======================================== */
const tagColors: Record<string, { bg: string; text: string }> = {
  // Language
  "c#": { bg: "#68217a", text: "#fff" },
  "c++": { bg: "#00599c", text: "#fff" },
  "python": { bg: "#3776ab", text: "#fff" },

  // Unity
  "unity2d": { bg: "#5fb3ff", text: "#fff" },
  "unity3d": { bg: "#7c7cff", text: "#fff" },
  "unity": { bg: "#222222", text: "#fff" },
  "shader": { bg: "#ff4ecd", text: "#fff" },
  "addressable": { bg: "#222222", text: "#fff" },
  "unitask": { bg: "#222222", text: "#fff" },
  "dotween": { bg: "#222222", text: "#fff" },
  "mirror": { bg: "#222222", text: "#fff" },

  // DB
  "mariadb": { bg: "#4479a1", text: "#fff" },
  "firebase": { bg: "#ffca28", text: "#333" },
  "mongodb": { bg: "#47a248", text: "#fff" },

  // DevOps
  "git": { bg: "#f05032", text: "#fff" },
  "github": { bg: "#181717", text: "#fff" },
  "docker": { bg: "#2496ed", text: "#fff" },
  "postman": { bg: "#ff6c37", text: "#fff" },
  "jenkins": { bg: "#d33833", text: "#fff" },
  "aws": { bg: "#ff9900", text: "#fff" },
};

/* ========================================
   프로젝트 데이터 타입
   ======================================== */
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;        // public 폴더 기준 경로 (예: "/projects/game1.png")
  tags: string[];       // 태그 (예: ["Unity2D", "C#", "Firebase"])
  link?: string;        // 프로젝트 링크 (선택)
}

/* ========================================
   프로젝트 데이터
   - 여기에 프로젝트를 추가하세요
   ======================================== */
const projectsData: Project[] = [
  {
    id: 1,
    title: "샘플 프로젝트 1",
    description: "이것은 샘플 프로젝트입니다. 프로젝트에 대한 설명을 여기에 작성하세요.",
    image: "/project-sample.png",
    tags: ["Unity2D", "C#", "Firebase"],
    link: "https://github.com/Hyeon616",
  },
  {
    id: 2,
    title: "샘플 프로젝트 2",
    description: "두 번째 샘플 프로젝트입니다. 3D 게임 프로젝트 설명을 작성할 수 있습니다.",
    image: "/project-sample.png",
    tags: ["Unity3D", "C#", "Mirror"],
    link: "https://github.com/Hyeon616",
  },
];

/* ========================================
   태그 색상 가져오기 함수
   ======================================== */
function getTagColor(tag: string): { bg: string; text: string } {
  const normalized = tag.toLowerCase().replace("#", "");
  return tagColors[normalized] || { bg: "#666", text: "#fff" };
}

export default function Projects() {
  return (
    <SectionLayout id="projects">
      <h2 className="section-title">PROJECTS</h2>

      {/* 모든 프로젝트 보기 링크 */}
      <div className="projects-header">
        <a
          href="https://github.com/Hyeon616?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-view-all"
        >
          모든 프로젝트 보기
        </a>
      </div>

      {/* 프로젝트 목록 */}
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
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
              <h3 className="project-title">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
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
        ))}
      </div>
    </SectionLayout>
  );
}
