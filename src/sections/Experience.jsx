import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
      py-24
      relative
      z-10

      bg-[#f8fafc]
      dark:bg-transparent

      transition-all
      duration-500
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader
          tag="Experience"
          title="My"
          highlight="Journey"
          subtitle="Professional experience and hands-on work in backend development."
        />

        {/* Timeline */}

        <div className="relative pl-10">

          {/* Timeline Line */}

          <div
            className="
            absolute
            left-0
            top-0
            bottom-0
            w-[2px]
            "
            style={{
              background:
                "linear-gradient(180deg,#00d9ff,#7c5cfc,transparent)",
            }}
          />

          <div className="flex flex-col gap-12">

            {experiences.map((exp, i) => (

              <Reveal
                key={exp.id}
                delay={i * 120}
                from="left"
              >
                <ExperienceItem exp={exp} />
              </Reveal>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

function ExperienceItem({ exp }) {
  return (
    <div className="relative">

      {/* Timeline Dot */}

      <div
        className="
        absolute
        rounded-full
        w-[14px]
        h-[14px]
        left-[-44px]
        top-[10px]
        "
        style={{
          background:
            "linear-gradient(135deg,#00d9ff,#7c5cfc)",

          border:
            "3px solid #050810",

          boxShadow:
            "0 0 16px rgba(0,217,255,0.5)",
        }}
      />

      {/* Card */}

      <div
        className="
        p-8
        rounded-2xl

        bg-white
        dark:bg-white/5

        border
        border-gray-200
        dark:border-white/10

        backdrop-blur-xl

        shadow-md
        dark:shadow-none

        hover:translate-x-2
        hover:shadow-xl

        dark:hover:border-white/20
        dark:hover:shadow-[0_20px_60px_rgba(0,217,255,0.15)]

        transition-all
        duration-500
        "
      >

        {/* Period */}

        <span
          className="
          inline-block
          text-xs
          font-semibold
          tracking-widest
          uppercase

          px-3
          py-1
          rounded-full
          mb-4
          "
          style={{
            color: "#00d9ff",
            background:
              "rgba(0,217,255,0.08)",

            border:
              "1px solid rgba(0,217,255,0.2)",
          }}
        >
          {exp.period}
        </span>

        {/* Role */}

        <h3
          className="
          font-display
          font-bold
          text-2xl
          mb-2

          text-gray-900
          dark:text-white
          "
        >
          {exp.role}
        </h3>

        {/* Company */}

        <p
          className="
          text-sm
          font-medium
          mb-4
          "
          style={{
            color: "#7c5cfc",
          }}
        >
          {exp.company}
        </p>

        {/* Description */}

        <p
          className="
          text-sm
          leading-relaxed
          mb-6

          text-slate-600
          dark:text-[#8891aa]
          "
        >
          {exp.desc}
        </p>

        {/* Skills */}

        <div className="flex flex-wrap gap-2">

          {exp.skills.map((skill) => (

            <span
              key={skill}
              className="
              text-xs
              font-medium

              px-3
              py-1.5
              rounded-full

              bg-purple-50
              dark:bg-[rgba(124,92,252,0.10)]

              border
              border-purple-200
              dark:border-[rgba(124,92,252,0.22)]

              text-purple-600
              dark:text-[#7c5cfc]

              hover:scale-105

              transition-all
              duration-300
              "
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </div>
  );
}