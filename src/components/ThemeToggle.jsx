import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
      w-10
      h-10
      flex
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/10
      dark:bg-white/5
      text-gray-700
      dark:text-white
      hover:text-cyan-400
      hover:border-cyan-400
      transition-all
      duration-300
      "
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}