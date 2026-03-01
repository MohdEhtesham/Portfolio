// =============================================
// PORTFOLIO DATA — MOHD EHTESHAM
// =============================================

export const personalInfo = {
    name: "Mohd Ehtesham",
    role: "React Native Developer",
    tagline: "Mobile Application Engineer",
    summary:
        "React Native developer with 3.5+ years of expertise in architecting and delivering high-performance mobile applications. Strong ownership of end-to-end mobile lifecycle — from architecture design, third-party integrations, and performance optimization to deployment and scalable mobile systems.",
    location: "Noida, India",
    email: "ehtesham.dev@gmail.com",
    github: "https://github.com/MohdEhtesham",
    linkedin: "https://linkedin.com/in/ehtesham",
    resumeUrl: "#",
};

export const skills = [
    { name: "React Native", level: 95, category: "core" },
    { name: "JavaScript ES6+", level: 92, category: "core" },
    { name: "TypeScript", level: 80, category: "core" },
    { name: "Redux", level: 90, category: "state" },
    { name: "Context API", level: 88, category: "state" },
    { name: "Firebase", level: 85, category: "backend" },
    { name: "REST APIs", level: 92, category: "backend" },
    { name: "HTML5", level: 90, category: "web" },
    { name: "CSS3", level: 88, category: "web" },
    { name: "Git", level: 85, category: "tools" },
    { name: "Stripe", level: 78, category: "integrations" },
    { name: "FCM", level: 82, category: "integrations" },
    { name: "BLE", level: 75, category: "integrations" },
    { name: "Maps SDK", level: 80, category: "integrations" },
    { name: "Video SDKs", level: 78, category: "integrations" },
    { name: "Analytics", level: 80, category: "integrations" },
    { name: "Performance Opt.", level: 88, category: "core" },
    { name: "React", level: 85, category: "web" },
];

// Green palette — different shades so nodes read distinct in 3D sphere
export const techStackIcons = [
    { name: "React Native", icon: "⚛️", color: "#22C55E" },
    { name: "JavaScript", icon: "JS", color: "#86EFAC" },
    { name: "Redux", icon: "🔄", color: "#4ADE80" },
    { name: "Firebase", icon: "🔥", color: "#16A34A" },
    { name: "Git", icon: "📦", color: "#86EFAC" },
    { name: "REST APIs", icon: "🔗", color: "#22C55E" },
    { name: "Stripe", icon: "💳", color: "#4ADE80" },
    { name: "TypeScript", icon: "TS", color: "#86EFAC" },
    { name: "HTML5", icon: "🌐", color: "#22C55E" },
    { name: "CSS3", icon: "🎨", color: "#4ADE80" },
    { name: "Maps", icon: "🗺️", color: "#16A34A" },
    { name: "BLE", icon: "📡", color: "#86EFAC" },
];

export const experience = [
    {
        id: 1,
        role: "React Native Developer",
        company: "Buddy4Study",
        period: "2024 — Present",
        location: "Noida, India",
        description:
            "Leading mobile application development for India's largest scholarship platform. Building and optimizing high-traffic React Native apps serving millions of students.",
        highlights: [
            "Architected and shipped production-grade scholarship discovery app",
            "Built real-time video interaction module for student-counselor sessions",
            "Optimized app performance with 40% reduction in bundle size",
            "Integrated FCM, analytics, and deep linking for 2M+ users",
        ],
        tech: ["React Native", "Redux", "Firebase", "Video SDK", "FCM"],
    },
    {
        id: 2,
        role: "Associate Software Engineer",
        company: "OTS Solutions",
        period: "2022 — 2024",
        location: "Noida, India",
        description:
            "Full-cycle mobile development across multiple client projects spanning healthcare, travel, and productivity domains.",
        highlights: [
            "Delivered 6+ production mobile applications from scratch",
            "Implemented Stripe payment gateway integration for e-commerce apps",
            "Built BLE-based IoT communication layer for health monitoring app",
            "Integrated Maps SDK with custom markers and geofencing",
        ],
        tech: ["React Native", "JavaScript", "Stripe", "BLE", "Maps", "REST APIs"],
    },
];

export const projects = [
    {
        id: 1,
        title: "Buddy4Study Scholarship App",
        description:
            "India's leading scholarship discovery platform serving 2M+ students. End-to-end mobile application with advanced search, personalized recommendations, and application tracking.",
        tech: ["React Native", "Redux", "Firebase", "FCM", "Analytics"],
        category: "EdTech",
        color: "#22C55E",
        features: ["Smart search", "Push notifications", "Deep linking", "Analytics"],
    },
    {
        id: 2,
        title: "Buddy4Study Video App",
        description:
            "Real-time video interaction platform for student-counselor sessions with live chat, screen sharing, and session recording capabilities.",
        tech: ["React Native", "Video SDK", "WebRTC", "Firebase"],
        category: "Video",
        color: "#4ADE80",
        features: ["Live video", "Chat", "Screen share", "Recording"],
    },
    {
        id: 3,
        title: "Rupa Rahul Bajaj Scholarship",
        description:
            "Dedicated scholarship application platform with document upload, eligibility checker, and application status tracking for prestigious Bajaj scholarship program.",
        tech: ["React Native", "REST APIs", "Redux", "Firebase"],
        category: "EdTech",
        color: "#86EFAC",
        features: ["Doc upload", "Eligibility check", "Status tracking"],
    },
    {
        id: 4,
        title: "Transplant App",
        description:
            "Healthcare application for organ transplant coordination with BLE device integration, real-time monitoring, and secure medical data handling.",
        tech: ["React Native", "BLE", "REST APIs", "Maps"],
        category: "Healthcare",
        color: "#16A34A",
        features: ["BLE integration", "Real-time monitoring", "Secure data"],
    },
    {
        id: 5,
        title: "Door2Door Flights",
        description:
            "Travel booking application with flight search, booking management, Stripe-powered payments, and itinerary management.",
        tech: ["React Native", "Stripe", "REST APIs", "Maps SDK"],
        category: "Travel",
        color: "#22C55E",
        features: ["Flight search", "Payments", "Itinerary", "Maps"],
    },
    {
        id: 6,
        title: "Vow-Timer",
        description:
            "Productivity and commitment tracking application with custom timers, goal setting, progress analytics, and reminder notifications.",
        tech: ["React Native", "Redux", "Firebase", "FCM"],
        category: "Productivity",
        color: "#4ADE80",
        features: ["Custom timers", "Goals", "Analytics", "Notifications"],
    },
    {
        id: 7,
        title: "Penn-AI",
        description:
            "AI-powered mobile application integrating machine learning capabilities for intelligent content generation and user assistance.",
        tech: ["React Native", "AI APIs", "REST APIs", "Redux"],
        category: "AI",
        color: "#86EFAC",
        features: ["AI integration", "Smart content", "ML-powered"],
    },
    {
        id: 8,
        title: "Gun-Lox",
        description:
            "Security-focused application with advanced authentication, encrypted data storage, and real-time security monitoring features.",
        tech: ["React Native", "Firebase", "REST APIs", "Analytics"],
        category: "Security",
        color: "#16A34A",
        features: ["Auth system", "Encryption", "Monitoring"],
    },
];

export const education = {
    degree: "B.Tech",
    university: "AKTU University",
    field: "Computer Science & Engineering",
};

export const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Contact", href: "#contact" },
];
