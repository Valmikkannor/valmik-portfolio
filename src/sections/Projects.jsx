import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
      py-24
      relative
      z-10

      bg-[#f8fafc]
      dark:bg-[#080c18]

      transition-all
      duration-500
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader
          tag="Projects"
          title="Featured"
          highlight="Work"
          subtitle="A selection of projects that showcase my full-stack development skills."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {projects.map((project, i) => (

            <Reveal
              key={project.id}
              delay={i * 100}
            >
              <ProjectCard project={project} />
            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="
      group
      rounded-2xl
      overflow-hidden
      flex
      flex-col
      h-full

      bg-white
      dark:bg-white/5

      border
      border-gray-200
      dark:border-white/10

      backdrop-blur-xl

      shadow-md
      dark:shadow-none

      transition-all
      duration-500

      hover:-translate-y-2
      hover:shadow-2xl

      dark:hover:shadow-[0_30px_80px_rgba(0,217,255,0.15)]
      "
      style={{
        opacity: project.coming ? 0.9 : 1,
      }}
    >

      {/* Banner */}

      <div
        className="
        relative
        h-44
        flex
        items-center
        justify-center
        overflow-hidden
        "
        style={{
          background: `linear-gradient(
          135deg,
          ${project.bgGradient},
          rgba(255,255,255,.03)
          )`,
        }}
      >

        <span
          className="
          text-[3.5rem]
          transition-all
          duration-500
          group-hover:scale-110
          "
        >
          {project.emoji}
        </span>

        {project.coming && (

          <span
            className="
            absolute
            top-4
            right-4
            text-xs
            font-bold
            px-3
            py-1
            rounded-full
            "
            style={{
              background:
                "linear-gradient(135deg,#ffd166,#ffaa00)",
              color: "#050810",
            }}
          >
            🚧 Coming Soon
          </span>

        )}

      </div>

      {/* Content */}

      <div className="p-7 flex flex-col flex-1">

        {/* Tags */}

        <div className="flex flex-wrap gap-2 mb-4">

          {project.tags.map((tag, i) => (

            <span
              key={i}
              className="
              text-xs
              font-semibold
              px-3
              py-1
              rounded-full
              "
              style={
                i === 0
                  ? {
                      background:
                        `${project.accentColor}18`,
                      color:
                        project.accentColor,
                      border:
                        `1px solid ${project.accentColor}33`,
                    }
                  : {
                      background:
                        "rgba(255,255,255,.05)",
                      color:
                        "#8891aa",
                      border:
                        "1px solid rgba(255,255,255,.1)",
                    }
              }
            >
              {tag}
            </span>

          ))}

        </div>

        {/* Project Name */}

        <h3
          className="
          font-display
          font-bold
          text-xl
          mb-3

          text-gray-900
          dark:text-white
          "
        >
          {project.name}
        </h3>

        {/* Description */}

        <p
          className="
          text-sm
          leading-relaxed
          flex-1
          mb-6

          text-slate-600
          dark:text-[#8891aa]
          "
        >
          {project.desc}
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap gap-2 mt-auto">

          {project.coming ? (

            <span
              className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              text-sm
              font-semibold

              bg-gray-100
              dark:bg-white/5

              border
              border-gray-300
              dark:border-white/10

              text-gray-500
              dark:text-[#545c75]
              "
            >
              <i className="fas fa-clock" />
              Coming Soon
            </span>

          ) : (
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                text-sm
                font-bold

                transition-all
                duration-300

                hover:scale-105
                "
                style={{
                  background:
                    "linear-gradient(135deg,#00d9ff,#7c5cfc)",
                  color: "#050810",
                  textDecoration: "none",
                }}
              >
                <i className="fas fa-external-link-alt" />

                Live Demo
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                text-sm
                font-semibold

                bg-gray-100
                dark:bg-white/5

                border
                border-gray-300
                dark:border-white/10

                text-gray-700
                dark:text-[#8891aa]

                hover:border-cyan-400
                hover:text-cyan-400

                transition-all
                duration-300
                "
              >
                <i className="fab fa-github" />

                GitHub
              </a>
            </>
          )}

        </div>

      </div>

    </div>
  );
}