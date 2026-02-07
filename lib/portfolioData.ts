// Portfolio Content Configuration
// Current State: Feb 2026

export const portfolioData = {
  hero: {
    name: "Wisdom Kinoti",
    role: "Architect of Agentic AI Systems",
    subRole: "Computer Science Sophomore | IBM Intern | RHEL System Admin",
    location: "Thika, Kenya | UTC+3",
    status: {
      machine: "Athena (HP Victus 15)",
      specs: "i5-13420H | RTX 3050 (6GB) | 8GB RAM",
      currentFocus: "RHEL 10 & IBM Granite",
      networkStatus: "Active"
    }
  },

  systemMetrics: {
    cpu: 42,
    ram: 88,
    net: "Active"
  },

  projects: [
    {
      id: "01",
      title: "HAKI - Agentic Healthcare Orchestrator",
      tagline: "[IBM Dev Day Hackathon Project]",
      problem: "Rural regions suffer from critical doctor shortages, leading to diagnostic delays.",
      solution: "An Agentic AI system using IBM Granite & watsonx Orchestrate to triage patients and allocate medical resources autonomously.",
      result: "Team Lead | Deployment on IBM Cloud | Scalable AI Architecture",
      technicalHurdle: "Orchestrating multi-agent workflows between IBM Granite and legacy hospital systems.",
      techStack: ["IBM Granite", "watsonx", "Next.js 14", "IBM Maximo"]
    },
    {
      id: "02",
      title: "AELPHER - Internship Co-Pilot",
      tagline: "[Personal RAG Pipeline]",
      problem: "High-velocity context switching between IBM internship, CS degree, and self-learning.",
      solution: "A personal 'Second Brain' dashboard that tracks deliverables and manages academic deadlines using a custom RAG pipeline.",
      result: "Unified workflow for the 'Technical Obsessive' | Zero missed deadlines",
      technicalHurdle: "Optimizing vector retrieval for personal context without hallucination.",
      techStack: ["Next.js 14", "Supabase", "RAG Pipeline", "Tailwind CSS"]
    },
    {
      id: "03",
      title: "RHEL 10 LAB - Enterprise System Hardening",
      tagline: "[System Administration]",
      problem: "Theoretical security knowledge fails in real-world application.",
      solution: "A virtualized Red Hat Enterprise Linux 10 environment for simulating enterprise-grade system administration and security hardening.",
      result: "RH124 Proficiency | Custom Kernel Tuning | VMware Integration",
      technicalHurdle: "Configuring SELinux policies without breaking critical system services.",
      techStack: ["RHEL 10", "Bash", "VMware", "Systemd"]
    }
  ],

  skills: {
    categories: [
      { name: "SYSTEMS & RHEL", level: 90 },
      { name: "AGENTIC AI / RAG", level: 85 },
      { name: "FRONTEND (NEXT.JS)", level: 80 },
      { name: "CYBERSECURITY", level: 75 }
    ],
    coreStack: [
      "IBM Granite & watsonx",
      "Red Hat Enterprise Linux (RHEL 10)",
      "Next.js 14 (App Router)",
      "Supabase & PostgreSQL",
      "Kali Linux & Burp Suite"
    ]
  },

  experience: [
    {
      period: "Jan 2026 - Present",
      company: "IBM (i3 Technologies)",
      role: "Software Developer Intern",
      details: [
        "Developing Agentic AI solutions using IBM Granite & watsonx.",
        "Collaborating on enterprise-grade architecture and cybersecurity modules.",
        "'Technical Obsessive' approach to system optimization."
      ]
    },
    {
      period: "Sep 2025 - Present",
      company: "IBM Cybersecurity Bootcamp",
      role: "i3 Technologies",
      details: [
        "IBM QRadar SIEM Specialist (Threat Detection).",
        "IBM Guardium Data Protection & Verify (IAM).",
        "Hands-on SOC operations and network defense."
      ]
    },
    {
      period: "2024 - Present",
      institution: "Zetech University",
      role: "BSc. Computer Science (Sophomore)",
      details: [
        "Year 2, Semester 2.",
        "Focus: Data Science, Calculus II, Systems Programming.",
        "Building the theoretical foundation for high-level architecture."
      ]
    }
  ],

  philosophy: {
    statement: "I operate at the intersection of technical mastery and philosophical inquiry. Whether optimizing a RAG pipeline or hardening a RHEL kernel, I approach every problem with a 'Technical Obsessive' mindset—prioritizing deep system understanding over surface-level completion."
  },

  contact: {
    email: "wisdom@example.com",
    github: "github.com/kwisdomk",
    linkedin: "linkedin.com/in/wisdomkinoti",
    resumeLink: "/resume.pdf"
  },

  footer: {
    copyright: "© 2026 Wisdom Kinoti. Built with Next.js 14 & Tailwind CSS.",
    terminalPrompt: "> Terminal_"
  }
};
