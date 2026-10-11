/**
 * =========================================================================
 * RESEARCH & SCHOLARLY PUBLICATIONS
 * =========================================================================
 * Centralized research portfolio covering both peer-reviewed published work
 * and ongoing investigative studies.
 * Edit this file to add new papers or pre-prints.
 * See PORTFOLIO_UPDATE_GUIDE.md for detailed instructions.
 */

export const researchData = [
  {
    id: "sustainability-egov",
    title: "Sustainability, E-Governance, and Digital Transformation",
    status: "Published",
    type: "Published Research Paper",
    venue: "Academic / Peer-Reviewed Conference Proceedings",
    year: "2024",
    leadSummary: 
      "An analytical inquiry into how modern e-governance infrastructures, digital public goods, and institutional digital transformation can be systematically aligned with environmental and operational sustainability goals.",
    abstract: 
      "The paper investigates the intersection of large-scale public sector digitization and long-term sustainability metrics. Through comparative analysis of automated administrative workflows, electronic citizen service portals, and paperless architectures, this work demonstrates how targeted digital governance initiatives yield measurable carbon mitigation and administrative efficiency dividends.",
    topics: [
      "Digital Public Infrastructure (DPI)",
      "E-Governance Architectures",
      "Sustainable Computing",
      "Public Sector Transformation"
    ],
    doi: null, // Add DOI link here when available
    paperUrl: null,
    isOngoing: false
  },
  {
    id: "carbon-aware-ai",
    title: "Carbon-Aware Workload Migration in Large-Scale AI",
    status: "In Progress",
    type: "Ongoing Research Investigation",
    venue: "Under Active Investigation / Manuscript in Preparation",
    year: "2025 – 2026",
    leadSummary: 
      "Exploring spatiotemporal workload shifting strategies for intensive deep learning training jobs and inference clusters to dynamically synchronize compute demands with localized grid renewable energy supply.",
    abstract: 
      "As artificial intelligence training regimes demand exponentially greater compute footprints, regional power grids struggle with high intermittent carbon intensities. This research models intelligent queue scheduling and cross-datacenter migration algorithms that dynamically migrate deferrable AI workloads toward geolocations with surplus solar or wind generation, minimizing operational emissions without violating convergence SLAs.",
    topics: [
      "Green Computing",
      "Distributed AI Systems",
      "Grid Carbon Intensity Modeling",
      "Dynamic Workload Scheduling"
    ],
    doi: null,
    paperUrl: null,
    isOngoing: true
  }
];
