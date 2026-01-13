import type { ReactNode } from "react";

interface SectionLayoutProps {
    id:string;
    children: ReactNode;
    minHeight?: string;
    backgroundImage?: string;
    center?:boolean;
}

export default function SectionLayout({
    id,
    children,
    minHeight = "100vh",
    backgroundImage,
    center=false,
}: SectionLayoutProps){
    return (
        <section
            id={id}
            style={{
                minHeight,
                position: "relative",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: center ? "center" : "flex-start",
                backgroundImage: backgroundImage
                ? `url(${backgroundImage})`
                : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* 배경 오버레이 (이미지 있을 때만) */}
            {backgroundImage && (
                <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.45)",
                    zIndex: 1,
                }}
                />
            )}

            {/* 실제 콘텐츠 */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: "1200px",
                    padding: "80px 24px",
                    textAlign: "center",
                    color: backgroundImage ? "#fff" : "#000",
                }}
            >
                {children}
            </div>
        </section>
    )
}