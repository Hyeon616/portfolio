import SectionLayout from "../components/SectionLayout";
import "../styles/contact.css";

export default function Contact(){
    return (
        <SectionLayout id="contact" minHeight="60vh">
            <h2>Contact</h2>
            <p>Email / GitHub / etc</p>
            <img
                src="/HYEON.png"
                alt="HYEON"
                className="hyeon-image"
            />
        </SectionLayout>
    )
}