// ── Portfolio Data ─────────────────────────────────────────────────────────

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
];

export const skills = [{
        category: "Frontend",
        icon: "🎨",
        accent: "#00d9ff",
        bg: "rgba(0,217,255,0.12)",
        items: [
            { name: "HTML5", color: "#e34c26" },
            { name: "CSS3", color: "#264de4" },
            { name: "JavaScript", color: "#f7df1e" },
            { name: "React.js", color: "#61dafb" },
            { name: "Tailwind CSS", color: "#38bdf8" },
        ],
    },
    {
        category: "Backend",
        icon: "⚙️",
        accent: "#7c5cfc",
        bg: "rgba(124,92,252,0.12)",
        items: [
            { name: "Node.js", color: "#68a063" },
            { name: "Express.js", color: "#888888" },
        ],
    },
    {
        category: "Database",
        icon: "🗄️",
        accent: "#ff4da6",
        bg: "rgba(255,77,166,0.12)",
        items: [
            { name: "MongoDB", color: "#4db33d" },
            { name: "Mongoose", color: "#e0813c" },
        ],
    },
    {
        category: "Tools & More",
        icon: "🛠️",
        accent: "#ffd166",
        bg: "rgba(255,209,102,0.12)",
        items: [
            { name: "Git", color: "#f05032" },
            { name: "GitHub", color: "#cccccc" },
            { name: "REST APIs", color: "#00aeef" },
            { name: "Postman", color: "#ff6c37" },
            { name: "VS Code", color: "#007acc" },
        ],
    },
];

export const projects = [{
        id: 1,
        name: "Wanderlust",
        emoji: "🏕️",
        desc: "A full-stack property booking platform featuring user authentication, complete CRUD operations, cloud image uploads via Cloudinary, and interactive map integration using Mapbox.",
        tags: ["Full Stack", "MongoDB, EJS, Express, Node"],
        accentColor: "#00d9ff",
        bgGradient: "rgba(0,217,255,0.12)",
        liveUrl: "#",
        githubUrl: "#",
        coming: false,
    },
    {
        id: 2,
        name: "Zoom Clone",
        emoji: "📹",
        desc: "A real-time video conferencing application built with WebRTC for peer-to-peer video/audio streaming and Socket.io for live messaging and room management.",
        tags: ["Real-time", "WebRTC", "Socket.io"],
        accentColor: "#7c5cfc",
        bgGradient: "rgba(124,92,252,0.12)",
        liveUrl: "#",
        githubUrl: "#",
        coming: false,
    },
    // {
    //     id: 3,
    //     name: "AI Project",
    //     emoji: "🤖",
    //     desc: "An exciting AI-powered application currently in development. Will integrate machine learning capabilities with a full-stack MERN architecture for intelligent user experiences.",
    //     tags: ["AI / ML", "In Progress"],
    //     accentColor: "#ffd166",
    //     bgGradient: "rgba(255,209,102,0.10)",
    //     liveUrl: "#",
    //     githubUrl: "#",
    //     coming: true,
    // },
];

export const experiences = [{
        id: 1,
        period: "July 2025 – Jan 2026 · 6 Months",
        role: "Backend Developer",
        company: "Firefist Solutions",
        desc: "Developed and deployed RESTful APIs using Node.js and Express.js. Designed database schemas and managed data with MongoDB. Built JWT authentication systems and integrated third-party services including Cloudinary and Mapbox.",
        skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "Cloudinary", "Mapbox"],
    },
    // {
    //     id: 2,
    //     period: "2023 – 2024 · Learning & Building",
    //     role: "Full Stack Student Developer",
    //     company: "Self-Taught — MERN Stack",
    //     desc: "Completed comprehensive self-study of the MERN stack from fundamentals to advanced concepts. Mastered React component architecture, Hooks, and state management alongside Node.js and Express.js server-side development.",
    //     skills: ["HTML & CSS", "JavaScript", "React.js", "Tailwind CSS", "Git & GitHub"],
    // },
];

export const contactLinks = [{
        label: "Email",
        value: "valmikkannor@gmail.com",
        href: "mailto:valmikkannor844@gmail.com",
        icon: "fa-envelope",
        color: "#00d9ff",
        bg: "rgba(0,217,255,0.10)",
        fab: false,
    },
    {
        label: "LinkedIn",
        value: "www.linkedin.com/in/valmik-kannor-3102b2222",
        href: "https://www.linkedin.com/in/valmik-kannor-3102b2222/",
        icon: "fa-linkedin-in",
        color: "#0077b5",
        bg: "rgba(0,119,181,0.15)",
        fab: true,
    },
    {
        label: "GitHub",
        value: "github.com/valmikkannor",
        href: "https://github.com/valmikkannor",
        icon: "fa-github",
        color: "#e8eaf2",
        bg: "rgba(255,255,255,0.06)",
        fab: true,
    },
];