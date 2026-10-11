/**
 * =========================================================================
 * GALLERY / VISUAL ARCHIVE
 * =========================================================================
 * Curated visual gallery showcasing hackathons, campus life, research sprints,
 * travel, moments, and behind-the-scenes engineering.
 *
 * Supported categories:
 * - Campus, Events, Projects, Research, Hackathons, Travel, Moments, Behind the Scenes
 *
 * HOW TO ADD AN IMAGE:
 * 1. Place your image file (e.g. 'sih-team.jpg') inside the 'public/gallery/' folder,
 *    or provide any image URL.
 * 2. Add an object to the 'galleryData' array below:
 *    {
 *      id: "unique-slug",
 *      title: "Title of Moment",
 *      category: "Hackathons", 
 *      date: "2026",
 *      caption: "A short human caption describing what was happening.",
 *      image: "/gallery/sih-team.jpg", // or full URL
 *      externalLink: "https://..." // optional, set to null if none
 *    }
 *
 * If you leave the galleryData array empty ([]), the UI will gracefully display
 * a refined placeholder notice inviting visitors to check back soon!
 */

export const galleryCategories = [
  "All",
  "Hackathons",
  "Research",
  "Projects",
  "Campus",
  "Events",
  "Moments",
  "Behind the Scenes",
  "Travel"
];

export const galleryData = [
  {
    id: "sih-2024-finals",
    title: "Smart India Hackathon National Stage",
    category: "Hackathons",
    date: "Dec 2024",
    caption: "Late-night architectural discussions and continuous deployment during the 36-hour national finale sprint.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    externalLink: null,
    aspect: "landscape"
  },
  {
    id: "ritu-meteorological-modeling",
    title: "RITU Atmospheric Model Analysis",
    category: "Research",
    date: "2025",
    caption: "Evaluating spatial bias fields and synoptic circulation anomalies across gridded ERA5 monsoon reanalysis.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    externalLink: null,
    aspect: "portrait"
  },
  {
    id: "cryptatrace-graph-canvas",
    title: "CryptaTrace Multi-Hop Graph Traversal",
    category: "Projects",
    date: "2025",
    caption: "Interactive Neo4j topology tracing peel chains and transaction dispersion across decentralized ledgers.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    externalLink: null,
    aspect: "landscape"
  },
  {
    id: "campus-mpstme-reflections",
    title: "NMIMS MPSTME Campus Laboratories",
    category: "Campus",
    date: "2024",
    caption: "Collaborative computing labs and engineering workshops at Mukesh Patel School of Technology, Mumbai.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    externalLink: null,
    aspect: "portrait"
  },
  {
    id: "mood-indigo-liaison",
    title: "Mood Indigo Cultural Festival Operations",
    category: "Events",
    date: "2025",
    caption: "Coordination sessions and public relations liaison during Asia's largest collegiate festival at IIT Bombay.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    externalLink: null,
    aspect: "landscape"
  },
  {
    id: "sports-athletics-honors",
    title: "Athletics & Collegiate Track Honors",
    category: "Events",
    date: "2024",
    caption: "Captaining the departmental athletic contingent and clinching gold honors at the annual sports meet.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    externalLink: null,
    aspect: "landscape"
  }
];
