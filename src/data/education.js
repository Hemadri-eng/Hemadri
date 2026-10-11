/**
 * =========================================================================
 * EDUCATION RECORD
 * =========================================================================
 * Centralized academic background.
 * Primary: B.Tech Computer Engineering at NMIMS MPSTME (2024–2028, CGPA 7.7/10).
 * Secondary: School education in refined compact format (no 12th percentage).
 * See PORTFOLIO_UPDATE_GUIDE.md for detailed instructions.
 */

export const educationData = [
  {
    institution: "Mukesh Patel School of Technology Management & Engineering (MPSTME), NMIMS",
    degree: "Bachelor of Technology in Computer Engineering",
    period: "2024 – 2028",
    status: "In Progress",
    isPrimary: true,
    score: "CGPA: 7.7 / 10",
    location: "Mumbai, India",
    description: 
      "Pursuing intensive undergraduate coursework in computer systems, algorithmic foundations, machine learning theory, database architectures, and engineering mathematics.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Python / Java / C++)",
      "Database Management Systems & SQL",
      "Computer Organization & Architecture",
      "Discrete Mathematics & Probability",
      "Software Engineering & System Design"
    ]
  },
  {
    institution: "Senior Secondary / High School Education",
    degree: "Higher Secondary Certificate (Science Stream — PCM)",
    period: "Completed",
    status: "Graduated",
    isPrimary: false,
    score: null, // Note: Intentionally omitted 12th percentage as per portfolio specifications
    location: "India",
    description: 
      "Focused on Physics, Chemistry, and Advanced Mathematics, developing analytical problem-solving foundations prior to engineering studies.",
    coursework: [
      "Physics",
      "Mathematics & Calculus",
      "Chemistry",
      "Computer Science Foundations"
    ]
  }
];
