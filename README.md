# Hemadri Bhatnagar — Personal Portfolio & Research Archive

> **Computer Engineering Student • NMIMS MPSTME**  
> *“I build. I research. I explore.”*

An editorial, luxury-tech personal digital identity and systems showcase designed for Hemadri Bhatnagar. Built with a modern, content-driven architecture that separates data from presentation logic, making updates effortless throughout academic and engineering milestones.

---

## 🌟 Visual & Architectural Highlights

- **Visual Direction:** Obsidian dark canvas (`#09090c`), warm ivory typography, muted champagne/gold accents (`#c5a880`), and very subtle wine/crimson ambient highlights (`#80182a`).
- **Subtle Cinematic Background:** Fluid atmospheric radial glows with slow-drift CSS animations, soft noise grain, and 0% CPU strain.
- **Content-Driven Core:** All projects, gallery items, research papers, updates, and profile details are defined as standard JavaScript objects under [`src/data/`](src/data/).
- **Flagship Case Study Engine:** 10-point comprehensive engineering deep-dives for flagship systems (**CryptaTrace / ATHENS** and **RITU**).
- **Integrated Résumé Experience:** Full-fidelity in-browser modal viewer with print styling, direct PDF linking, and instant download.
- **Living Visual Archive:** Interactive filtered gallery with lightbox, captions, and responsive aspect scaling.
- **Micro-Journal:** Chronological field notes and update dispatch log.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Typography:** Newsreader (Serif), Plus Jakarta Sans (UI Sans), Cinzel (Display), JetBrains Mono (Code/Metadata)
- **Icons:** Lucide React + Custom Brand SVGs
- **Deployment:** Zero-config Vercel / Netlify / GitHub Pages compatibility

---

## 📁 Project Architecture

```
Personal/
├── public/
│   ├── favicon.svg                   <-- Luxury monogram favicon
│   └── Hemadri_Bhatnagar_Resume.pdf  <-- Raw PDF resume file
├── src/
│   ├── data/                         <-- EDITABLE CONTENT FILES
│   │   ├── profile.js                <-- Bio, tagline, contact links, "Currently" status
│   │   ├── projects.js               <-- Flagship & secondary projects + case studies
│   │   ├── research.js               <-- Published papers & ongoing investigations
│   │   ├── experience.js             <-- Leadership & outreach timeline
│   │   ├── education.js              <-- NMIMS MPSTME degree & coursework
│   │   ├── achievements.js           <-- SIH finalist, gold medals, certifications
│   │   ├── gallery.js                <-- Visual archive images & categories
│   │   ├── skills.js                 <-- Categorized technical toolkit
│   │   └── updates.js                <-- Chronological field notes
│   ├── components/
│   │   ├── BackgroundAmbient.jsx     <-- Cinematic glow & noise canvas
│   │   ├── Navbar.jsx                <-- Glassmorphic sticky header & mobile drawer
│   │   ├── Hero.jsx                  <-- Full-screen editorial typography & CTAs
│   │   ├── Currently.jsx             <-- Live active status cards
│   │   ├── About.jsx                 <-- Human narrative & technical dossier
│   │   ├── Projects.jsx              <-- Flagship systems & interactive cards
│   │   ├── CaseStudyModal.jsx        <-- 10-point architectural deep-dive viewer
│   │   ├── Skills.jsx                <-- Categorized skill matrices
│   │   ├── Experience.jsx            <-- Timeline of responsibilities
│   │   ├── Education.jsx             <-- University & secondary foundations
│   │   ├── Research.jsx              <-- Published paper & ongoing research
│   │   ├── Achievements.jsx          <-- Honors & metric cards
│   │   ├── Gallery.jsx               <-- Filtered masonry & lightbox
│   │   ├── Updates.jsx               <-- Micro-journal feed
│   │   ├── ResumeModal.jsx           <-- Digital resume viewer & print engine
│   │   ├── Contact.jsx               <-- Inquiries, verified emails & dispatch form
│   │   ├── Footer.jsx                <-- Monogram, shortcuts & location clock
│   │   └── SocialIcons.jsx           <-- Scalable vector social icons
│   ├── App.jsx                       <-- Master layout & modal state management
│   ├── main.jsx                      <-- Application entry point
│   └── index.css                     <-- Global styles & glassmorphism utilities
├── PORTFOLIO_UPDATE_GUIDE.md         <-- Complete beginner-friendly guide to updating content
└── package.json
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, minified production build in the `dist/` directory.

### 3. Deploy to Vercel
1. Push this project to your GitHub account (`https://github.com/Hemadri-eng/portfolio`).
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Keep default settings (`Framework Preset: Vite`).
4. Click **Deploy**.

---

## 📖 How to Update Content

Refer to **[`PORTFOLIO_UPDATE_GUIDE.md`](PORTFOLIO_UPDATE_GUIDE.md)** for detailed, copy-paste examples on how to:
- Add a new project or case study
- Add a research paper or pre-print
- Drop a new photo into the visual gallery
- Add an achievement or certification
- Write a quick field note / update
- Update your resume PDF
