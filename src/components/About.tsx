import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className={`shell ${styles.layout}`}>
        <div className={styles.profile}>
          <div className={styles.portrait}>
            <Image
              src="/muhammad-usman-cutout.png"
              alt="Portrait of Muhammad Usman, software engineer and full-stack developer"
              fill
              sizes="(max-width: 760px) 90vw, 32vw"
            />
          </div>
          <div className={styles.caption}>
            <span>Muhammad Usman</span>
            <span>Faisalabad, Pakistan</span>
          </div>
        </div>
        <div className={styles.story}>
          <p className="eyebrow">A little about me</p>
          <h2 id="about-heading">
            The person.
            <br />
            <em>The way I build.</em>
          </h2>
          <p className={styles.lead}>
            I’m Muhammad Usman, a software engineer who cares about the details
            you see—and the systems you don’t.
          </p>
          <p className={styles.bio}>
            Based in Faisalabad, Pakistan, I build web applications with React,
            Next.js, and the MERN stack. My journey began with an e-commerce
            project during college. Today, I work with teams to turn ideas into
            useful websites, dashboards, and interactive products.
          </p>
          <dl className={styles.approach}>
            <div>
              <dt>Thoughtful interfaces</dt>
              <dd>
                Responsive layouts, accessible interactions, and attention to
                the small details.
              </dd>
            </div>
            <div>
              <dt>Connected systems</dt>
              <dd>
                Bringing the frontend, APIs, and database together into one
                coherent product.
              </dd>
            </div>
          </dl>
          <div className={styles.actions}>
            <a
              href="/Muhammad-Usman.pdf"
              download="Muhammad-Usman.pdf"
              className="button button-primary"
            >
              Download my CV
            </a>
            <a href="#contact" className={styles.contact}>
              Let’s work together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
