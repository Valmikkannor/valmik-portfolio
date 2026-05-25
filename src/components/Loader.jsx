import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
      style={{
        background: "#050810",
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
        transition: "opacity 0.6s ease, visibility 0.6s ease",
      }}
    >
      {/* Logo */}
      <span
        className="font-display font-extrabold text-gradient"
        style={{ fontSize: "clamp(2rem,5vw,3rem)", letterSpacing: "-1px" }}
      >
        VK.
      </span>

      {/* Progress bar */}
      <div
        className="w-48 h-0.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg,#00d9ff,#7c5cfc,#ff4da6)",
            width: hidden ? "100%" : "0%",
            animation: "loadBar 1.6s ease forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes loadBar { to { width: 100%; } }
      `}</style>
    </div>
  );
}
