import type { ReactNode } from "react";

interface SectionLayoutProps {
  id: string;
  children: ReactNode;
  minHeight?: string;
  backgroundColor?: string;
}

export default function SectionLayout({
  id,
  children,
  minHeight = "100vh",
  backgroundColor = "transparent",
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      style={{
        minHeight,
        width: "100vw",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          padding: "80px 24px",
          textAlign: "center",
          color: "#213547",
        }}
      >
        {children}
      </div>
    </section>
  );
}
