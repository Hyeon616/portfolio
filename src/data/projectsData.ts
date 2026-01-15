/**
 * projectsData.ts - 프로젝트 데이터
 *
 * 프로젝트 정보를 관리하는 중앙 데이터 파일입니다.
 * 새 프로젝트 추가 시 이 배열에 객체를 추가하세요.
 */

/* ========================================
   태그 색상 맵 (Skills 색상과 동일)
   ======================================== */
export const tagColors: Record<string, { bg: string; text: string }> = {
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
   태그 색상 가져오기 함수
   - #은 제거하지 않고 소문자로만 변환
   ======================================== */
export function getTagColor(tag: string): { bg: string; text: string } {
  const normalized = tag.toLowerCase();
  return tagColors[normalized] || { bg: "#666", text: "#fff" };
}

/* ========================================
   프로젝트 데이터 타입
   ======================================== */
export interface Project {
  id: number;
  slug: string;         // URL용 슬러그 (예: "sample-project-1")
  title: string;
  description: string;
  image: string;        // public 폴더 기준 경로 (예: "/projects/game1.png")
  tags: string[];       // 태그 (예: ["Unity2D", "C#", "Firebase"])
  content?: string;     // 상세 페이지 내용 (선택)
}

/* ========================================
   프로젝트 데이터
   - 여기에 프로젝트를 추가하세요
   ======================================== */
export const projectsData: Project[] = [
  {
    id: 1,
    slug: "sample-project-1",
    title: "샘플 프로젝트 1",
    description: "이것은 샘플 프로젝트입니다. 프로젝트에 대한 설명을 여기에 작성하세요.",
    image: "/project-sample.png",
    tags: ["Unity2D", "C#", "Firebase"],
    content: `
## 주요 기능
- 실시간 멀티플레이어 지원
- Firebase 연동 로그인

### 기술적 특징
일반 텍스트입니다.
**볼드 텍스트**와 *이탤릭 텍스트*도 가능합니다.

`,
  },
  {
    id: 2,
    slug: "sample-project-2",
    title: "샘플 프로젝트 2",
    description: "두 번째 샘플 프로젝트입니다. 3D 게임 프로젝트 설명을 작성할 수 있습니다.",
    image: "/project-sample.png",
    tags: ["Unity3D", "C#", "Mirror"],
    content: "프로젝트 상세 내용을 여기에 작성합니다.",
  },
];

/* ========================================
   유틸리티 함수
   ======================================== */

// slug로 프로젝트 찾기
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}
