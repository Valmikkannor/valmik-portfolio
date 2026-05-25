import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { skills } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
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
          tag="Skills"
          title="My"
          highlight="Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >
          {skills.map((cat, i) => (

            <Reveal
              key={cat.category}
              delay={i * 80}
            >
              <SkillCard category={cat} />
            </Reveal>

          ))}
        </div>

      </div>
    </section>
  );
}

function SkillCard({ category }) {
  return (
    <div
      className="
      p-8
      rounded-2xl
      cursor-default

      bg-white
      dark:bg-white/5

      border
      border-gray-200
      dark:border-white/10

      backdrop-blur-xl

      shadow-md
      dark:shadow-none

      hover:-translate-y-2
      hover:shadow-xl
      dark:hover:shadow-[0_20px_60px_rgba(0,217,255,0.15)]

      transition-all
      duration-500
      "
    >

      {/* Top Accent Line */}

      <div
        className="
        absolute
        top-0
        left-0
        right-0
        h-[2px]
        rounded-t-2xl
        "
        style={{
          background: `linear-gradient(
            90deg,
            ${category.accent},
            transparent
          )`,
        }}
      />

      {/* Icon */}

      <div
        className="
        w-14
        h-14
        rounded-xl
        flex
        items-center
        justify-center
        text-xl
        mb-6
        "
        style={{
          background: category.bg,
        }}
      >
        {category.icon}
      </div>

      {/* Category Title */}

      <h3
        className="
        font-display
        font-bold
        text-lg
        mb-5
        "
        style={{
          color: category.accent,
        }}
      >
        {category.category}
      </h3>

      {/* Skills */}

      <div className="flex flex-wrap gap-2">

        {category.items.map((skill) => (

          <span
            key={skill.name}
            className="
            inline-flex
            items-center
            gap-2
            px-3
            py-2
            rounded-full
            text-xs
            font-medium

            bg-gray-100
            dark:bg-white/5

            border
            border-gray-200
            dark:border-white/10

            text-gray-700
            dark:text-[#e8eaf2]

            hover:scale-105
            hover:border-cyan-400

            transition-all
            duration-300
            "
          >
            <span
              className="
              w-2
              h-2
              rounded-full
              flex-shrink-0
              "
              style={{
                background: skill.color,
              }}
            />

            {skill.name}

          </span>

        ))}

      </div>

    </div>
  );
}