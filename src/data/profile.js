/**
 * =========================================================================
 * PROFILE CONFIGURATION
 * =========================================================================
 * Centralized personal and contact information for Hemadri Bhatnagar.
 * Edit this file to update your bio, tagline, contact links, and current status.
 * See PORTFOLIO_UPDATE_GUIDE.md for detailed instructions.
 */

export const profileData = {
  name: "Hemadri Bhatnagar",
  initials: "HB",
  primaryIdentity: "Computer Engineering Student",
  institution: "NMIMS MPSTME",
  location: "Mumbai / India",
  graduationYear: "2028",
  cgpa: "7.7 / 10",
  
  // High-impact editorial tagline
  tagline: "I build. I research. I explore.",
  
  // Concise, intelligent supporting statement
  supportingParagraph: 
    "Working across software systems, data engineering, and machine learning research. Driven by a rigorous curiosity to unpack complex architectures, build dependable technical solutions, and explore real-world problem domains from blockchain forensics to atmospheric AI.",

  // Narrative bio for the About Me section
  about: {
    lead: "A Computer Engineering student at NMIMS MPSTME combining software engineering disciplines with experimental machine learning research.",
    paragraphs: [
      "My work centers on engineering reliable, data-intensive systems. Rather than viewing technology in isolated silos, I focus on the connective tissue between solid software architecture, mathematical modeling, and real-world utility.",
      "From tracing multi-hop cryptocurrency transactions to post-processing complex meteorological radar forecasts, I am drawn to domains where massive data streams meet algorithmic clarity. Beyond technical implementation, I actively participate in collegiate outreach, community initiatives, and public relations leadership.",
      "When I am not coding or reviewing research papers, I am usually exploring emerging AI systems, analyzing infrastructure efficiency, or captaining athletic teams on the field."
    ],
    quickFacts: [
      { label: "Based in", value: "India" },
      { label: "Education", value: "B.Tech Computer Engineering" },
      { label: "University", value: "NMIMS MPSTME" },
      { label: "Graduation", value: "2028" },
      { label: "Academic Standing", value: "7.7 CGPA" },
      { label: "Core Domains", value: "Systems • Data • AI/ML • Research" }
    ]
  },

  // "Currently" live status panel (Section 6)
  currently: {
    statusBadge: "Active Engineering & Research",
    availabilityNote: "Open for research collaborations & engineering internships",
    items: [
      {
        label: "CURRENTLY BUILDING",
        title: "RITU",
        detail: "Regime-Aware AI Post-Processing of Monsoon Rainfall Forecasts",
        tag: "AI / Climate Tech",
        linkText: "View Case Study",
        projectId: "ritu"
      },
      {
        label: "CURRENTLY RESEARCHING",
        title: "Carbon-Aware AI Workloads",
        detail: "Investigating workload migration algorithms for large-scale AI aligned with grid carbon intensity",
        tag: "Green Computing",
        linkText: "Read Overview",
        researchId: "carbon-aware-ai"
      },
      {
        label: "CURRENTLY EXPLORING",
        title: "Systems & Intelligence",
        detail: "AI • Distributed Data • Cloud Infrastructure • Graph Forensics",
        tag: "Technical Horizons"
      }
    ]
  },

  // Contact and Social Links
  contact: {
    primaryEmail: "hemadri.bhatnagar07@gmail.com",
    collegeEmail: "HEMADRI.BHATNAGAR723@nmims.in",
    linkedin: "https://www.linkedin.com/in/hemadribhatnagar/",
    github: "https://github.com/Hemadri-eng/",
    headline: "LET'S BUILD SOMETHING MEANINGFUL.",
    subtext: "Whether you have an ambitious engineering challenge, a research collaboration, or an opportunity at your organization, I would love to connect."
  },

  // Resume configuration
  resume: {
    fileName: "Hemadri_Bhatnagar_Resume.pdf",
    filePath: "/Hemadri_Bhatnagar_Resume.pdf",
    lastUpdated: "Fall 2026",
    actionLabel: "VIEW RÉSUMÉ"
  }
};
