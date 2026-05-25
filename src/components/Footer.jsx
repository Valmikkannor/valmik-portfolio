const socials = [
  {
    icon: "fab fa-github",
    href: "https://github.com/valmikkannor",
    label: "GitHub",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/valmik-kannor-3102b2222/",
    label: "LinkedIn",
  },
  {
    icon: "fas fa-envelope",
    href: "mailto:valmikkannor844@gmail.com",
    label: "Email",
  },
];

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
 


  return (
    <footer
      className="
      relative
      z-10
      mt-0

      bg-[#f8fafc]
      dark:bg-[#080c18]

      border-t
      border-gray-200
      dark:border-white/10

      transition-all
      duration-500
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div
          className="
          grid
          md:grid-cols-3
          gap-10
          "
        >
          {/* Left */}

          <div>

            <h2
              className="
              text-2xl
              font-bold

              bg-gradient-to-r
              from-cyan-400
              to-purple-500

              bg-clip-text
              text-transparent
              "
            >
              Valmik Kannor
            </h2>

            <p
              className="
              mt-4
              text-sm
              leading-relaxed

              text-gray-600
              dark:text-gray-400
              "
            >
              MERN Stack Developer passionate
              about building modern web
              applications and creating clean,
              scalable user experiences.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              mb-4

              text-gray-900
              dark:text-white
              "
            >
              Quick Links
            </h3>

            <div
              className="
              flex
              flex-col
              gap-3
              "
            >
              {links.map((link) => (

                <a
                  key={link.label}
                  href={link.href}
                  className="
                  text-sm

                  text-gray-600
                  dark:text-gray-400

                  hover:text-cyan-400

                  transition-all
                  duration-300
                  "
                >
                  {link.label}
                </a>

              ))}
            </div>

          </div>

          {/* Socials */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              mb-4

              text-gray-900
              dark:text-white
              "
            >
              Connect
            </h3>

            <div
              className="
              flex
              gap-4
              "
            >
              {socials.map(
                (social, index) => (

                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}

                    className="
                    w-11
                    h-11

                    flex
                    items-center
                    justify-center

                    rounded-xl

                    bg-white
                    dark:bg-white/5

                    border
                    border-gray-200
                    dark:border-white/10

                    text-gray-600
                    dark:text-gray-400

                    hover:-translate-y-1
                    hover:text-cyan-400
                    hover:border-cyan-400

                    dark:hover:shadow-[0_0_25px_rgba(0,217,255,.2)]

                    transition-all
                    duration-300
                    "
                  >
                    <i className={social.icon}></i>
                  </a>

                )
              )}
            </div>

          </div>
          

        </div>

        

      </div>
    </footer>
  );
}