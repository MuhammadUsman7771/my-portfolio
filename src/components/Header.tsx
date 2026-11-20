"use client";
import { useState } from "react";
const links = [
  ["Work", "#projects"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell nav-row">
        <a
          className="wordmark"
          href="#home"
          aria-label="Muhammad Usman home"
          onClick={() => setOpen(false)}
        >
          mu<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-outline nav-contact" href="#contact">
          Let’s talk
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {[...links, ["Contact", "#contact"]].map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
