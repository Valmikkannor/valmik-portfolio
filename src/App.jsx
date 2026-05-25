import Loader from "./components/Loader";
import AmbientOrbs from "./components/AmbientOrbs";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function Divider() {
  return (
    <div
      className="
      border-t
      border-gray-200
      dark:border-white/5
      my-10
      transition-colors
      duration-500
      "
    />
  );
}

export default function App() {
  return (
    <div
      className="
      min-h-screen
      bg-white
      text-gray-900
      dark:bg-[#050810]
      dark:text-white
      transition-all
      duration-500
      "
    >
      {/* Loader */}
      <Loader />

      {/* Background Effects */}
      <AmbientOrbs />

      {/* Navigation */}
      <Navbar />

      {/* Scroll Button */}
      <ScrollToTop />

      {/* Main Content */}

      <main className="relative z-10">

        <Hero />

        <Divider />

        <About />

        <Divider />

        <Skills />

        <Divider />

        <Projects />

        <Divider />

        <Experience />

        <Divider />

        <Contact />

      </main>

      {/* Footer */}

      <Footer />

    </div>
  );
}