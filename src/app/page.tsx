import Image from "next/image";
import PageMotion from "@/components/PageMotion";
import HeroScene from "@/components/HeroScene";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import ChatLauncher from "@/components/ChatLauncher";
import Experience from "@/components/Experience";
import About from "@/components/About";
import { profileStructuredData } from "@/lib/seo";

const toolkit = [
  {
    title: "The interface",
    subtitle: "FRONTEND",
    description: "Responsive experiences with attention to every interaction.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    title: "The foundation",
    subtitle: "BACKEND",
    description: "Application logic, APIs, and the data behind the experience.",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "Appwrite",
      "Firebase",
    ],
  },
  {
    title: "The finishing touches",
    subtitle: "WORKFLOW",
    description: "Tools and practices that bring the whole product together.",
    items: [
      "Git",
      "REST APIs",
      "Responsive design",
      "Accessibility",
      "Styled Components",
      "Material UI",
    ],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <PageMotion />
      <Header />
      <main id="main">
        <section className="hero shell" id="home">
          <h1>
            <span className="hero-identity">
              Muhammad Usman · Software Engineer & Full-Stack Developer
            </span>
            <span>Designed to feel.</span>
            <span>
              Engineered to <em>work.</em>
            </span>
          </h1>
          <div className="hero-intro">
            <a href="#projects" className="button button-primary">
              Discover my work
            </a>
            <p>
              I’m Usman, a software engineer in Faisalabad, Pakistan. I build
              thoughtful web applications with React, Next.js and the MERN
              stack.
            </p>
          </div>
          <a
            className="featured-project"
            href="https://flowjo-finder-quiz-phase-3.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Flowjo Dashboard (opens in a new tab)"
          >
            <span className="eyebrow feature-label">
              Featured project / Flowjo
            </span>
            <HeroScene />
            <div className="device">
              <div className="device-screen">
                <div className="device-camera" />
                <div className="feature-screen">
                  <Image
                    src="/projects/project3.png"
                    alt="Flowjo goal-tracking dashboard — actual application preview"
                    fill
                    sizes="(max-width: 600px) 85vw, 75vw"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="device-base" />
            </div>
            <div className="feature-caption">
              <h2>From complexity to clarity.</h2>
              <span>
                Next.js / TypeScript <b>Explore project</b>
              </span>
            </div>
          </a>
        </section>
        <section className="section shell" id="projects">
          <div className="section-heading">
            <h2>Selected work</h2>
            <p>Thoughtful solutions. Real applications.</p>
          </div>
          <Projects />
        </section>
        <About />
        <Experience />
        <section className="skills-section" id="skills">
          <div className="shell section">
            <div className="section-topline">
              <p className="eyebrow">The toolkit</p>
              <span>The right tool for the right problem.</span>
            </div>
            <h2>
              Different tools.
              <br />
              <em>One considered experience.</em>
            </h2>
            <div className="toolkit-grid">
              {toolkit.map((group) => (
                <article key={group.title}>
                  <span className="eyebrow">{group.subtitle}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="contact-band" id="contact">
          <div className="section shell contact-section">
            <div className="contact-copy">
              <p className="eyebrow">Let’s make it happen</p>
              <h2>
                Let’s make
                <br />
                <em>it matter.</em>
              </h2>
              <p>
                A new product, a fresh website, or a challenge worth solving.
                I’d love to hear about it.
              </p>
              <a className="email-link" href="mailto:musmandev370@gmail.com">
                musmandev370@gmail.com
              </a>
              <a className="phone-link" href="tel:+923281505644">
                +92 (328) 1505644
              </a>
              <div className="socials">
                <a
                  href="https://github.com/MuhammadUsman7771"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-usman-280321268/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://x.com/Muhamma69588482"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX />
                </a>
                <a
                  href="https://wa.me/923281505644"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <div>
          <a className="wordmark" href="#home">
            mu<span>.</span>
          </a>
          <p>Thoughtfully built. Always evolving.</p>
        </div>
        <span>© {new Date().getFullYear()} Muhammad Usman</span>
        <a className="text-link" href="#home">
          Back to top
        </a>
      </footer>
      <ChatLauncher />
    </>
  );
}
