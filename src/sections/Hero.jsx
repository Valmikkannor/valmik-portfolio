import Reveal from "../components/Reveal";
import Profile from "../assets/Valmik.png";
import Resume from "../assets/ValmikResume.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      z-10
      pt-[100px]
      px-6
      transition-all
      duration-500
      "
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}

          <div>

            {/* Badge */}

            <Reveal delay={0}>
              <div
                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                px-4
                py-2
                text-xs
                font-semibold
                tracking-wide
                mb-6

                bg-white/70
                dark:bg-white/5

                border
                border-gray-300
                dark:border-white/10

                backdrop-blur-xl

                text-cyan-500
                dark:text-cyan-400
                "
              >
                <span
                  className="
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-400
                  animate-pulse
                  "
                />

                Available for Opportunities
              </div>
            </Reveal>

            {/* Heading */}

            <Reveal delay={100}>
              <h1
                className="
                font-display
                font-extrabold
                leading-none
                tracking-tight
                mb-3
                text-gray-900
                dark:text-white
                "
                style={{
                  fontSize: "clamp(2.8rem,6vw,5rem)",
                }}
              >
                Valmik
                <br />

                <span
                  className="
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  bg-clip-text
                  text-transparent
                  "
                >
                  Kannor
                </span>
              </h1>
            </Reveal>

            {/* Title */}

            <Reveal delay={200}>
              <p
                className="
                font-display
                font-semibold
                mb-5
                text-lg
                text-gray-600
                dark:text-[#8891aa]
                "
              >
                MERN Stack Developer
              </p>
            </Reveal>

            {/* Description */}

            <Reveal delay={300}>
              <p
                className="
                text-base
                leading-relaxed
                mb-10
                max-w-lg
                text-gray-600
                dark:text-[#8891aa]
                "
              >
                Building scalable web applications
                and creating seamless digital
                experiences that users love.
              </p>
            </Reveal>

            {/* Buttons */}

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-4">

                {/* Projects */}

                <a
                  href="#projects"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-xl
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#00d9ff,#7c5cfc)",
                    color: "#050810",
                  }}
                >
                  <i className="fas fa-code" />

                  View Projects
                </a>

                {/* Resume */}

                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-xl
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1

                  bg-white/70
                  dark:bg-white/5

                  border
                  border-gray-300
                  dark:border-white/10

                  backdrop-blur-xl

                  text-gray-800
                  dark:text-white

                  hover:border-cyan-400
                  hover:text-cyan-400
                  "
                >
                  <i className="fas fa-download" />

                  Resume
                </a>

                {/* Contact */}

                <a
                  href="#contact"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-xl
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1

                  border
                  border-gray-300
                  dark:border-white/10

                  text-gray-700
                  dark:text-[#8891aa]

                  hover:border-purple-500
                  hover:text-purple-500
                  "
                >
                  <i className="fas fa-paper-plane" />

                  Contact
                </a>

              </div>
            </Reveal>

          </div>

          {/* RIGHT IMAGE */}

          <Reveal
            delay={200}
            className="
            flex
            items-center
            justify-center
            order-first
            md:order-last
            "
          >
            <div
              className="
              relative
              w-[220px]
              h-[220px]
              sm:w-[280px]
              sm:h-[280px]
              md:w-[320px]
              md:h-[320px]
              "
            >

              {/* Animated Ring */}

              <div
                className="absolute inset-[-16px] rounded-full opacity-60"
                style={{
                  background:
                    "conic-gradient(from 0deg,#00d9ff,#7c5cfc,#ff4da6,#00d9ff)",
                  animation:
                    "spin 6s linear infinite",
                }}
              />

              {/* Ring Gap */}

              <div
                className="
                absolute
                inset-[-13px]
                rounded-full

                bg-white
                dark:bg-[#050810]
                "
              />

              {/* Avatar */}

              <div
                className="
                relative
                z-10
                w-full
                h-full
                rounded-full
                overflow-hidden
                flex
                items-center
                justify-center
                "
                style={{
                  background:
                    "linear-gradient(135deg,#7c5cfc,#00d9ff)",
                  boxShadow:
                    "0 0 60px rgba(124,92,252,.35)",
                }}
              >

                <img
                  src={Profile}
                  alt="Valmik"
                  className="
                  w-full
                  h-full
                  object-cover
                  rounded-full
                  "
                />

              </div>

              {/* Stats */}

              <div
                className="
                absolute
                flex
                flex-col
                gap-2
                bottom-[-15px]
                left-[-10px]
                sm:left-[-35px]
                "
              >

                <StatCard
                  num="6+"
                  label="Months Experience"
                />

                <StatCard
                  num="3+"
                  label="Projects Built"
                />

              </div>

            </div>
          </Reveal>

        </div>

      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

function StatCard({ num, label }) {
  return (
    <div
      className="
      rounded-2xl
      px-4
      py-3
      min-w-[130px]

      bg-white/70
      dark:bg-[#081018]

      backdrop-blur-xl

      border
      border-gray-300
      dark:border-white/10
      "
    >
      <div
        className="
        font-display
        font-extrabold
        text-2xl
        bg-gradient-to-r
        from-cyan-400
        to-purple-500
        bg-clip-text
        text-transparent
        "
      >
        {num}
      </div>

      <div
        className="
        text-xs
        mt-1
        text-gray-600
        dark:text-[#8891aa]
        "
      >
        {label}
      </div>
    </div>
  );
}