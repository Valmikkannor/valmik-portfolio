import { useScrolled } from "../hooks/useScrollReveal";

export default function ScrollToTop() {
  const visible = useScrolled(400);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 200,
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        background: "linear-gradient(135deg,#00d9ff,#7c5cfc)",
        color: "#050810",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(0,217,255,0.3)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
