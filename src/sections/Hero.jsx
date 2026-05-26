import Reveal from "../components/Reveal";
import Profile from "../assets/Valmik.png";
import Resume from "../assets/ValmikResume.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      min-h-[35vh]
      flex
      items-center
      relative
      z-10
      pt-28
      pb-12
      px-6
      
      "
    >
      <div className="max-w-6xl mx-auto w-full">

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          md:gap-14
          items-center
          "
        >

          {/* LEFT CONTENT */}

          <div className="order-2 md:order-1">

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

            <Reveal delay={100}>
              <h1
                className="
                font-display
                font-extrabold
                leading-none
                tracking-tight
                mb-4
                text-gray-900
                dark:text-white
                "
                style={{
                  fontSize: "clamp(2.5rem,8vw,5rem)",
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

            <Reveal delay={200}>
              <p
                className="
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

            <Reveal delay={300}>
              <p
                className="
                text-base
                leading-relaxed
                mb-8
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

            {/* BUTTONS */}

            <Reveal delay={400}>
              <div
                className="
                flex
                flex-col
                sm:flex-row
                gap-4
                "
              >

                <a
                  href="#projects"
                  className="
                  inline-flex
                  justify-center
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl
                  font-bold

                  hover:-translate-y-1
                  transition-all
                  duration-300
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#00d9ff,#7c5cfc)",
                    color: "#050810",
                  }}
                >
                  View Projects
                </a>

                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  justify-center
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl

                  bg-white/70
                  dark:bg-white/5

                  border
                  border-gray-300
                  dark:border-white/10

                  hover:border-cyan-400
                  hover:text-cyan-400

                  transition-all
                  duration-300
                  "
                >
                  Resume
                </a>

                <a
                  href="#contact"
                  className="
                  inline-flex
                  justify-center
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl

                  border
                  border-gray-300
                  dark:border-white/10

                  hover:border-purple-500
                  hover:text-purple-500

                  transition-all
                  duration-300
                  "
                >
                  Contact
                </a>

              </div>
            </Reveal>

          </div>

          {/* RIGHT IMAGE */}

          <Reveal
            delay={200}
            className="
            order-1
            md:order-2
            flex
            justify-center
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

              <div
                className="
                absolute
                inset-[-16px]
                rounded-full
                opacity-60
                "
                style={{
                  background:
                    "conic-gradient(from 0deg,#00d9ff,#7c5cfc,#ff4da6,#00d9ff)",
                  animation:
                    "spin 6s linear infinite",
                }}
              />

              <div
                className="
                absolute
                inset-[-13px]
                rounded-full
                bg-white
                dark:bg-[#050810]
                "
              />

              <div
                className="
                relative
                z-10
                w-full
                h-full
                rounded-full
                overflow-hidden
                "
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

              <div
                className="
                absolute
                flex
                flex-col
                gap-2
                bottom-[-20px]
                left-0
                sm:left-[-15px]
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
          to{
            transform:rotate(360deg);
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
        font-bold
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