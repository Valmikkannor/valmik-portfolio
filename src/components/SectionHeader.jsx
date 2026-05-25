import Reveal from "./Reveal";

/**
 * SectionHeader – consistent tag + title + subtitle block used across sections.
 */
export default function SectionHeader({ tag, title, highlight, subtitle }) {
  return (
    <Reveal className="mb-16">
      {/* Tag line */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="block w-8 h-0.5"
          style={{ background: "linear-gradient(90deg, #00d9ff, transparent)" }}
        />
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "#00d9ff" }}
        >
          {tag}
        </span>
      </div>

      {/* Title */}
      <h2
        className="font-display font-extrabold leading-tight tracking-tight mb-3"
        style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
      >
        {title}{" "}
        <span className="text-gradient">{highlight}</span>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-[#8891aa] text-base leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
