// All site content lives here. Edit this file to update the portfolio.

export type Stat = { value: string; label: string }
export type Principle = { title: string; body: string }
export type SkillGroup = { name: string; items: string[] }
export type Role = {
  title: string
  company: string
  location: string
  start: string
  end: string
  highlights: string[]
  stack: string[]
}
export type CaseStudy = {
  title: string
  context: string
  summary: string
  points: string[]
  stack: string[]
}
export type PipelineStep = { name: string; detail: string }

export const profile = {
  name: 'Jay Grafwallner',
  firstName: 'Jay',
  initials: 'JG',
  title: 'Senior Full Stack Software Engineer',
  location: 'Orlando, FL',
  email: 'jay.ai.us09@gmail.com',
  phone: '(770) 580-3784',
  phoneHref: 'tel:+17705803784',
  resumeUrl: 'resume.pdf',
  resumeFileName: 'Jay_Grafwallner_Resume.pdf',
  availability: 'Open to senior full-stack & AI engineering roles',
  intro:
    'Senior full-stack engineer with 10+ years taking web applications from architecture and data modeling through testing, automated deployment, and production support, across C#/.NET, React, TypeScript, SQL Server, Azure, and production RAG infrastructure.',
  about: [
    "I'm a senior full-stack engineer with more than ten years of experience delivering web applications end to end: architecture and data modeling, the UI and APIs, testing, automated deployment, and the production support that follows.",
    'Most recently I led architecture and hands-on implementation of enterprise web and AI applications at Verizon, including production RAG pipelines with permission-aware retrieval. Before that I built SaaS applications and microservices at DealerSocket and customer-facing web applications at Expedia Group.',
    'I lead technical decisions, review code, mentor engineers, and work directly with product and business stakeholders in Agile teams.',
  ],
}

export const stats: Stat[] = [
  { value: '10+', label: 'years of professional software engineering' },
  { value: '6+', label: 'years leading architecture at Verizon' },
  { value: '3', label: 'enterprise teams: Verizon, DealerSocket, Expedia' },
]

export const principles: Principle[] = [
  {
    title: 'Architecture to production',
    body: 'Turn stakeholder requirements into technical plans, then stay hands-on through release, monitoring, troubleshooting, and maintenance.',
  },
  {
    title: 'Data that holds up',
    body: 'Relational models in SQL Server and PostgreSQL, tuned with the right indexes, caching, and asynchronous processing.',
  },
  {
    title: 'Quality built in',
    body: 'Unit and integration tests, TDD, and peer code reviews as a normal part of delivery, not an afterthought.',
  },
  {
    title: 'Teams that grow',
    body: 'Guide architecture decisions, review code, and mentor engineers while working closely with product and business partners.',
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'University of Central Florida',
  location: 'Orlando, FL',
  years: '2009 – 2013',
}

export const coreStack = [
  'C#',
  '.NET Core',
  'ASP.NET MVC',
  'React',
  'TypeScript',
  'SQL Server',
  'Azure',
  'RAG',
]

export const skillGroups: SkillGroup[] = [
  {
    name: 'C# & .NET',
    items: ['C#', '.NET Framework', '.NET Core', 'ASP.NET MVC', 'ASP.NET Core', 'ASP.NET Web API', 'Entity Framework'],
  },
  {
    name: 'Frontend',
    items: ['TypeScript', 'JavaScript', 'React', 'Angular', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Responsive design'],
  },
  {
    name: 'Data engineering & AI',
    items: [
      'Document ingestion',
      'Chunking',
      'Embeddings',
      'Vector search',
      'RAG pipelines',
      'LLMs',
      'LangChain',
      'LangGraph',
    ],
  },
  {
    name: 'Data platforms',
    items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Data modeling', 'Query tuning', 'Indexing', 'Caching'],
  },
  {
    name: 'Cloud & delivery',
    items: [
      'Azure',
      'Azure DevOps',
      'App Service',
      'Azure Functions',
      'AWS',
      'GitHub Actions',
      'CI/CD',
      'Docker',
      'Kubernetes',
      'Terraform',
    ],
  },
  {
    name: 'Quality & leadership',
    items: ['Unit & integration testing', 'TDD', 'Jest', 'JUnit', 'Mockito', 'Code reviews', 'Architecture', 'Mentoring', 'Agile Scrum'],
  },
  {
    name: 'Additional backend',
    items: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'Python', 'REST APIs', 'Microservices', 'AuthN / AuthZ'],
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

export const featuredCaseStudy: CaseStudy = {
  title: 'Enterprise RAG search',
  context: 'Verizon',
  summary:
    'Production retrieval-augmented generation pipelines that turn enterprise documents into grounded answers, each linked back to its source material and scoped to what the user is allowed to see.',
  points: [
    'End-to-end pipeline: document ingestion and transformation, chunking, embeddings, and vector retrieval.',
    'Contextual prompts with responses that cite the documents they came from.',
    'AI-enabled workflows connecting .NET and Java services, databases, and internal APIs for enterprise search and automation.',
    'Permission-aware retrieval so sensitive information never leaks into an answer.',
  ],
  stack: ['.NET', 'Java', 'LLMs', 'LangChain', 'LangGraph', 'Vector search', 'PostgreSQL'],
}

export const ragPipeline: PipelineStep[] = [
  { name: 'Ingest', detail: 'Pull documents from enterprise sources into a controlled ingestion pipeline.' },
  { name: 'Transform', detail: 'Normalize formats and extract clean text and metadata from each document.' },
  { name: 'Chunk', detail: 'Split content into retrievable passages that keep enough surrounding context.' },
  { name: 'Embed', detail: 'Vectorize every chunk and index it for semantic search.' },
  { name: 'Retrieve', detail: "Run vector search filtered by the caller's permissions, so users only get what they're authorized to see." },
  { name: 'Prompt', detail: 'Assemble the retrieved passages into a contextual prompt for the LLM.' },
  { name: 'Answer', detail: 'Return a response with links back to the source material it was built from.' },
]

export const caseStudies: CaseStudy[] = [
  {
    title: 'Secure data access for AI',
    context: 'Verizon',
    summary:
      'Authentication, authorization, and application data controls that protect sensitive enterprise information across web and AI workloads.',
    points: [
      'Permission-aware retrieval in the RAG layer',
      'PostgreSQL and SQL Server models tuned with indexes and caching',
      'API access optimized for transactional and AI-assisted traffic',
    ],
    stack: ['.NET', 'Java', 'PostgreSQL', 'SQL Server', 'AuthN / AuthZ'],
  },
  {
    title: 'Automated delivery platform',
    context: 'Verizon',
    summary:
      'Build-and-deploy workflows that take services from commit to production, backed by monitoring and ongoing maintenance.',
    points: [
      'CI/CD pipelines in GitHub Actions',
      'Containerized services on Docker and Kubernetes',
      'Infrastructure as code with Terraform',
    ],
    stack: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Enterprise SaaS services',
    context: 'DealerSocket',
    summary:
      'SaaS applications, REST APIs, and microservices with React and Angular frontends, shipped through Azure DevOps pipelines.',
    points: [
      'Java/Spring Boot and Node.js microservices',
      'OAuth 2.0, JWT, and role-based access control',
      'Faster operational reporting via query tuning, caching, and async processing',
    ],
    stack: ['Spring Boot', 'Node.js', 'React', 'Angular', 'Azure DevOps'],
  },
  {
    title: 'Customer & business web apps',
    context: 'Expedia Group',
    summary:
      'Responsive customer-facing websites, business portals, internal dashboards, and workflow applications on the Microsoft stack.',
    points: [
      'REST APIs for auth, accounts, reporting, and document management',
      'Layered C# architecture with modular service components',
      'Entity Framework persistence on SQL Server and MySQL',
    ],
    stack: ['C#', 'ASP.NET MVC', 'Web API', 'Entity Framework', 'SQL Server'],
  },
]
