export const siteUrl = "https://muhammad-usman-dev.vercel.app";
export const seoTitle =
  "Muhammad Usman | Software Engineer & Full-Stack Developer";
export const seoDescription =
  "Muhammad Usman is a software engineer and full-stack developer in Faisalabad, Pakistan, building React, Next.js and MERN stack web applications.";

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Muhammad Usman",
      url: siteUrl,
      image: `${siteUrl}/muhammad-usman-cutout.png`,
      jobTitle: "Software Engineer & Full-Stack Developer",
      description: seoDescription,
      homeLocation: {
        "@type": "Place",
        name: "Faisalabad, Pakistan",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MERN stack",
        "Web development",
      ],
      sameAs: [
        "https://github.com/MuhammadUsman7771",
        "https://www.linkedin.com/in/muhammad-usman-280321268/",
        "https://x.com/Muhamma69588482",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Muhammad Usman — Developer Portfolio",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: seoTitle,
      description: seoDescription,
      mainEntity: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
      inLanguage: "en",
    },
  ],
};
