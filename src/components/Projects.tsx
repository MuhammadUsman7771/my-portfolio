"use client";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "@/lib/data";
const ordered = [
  projectsData[1],
  projectsData[3],
  projectsData[2],
  projectsData[0],
  projectsData[4],
];
const categories: Record<number, string> = {
  1: "Interactive experiences",
  2: "Interactive experiences",
  3: "Dashboards",
  4: "Web platforms",
  5: "Dashboards",
};
export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const [expanded, setExpanded] = useState(false);
  const matches = ordered.filter(
    (p) => filter === "All work" || categories[p.id] === filter,
  );
  const visible =
    expanded || filter !== "All work" ? matches : matches.slice(0, 4);
  return (
    <>
      <div className="project-toolbar">
        <div className="filters" aria-label="Filter projects">
          {[
            "All work",
            "Web platforms",
            "Dashboards",
            "Interactive experiences",
          ].map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="project-count">{matches.length} projects</span>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.id}>
            <a
              className={`project-image project-image-${project.id}`}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} (opens in a new tab)`}
            >
              <div className="browser-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>{new URL(project.liveUrl).hostname}</span>
              </div>
              <div className="project-screen">
                <Image
                  src={project.image}
                  alt={`${project.title} application screenshot`}
                  fill
                  sizes="(max-width: 700px) 90vw, 45vw"
                />
              </div>
              <span className="visit-label">Explore live project</span>
            </a>
            <div className="project-meta">
              <span className="eyebrow">{categories[project.id]}</span>
              <span className="private-label">Private source</span>
            </div>
            <h3>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {filter === "All work" && (
        <div className="more-projects">
          <span>A little more of what I do.</span>
          <button
            className="button button-outline"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded ? "Show selected projects" : "View all 5 projects"}
          </button>
        </div>
      )}
    </>
  );
}
