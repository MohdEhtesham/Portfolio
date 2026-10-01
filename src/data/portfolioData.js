// =============================================
// PORTFOLIO DATA — MOHD EHTESHAM
// Source of truth: public/Mohd_Ehtesham_Resume.pdf
// =============================================

export const personalInfo = {
    name: "Mohd Ehtesham",
    role: "React Native Developer",
    tagline: "Mobile Application Engineer",
    headline:
        "React Native specialist with {EXP_YEARS} years building production-grade Android & iOS apps. Currently building the Motion Learning App at Motion Education.",
    summary:
        "I'm a React Native specialist with {EXP_YEARS} years of experience building production-grade cross-platform mobile apps for Android and iOS, with a strong ed-tech background. I'm currently at Motion Education, building the Motion Learning App for JEE, NEET and CUET aspirants.",
    expertise:
        "My core stack is React Native CLI, JavaScript/TypeScript, Redux, REST APIs and Firebase, along with video learning, in-app payments, BLE and Maps. I own features end to end — from technical design and performance tuning to production debugging and Play Store / App Store releases.",
    current: {
        role: "React Native Developer",
        company: "Motion Education Pvt. Ltd.",
        product: "Motion Learning App",
        since: "Jul 2026",
    },
    studentsServed: "10L+", // students reached by the Buddy4Study apps
    location: "Bengaluru, India",
    email: "ehteshamidrishi@gmail.com",
    phone: "+91 6306640599",
    github: "https://github.com/MohdEhtesham",
    linkedin: "https://www.linkedin.com/in/mohd-ehtesham-11482021b/",
    resumeUrl: `${import.meta.env.BASE_URL}Mohd_Ehtesham_Resume.pdf`,
};

export const skillGroups = [
    { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript"] },
    { category: "Mobile", items: ["React Native (CLI)", "Android", "iOS", "Cross-Platform Development", "Flutter"] },
    { category: "Frameworks & Libraries", items: ["React", "React Hooks", "React Navigation", "Axios"] },
    { category: "State Management", items: ["Redux", "Redux Toolkit", "Context API", "AsyncStorage"] },
    {
        category: "Backend & APIs",
        items: ["REST APIs", "JSON", "JWT Auth", "Refresh Tokens", "Pagination", "Centralized Error Handling"],
    },
    { category: "Firebase", items: ["Authentication", "Firestore", "Cloud Messaging (FCM)", "Crashlytics"] },
    { category: "Media & Learning", items: ["Video Lectures", "Live Classes", "In-App Test Engines"] },
    {
        category: "Native Integrations",
        items: ["BLE", "Push Notifications", "Deep Linking", "Geolocation", "Camera"],
    },
    {
        category: "Maps & Payments",
        items: ["Google Maps SDK", "HERE Maps", "Stripe (Payment Intent)", "In-App Purchases"],
    },
    {
        category: "Build & CI/CD",
        items: [
            "Xcode", "Android Studio", "CocoaPods", "Gradle", "Fastlane",
            "GitHub Actions", "Bitrise", "App Center", "Play Store", "App Store",
        ],
    },
    {
        category: "Practices",
        items: ["Agile / Scrum", "Code Reviews", "Mobile Architecture", "Performance Optimization"],
    },
];

export const skills = skillGroups.flatMap(g => g.items.map(name => ({ name, category: g.category })));

// Green palette — different shades so nodes read distinct in 3D sphere
export const techStackIcons = [
    { name: "React Native", icon: "⚛️", color: "#22C55E" },
    { name: "JavaScript", icon: "JS", color: "#86EFAC" },
    { name: "TypeScript", icon: "TS", color: "#86EFAC" },
    { name: "Redux", icon: "🔄", color: "#4ADE80" },
    { name: "Firebase", icon: "🔥", color: "#16A34A" },
    { name: "REST APIs", icon: "🔗", color: "#22C55E" },
    { name: "Stripe", icon: "💳", color: "#4ADE80" },
    { name: "Maps", icon: "🗺️", color: "#16A34A" },
    { name: "BLE", icon: "📡", color: "#86EFAC" },
    { name: "Fastlane", icon: "🚀", color: "#22C55E" },
];

export const experience = [
    {
        id: 1,
        role: "React Native Developer",
        company: "Motion Education Pvt. Ltd.",
        period: "Jul 2026 — Present",
        location: "Bengaluru, India",
        current: true,
        description:
            "Develop and maintain the Motion Learning App (Android & iOS) — Motion's exam-prep platform for IIT-JEE Main & Advanced, NEET-UG, CUET-UG, Olympiads, Boards and Class 6–10 Foundation.",
        highlights: [
            "Build the AI Homework System flow that generates personalized practice sheets from each student's test performance and highlights weak topics.",
            "Develop the test engine for mock tests, DPPs, PYQs and the question bank, with real-time performance reports, test analysis, peer comparison and All-India ranking.",
            "Integrate scan-to-solve doubt solving: students scan a question with the camera and get instant video or text solutions.",
            "Implement video learning: live classes and recorded lectures from Motion faculty, with optimized streaming for smooth, buffer-free playback.",
            "Build course and study-package purchases, free trial classes, Refer & Earn rewards and location-based package offers.",
            "Improve app stability and performance under high concurrent load; work with product, academic and backend teams in Agile sprints and ship regular Play Store / App Store releases.",
        ],
        tech: ["React Native", "Android", "iOS", "Video Streaming", "Camera", "Agile"],
    },
    {
        id: 2,
        role: "React Native Developer",
        company: "Buddy4Study",
        period: "Sep 2024 — Jun 2026",
        location: "Noida, India",
        description:
            "Architected and shipped React Native apps serving 10 lakh+ students for scholarship discovery, applications and document submissions.",
        highlights: [
            "Owned REST API integration with secure auth, token refresh, pagination and centralized error handling, reducing failed requests.",
            "Implemented FCM push notifications across foreground, background and terminated states, driving engagement and retention.",
            "Designed a scalable Redux architecture for async workflows, complex data flows and offline-friendly UX.",
            "Led real-time video interaction features: session scheduling, in-app notifications and event-driven triggers.",
            "Reduced list scroll lag via FlatList virtualization, memoization and efficient re-render patterns.",
        ],
        tech: ["React Native", "Redux", "REST APIs", "JWT Auth", "FCM", "Firebase"],
    },
    {
        id: 3,
        role: "Associate Software Engineer (React Native)",
        company: "OTS Solutions Pvt. Ltd.",
        period: "Sep 2022 — Aug 2024",
        location: "Gurugram, India",
        description:
            "Delivered cross-platform apps across fintech, healthcare, IoT and event management, from design to production.",
        highlights: [
            "Integrated Stripe using Payment Intent architecture for PCI-compliant payments and subscriptions.",
            "Built BLE modules for device pairing, encrypted communication and real-time data exchange with IoT hardware.",
            "Configured Firebase Auth, Firestore, push notifications and Crashlytics for monitoring and proactive issue resolution.",
            "Built reusable UI component libraries and navigation structures, speeding delivery across client projects.",
            "Managed end-to-end Play Store and App Store releases; mentored junior developers through code reviews and pair programming.",
        ],
        tech: ["React Native", "Stripe", "BLE", "Firebase", "Crashlytics", "React Navigation"],
    },
];

export const projects = [
    {
        id: 1,
        title: "Motion Learning App",
        company: "Motion Education",
        featured: true,
        description:
            "Exam-prep app for JEE, NEET, CUET, Olympiads and Boards — AI Homework System for personalized practice sheets, live and recorded lectures, mock tests, DPPs, PYQs, a question bank, scan-to-solve doubts and real-time performance reports with All-India ranking.",
        tech: ["React Native", "Android", "iOS", "Video Streaming", "Camera"],
        category: "EdTech",
        color: "#22C55E",
        features: [
            "AI Homework System", "Live & recorded lectures", "Mock tests, DPPs & PYQs",
            "Scan-to-solve doubts", "All-India ranking", "Course purchases", "Refer & Earn",
        ],
    },
    {
        id: 2,
        title: "Buddy4Study Scholarship Platform",
        company: "Buddy4Study",
        featured: true,
        description:
            "Scholarship discovery and applications for 10 lakh+ students, with secure auth, REST APIs, document uploads and push notifications.",
        tech: ["React Native", "Redux", "REST APIs", "FCM"],
        category: "EdTech",
        color: "#4ADE80",
        features: ["Scholarship discovery", "Secure auth", "Document uploads", "Push notifications"],
    },
    {
        id: 3,
        title: "Buddy4Study Video Interaction Platform",
        company: "Buddy4Study",
        description:
            "Scheduled video sessions with Firebase notifications and real-time, event-driven triggers.",
        tech: ["React Native", "Firebase", "FCM"],
        category: "Video",
        color: "#86EFAC",
        features: ["Session scheduling", "In-app notifications", "Event-driven triggers"],
    },
    {
        id: 4,
        title: "Rupa Rahul Bajaj Scholarship App",
        description:
            "Onboarding and application tracking with API-driven workflows and document management.",
        tech: ["React Native", "REST APIs"],
        category: "EdTech",
        color: "#16A34A",
        features: ["Onboarding", "Application tracking", "Document management"],
    },
    {
        id: 5,
        title: "Door2Door Flights & Mobility",
        description:
            "Travel booking app built on HERE Maps — flight search, ride booking and real-time trip tracking.",
        tech: ["React Native", "HERE Maps", "Geolocation"],
        category: "Travel",
        color: "#22C55E",
        features: ["Flight search", "Ride booking", "Real-time trip tracking"],
    },
    {
        id: 6,
        title: "Gun-Lox Smart Lock",
        description:
            "IoT app using encrypted BLE for secure smart-lock control and access management.",
        tech: ["React Native", "BLE", "Encryption"],
        category: "IoT",
        color: "#4ADE80",
        features: ["Encrypted BLE", "Smart-lock control", "Access management"],
    },
    {
        id: 7,
        title: "Penn-AI Speech Recognition",
        description: "Real-time speech-to-text transcription app.",
        tech: ["React Native", "Speech-to-Text"],
        category: "AI",
        color: "#86EFAC",
        features: ["Real-time transcription", "Speech recognition"],
    },
    {
        id: 8,
        title: "Transplant Healthcare Platform",
        description:
            "Kidney and pancreas transplant workflow management for patients and clinicians.",
        tech: ["React Native", "REST APIs"],
        category: "Healthcare",
        color: "#16A34A",
        features: ["Transplant workflows", "Patient & clinician views"],
    },
    {
        id: 9,
        title: "Vow-Timer Wedding Planner",
        description: "Wedding planning app with countdowns, reminders, RSVP management and guest notifications.",
        tech: ["React Native", "Push Notifications"],
        category: "Events",
        color: "#22C55E",
        features: ["Countdowns", "Reminders", "RSVP management", "Guest notifications"],
    },
];

export const education = {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    college: "KIPM College of Engineering and Technology",
    university: "Dr. APJ Abdul Kalam Technical University (AKTU)",
    location: "Gorakhpur, India",
    period: "2018 — 2022",
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
