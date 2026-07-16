import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdOutlineMail, MdPhone } from "react-icons/md";
import { IMAGES } from "../../../public";
import { ROUTES } from "../routes/route";
import { ExperienceData, Project, Skill } from "../types/type";



export const skillsData: Skill[] = [
    {
        id: 1,
        name: "React",
        level: 92,
        icon: IMAGES.REACT_JS_IMAGE,
        category: "frontend",
        color: "#61DAFB",
        description:
            "Building interactive user interfaces with React hooks and modern patterns",
    },
    {
        id: 2,
        name: "Next.js",
        level: 98,
        icon: IMAGES.NEXT_JS_IMAGE,
        category: "frontend",
        color: "#000000",
        description: "Full-stack React framework with SSR, SSG, and API routes",
    },
    {
        id: 3,
        name: "TypeScript",
        level: 85,
        icon: IMAGES.TYPESCRIPT_IMAGE,
        category: "frontend",
        color: "#3178C6",
        description: "Type-safe JavaScript development with advanced features",
    },
    {
        id: 4,
        name: "Tailwind CSS",
        level: 90,
        icon: IMAGES.TAILWIND_CSS_IMAGE,
        category: "frontend",
        color: "#06B6D4",
        description: "Utility-first CSS framework for rapid UI development",
    },
    {
        id: 5,
        name: "JavaScript",
        level: 92,
        icon: IMAGES.JAVASCRIPT_IMAGE,
        category: "frontend",
        color: "#F7DF1E",
        description: "Modern JavaScript with ES6+ features and async programming",
    },
    {
        id: 6,
        name: "Appwrite",
        level: 75,
        icon: IMAGES.APPWRITE_IMAGE,
        category: "backend",
        color: "#FF6B6B",
        description:
            "Open-source backend platform for building web and mobile applications",
    },
    {
        id: 7,
        name: "Node.js",
        level: 85,
        icon: IMAGES.NODE_JS_IMAGE,
        category: "backend",
        color: "#339933",
        description:
            "Server-side JavaScript runtime with event-driven architecture",
    },
    {
        id: 8,
        name: "Express.js",
        level: 82,
        icon: IMAGES.EXPRESS_JS_IMAGE,
        category: "backend",
        color: "#000000",
        description: "Fast, unopinionated web framework for Node.js",
    },
    {
        id: 9,
        name: "MongoDB",
        level: 78,
        icon: IMAGES.MONGODB_IMAGE,
        category: "backend",
        color: "#47A248",
        description: "NoSQL database with flexible document storage",
    },
    {
        id: 10,
        name: "Firebase",
        level: 80,
        icon: IMAGES.FIREBASE_IMAGE,
        category: "backend",
        color: "#FFCA28",
        description:
            "Backend-as-a-Service with real-time database and authentication",
    },
];

export const socialsLinks = [
    {
        id: 1,
        name: "github",
        link: "https://github.com/MuhammadUsman7771",
        icon: FaGithub,
    },
    {
        id: 2,
        name: "linkedin",
        link: "https://www.linkedin.com/in/muhammad-usman-280321268/",
        icon: BsLinkedin,
    },
    {
        id: 3,
        name: "x",
        link: "https://x.com/Muhamma69588482",
        icon: BsTwitterX,
    },
    {
        id: 4,
        name: "whatsapp",
        link: "https://wa.me/923281505644",
        icon: FaWhatsapp,
    },
];

export const experienceData: ExperienceData[] = [
    {
        id: 1,
        company: "Devontix Solutions",
        role: "Mern Stack Developer",
        duration: "Oct 2024 - Present",
        location: "On Site",
        description: [
            "Developed full-stack web applications using Nextjs and Appwrite",
            "Implemented RESTful APIs and integrated them with frontend interfaces",
            "Collaborated with cross-functional teams to deliver high-quality software solutions",
            "Optimized application performance and improved user experience",
        ],
        technologies: [
            "React",
            "Next.js",
            "Appwrite",
            "TypeScript",
            "Module CSS",
            "Tailwind CSS",
            "Styled Components",
        ],
        logo: IMAGES.DEVONTIX_LOGO,
    },
    {
        id: 2,
        company: "Genius Mind Zone",
        role: "Mern Stack Developer",
        duration: "Apr 2024 - Oct 2024",
        location: "On Site",
        description: [
            "Built scalable backend services using Node.js and Express.js",
            "Designed and implemented database schemas using MongoDB",
            "Created responsive frontend components with React and modern CSS",
            "Participated in code reviews and maintained code quality standards",
        ],
        technologies: [
            "Next.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "JavaScript",
            "CSS3",
        ],
        logo: IMAGES.GENIUS_MIND_LOGO,
    },
    {
        id: 3,
        company: "DevString",
        role: "Frontend Developer",
        duration: "Mar 2023 - Feb 2024",
        location: "On Site",
        description: [
            "Developed responsive web applications using React and TypeScript",
            "Implemented modern UI/UX designs with attention to accessibility",
            "Worked with REST APIs and state management solutions",
            "Contributed to team knowledge sharing and documentation",
        ],
        technologies: [
            "React.js",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Git",
        ],
        logo: IMAGES.DEVSTRING_LOGO,
    },
];

export const navItems = [
    { id: 1, label: "Home", href: ROUTES.HOME },
    { id: 2, label: "About", href: ROUTES.ABOUT },
    { id: 3, label: "Projects", href: ROUTES.PROJECTS },
    { id: 4, label: "Skills", href: ROUTES.SKILLS },
    { id: 5, label: "Experience", href: ROUTES.EXPERIENCE },
    { id: 6, label: "Contact", href: ROUTES.CONTACT },
];

export const contactInfo = [
    {
        id: 1,
        label: "Email",
        value: "musmandev370@gmail.com",
        href: "mailto:musmandev370@gmail.com",
        icon: MdOutlineMail,
    },
    {
        id: 2,
        label: "Phone",
        value: "+92 (328) 1505644",
        href: "tel:+923281505644",
        icon: MdPhone,
    },
    {
        id: 3,
        label: "Location",
        value: "Faisalabad, Pakistan",
        href: null,
        icon: MdLocationOn,
    },
];

export const dynamicTexts = [
    "MERN Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Frontend Developer",
];

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Quiz Application",
        description:
            "A dynamic trivia platform built with Next.js, TypeScript, and Styled-Components. Powered by Appwrite backend with real-time quiz experiences and multi-screen interfaces.",
        image: IMAGES.PROJECT1_IMAGE,
        tags: ["Next.js", "TypeScript", "Styled-Components", "Appwrite"],
        liveUrl: "https://soyummy.com/trivia/quiz/?id=666cb588e0ae28e93c14&Quiz=Can-You-Name-All-of-These-Kitchen-Tools",
    },
    {
        id: 2,
        title: "FirstQuiz App",
        description:
            "A competitive quiz platform built with Vite.js, TypeScript, and Tailwind CSS. Features Node.js backend and MongoDB for real-time leaderboards and user authentication.",
        image: IMAGES.PROJECT2_IMAGE,
        tags: ["Vite.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
        liveUrl: "https://firstquiz.com/",
    },
    {
        id: 3,
        title: "Flowjo Dashboard",
        description:
            "A goal-tracking dashboard built with Next.js and TypeScript. Styled with Tailwind CSS, powered by Nest.js and MongoDB for real-time progress visualization and productivity insights.",
        image: IMAGES.PROJECT3_IMAGE,
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js", "MongoDB"],
        liveUrl: "https://flowjo-finder-quiz-phase-3.vercel.app/",
    },
    {
        id: 4,
        title: "The Eldridge Way",
        description:
            "A fitness and wellness platform built with Next.js and TypeScript. Features Node.js backend and MongoDB for workout tracking, training plans, and performance analytics.",
        image: IMAGES.PROJECT4_IMAGE,
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
        liveUrl: "https://www.theeldridgeway.com/",
    },
    {
        id: 5,
        title: "The Eldridge Way Dashboard",
        description:
            "An enterprise admin dashboard built with Next.js and TypeScript. Powered by Nest.js and MongoDB with advanced analytics and user engagement monitoring tools.",
        image: IMAGES.PROJECT5_IMAGE,
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js", "MongoDB"],
        liveUrl: "https://the-eldridge-way-dashboard.vercel.app/",
    },
];
