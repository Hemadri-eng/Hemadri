/**
 * =========================================================================
 * PROJECTS REPOSITORY & CASE STUDIES
 * =========================================================================
 * Centralized list of projects with rich metadata, optional fields, and 
 * full 10-step case study capability.
 * 
 * Each project supports:
 * - id, number, title, subtitle, category, year, featured, isFlagship
 * - role (e.g. "Systems Architect & Graph Engineer")
 * - shortDescription (or description)
 * - problem & solution & outcome
 * - technologies (array of strings)
 * - highlights (array of strings)
 * - githubUrl (GitHub link)
 * - liveUrl (live demo link)
 * - architectureImage (optional diagram image)
 * - futureUpdates (optional array of roadmap milestones)
 * - caseStudy (optional 10-part comprehensive case study)
 * 
 * All fields are optional and fail gracefully.
 * See PORTFOLIO_UPDATE_GUIDE.md for step-by-step instructions.
 */

export const projectsData = [
  {
    id: "cryptatrace",
    number: "01",
    title: "CryptaTrace / ATHENS",
    subtitle: "Blockchain Cryptocurrency Fraud Investigation & Tracing Platform",
    category: "Blockchain Forensics & Graph Analytics",
    year: "2025 – 2026",
    role: "Lead Systems Architect & Graph Forensics Engineer",
    featured: true,
    isFlagship: true,
    shortDescription: 
      "An automated forensic tracing platform that maps illicit cryptocurrency transactions through multi-hop graph traversals, peel-chain detection, and explainable risk scoring.",
    problem: 
      "Decentralized ledgers provide pseudo-anonymity where bad actors split illicit funds across hundreds of micro-transactions, wash them through mixing services, and obfuscate asset flows. Traditional linear block queries fail when analyzing complex, high-degree transaction topologies involving hundreds of hops.",
    solution: 
      "Engineered an automated graph analytics pipeline utilizing Neo4j to model wallets and transfer flows as weighted multigraphs. Combined heuristic peel-chain detection with explainable risk scoring algorithms to trace tainted funds across 15+ degrees of separation in under two minutes.",
    outcome: 
      "Reduced forensic triage time from several hours of manual block exploration to under two minutes per cluster with high precision and court-ready audit exports.",
    technologies: [
      "Python",
      "FastAPI",
      "Neo4j",
      "React",
      "WebSockets",
      "Graph Algorithms",
      "Cryptography"
    ],
    highlights: [
      "Multi-hop transaction traversal & peel-chain heuristic tracking",
      "Graph-based interactive network visualization with Neo4j",
      "Explainable algorithmic risk scoring for tainted wallets",
      "Automated forensic audit trail & compliance report generation"
    ],
    githubUrl: "https://github.com/Hemadri-eng/",
    liveUrl: null,
    architectureImage: null,
    futureUpdates: [
      "Cross-chain bridge tracing between Ethereum, Solana, and Bitcoin UTXO sets",
      "Zero-Knowledge mixer de-anonymization heuristic integration",
      "Real-time mempool pre-confirmation anomaly alerts"
    ],
    
    // Complete 10-Part Case Study Specification
    caseStudy: {
      // 01 — Overview
      overview: 
        "CryptaTrace (ATHENS) is an intelligence platform engineered to reconstruct obscured fund movements across public distributed ledgers. By converting raw blockchain ledger events into directed multigraphs, the system enables investigators to expose money laundering patterns, mixer interactions, and high-frequency peel chains.",
      
      // 02 — Problem
      problem: 
        "Decentralized ledgers provide pseudo-anonymity where bad actors split illicit funds across hundreds of micro-transactions, wash them through mixing services, and obfuscate asset flows. Traditional linear query tools fail when analyzing complex, high-degree transaction topologies involving hundreds of hops across multiple exchange clusters.",
      
      // 03 — Approach
      approach: 
        "Developed a multi-tiered graph traversal engine that ingests block events, resolves change-address heuristics, and computes cumulative contamination metrics across downstream hops. Algorithms flag suspicious velocity and structuring patterns with explainable confidence weights.",
      
      // 04 — Architecture
      architecture: [
        {
          layer: "Data Ingestion & Block Parsing",
          detail: "Streams raw block and transaction logs, standardizing UTXO and account-based transfer events into normalized schemas with timestamp indexing."
        },
        {
          layer: "Graph Analytics Core (Neo4j)",
          detail: "Models addresses as nodes and transfer flows as weighted, timestamped edges. Executes multi-hop traversal with cycle detection and loop suppression."
        },
        {
          layer: "Risk Inference Engine",
          detail: "Calculates tainted fund percentages using decaying propagation models, identifying exit endpoints, mixer addresses, and exchange deposit wallets."
        },
        {
          layer: "Forensic UI & Report Exporter",
          detail: "Interactive Force-Directed graph canvas built with React, paired with tamper-evident PDF evidence export compliant with judicial investigation standards."
        }
      ],
      
      // 05 — Technology
      technologies: [
        { name: "Neo4j & Cypher", role: "Graph topology storage & sub-graph pattern matching" },
        { name: "Python / FastAPI", role: "High-throughput asynchronous backend service & parsing pipeline" },
        { name: "React & Force Canvas", role: "Interactive node expansion and transaction path visualization" },
        { name: "WebSockets", role: "Live stream of incoming transaction confirmations and risk triggers" }
      ],
      
      // 06 — Key Features
      keyFeatures: [
        "Multi-Hop Flow Traversal: Traces asset dispersal up to 15 degrees of separation with loop suppression.",
        "Peel-Chain Identification: Distinguishes automated change addresses from true recipient wallets using UTXO value differentials.",
        "Explainable Risk Scoring: Breaks down suspicion score by mixer proximity, velocity, and blacklisted cluster association.",
        "Court-Ready Evidence Export: Automatically generates forensic timelines with transaction hashes, timestamps, and address attributions."
      ],
      
      // 07 — Results / Impact
      results: 
        "Compressed forensic tracing triage from hours of manual block explorer parsing to under two minutes for multi-hop wash cycles. Successfully verified against historical exchange exploit vectors with high precision and near-zero false-positive cluster attribution.",
      
      // 08 — Screenshots & Telemetry
      screenshots: [
        {
          title: "Multi-Hop Force-Directed Graph Analysis",
          caption: "Interactive Neo4j graph canvas tracing wallet nodes, transaction edges, and tainted peel-chains across multiple hops.",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80"
        },
        {
          title: "Algorithmic Risk Scoring & Audit Trail",
          caption: "Dynamic risk score breakdown indicating mixer proximity, hop distance, and automated evidence report compilation.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        }
      ],
      
      // 09 — Learnings
      learnings: 
        "Handling massive graph expansion requires strict pruning heuristics and indexing strategies on high-degree exchange nodes. Designing explainable risk metrics that non-technical investigators can defend under legal scrutiny requires clear heuristic decomposition rather than opaque black-box models.",
      
      // 10 — Links
      links: [
        { label: "Source Repository", url: "https://github.com/Hemadri-eng/" },
        { label: "Inquire for Technical Paper", url: "mailto:hemadri.bhatnagar07@gmail.com" }
      ]
    }
  },
  {
    id: "ritu",
    number: "02",
    title: "RITU",
    subtitle: "Regime-Intelligent Temporal Understanding for Monsoon Rainfall",
    category: "Atmospheric AI & Climate Informatics",
    year: "2025 – 2026",
    role: "Lead Machine Learning Researcher & Pipeline Engineer",
    featured: true,
    isFlagship: true,
    shortDescription: 
      "An AI/ML-driven post-processing framework that corrects numerical weather prediction biases by classifying synoptic weather regimes and calibrating extreme precipitation probabilities.",
    problem: 
      "Standard Numerical Weather Prediction (NWP) models suffer from systematic biases over the Indian subcontinent due to complex terrain, convective feedback, and boundary-layer physics approximations. Static correction methods fail because precipitation dynamics fundamentally alter depending on the prevailing large-scale monsoon circulation regime.",
    solution: 
      "Constructed a regime-aware post-processing system: an unsupervised clustering model identifies the synoptic circulation regime (active monsoon trough, low-pressure depression, break phase), after which regime-conditioned gradient boosted ensembles estimate non-linear residual bias corrections.",
    outcome: 
      "Achieved substantial reduction in Root Mean Square Error (RMSE) against IMD/ERA5 observational grids, with dramatically enhanced calibration for high-impact extreme rainfall probability alerts.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "ERA5 Reanalysis",
      "NetCDF / Xarray",
      "Pandas / NumPy",
      "Statistical Climatology"
    ],
    highlights: [
      "Synoptic atmospheric circulation regime identification",
      "Non-linear bias correction for Numerical Weather Prediction (NWP)",
      "Heavy rainfall probability calibration for localized flash floods",
      "Grid-to-district spatial post-processing for disaster mitigation"
    ],
    githubUrl: "https://github.com/Hemadri-eng/",
    liveUrl: null,
    architectureImage: null,
    futureUpdates: [
      "Integration of real-time INSAT-3D Doppler radar reflectivity feeds",
      "Graph Neural Network (GNN) spatial downscaling to 1km sub-grid resolution",
      "Hydrological runoff coupling for localized urban flood warning"
    ],
    
    // Complete 10-Part Case Study Specification
    caseStudy: {
      // 01 — Overview
      overview: 
        "RITU (Regime-Intelligent Temporal Understanding) addresses one of South Asia's most challenging meteorological problems: severe localized underprediction and spatial displacement of extreme monsoon rainfall in conventional numerical weather models.",
      
      // 02 — Problem
      problem: 
        "Standard Numerical Weather Prediction (NWP) models (like GFS/ECMWF) suffer from systematic biases over the Indian subcontinent due to complex terrain, rapid convective feedback, and boundary-layer physics approximations. Static correction methods fail because precipitation dynamics fundamentally change depending on the prevailing large-scale monsoon circulation regime.",
      
      // 03 — Approach
      approach: 
        "Engineered a two-phase regime-aware framework: first, an unsupervised clustering model identifies the prevailing synoptic atmospheric circulation regime (e.g., active monsoon trough, low-pressure depression, break phase). Second, dedicated ML regressors trained specifically for that regime predict residual error corrections and heavy rainfall probability thresholds.",
      
      // 04 — Architecture
      architecture: [
        {
          layer: "Atmospheric Reanalysis Pipeline",
          detail: "Processes gridded NetCDF variables (geopotential height, specific humidity, u/v wind vectors, vertical velocity) from ERA5 and operational forecast runs."
        },
        {
          layer: "Circulation Regime Classifier",
          detail: "Clusters synoptic scale wind and pressure anomalies to automatically identify active vs. suppressed meteorological phases."
        },
        {
          layer: "Residual ML Correction (XGBoost)",
          detail: "Trains regime-specific gradient boosted ensembles to correct raw NWP grid precipitation output against ground truth."
        },
        {
          layer: "Probabilistic Threshold Calibrator",
          detail: "Quantile mapping and extreme value estimation to quantify probability of exceeding 64.5mm (heavy) and 115.5mm (very heavy) rainfall thresholds."
        }
      ],
      
      // 05 — Technology
      technologies: [
        { name: "Python / Xarray / NetCDF4", role: "High-dimensional multi-variate spatial data processing" },
        { name: "XGBoost & Scikit-learn", role: "Regime-conditioned non-linear residual regression" },
        { name: "NumPy & Pandas", role: "Temporal time-series alignment and validation metrics" },
        { name: "Matplotlib & Cartopy", role: "Spatial meteorological contour and bias field mapping" }
      ],
      
      // 06 — Key Features
      keyFeatures: [
        "Regime-Aware Calibration: Tailors error correction parameters dynamically based on large-scale monsoon troughs.",
        "District & Grid-Level Downscaling: Maps coarse NWP forecasts into actionable localized spatial estimates.",
        "Extreme Precipitation Focus: Optimizes asymmetric loss functions to penalize missed extreme rainfall events.",
        "Lead-Time Resilience: Maintains improved skill scores across 24h, 48h, and 72h forecast horizons."
      ],
      
      // 07 — Results / Impact
      results: 
        "Demonstrated notable reduction in Root Mean Square Error (RMSE) across test monsoon seasons compared to raw model output, with significantly improved reliability for localized heavy rainfall alerts and reduced false alarms.",
      
      // 08 — Screenshots & Telemetry
      screenshots: [
        {
          title: "Synoptic Circulation Regime Clustering",
          caption: "Principal Component analysis and pressure anomaly field clustering identifying distinct synoptic monsoon phases.",
          image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80"
        },
        {
          title: "District-Level Precipitation Calibration",
          caption: "Spatial bias fields comparing raw NWP model forecasts against regime-calibrated ground truth precipitation grids.",
          image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=80"
        }
      ],
      
      // 09 — Learnings
      learnings: 
        "Learned that standard mean-squared error loss heavily disfavors rare extreme events in precipitation datasets. Designing physically informed boundary conditions and asymmetric penalization is critical when pairing ML with geophysical models.",
      
      // 10 — Links
      links: [
        { label: "Research Code Repository", url: "https://github.com/Hemadri-eng/" },
        { label: "Collaborate / Contact", url: "mailto:hemadri.bhatnagar07@gmail.com" }
      ]
    }
  },
  {
    id: "wayfinder",
    number: "03",
    title: "NMIMS WayFinder",
    subtitle: "Smart Indoor Campus Navigation & Spatial Routing",
    category: "Campus Tech & Systems",
    year: "2024 – 2025",
    role: "Full-Stack Developer & Graph Routing Engineer",
    featured: false,
    isFlagship: false,
    shortDescription: 
      "A responsive indoor wayfinding web system built to navigate the complex multi-wing, multi-floor academic campus of NMIMS MPSTME with turn-by-turn routing.",
    problem: 
      "Navigating multi-floor, multi-wing collegiate facilities poses daily friction for new students, faculty, and campus visitors, as standard GPS tools cannot penetrate concrete indoor elevations.",
    solution: 
      "Modeled campus corridors, staircases, and elevators as a topological graph, executing Dijkstra's algorithm to deliver low-latency shortest path indoor directions via a lightweight React client and Flask API.",
    outcome: 
      "Enabled instantaneous room-to-room route guidance across floors with an embedded SQLite database accessible via mobile browsers.",
    technologies: [
      "React.js",
      "Flask",
      "Python",
      "SQLite",
      "Graph Search (Dijkstra/A*)",
      "CSS Modular Layouts"
    ],
    highlights: [
      "Multi-floor topological campus graph model",
      "Optimized indoor shortest path routing using Dijkstra's algorithm",
      "Interactive room, lab, and faculty office search",
      "Lightweight responsive client for instant mobile access"
    ],
    githubUrl: "https://github.com/Hemadri-eng/",
    liveUrl: null,
    architectureImage: null,
    futureUpdates: [
      "BLE Beacon proximity trilateration for automated blue-dot positioning",
      "Accessible path toggle for elevator-only wheelchair navigation"
    ],
    caseStudy: null
  },
  {
    id: "zomato-analytics",
    number: "04",
    title: "Zomato Data Analysis System",
    subtitle: "Exploratory Dining Intelligence & Geographic Price Analytics",
    category: "Data Science & Visual EDA",
    year: "2024",
    role: "Data Analyst & Exploratory Researcher",
    featured: false,
    isFlagship: false,
    shortDescription: 
      "An end-to-end data analytics pipeline examining restaurant distribution, cost structures, cuisine clustering, and rating correlations across major urban dining hubs.",
    problem: 
      "High-cardinality restaurant metadata contains pervasive noise, missing coordinates, and non-standardized price bands that obscure consumer dining trends.",
    solution: 
      "Structured a robust Python cleaning and exploratory analysis pipeline with Pandas and NumPy, synthesizing correlation metrics between price, delivery options, and customer sentiment.",
    outcome: 
      "Derived key market insights on cuisine density and pricing equilibrium, presented through Seaborn and Matplotlib visualization charts.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Exploratory Data Analysis"
    ],
    highlights: [
      "Data sanitation and feature engineering on high-cardinality restaurant metadata",
      "Multivariate correlation between cost for two, online delivery, and ratings",
      "Geographic clustering of cuisines and rating density",
      "Interactive visualization dashboards uncovering consumer sentiment"
    ],
    githubUrl: "https://github.com/Hemadri-eng/",
    liveUrl: null,
    architectureImage: null,
    futureUpdates: [
      "NLP topic modeling on raw user review text for sentiment extraction",
      "Interactive Streamlit web application for consumer exploration"
    ],
    caseStudy: null
  }
];
