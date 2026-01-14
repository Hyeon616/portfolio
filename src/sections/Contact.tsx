import SectionLayout from "../components/SectionLayout";
import "../styles/contact.css";

export default function Contact(){
    return (
        <SectionLayout id="contact" minHeight="60vh">
            <h2 className="section-title">CONTACT</h2>

            <div className="contact-container">
                <p className="contact-name">우종현 · Jonghyeon Woo</p>
                <p className="contact-position">게임 개발 직군 희망</p>

                <div className="contact-info">
                    <p>이메일 : whdgus616@gmail.com</p>
                    <p>H.P : 010 - 3002 - 0519</p>
                </div>

                <div className="contact-social">
                    <a href="https://github.com/Hyeon616" target="_blank" rel="noopener noreferrer" className="contact-social-item">
                        <img src="/github-logo.png" alt="GitHub" className="contact-social-logo" />
                        <span>@Hyeon616</span>
                    </a>
                    <a href="https://youtube.com/@hyeon9869" target="_blank" rel="noopener noreferrer" className="contact-social-item">
                        <img src="/youtube-logo.png" alt="YouTube" className="contact-social-logo" />
                        <span>@Hyeon</span>
                    </a>
                </div>
            </div>
        </SectionLayout>
    )
}
