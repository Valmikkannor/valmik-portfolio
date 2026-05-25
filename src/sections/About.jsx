import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

const highlights = [
  {
    icon: "fa-server",
    color: "#00d9ff",
    bg: "rgba(0,217,255,0.12)",
    text: "Strong backend fundamentals with Node.js & Express",
  },
  {
    icon: "fa-react",
    color: "#61dafb",
    bg: "rgba(97,218,251,0.10)",
    text: "Modern frontend development with React.js",
  },
  {
    icon: "fa-database",
    color: "#ff4da6",
    bg: "rgba(255,77,166,0.12)",
    text: "Database design & management with MongoDB",
  },
  {
    icon: "fa-rocket",
    color: "#ffd166",
    bg: "rgba(255,209,102,0.12)",
    text: "Constantly upskilling and building new projects",
  },
];

export default function About() {
  return (
    <section
      id="about"
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

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Code Card */}

          <Reveal from="left">

            <div
              className="
              rounded-2xl
              p-10
              relative
              overflow-hidden

              bg-white
              dark:bg-white/5

              border
              border-gray-200
              dark:border-white/10

              backdrop-blur-xl

              shadow-lg
              dark:shadow-none
              "
            >

              {/* Top Gradient Bar */}

              <div
                className="
                absolute
                top-0
                left-0
                right-0
                h-[2px]
                "
                style={{
                  background:
                    "linear-gradient(90deg,#00d9ff,#7c5cfc,#ff4da6)",
                }}
              />

              <pre
                className="text-sm leading-loose overflow-x-auto"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                <code>
                  <span style={{ color: "#7c5cfc" }}>const</span>{" "}
                  <span style={{ color: "#e8d5a3" }}>developer</span>{" = {\n"}
                  {"  "}<span style={{ color: "#e8d5a3" }}>name</span>
                  {": "}<span style={{ color: "#00d9ff" }}>"Valmik Kannor"</span>{",\n"}
                  {"  "}<span style={{ color: "#e8d5a3" }}>role</span>
                  {": "}<span style={{ color: "#00d9ff" }}>"MERN Stack Developer"</span>{",\n"}
                  {"  "}<span style={{ color: "#e8d5a3" }}>experience</span>
                  {": "}<span style={{ color: "#00d9ff" }}>"6 months (Backend)"</span>{",\n"}
                  {"  "}<span style={{ color: "#e8d5a3" }}>stack</span>{": [\n"}
                  {"    "}<span style={{ color: "#00d9ff" }}>"MongoDB"</span>{", "}<span style={{ color: "#00d9ff" }}>"Express.js"</span>{",\n"}
                  {"    "}<span style={{ color: "#00d9ff" }}>"React.js"</span>{", "}<span style={{ color: "#00d9ff" }}>"Node.js"</span>{"\n"}
                  {"  ],\n"}
                  {"  "}<span style={{ color: "#e8d5a3" }}>passion</span>
                  {": "}<span style={{ color: "#00d9ff" }}>"Building the web 🚀"</span>{",\n"}
                  {"  "}<span style={{ color: "#e8d5a3" }}>available</span>
                  {": "}<span style={{ color: "#89d185" }}>true</span>{"\n"}
                  {"};\n\n"}
                  <span style={{ color: "#545c75", fontStyle: "italic" }}>
                    {"// Always learning, always building"}
                  </span>
                </code>
              </pre>

            </div>

          </Reveal>

          {/* Right Content */}

          <div>

            <SectionHeader
              tag="About Me"
              title="Turning Ideas Into"
              highlight="Reality"
            />

            <Reveal delay={100}>

              <p
                className="
                text-base
                leading-relaxed
                mb-4

                text-slate-600
                dark:text-[#8891aa]
                "
              >
                I'm a passionate MERN Stack Developer
                with a strong focus on building
                full-stack web applications that are
                functional and visually compelling.
              </p>

              <p
                className="
                text-base
                leading-relaxed
                mb-8

                text-slate-600
                dark:text-[#8891aa]
                "
              >
                With hands-on backend experience,
                I bring a deep understanding of
                server-side logic, REST APIs,
                and database architecture
                combined with React-powered
                frontends that create smooth
                user experiences.
              </p>

            </Reveal>

            {/* Highlight Cards */}

            <div className="flex flex-col gap-3">

              {highlights.map((h, i) => (

                <Reveal
                  key={i}
                  delay={150 + i * 60}
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-4
                    rounded-xl

                    bg-white
                    dark:bg-white/5

                    border
                    border-gray-200
                    dark:border-white/10

                    shadow-md
                    dark:shadow-none

                    hover:scale-[1.02]
                    hover:shadow-xl
                    dark:hover:shadow-none

                    transition-all
                    duration-300
                    "
                  >

                    <div
                      className="
                      w-10
                      h-10
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-sm
                      flex-shrink-0
                      "
                      style={{
                        background: h.bg,
                        color: h.color,
                      }}
                    >
                      <i className={`fas ${h.icon}`} />
                    </div>

                    <span
                      className="
                      text-sm
                      text-slate-700
                      dark:text-[#e8eaf2]
                      "
                    >
                      {h.text}
                    </span>

                  </div>

                </Reveal>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}