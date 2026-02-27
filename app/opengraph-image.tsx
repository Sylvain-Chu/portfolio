import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sylvain Churlet | Ingénieur Logiciel & Développeur Fullstack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#18181b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "8px",
            height: "100%",
            background: "#33E092",
          }}
        />

        {/* Logo SC */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            background: "#000000",
            borderRadius: "12px",
            marginBottom: "32px",
            fontSize: "28px",
            fontWeight: 800,
            color: "#33E092",
          }}
        >
          SC
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Sylvain Churlet
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 400,
            color: "#33E092",
            marginBottom: "48px",
          }}
        >
          Ingénieur Logiciel & Développeur Fullstack
        </div>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  background: "rgba(51, 224, 146, 0.1)",
                  border: "1px solid rgba(51, 224, 146, 0.3)",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  color: "#a1a1aa",
                  fontSize: "18px",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            color: "#52525b",
            fontSize: "20px",
          }}
        >
          sylvain.churlet.eu
        </div>
      </div>
    ),
    size
  );
}
