const projects = [
  {
    slug: 'jira-spillover-analyzer',
    title: 'Jira Spillover Analyzer',
    tagline: 'Sprint analytics from raw Jira exports',
    summary:
      'Web app to analyse Jira CSV data and identify sprint spillover patterns across teams and releases.',
    description:
      'A full-stack analytics tool that ingests Jira CSV exports and surfaces where work slips between sprints. It handles upload, parsing, normalisation, and visualisation so delivery teams can see spillover trends instead of guessing at them.',
    image: 'https://picsum.photos/seed/jira-spillover/1200/800',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Firebase Auth', 'Chart.js'],
    highlights: [
      'CSV upload and parsing pipeline with validation and error reporting',
      'PostgreSQL schema for sprints, issues, and spillover history',
      'Firebase authentication with per-user workspaces',
      'Visual breakdown of spillover by sprint, assignee, and issue type'
    ],
    github: 'https://github.com/arjunnbharath',
    appLink: ''
  },
  {
    slug: 'ai-rag-knowledge-application',
    title: 'AI / RAG Knowledge Application',
    tagline: 'Retrieval-augmented answers over private documents',
    summary:
      'RAG pipeline with document chunking, embeddings, vector search, and LLM-backed semantic retrieval.',
    description:
      'An exploration of retrieval-augmented generation end to end: splitting documents into meaningful chunks, generating embeddings, storing them in a vector index, and grounding LLM responses in retrieved context to reduce hallucination.',
    image: 'https://picsum.photos/seed/rag-knowledge/1200/800',
    tech: ['Python', 'LangChain', 'FAISS', 'OpenAI API', 'Embeddings'],
    highlights: [
      'Chunking strategies tuned for retrieval quality',
      'FAISS vector store for fast semantic search',
      'Prompt engineering to improve grounding and accuracy',
      'Evaluation of answer relevance against source passages'
    ],
    github: 'https://github.com/arjunnbharath',
    appLink: ''
  },
  {
    slug: 'onemorerep',
    title: 'OneMoreRep',
    tagline: 'Workout and progress tracking',
    summary:
      'Fitness tracking application for exercises, progress, and calorie activity across desktop and mobile.',
    description:
      'A fitness companion concept focused on logging workouts quickly and seeing progress over time. Designed mobile-first with a responsive layout that scales up to desktop dashboards.',
    image: 'https://picsum.photos/seed/onemorerep/1200/800',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    highlights: [
      'Exercise library with sets, reps, and weight logging',
      'Progress charts across time ranges',
      'Calorie and activity tracking',
      'Responsive layouts for phone and desktop'
    ],
    github: 'https://github.com/arjunnbharath',
    appLink: ''
  },
  {
    slug: 'jewelry-ecommerce-platform',
    title: 'Jewelry E-commerce Platform',
    tagline: 'Storefront with an admin control panel',
    summary:
      'E-commerce build with product browsing, inventory, discounts, promotions, and an admin dashboard.',
    description:
      'A commerce platform covering both sides of the shop: a browsing and checkout experience for customers, and an admin dashboard for managing stock, pricing, discounts, and campaigns.',
    image: 'https://picsum.photos/seed/jewelry-store/1200/800',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    highlights: [
      'Product catalogue with categories and search',
      'Inventory and stock management',
      'Discount and promotion engine',
      'Admin dashboard for pricing and campaigns'
    ],
    github: 'https://github.com/arjunnbharath',
    appLink: ''
  },
  {
    slug: 'looplab-studios',
    title: 'LoopLab Studios',
    tagline: 'Clothing commerce, product-first',
    summary:
      'Modern clothing e-commerce website with responsive UI and product-focused shopping experiences.',
    description:
      'A clothing storefront concept built around large product imagery and a clean browsing flow, with responsive layouts that keep the product the focus at every breakpoint.',
    image: 'https://picsum.photos/seed/looplab/1200/800',
    tech: ['React', 'Vite', 'CSS', 'Responsive Design'],
    highlights: [
      'Product-led landing and category pages',
      'Responsive grid that adapts to phone and desktop',
      'Cart and checkout interaction flow',
      'Consistent design system across pages'
    ],
    github: 'https://github.com/arjunnbharath',
    appLink: ''
  },
  {
    slug: 'restrobar',
    title: 'Restrobar',
    tagline: 'Restaurant site with menu presentation',
    summary:
      'Restaurant website with responsive layouts, menu presentation, and customer-focused web design.',
    description:
      'A restaurant web presence focused on menu readability and quick access to location and booking details, with layouts that work as well on a phone at the table as on desktop.',
    image: 'https://picsum.photos/seed/restrobar/1200/800',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    highlights: [
      'Menu presentation with categories and pricing',
      'Responsive hero and gallery sections',
      'Location, hours, and contact details',
      'Lightweight build with fast load times'
    ],
    github: 'https://github.com/arjunnbharath',
    appLink: ''
  }
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

export default projects;
