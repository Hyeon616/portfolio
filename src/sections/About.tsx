/**
 * About.tsx - 자기소개 섹션
 *
 * 프로필 사진과 기본 정보(이름, 연락처 등)를 표시합니다.
 */

import SectionLayout from "../components/SectionLayout";
import "../styles/about.css";

export default function About() {
  return (
    <SectionLayout id="about">
      {/* 상단 이미지 (호버 시 애니메이션) */}
      <img src="/Top.png" alt="Top" className="top-image" />

      {/* 인사말 */}
      <h2 style={{ fontSize: "2rem" }}>
        안녕하세요.
        <br />
        Unity 클라이언트 개발자 우종현 입니다.
      </h2>

      {/* 프로필 카드 */}
      <div className="about-card">
        <h3 className="about-card-title"></h3>
        <div className="about-card-content">
          {/* 프로필 사진 */}
          <div className="about-card-left">
            <img
              src="/portrait.jpg"
              alt="Portrait"
              className="portrait-image"
            />
          </div>

          {/* 기본 정보 테이블 */}
          <div className="about-card-right">
            <table className="about-info-table">
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>우종현</td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>1995.06.16</td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>충청북도 청주시</td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td>010-3002-0519</td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>whdgus616@gmail.com</td>
                </tr>

                {/* 구분선 */}
                <br />

                {/* 소셜 링크 - GitHub */}
                <tr>
                  <th>
                    <a
                      href="https://github.com/Hyeon616"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github-logo.png"
                        alt="GitHub"
                        className="github-logo"
                      />
                    </a>
                  </th>
                  <td>
                    <a
                      href="https://github.com/Hyeon616"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      Github
                    </a>
                  </td>
                </tr>

                {/* 소셜 링크 - YouTube */}
                <tr>
                  <th>
                    <a
                      href="https://youtube.com/@hyeon9869"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/youtube-logo.png"
                        alt="YouTube"
                        className="youtube-logo"
                      />
                    </a>
                  </th>
                  <td>
                    <a
                      href="https://youtube.com/@hyeon9869"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="youtube-link"
                    >
                      YouTube
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
