import SectionLayout from "../components/SectionLayout";
import "../styles/educations.css";

export default function Educations(){
    return (
        <SectionLayout id="educations" >
            <h2 className="section-title">학력 및 교육</h2>

            <div className="educations-container">
                {/* 학력 */}
                <div className="education-item">
                    <div className="education-period-wrapper">
                        <span className="education-period">2021 - 2023</span>
                        <span className="education-status">졸업</span>
                    </div>
                    <div className="education-info">
                        <div className="education-name">한국교통대학교</div>
                        <div className="education-major">컴퓨터공학전공</div>
                    </div>
                </div>

                <div className="education-spacer"></div>

                <div className="education-item">
                    <div className="education-period-wrapper">
                        <span className="education-period">2014 - 2019</span>
                        <span className="education-status">졸업</span>
                    </div>
                    <div className="education-info">
                        <div className="education-name">충북도립대학교</div>
                        <div className="education-major">반도체전자과</div>
                    </div>
                </div>

                <hr className="education-divider" />

                {/* 교육 */}
                <div className="education-item">
                    <div className="education-period-wrapper">
                        <span className="education-period">2024.2 - 11</span>
                        <span className="education-status">수료</span>
                    </div>
                    <div className="education-info">
                        <div className="education-name">경일게임아카데미</div>
                        <div className="education-major">멀티 플랫폼 메타버스 게임 개발자 부트캠프</div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}
