import { useState } from "react";
import {
  useScrolled,
  useActiveSection,
} from "../hooks/useScrollReveal";

import { navLinks } from "../data";
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/Logo (2).png";

export default function Navbar() {
  const scrolled = useScrolled(50);

  const active = useActiveSection([
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ]);

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <>
      {/* NAVBAR */}

      <nav
        className={`
        fixed
        top-0
        left-1/2
        -translate-x-1/2
        z-[100]

        w-[95%]
        max-w-6xl

        rounded-2xl

        transition-all
        duration-500

        ${
          scrolled
            ? `
            bg-white/90
            dark:bg-[#050810]/80

            backdrop-blur-xl

            border
            border-gray-200
            dark:border-white/10

            shadow-lg
            dark:shadow-[0_8px_30px_rgba(0,217,255,.15)]
            `
            : `
            bg-white/50
            dark:bg-white/[0.03]

            backdrop-blur-lg

            border
            border-white/10
            `
        }
        `}
      >
        <div
          className="
          flex
          items-center
          justify-between
          px-6
          py-3
          "
        >
          {/* LOGO */}

          <a
            href="#"
            className="
            flex
            items-center
            gap-3
            "
          >
            <img
              src={Logo}
              alt="Logo"
              className="
              w-12
              h-12
              rounded-full
              object-cover

              hover:rotate-12
              hover:scale-110

              transition-all
              duration-500
              "
            />

            <span
              className="
              hidden
              sm:block

              text-xl
              font-bold

              bg-gradient-to-r
              from-cyan-400
              to-purple-500

              bg-clip-text
              text-transparent
              "
            >
              Valmik
            </span>
          </a>

          {/* DESKTOP */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-5
            "
          >
            <ul
              className="
              flex
              items-center
              gap-2
              "
            >
              {navLinks.map((link) => {
                const isActive =
                  active ===
                  link.href.replace(
                    "#",
                    ""
                  );

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`
                      px-5
                      py-2
                      rounded-full

                      text-sm
                      font-medium

                      transition-all
                      duration-300

                      hover:scale-105

                      ${
                        isActive
                          ? `
                          text-cyan-400
                          bg-cyan-400/10
                          shadow-[0_0_15px_rgba(0,217,255,.2)]
                          `
                          : `
                          text-gray-600
                          dark:text-gray-400
                          `
                      }
                      `}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ThemeToggle />

            <a
              href="#contact"
              className="
              px-5
              py-3
              rounded-full

              font-semibold

              bg-gradient-to-r
              from-cyan-400
              to-purple-500

              text-[#050810]

              hover:scale-105

              transition-all
              duration-300

              shadow-lg
              "
            >
              Contact
            </a>
          </div>

          {/* MOBILE */}

          <div
            className="
            md:hidden
            flex
            items-center
            gap-4
            "
          >
            <ThemeToggle />

            <button
              onClick={() =>
                setMenuOpen(
                  !menuOpen
                )
              }
              className="
              text-2xl
              text-black
              dark:text-white
              "
            >
              {menuOpen
                ? "✕"
                : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}

      <div
        className={`
        md:hidden
        fixed
        top-[90px]
        left-1/2
        -translate-x-1/2

        w-[90%]

        rounded-2xl

        backdrop-blur-xl

        bg-white/95
        dark:bg-[#050810]/95

        border
        border-gray-200
        dark:border-white/10

        z-[99]

        transition-all
        duration-500

        ${
          menuOpen
            ? `
            opacity-100
            translate-y-0
            `
            : `
            opacity-0
            -translate-y-10
            pointer-events-none
            `
        }
        `}
      >
        <div
          className="
          flex
          flex-col
          p-5
          gap-4
          "
        >
          {navLinks.map(
            (link) => (
              <a
                key={
                  link.href
                }
                href={
                  link.href
                }
                onClick={() =>
                  setMenuOpen(
                    false
                  )
                }
                className="
                py-3
                rounded-xl
                text-center

                text-gray-700
                dark:text-gray-300

                hover:bg-cyan-400/10
                hover:text-cyan-400

                transition-all
                duration-300
                "
              >
                {link.label}
              </a>
            )
          )}

          <a
            href="#contact"
            onClick={() =>
              setMenuOpen(
                false
              )
            }
            className="
            py-3
            rounded-xl

            text-center
            font-bold

            bg-gradient-to-r
            from-cyan-400
            to-purple-500

            text-[#050810]
            "
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}