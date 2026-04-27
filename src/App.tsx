import { useEffect } from "react";
import About from "./components/templates/pages/About";
import Contact from "./components/templates/pages/Contact";
import Experience from "./components/templates/pages/Experience";
import Footer from "./components/templates/Nav/Footer";
import Header from "./components/templates/Nav/Header";
import Hero from "./components/templates/pages/Hero";
import Projects from "./components/templates/pages/Projects";
import Skills from "./components/templates/pages/Skills";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  // Set page title and description dynamically
  useEffect(() => {
    document.title = "Muhammad Usman Software Developer Portfolio";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muhammad Usman - Software Developer | MERN Stack Developer & Next.js Expert. Explore my portfolio showcasing web development projects, skills, and experience. Contact me for collaborations or inquiries.",
      );
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
