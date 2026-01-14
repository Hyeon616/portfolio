import SectionLayout from "../components/SectionLayout"
import "../styles/about.css"

export default function About() {
    return (
        <SectionLayout id ="about">
                <img
                    src="/Top.png"
                    alt="Top"
                    className="top-image"
                />
                <h2 style={{ fontSize: "2rem"}}>안녕하세요.
                    <br></br>
                    Unity 클라이언트 개발자 우종현 입니다.
                </h2>

                <div className="about-card">
                    <h3 className="about-card-title"></h3>
                    <div className="about-card-content">
                        <div className="about-card-left">
                            <img
                                src="/portrait.jpg"
                                alt="Portrait"
                                className="portrait-image"
                            />
                        </div>
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
                                    <br></br>
                                    <tr>
                                        <th>
                                            <a href="https://github.com/Hyeon616" target="_blank" rel="noopener noreferrer">
                                                <img src="/github-logo.png" alt="GitHub" className="github-logo" />
                                            </a>
                                        </th>
                                        <td>
                                            <a href="https://github.com/Hyeon616" target="_blank" rel="noopener noreferrer" className="github-link">
                                                Git
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

        </SectionLayout>
    )
}