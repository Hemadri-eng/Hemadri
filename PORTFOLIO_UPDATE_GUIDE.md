# Portfolio Content & Maintenance Guide
### *Hemadri Bhatnagar — Digital Identity & Research Archive*

Welcome to your personal portfolio codebase. This website is built using a **centralized, content-driven architecture**. You do **not** need to modify complex React components, JSX templates, or CSS stylesheets to update your projects, research, gallery photos, or contact info.

All content is cleanly organized under the `src/data/` directory.

---

## Table of Contents
1. [Where Content Lives](#1-where-content-lives)
2. [How to Update About Me & Core Bio](#2-how-to-update-about-me--core-bio)
3. [How to Update "Currently" Live Status](#3-how-to-update-currently-live-status)
4. [How to Add or Edit a Project (with Full 10-Step Case Studies)](#4-how-to-add-or-edit-a-project)
5. [How to Add a Research Paper or Publication](#5-how-to-add-a-research-paper-or-publication)
6. [How to Add a Photo / Moment to the Gallery](#6-how-to-add-a-photo-to-the-gallery)
7. [How to Add an Achievement or Certification](#7-how-to-add-an-achievement-or-certification)
8. [How to Add a Field Note / Update](#8-how-to-add-a-field-note--update)
9. [How to Replace Your Resume PDF](#9-how-to-replace-your-resume-pdf)
10. [How to Update Contact & Social Links](#10-how-to-update-contact--social-links)
11. [How to Test & Deploy to Vercel](#11-how-to-test--deploy-to-vercel)

---

## 1. Where Content Lives

```
src/
└── data/
    ├── profile.js        <-- Bio, tagline, contact info, "Currently" status, resume config
    ├── projects.js       <-- Flagship & secondary projects, full 10-step case study blueprints
    ├── research.js       <-- Published papers & ongoing research investigations
    ├── experience.js     <-- Timeline of roles, leadership, and public relations
    ├── education.js      <-- NMIMS MPSTME B.Tech record & coursework
    ├── achievements.js   <-- Hackathons, sports golds, certifications, awards
    ├── gallery.js        <-- Visual archive & lightbox items
    ├── skills.js         <-- Categorized technical skills & proficiencies
    └── updates.js        <-- Chronological field notes and micro-updates
```

---

## 2. How to Update About Me & Core Bio

Open **`src/data/profile.js`**.

- To edit your narrative bio, modify the `about.paragraphs` array:
```javascript
about: {
  lead: "A Computer Engineering student at NMIMS MPSTME combining software engineering disciplines with experimental machine learning research.",
  paragraphs: [
    "Your first paragraph here...",
    "Your second paragraph here...",
    "Your third paragraph here..."
  ],
  quickFacts: [
    { label: "Based in", value: "India" },
    { label: "Education", value: "B.Tech Computer Engineering" },
    { label: "University", value: "NMIMS MPSTME" },
    { label: "Graduation", value: "2028" },
    { label: "Academic Standing", value: "7.7 CGPA" }
  ]
}
```

---

## 3. How to Update "Currently" Live Status

Open **`src/data/profile.js`** and locate the `currently` object:

```javascript
currently: {
  statusBadge: "Active Engineering & Research",
  items: [
    {
      label: "CURRENTLY BUILDING",
      title: "RITU",
      detail: "Regime-Aware AI Post-Processing of Monsoon Rainfall Forecasts",
      tag: "AI / Climate Tech",
      projectId: "ritu" // Optional: links to project case study modal
    },
    {
      label: "CURRENTLY RESEARCHING",
      title: "Carbon-Aware AI Workloads",
      detail: "Investigating workload migration algorithms for large-scale AI",
      tag: "Green Computing",
      researchId: "carbon-aware-ai" // Optional: links to research section
    },
    {
      label: "CURRENTLY EXPLORING",
      title: "Systems & Intelligence",
      detail: "AI • Distributed Data • Cloud Infrastructure • Graph Forensics",
      tag: "Technical Horizons"
    }
  ]
}
```

---

## 4. How to Add or Edit a Project

Open **`src/data/projects.js`**.

### Standard Project Schema
Each project object supports these fields (all optional and fail gracefully if omitted):
- `id` *(string)*: Unique slug (e.g. `"my-project"`)
- `number` *(string)*: Display index (e.g. `"05"`)
- `title` *(string)*: Project name
- `subtitle` *(string)*: One-line descriptive subtitle
- `category` *(string)*: Technical domain (e.g. `"Distributed Systems"`)
- `year` *(string)*: Year or range (e.g. `"2026"`)
- `role` *(string)*: Your role (e.g. `"Systems Architect & Backend Lead"`)
- `featured` *(boolean)*: Highlighted in showcases
- `isFlagship` *(boolean)*: `true` for large editorial showcase card, `false` for compact grid card
- `shortDescription` *(string)*: 2–3 sentence summary
- `problem` *(string)*: Problem statement
- `solution` *(string)*: Engineering solution
- `outcome` *(string)*: Tangible metric or outcome
- `technologies` *(array)*: Tech stack tags (e.g. `["Python", "FastAPI", "Neo4j"]`)
- `highlights` *(array)*: Bullet points
- `githubUrl` *(string)*: URL to source repo (or `null`)
- `liveUrl` *(string)*: URL to live demo (or `null`)
- `architectureImage` *(string)*: Path to architecture diagram (or `null`)
- `futureUpdates` *(array)*: Roadmap items (or `null`)
- `caseStudy` *(object)*: Full 10-step case study blueprint (or `null`)

```javascript
{
  id: "distributed-queue",
  number: "05",
  title: "Distributed Task Queue",
  subtitle: "High-Throughput Asynchronous Task Scheduler",
  category: "Distributed Systems",
  year: "2026",
  role: "Systems Developer",
  featured: false,
  isFlagship: false,
  shortDescription: "A fault-tolerant worker queue built in Python with Redis backing.",
  problem: "High request volumes caused memory spikes in synchronous endpoints.",
  solution: "Implemented an asynchronous worker pool with exponential backoff retries.",
  outcome: "Maintained 99.9% uptime during peak loads with sub-10ms job dispatch.",
  technologies: ["Python", "Redis", "FastAPI", "Docker"],
  highlights: [
    "Sub-millisecond job dispatch latency",
    "Automatic exponential backoff retries",
    "Dead-letter queue inspection dashboard"
  ],
  githubUrl: "https://github.com/Hemadri-eng/task-queue",
  liveUrl: null,
  caseStudy: null
}
```

### Adding a Full 10-Step Case Study
For flagship projects, add a `caseStudy` object matching the 10-part specification:
```javascript
caseStudy: {
  // 01 — Overview
  overview: "Executive summary of the platform and motivation...",

  // 02 — Problem
  problem: "What technical roadblock existed...",

  // 03 — Approach
  approach: "How you formulated the algorithmic solution...",

  // 04 — Architecture
  architecture: [
    { layer: "Ingestion Engine", detail: "How data enters the system..." },
    { layer: "Processing Core", detail: "How models compute results..." }
  ],

  // 05 — Technology
  technologies: [
    { name: "Neo4j", role: "Graph topology store" },
    { name: "FastAPI", role: "Asynchronous REST backend" }
  ],

  // 06 — Key Features
  keyFeatures: [
    "Feature 1: Multi-hop flow traversal...",
    "Feature 2: Peel-chain heuristics..."
  ],

  // 07 — Results / Impact
  results: "Measurable metrics and speedup achieved...",

  // 08 — Screenshots
  screenshots: [
    {
      title: "Interactive Graph Canvas",
      caption: "Neo4j visualization of transaction flows...",
      image: "https://... or /assets/screenshot.png"
    }
  ],

  // 09 — Learnings
  learnings: "What was challenging and what you took away...",

  // 10 — Links
  links: [
    { label: "Source Repository", url: "https://github.com/..." },
    { label: "Technical Paper Inquiry", url: "mailto:hemadri.bhatnagar07@gmail.com" }
  ]
}
```

---

## 5. How to Add a Research Paper or Publication

Open **`src/data/research.js`**.

Add a new item to `researchData`:
```javascript
{
  id: "paper-title-slug",
  title: "Title of Your Research Study",
  status: "Published", // or "In Progress", "Under Review", "Preprint"
  type: "Published Research Paper",
  venue: "Name of IEEE/ACM Conference or Journal",
  year: "2026",
  leadSummary: "One sentence summary highlighting the core discovery...",
  abstract: "The full scientific abstract of the paper...",
  topics: ["Machine Learning", "Climate Informatics", "Optimization"],
  doi: "https://doi.org/10.xxxx/xxxxx", // or null
  paperUrl: "https://arxiv.org/abs/xxxx.xxxxx", // or null
  isOngoing: false // true if ongoing, false if completed/published
}
```

---

## 6. How to Add a Photo to the Gallery

1. Place your photo file (e.g. `sih-stage.jpg`) into the `public/gallery/` folder, or use an image URL.
2. Open **`src/data/gallery.js`**.
3. Add a new item to `galleryData`:

```javascript
{
  id: "hackathon-trophy-2026",
  title: "Smart India Hackathon Award Ceremony",
  category: "Hackathons", // Options: "Hackathons", "Research", "Projects", "Campus", "Events", "Moments", "Behind the Scenes", "Travel"
  date: "Dec 2026",
  caption: "On stage receiving recognition following the 36-hour continuous build finale.",
  image: "/gallery/sih-stage.jpg", // or full web URL
  externalLink: null // or URL to an article/tweet
}
```

> **Note:** If an image link is broken or a local file is missing, the gallery gracefully displays an elegant abstract fallback card without layout breakage.

---

## 7. How to Add an Achievement or Certification

Open **`src/data/achievements.js`**.

```javascript
{
  id: "new-award",
  category: "Hackathons & Innovation",
  title: "First Place — State Innovation Summit",
  issuer: "Technical Council",
  year: "2026",
  stat: "1ST",
  statLabel: "Grand Prize",
  description: "Recognized for building an accessible AI translation tool under competitive time constraints.",
  badge: "State Champion"
}
```

---

## 8. How to Add a Field Note / Update

Open **`src/data/updates.js`**.

Prepend a new entry at the top of `updatesData`:
```javascript
{
  id: "sih-2026-update",
  date: "October 2026",
  title: "Qualified for SIH 2026 Grand Finale",
  category: "Hackathon",
  text: "Our team's proposal on intelligent traffic optimization has advanced to the national level.",
  linkText: "Read Project Details",
  linkUrl: "#work",
  badge: "Milestone",
  image: null // optional: provide an image URL if you want a thumbnail attached!
}
```

---

## 9. How to Replace Your Resume PDF

1. Export your updated resume as a PDF file named **`Hemadri_Bhatnagar_Resume.pdf`**.
2. Drop it into the **`public/`** directory (replacing `public/Hemadri_Bhatnagar_Resume.pdf`).
3. If you ever want to change the filename, update it in **`src/data/profile.js`**:
```javascript
resume: {
  fileName: "Hemadri_Bhatnagar_Resume.pdf",
  filePath: "/Hemadri_Bhatnagar_Resume.pdf",
  lastUpdated: "Fall 2026",
  actionLabel: "VIEW RÉSUMÉ"
}
```

When visitors click **VIEW RÉSUMÉ**, they can read your resume in an interactive digital viewer, print it directly, view the raw PDF in a tab or embedded iframe, or download it!

---

## 10. How to Update Contact & Social Links

Open **`src/data/profile.js`** under `contact`:
```javascript
contact: {
  primaryEmail: "hemadri.bhatnagar07@gmail.com",
  collegeEmail: "HEMADRI.BHATNAGAR723@nmims.in",
  linkedin: "https://www.linkedin.com/in/hemadribhatnagar/",
  github: "https://github.com/Hemadri-eng/",
  headline: "LET'S BUILD SOMETHING MEANINGFUL."
}
```

---

## 11. How to Test & Deploy to Vercel

### Testing Locally
```powershell
# Start local development server
npm run dev

# Run a production build test
npm run build
```

### Deploying to Vercel
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete editorial personal portfolio"
   git remote add origin https://github.com/Hemadri-eng/portfolio.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **"Add New Project"** and select your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**. Your portfolio will be live with automatic SSL in under 60 seconds!
