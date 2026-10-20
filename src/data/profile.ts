// All site content lives here. Edit this file to update the portfolio.
import type { TechKey } from './tech'

export type Stat = { value: string; label: string }
export type ExpertiseIcon = 'code' | 'sparkles' | 'cloud' | 'database' | 'shield' | 'users'
export type ExpertiseItem = { title: string; tag: string; icon: ExpertiseIcon; body: string; stack: string[] }
export type StackTile = { tech: TechKey; x: number; y: number; size: number; depth: number }
export type WorkItem = {
  tag: string
  context: string
  title: string
  summary: string
  points: string[]
  stack: string[]
  outcome: string
}
export type ProcessStep = { title: string; body: string; detail: string }
export type Role = {
  title: string
  company: string
  location: string
  start: string
  end: string
  highlights: string[]
  stack: string[]
}
export type TerminalEntry = { cmd: string; out: string[] }
export type PipelineStep = { name: string; detail: string }
export type Faq = { q: string; a: string }

export const profile = {
  name: 'Jay Grafwallner',
  firstName: 'Jay',
  handle: 'jaygrafwallner',
  initials: 'JG',
  title: 'Senior Full Stack Software Engineer',
  location: 'Orlando, FL',
  email: 'jay.ai.us09@gmail.com',
  phone: '(770) 580-3784',
  phoneHref: 'tel:+17705803784',
  resumeUrl: 'resume.pdf',
  resumeFileName: 'Jay_Grafwallner_Resume.pdf',
  availability: 'Available for senior full-stack & AI roles',
  intro:
    'Senior full-stack engineer with 10+ years in C#/.NET, React, TypeScript, SQL Server, and Azure, taking applications from architecture and data modeling to automated deployment and production support. Most recently: production RAG pipelines at Verizon.',
  tagline: ['C#/.NET', 'React', 'Azure', 'RAG', 'Since 2014'],
  about: [
    "I'm Jay Grafwallner, a senior full-stack engineer with more than ten years of experience delivering web applications end to end: architecture and data modeling, the UI and APIs, testing, automated deployment, and the production support that follows.",
    'Most recently I led architecture and hands-on implementation of enterprise web and AI applications at Verizon, including production RAG pipelines with permission-aware retrieval. Before that I built SaaS applications and microservices at DealerSocket and customer-facing web applications at Expedia Group.',
    'I lead technical decisions, review code, mentor engineers, and work directly with product and business stakeholders in Agile teams.',
  ],
}

export const stats: Stat[] = [
  { value: '10+', label: 'Years experience' },
  { value: '6+', label: 'Years at Verizon' },
  { value: '3', label: 'Enterprise companies' },
  { value: 'B.S.', label: 'Computer Science, UCF' },
]

export const whyMe = {
  title: 'Why work with me?',
  intro: 'An engineer who owns the whole lifecycle, from the first architecture sketch to the production fix.',
  points: [
    '10+ years of full-stack delivery',
    'Production RAG pipelines',
    'C#/.NET and Java/Spring Boot',
    'Architecture & code review lead',
    'CI/CD and infrastructure as code',
    'Mentor to engineers',
  ],
}

export const marquee = {
  label: 'Shipped in production at Verizon · DealerSocket · Expedia Group',
  primary: [
    'C#',
    '.NET Core',
    'ASP.NET MVC',
    'React',
    'TypeScript',
    'Angular',
    'SQL Server',
    'PostgreSQL',
    'Azure',
    'AWS',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Java',
    'Spring Boot',
    'Node.js',
    'Python',
  ],
  secondary: [
    'RAG pipelines',
    'Vector search',
    'Embeddings',
    'LangChain',
    'LangGraph',
    'CI/CD',
    'GitHub Actions',
    'Azure DevOps',
    'Entity Framework',
    'Redis',
    'MongoDB',
    'OAuth 2.0',
    'JWT',
    'TDD',
    'Microservices',
    'REST APIs',
  ],
}

export const expertise: ExpertiseItem[] = [
  {
    title: 'Full-Stack Web Applications',
    tag: 'Web',
    icon: 'code',
    body: 'End-to-end web applications in C#/.NET and React/TypeScript: ASP.NET MVC and Web API backends, responsive frontends, dashboards, business portals, and workflow apps.',
    stack: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'React', 'TypeScript', 'Angular'],
  },
  {
    title: 'AI & RAG Engineering',
    tag: 'AI',
    icon: 'sparkles',
    body: 'Production RAG pipelines: document ingestion and transformation, chunking, embeddings, vector retrieval, contextual prompts, and answers linked back to their sources.',
    stack: ['LLMs', 'LangChain', 'LangGraph', 'Embeddings', 'Vector search'],
  },
  {
    title: 'Cloud & Delivery Automation',
    tag: 'DevOps',
    icon: 'cloud',
    body: 'Automated builds and deployments with GitHub Actions and Azure DevOps, containerized on Docker and Kubernetes, with infrastructure defined in Terraform.',
    stack: ['Azure', 'AWS', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Data Modeling & Performance',
    tag: 'Data',
    icon: 'database',
    body: 'Relational models in SQL Server and PostgreSQL, tuned with indexing, caching, and asynchronous processing for transactional and AI-assisted workloads.',
    stack: ['SQL Server', 'PostgreSQL', 'Redis', 'MongoDB', 'Entity Framework'],
  },
  {
    title: 'Security & Access Control',
    tag: 'Security',
    icon: 'shield',
    body: 'Authentication, authorization, and data controls: OAuth 2.0, JWT, role-based access control, and permission-aware retrieval for sensitive enterprise data.',
    stack: ['OAuth 2.0', 'JWT', 'RBAC', 'Permission-aware RAG'],
  },
  {
    title: 'Technical Leadership',
    tag: 'Leadership',
    icon: 'users',
    body: 'Architecture decisions, peer code reviews, delivery planning, and mentoring, working closely with product and business stakeholders in Agile teams.',
    stack: ['Architecture', 'Code review', 'Mentoring', 'TDD', 'Agile Scrum'],
  },
]

// Positions are percentages of the panel; depth (0–1) controls parallax, size, and focus.
export const stackTiles: StackTile[] = [
  { tech: 'react', x: 17, y: 54, size: 132, depth: 1 },
  { tech: 'csharp', x: 62, y: 32, size: 120, depth: 0.9 },
  { tech: 'dotnet', x: 84, y: 64, size: 104, depth: 0.75 },
  { tech: 'typescript', x: 41, y: 72, size: 84, depth: 0.7 },
  { tech: 'azure', x: 37, y: 26, size: 70, depth: 0.55 },
  { tech: 'sqlserver', x: 83, y: 22, size: 74, depth: 0.5 },
  { tech: 'postgresql', x: 61, y: 74, size: 72, depth: 0.5 },
  { tech: 'docker', x: 94, y: 42, size: 60, depth: 0.35 },
  { tech: 'kubernetes', x: 8, y: 18, size: 58, depth: 0.35 },
  { tech: 'terraform', x: 26, y: 86, size: 50, depth: 0.3 },
  { tech: 'java', x: 50, y: 46, size: 54, depth: 0.3 },
  { tech: 'githubactions', x: 74, y: 88, size: 50, depth: 0.3 },
  { tech: 'nodejs', x: 6, y: 84, size: 52, depth: 0.3 },
  { tech: 'python', x: 22, y: 20, size: 46, depth: 0.25 },
]

export const stackChips = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'React',
  'TypeScript',
  'Angular',
  'SQL Server',
  'PostgreSQL',
  'Redis',
  'Azure',
  'AWS',
  'Docker',
  'Kubernetes',
  'Terraform',
  'GitHub Actions',
  'Java',
  'Spring Boot',
  'Node.js',
  'Python',
  'LangChain',
  'LangGraph',
]

export const work: WorkItem[] = [
  {
    tag: 'AI · RAG',
    context: 'Verizon',
    title: 'Enterprise RAG search',
    summary:
      'Production retrieval-augmented generation pipelines that turn enterprise documents into grounded answers, each linked back to its source and scoped to what the user is allowed to see.',
    points: [
      'Document ingestion, transformation, and chunking',
      'Embeddings and vector retrieval',
      'Contextual prompts with source-linked responses',
      'AI workflows connecting .NET and Java services',
    ],
    stack: ['.NET', 'Java', 'LLMs', 'LangChain', 'LangGraph', 'Vector search', 'PostgreSQL'],
    outcome: 'Answers linked back to their source material',
  },
  {
    tag: 'Security',
    context: 'Verizon',
    title: 'Permission-aware data access',
    summary:
      'Authentication, authorization, and application data controls that keep sensitive enterprise information protected across web and AI workloads.',
    points: [
      'Permission-aware retrieval in the RAG layer',
      'Authentication and authorization across services',
      'PostgreSQL and SQL Server models tuned with indexes and caching',
      'API access optimized for transactional and AI traffic',
    ],
    stack: ['.NET', 'Java', 'PostgreSQL', 'SQL Server', 'AuthN / AuthZ'],
    outcome: 'Users only retrieve what they are authorized to see',
  },
  {
    tag: 'DevOps',
    context: 'Verizon',
    title: 'Automated delivery platform',
    summary:
      'Build-and-deploy workflows that take services from commit to production, backed by monitoring, troubleshooting, and ongoing maintenance.',
    points: [
      'CI/CD pipelines in GitHub Actions',
      'Containerized services on Docker and Kubernetes',
      'Infrastructure as code with Terraform',
      'Production monitoring and release support',
    ],
    stack: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
    outcome: 'Repeatable, automated releases from commit to production',
  },
  {
    tag: 'SaaS',
    context: 'DealerSocket',
    title: 'Enterprise SaaS services',
    summary:
      'SaaS applications, REST APIs, and microservices with React and Angular frontends, shipped through Azure DevOps pipelines.',
    points: [
      'Java/Spring Boot and Node.js microservices',
      'OAuth 2.0, JWT, and role-based access control',
      'Query tuning, indexing, caching, and async processing',
      'Unit and integration tests with JUnit, Mockito, and Jest',
    ],
    stack: ['Spring Boot', 'Node.js', 'React', 'Angular', 'Azure DevOps', 'PostgreSQL'],
    outcome: 'Improved operational reporting through tuning, caching, and async work',
  },
  {
    tag: 'Web',
    context: 'Expedia Group',
    title: 'Customer & business web apps',
    summary:
      'Responsive customer-facing websites, business portals, internal dashboards, and workflow applications on the Microsoft stack.',
    points: [
      'REST APIs for auth, accounts, reporting, and documents',
      'Layered C# architecture with modular service components',
      'Entity Framework on SQL Server and MySQL',
      'Administrative interfaces and workflow applications',
    ],
    stack: ['C#', 'ASP.NET MVC', 'Web API', 'Entity Framework', 'SQL Server'],
    outcome: 'Reusable C# business logic shared across applications',
  },
]

export const process: ProcessStep[] = [
  {
    title: 'Understand',
    body: 'Translate stakeholder requirements into a technical plan with clear scope, milestones, and tradeoffs.',
    detail: 'Product and business stakeholders stay involved through Agile planning and ongoing communication.',
  },
  {
    title: 'Design',
    body: 'Model the data and the service boundaries first: schemas, APIs, and access rules.',
    detail: 'Indexes, caching, and asynchronous processing are planned up front, not bolted on later.',
  },
  {
    title: 'Build & review',
    body: 'Ship in small increments backed by unit and integration tests, with TDD where it fits.',
    detail: 'Every change goes through peer code review before it merges.',
  },
  {
    title: 'Ship & support',
    body: 'Automated pipelines build, test, and deploy each release with Docker, Kubernetes, and Terraform.',
    detail: 'After launch: production monitoring, troubleshooting, and ongoing maintenance.',
  },
]

export const experience: Role[] = [
  {
    title: 'Senior Full Stack AI Engineer / Senior Software Architect',
    company: 'Verizon',
    location: 'Florida',
    start: 'Feb 2020',
    end: 'Jul 2026',
    highlights: [
      'Led architecture and hands-on implementation of enterprise web and AI applications, translating stakeholder requirements into technical plans and production releases.',
      'Developed AI-enabled workflows connecting .NET and Java services, databases, and internal APIs to support enterprise search and automation.',
      'Built production RAG pipelines covering document ingestion and transformation, chunking, embeddings, vector retrieval, contextual prompts, and responses linked to source material.',
      'Implemented permission-aware retrieval, authentication, authorization, and application data controls to protect sensitive enterprise information.',
      'Designed PostgreSQL and SQL Server data models and optimized indexes, caching, and API access for transactional and AI-assisted workloads.',
      'Set up automated build and deployment workflows using CI/CD, GitHub Actions, Docker, Kubernetes, and Terraform.',
      'Guided engineering decisions through architecture and peer code reviews, delivery planning, stakeholder communication, and mentoring.',
      'Supported releases through production monitoring, troubleshooting, and ongoing service maintenance.',
    ],
    stack: ['.NET', 'Java', 'RAG', 'Vector search', 'PostgreSQL', 'SQL Server', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'DealerSocket',
    location: 'Westlake, TX',
    start: 'Mar 2016',
    end: 'Jan 2020',
    highlights: [
      'Developed and supported enterprise SaaS applications, REST APIs, and microservices using Java/Spring Boot and Node.js, with React and Angular frontends.',
      'Used Microsoft Azure and Azure DevOps pipelines to automate containerized builds, testing, deployments, and release operations.',
      'Designed PostgreSQL and SQL Server schemas and improved operational reporting through query tuning, indexing, caching, and asynchronous processing.',
      'Strengthened application quality with unit and integration tests using JUnit, Mockito, and Jest, alongside peer code reviews and production support.',
      'Implemented application security using OAuth 2.0, JWT, and role-based access control.',
      'Advised engineers on service design and delivery tradeoffs, working with product and business stakeholders in Agile development cycles.',
    ],
    stack: ['Java', 'Spring Boot', 'Node.js', 'React', 'Angular', 'Azure DevOps', 'PostgreSQL', 'SQL Server', 'OAuth 2.0', 'JWT'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Expedia Group',
    location: 'Miami, FL',
    start: 'Jan 2014',
    end: 'Feb 2016',
    highlights: [
      'Developed web applications and backend services using C#, .NET Framework, ASP.NET MVC, and ASP.NET Web API.',
      'Built responsive customer-facing websites, business portals, internal dashboards, administrative interfaces, and workflow applications.',
      'Created REST APIs for authentication, user accounts, reporting, document management, and business workflows.',
      'Implemented reusable C# business logic using layered architecture and modular service components.',
      'Used Entity Framework for data access and persistence in applications backed by SQL Server and MySQL.',
    ],
    stack: ['C#', '.NET Framework', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework', 'SQL Server', 'MySQL'],
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'University of Central Florida',
  location: 'Orlando, FL',
  years: '2009 – 2013',
}

// An illustrative session showing the release workflow; not a recording of real output.
export const terminal: TerminalEntry[] = [
  { cmd: 'dotnet test Enterprise.Search.sln', out: ['✓ unit  ✓ integration  all tests passing'] },
  { cmd: 'git push origin feature/permission-aware-retrieval', out: ['→ pull request opened · peer review requested'] },
  { cmd: 'gh run watch', out: ['✓ build  ✓ test  ✓ docker image pushed'] },
  { cmd: 'terraform plan -out=release.tfplan', out: ['Plan saved · infrastructure changes ready for review'] },
  { cmd: 'kubectl rollout status deploy/search-api', out: ['deployment "search-api" successfully rolled out'] },
]

export const ragPipeline: PipelineStep[] = [
  { name: 'Ingest', detail: 'Pull documents from enterprise sources into a controlled ingestion pipeline.' },
  { name: 'Transform', detail: 'Normalize formats and extract clean text and metadata from each document.' },
  { name: 'Chunk', detail: 'Split content into retrievable passages that keep enough surrounding context.' },
  { name: 'Embed', detail: 'Vectorize every chunk and index it for semantic search.' },
  { name: 'Retrieve', detail: "Run vector search filtered by the caller's permissions, so users only get what they're authorized to see." },
  { name: 'Prompt', detail: 'Assemble the retrieved passages into a contextual prompt for the LLM.' },
  { name: 'Answer', detail: 'Return a response with links back to the source material it was built from.' },
]

export const contactPoints = [
  'Senior full-stack and AI engineering roles',
  'C#/.NET, React, TypeScript, SQL Server, Azure',
  'Ownership from architecture to production support',
  'Based in Orlando, FL',
]

export const faq: Faq[] = [
  {
    q: 'What roles are you looking for?',
    a: 'Senior full-stack and AI engineering roles where I can own features from architecture and data modeling through deployment and production support.',
  },
  {
    q: "What's your core stack?",
    a: 'C# and .NET (ASP.NET MVC, ASP.NET Core, Web API, Entity Framework), React and TypeScript on the frontend, SQL Server and PostgreSQL for data, and Azure for cloud and delivery. I also work in Java/Spring Boot, Node.js, and Python.',
  },
  {
    q: 'What AI experience do you have?',
    a: 'At Verizon I built production RAG pipelines (ingestion, chunking, embeddings, vector retrieval, and source-linked responses) with permission-aware retrieval to protect sensitive data. I work with LLMs, LangChain, and LangGraph.',
  },
  {
    q: 'Do you lead teams?',
    a: 'Yes. I guide architecture decisions, run peer code reviews, plan delivery, mentor engineers, and work directly with product and business stakeholders in Agile Scrum teams.',
  },
]
