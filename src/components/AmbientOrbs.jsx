/**
 * AmbientOrbs – decorative blurred color orbs fixed behind all content.
 */
export default function AmbientOrbs() {
  const orbs = [
    { size: 600, color: "#7c5cfc", top: "-200px", left: "-200px", delay: "0s" },
    { size: 500, color: "#00d9ff", bottom: "-200px", right: "-100px", delay: "4s" },
    { size: 400, color: "#ff4da6", top: "40%",     left: "60%",    delay: "8s" },
  ];

  return (
    <>
      <style>{`
        @keyframes floatOrb {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-30px) scale(1.05); }
          66%      { transform: translate(-20px,20px) scale(0.95); }
        }
      `}</style>
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: orb.color,
            top: orb.top,
            left: orb.left,
            bottom: orb.bottom,
            right: orb.right,
            filter: "blur(80px)",
            opacity: 0.16,
            pointerEvents: "none",
            zIndex: 0,
            animation: `floatOrb 12s ease-in-out ${orb.delay} infinite`,
          }}
        />
      ))}
    </>
  );
}
