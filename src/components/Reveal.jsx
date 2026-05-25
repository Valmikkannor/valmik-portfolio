import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Reveal – wraps children in a fade+slide-up animation triggered by scroll.
 * Props:
 *   delay   – CSS transition-delay in ms  (default 0)
 *   from    – direction: "bottom" | "left" | "right"  (default "bottom")
 *   className – extra classes on the wrapper div
 */
export default function Reveal({ children, delay = 0, from = "bottom", className = "" }) {
  const { ref, isVisible } = useScrollReveal();

  const initial = {
    bottom: "translateY(32px)",
    left:   "translateX(-32px)",
    right:  "translateX(32px)",
  }[from];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : initial,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
