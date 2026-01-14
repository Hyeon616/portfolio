/**
 * Contact.tsx - 연락처 섹션
 *
 * 연락처 정보와 소셜 링크를 표시합니다.
 * - 이름, 직군
 * - 이메일, 전화번호
 * - GitHub, YouTube 소셜 링크
 */

import SectionLayout from "../components/SectionLayout";
import "../styles/contact.css";

export default function Contact() {
  return (
    <SectionLayout id="contact" minHeight="60vh">
      <h2 className="section-title">CONTACT</h2>

      <div className="contact-container">
        {/* 이름 및 희망 직군 */}
        <p className="contact-name">우종현 · Jonghyeon Woo</p>
        <p className="contact-position">게임 개발 직군 희망</p>

        {/* 연락처 정보 */}
        <div className="contact-info">
          <p>이메일 : whdgus616@gmail.com</p>
          <p>H.P : 010 - 3002 - 0519</p>
        </div>

        {/* 소셜 링크 */}
        <div className="contact-social">
          {/* GitHub */}
          <a
            href="https://github.com/Hyeon616"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-item"
          >
            <img src="/github-logo.png" alt="GitHub" className="contact-social-logo" />
            <span>@Hyeon616</span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@hyeon9869"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-item"
          >
            <img src="/youtube-logo.png" alt="YouTube" className="contact-social-logo" />
            <span>@Hyeon</span>
          </a>
        </div>
      </div>
    </SectionLayout>
  );
}
