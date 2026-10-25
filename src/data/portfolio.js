/**
 * Portfolio Data Configuration for G. Nirmal
 * All personal details, project descriptions, skills, and links are kept here for easy editing.
 * Placeholders are explicitly identified and never invent fake credentials or statistics.
 */

export const personalData = {
  name: "G. Nirmal",
  role: "Frontend Developer & Problem Solver",
  headlineHero: "NIRMAL",
  subHero: "Frontend Developer & Problem Solver & Adaptive Web Designer",
  introduction: "I am a developer who loves learning and solving real-world problems.",
  
  profilePhoto: "/images/profile-photo.jpg",
  profilePhotoAlt: "Portrait of G. Nirmal",
  photoPlaceholderLabel: "PHOTO COMING SOON",
  photoPlaceholderHint: "Add profile-photo.jpg in /public/images/",

  location: "Tamil Nadu, India",
  college: "Agurchand Manmull Jain College",
  degree: "Bachelor of Computer Applications (BCA)",
  academicFocus: "Computer Applications, Algorithms & Web Architecture",

  introStatement: "Curiosity leads. Code brings ideas to life.",
  introBody: "My journey is driven by learning new technologies, experimenting with ideas, and building useful digital experiences.",

  aboutHeadline: "Learning by building. Growing through every project.",
  aboutBody: "I am G. Nirmal, a BCA student at Agurchand Manmull Jain College. I enjoy exploring web technologies, solving problems, and building digital experiences that are useful, intuitive, and visually engaging.",

  principles: [
    {
      title: "LEARN",
      description: "Continuously improve technical and problem-solving skills through hands-on practice and rigorous study.",
    },
    {
      title: "BUILD",
      description: "Turn ideas into functional applications and thoughtful interfaces that solve tangible challenges.",
    },
    {
      title: "EXPLORE",
      description: "Experiment with modern frontend technologies and new approaches to design and user interaction.",
    },
  ],

  approachHeadline: "Always learning. Always building.",
  approachBody: "My path into software development is grounded in hands-on experimentation. Rather than passively absorbing concepts, I test ideas by building complete projects: structuring databases, designing component states, and refining responsive layouts. Whether optimizing an algorithm in C++ or crafting a clean UI interaction in React, I value clarity, reliability, and continuous iteration.",

  contactHeadline: "Have something interesting in mind?",
  contactBody: "I'm always interested in learning, building projects, and exploring opportunities to grow as a developer.",

  contactLinks: {
    email: "24h010.nirmal@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resume: "/assets/Updated-Resume.pdf",
    locationDetail: "Chennai, Tamil Nadu, India",
    availability: "Available for internships & junior developer roles",
  },
};

export const skillsData = {
  headline: "Tools I use. Skills I continue to build.",
  categories: [
    {
      id: "frontend",
      name: "Frontend Development",
      summary: "Translating layouts into responsive, accessible, and high-performance component systems.",
      skills: [
        { name: "HTML", detail: "Semantic markup, accessibility standards, document hierarchy." },
        { name: "CSS", detail: "Modern layout engines (Grid, Flexbox), custom properties, fluid type scales." },
        { name: "JavaScript", detail: "ES6+ syntax, asynchronous programming, DOM lifecycle manipulation." },
        { name: "React", detail: "Component architecture, hooks, declarative state flow, performance patterns." },
        { name: "Tailwind CSS", detail: "Utility-first design workflows, structured configuration, responsive design." },
      ],
    },
    {
      id: "programming",
      name: "Programming Languages",
      summary: "Core programming paradigms covering procedural, object-oriented, and scripting disciplines.",
      skills: [
        { name: "Python", detail: "Scripting, rapid prototyping, backend logic with Django and data workflows." },
        { name: "Java", detail: "Object-oriented software design, encapsulation, type safety, modular structures." },
        { name: "C++", detail: "Memory fundamentals, algorithmic computation, competitive problem solving." },
      ],
    },
    {
      id: "fundamentals",
      name: "Computer Science Fundamentals",
      summary: "Algorithmic thinking and fundamental principles that underpin durable software.",
      skills: [
        { name: "Data Structures", detail: "Arrays, linked lists, stacks, queues, trees, and algorithmic complexity." },
        { name: "Problem Solving", detail: "Analytical decomposition, edge-case analysis, systematic debugging." },
        { name: "Responsive Web Design", detail: "Adaptive typography, fluid layouts, mobile-first touch optimization." },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: "notes-vault",
    title: "Notes Vault",
    discipline: "Full-Stack Academic Platform",
    year: "2026",
    description: "A student-focused academic resource-sharing platform that helps organize and share study materials, notes, assignments, and question papers.",
    technologies: ["React", "Django", "SQLite"],
    poster: "/assets/NotesVault-poster.jpg",
    image: "/assets/NotesVault-poster.jpg",
    accentTone: "#2A3A2E",
    roleDetails: "Designed responsive resource explorer, query taxonomy filters, and document preview interface.",
    liveFeatures: [
      { label: "Resource Taxonomy", detail: "Curated subjects, semesters, question papers, and lab manuals." },
      { label: "Search & Filtering", detail: "Instant query matching across course codes and academic departments." },
      { label: "Student Submission Pipeline", detail: "Structured review flow for student-contributed study materials." },
    ],
  },
  {
    id: "novacart",
    title: "NovaCart",
    discipline: "E-Commerce Frontend Concept",
    year: "2025",
    description: "A modern e-commerce frontend concept designed around product discovery and a clean shopping experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image: "/assets/NovaCart.jpeg",
    accentTone: "#3A352D",
    roleDetails: "Engineered catalog filtering, interactive product inspection panels, and real-time stateful cart checkout preview.",
    liveFeatures: [
      { label: "Product Discovery", detail: "Faceted filtering across categories, pricing bounds, and stock status." },
      { label: "Stateful Cart Engine", detail: "Real-time subtotal calculation, coupon validation, and delivery speed estimation." },
      { label: "Touch & Mobile Optimization", detail: "Gesture-friendly navigation and streamlined checkout sheet." },
    ],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    discipline: "Creative Interaction Design",
    year: "2026",
    description: "A personal portfolio exploring sophisticated visual design, smooth scroll-driven storytelling, and interactive frontend development.",
    technologies: ["React", "JavaScript", "CSS", "GSAP"],
    image: "/assets/Portfolio.png",
    accentTone: "#24221E",
    roleDetails: "Explored 2D scroll transitions, typography scale hierarchies, and responsive micro-interactions.",
    liveFeatures: [
      { label: "Narrative Pacing", detail: "Calculated viewport spacing and scroll-triggered scene revelations." },
      { label: "Architectural Typography", detail: "Scalable display letterforms anchored to viewport baselines." },
      { label: "Reduced Motion Support", detail: "Graceful fallbacks preserving all narrative content statically." },
    ],
  },
];

export const imageCredits = [
];
