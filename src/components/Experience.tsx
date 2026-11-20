import Image from "next/image";
import { experienceData } from "@/lib/data";
import styles from "./Experience.module.css";

const summaries: Record<number, string> = {
  1: "Building full-stack applications with Next.js and Appwrite, connecting interfaces to REST APIs and improving the overall product experience.",
  2: "Developing Node.js services, designing MongoDB schemas, and building responsive React interfaces in collaboration with the engineering team.",
  3: "Turning designs into responsive React and TypeScript applications, with a focus on accessibility, API integration, and maintainable frontend code.",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className={`shell section ${styles.section}`}
      aria-labelledby="experience-heading"
    >
      <div className={styles.heading}>
        <div>
          <p className="eyebrow">Professional experience</p>
          <h2 id="experience-heading">
            The work behind <em>the craft.</em>
          </h2>
        </div>
        <p>
          From frontend foundations to full-stack products.
          <br />
          The teams and roles that shaped my approach.
        </p>
      </div>
      <div className={styles.list}>
        {experienceData.map((job) => (
          <article className={styles.role} key={job.id}>
            <div className={styles.company}>
              <div className={styles.companyName}>
                <Image
                  src={job.logo}
                  width={48}
                  height={48}
                  alt={`${job.company} logo`}
                />
                <span>{job.company}</span>
              </div>
              <p className={styles.date}>{job.duration}</p>
              <span className={styles.location}>{job.location}</span>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h3>{job.role.replace("Mern", "MERN")}</h3>
                {job.duration.endsWith("Present") && (
                  <span className={styles.current}>Current role</span>
                )}
              </div>
              <p className={styles.summary}>{summaries[job.id]}</p>
              <ul
                className={styles.tools}
                aria-label={`Technologies at ${job.company}`}
              >
                {job.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <details className={styles.details}>
                <summary>
                  Role highlights <span aria-hidden="true">+</span>
                </summary>
                <ul>
                  {job.description.map((item) => (
                    <li key={item}>{item.replace("Nextjs", "Next.js")}</li>
                  ))}
                </ul>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
