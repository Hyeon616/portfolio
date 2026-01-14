/**
 * Skills.tsx - 기술 스택 섹션
 *
 * 보유한 기술 스택과 도구를 카테고리별로 표시합니다.
 * - Language: 프로그래밍 언어
 * - Unity: 유니티 관련 기술
 * - DB: 데이터베이스
 * - DevOps: 개발 운영 도구
 */

import SectionLayout from "../components/SectionLayout";
import "../styles/skills.css";

export default function Skills() {
  return (
    <SectionLayout
      id="skills"
      backgroundColor="#f1bf09ff" /* 밝은 겨자색 */
      minHeight="50vh" /* 높이 조정: 50vh ~ 100vh 사이로 변경 */
    >
      <div className="skills-section">
        <h2 className="section-title">기술 스택 및 도구</h2>

        <div className="skills-card">
          {/* Language */}
          <div className="skills-row">
            <span className="skills-category">Language</span>
            <div className="skills-items">
              <span className="skill-tag skill-csharp">C#</span>
            </div>
          </div>

          {/* Unity */}
          <div className="skills-row">
            <span className="skills-category">Unity</span>
            <div className="skills-items">
              <span className="skill-tag skill-unity2d">2D</span>
              <span className="skill-tag skill-unity3d">3D</span>
              <span className="skill-tag skill-unityshader">Shader</span>
              <span className="skill-tag skill-unity">Addressable</span>
              <span className="skill-tag skill-unity">UniTask</span>
              <span className="skill-tag skill-unity">DOTween</span>
              <span className="skill-tag skill-unity">Mirror</span>
            </div>
          </div>

          {/* DB */}
          <div className="skills-row">
            <span className="skills-category">DB</span>
            <div className="skills-items">
              <span className="skill-tag skill-mariadb">MariaDB</span>
              <span className="skill-tag skill-firebase">Firebase</span>
            </div>
          </div>

          {/* DevOps */}
          <div className="skills-row">
            <span className="skills-category">DevOps</span>
            <div className="skills-items">
              <span className="skill-tag skill-git">Git</span>
              <span className="skill-tag skill-aws">AWS(EC2)</span>
              <span className="skill-tag skill-jenkins">Jenkins</span>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
