import { Project, WorkExperience, SkillCategory, Certification, Education, Competency } from "./types";

export const personalInfo = {
  name: "Vishal Suhas Suryawanshi",
  title: "Senior Software Engineer / Solution Architect / Technical Lead",
  location: "Pune, Maharashtra, India",
  email: "vishalgoneado@gmail.com",
  altEmail: "vishal.suryawanshi1990@gmail.com",
  phone: "+91 9158926915",
  altPhone: "+91 8208041198",
  experience: "10+ Years",
  nationality: "Indian",
  languages: ["English", "Hindi", "Marathi"],
  passport: "Valid till 2031",
  summary: `Senior Software Engineer / Solution Architect with 10+ years of experience in designing, developing, and delivering scalable enterprise applications using C#, ASP.NET Core, .NET Core, ASP.NET MVC, Web API, Entity Framework Core, SQL Server, Azure, Microservices, and RESTful APIs. Strong expertise in architecting enterprise-grade .NET solutions, developing high-performance backend services, implementing Clean Architecture, SOLID principles, Dependency Injection, Repository Pattern, and cloud-native applications on Microsoft Azure. Extensive experience in designing and developing ASP.NET Core Web APIs, integrating Azure services including Azure App Services, Azure Service Bus, Azure Active Directory, Azure Key Vault, Azure Storage, and Application Insights, while ensuring application scalability, security, and high availability.`
};

export const competencies: Competency[] = [
  {
    title: "Solution Architecture & System Design",
    description: "Design scalable, secure, and high-performance enterprise architectures aligned with business and technical requirements. Strong advocate of Clean Architecture, SOLID, and DRY principles.",
    tags: ["Microservices", "Event-Driven", "Clean Architecture", "SOLID"]
  },
  {
    title: "Full Stack Application Development",
    description: "Lead end-to-end development of web, mobile, and enterprise applications using modern frontend (React, Angular) and robust backend (.NET Core, Node.js) technologies.",
    tags: [".NET Core", "React", "Angular", "Node.js"]
  },
  {
    title: "Enterprise AI & Conversational Copilots",
    description: "Design and build AI-powered solutions, intelligent conversational chatbots, and workflow automation using Microsoft Copilot Studio, Azure AI Services, and Generative AI prompt engineering.",
    tags: ["Copilot Studio", "Azure AI", "ChatGPT", "AI Agents"]
  },
  {
    title: "Cloud Engineering & DevOps",
    description: "Implement cloud-native solutions on Microsoft Azure. Architect robust CI/CD automation pipelines via GitHub Actions and Azure DevOps to achieve rapid, zero-downtime releases.",
    tags: ["Azure", "CI/CD", "Docker", "DevOps"]
  },
  {
    title: "Integration & API Development",
    description: "Develop enterprise-grade RESTful APIs, asynchronous message brokers (Azure Service Bus), and third-party integrations with microservices topologies.",
    tags: ["Web API", "Service Bus", "gRPC", "Integration"]
  },
  {
    title: "Technical Leadership & Mentoring",
    description: "Mentor development teams, drive agile sprint planning, establish engineering best practices, conduct architecture code reviews, and align technical solutions with client objectives.",
    tags: ["Mentorship", "Agile", "SRE", "Stakeholder Alignment"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Core",
    skills: [
      { name: "C#", percentage: 95 },
      { name: "ASP.NET Core", percentage: 95 },
      { name: ".NET Core", percentage: 95 },
      { name: "Web API / RESTful APIs", percentage: 92 },
      { name: "Entity Framework Core / LINQ", percentage: 90 },
      { name: "ASP.NET MVC", percentage: 88 },
      { name: "Node.js", percentage: 80 },
      { name: "Laravel / PHP", percentage: 82 },
      { name: "Java Spring Boot", percentage: 70 }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "Microsoft Azure", percentage: 90 },
      { name: "Azure App Services", percentage: 92 },
      { name: "Azure Active Directory (AD)", percentage: 85 },
      { name: "Azure Service Bus (Message Broker)", percentage: 88 },
      { name: "Azure Key Vault & Storage", percentage: 90 },
      { name: "AWS (EC2, S3, Lambda)", percentage: 75 },
      { name: "Docker", percentage: 80 }
    ]
  },
  {
    title: "AI & Generative AI",
    skills: [
      { name: "Microsoft Copilot Studio", percentage: 95 },
      { name: "Azure AI Services", percentage: 88 },
      { name: "AI Chatbots & Intelligent Agents", percentage: 92 },
      { name: "Prompt Engineering & RAG", percentage: 90 },
      { name: "ChatGPT & Claude Integrations", percentage: 92 },
      { name: "GitHub Copilot", percentage: 95 }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "TypeScript", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "React", percentage: 80 },
      { name: "Angular", percentage: 78 },
      { name: "HTML5 & CSS3", percentage: 95 },
      { name: "Tailwind CSS & Bootstrap", percentage: 92 }
    ]
  },
  {
    title: "Databases & Monitoring",
    skills: [
      { name: "SQL Server", percentage: 90 },
      { name: "MySQL / PostgreSQL", percentage: 85 },
      { name: "SQLite", percentage: 80 },
      { name: "Application Insights", percentage: 88 },
      { name: "Dynatrace APM", percentage: 85 }
    ]
  },
  {
    title: "DevOps & SRE",
    skills: [
      { name: "GitHub Actions", percentage: 88 },
      { name: "Azure DevOps CI/CD", percentage: 85 },
      { name: "SRE / Production Support", percentage: 88 },
      { name: "System Architecture", percentage: 92 }
    ]
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: "exp1",
    company: "MResult Services Technologies",
    location: "Bangalore, India (Remote/Pune)",
    role: "Senior Software Developer Engineer",
    period: "Oct 2022 - Present",
    responsibilities: [
      "Develop high-scale enterprise applications using ASP.NET Core, C#, Web API, Entity Framework Core, SQL Server, and Azure Services.",
      "Design and architect scalable, high-performance RESTful APIs following Clean Architecture, Repository Pattern, and SOLID principles.",
      "Build modular reusable backend components utilizing Dependency Injection, custom Middlewares, and asynchronous programming.",
      "Implement event-driven asynchronous communication and background task processing using Azure Service Bus.",
      "Optimize complex SQL Server database queries and Entity Framework operations, reducing API response times by over 40%.",
      "Configure cloud architecture with Azure App Services, Azure AD, Key Vault, and establish fully automated CI/CD via GitHub Actions.",
      "Integrate Dynatrace and Azure Application Insights to monitor application telemetry, diagnose production latency, and improve system reliability.",
      "Develop advanced enterprise AI chatbot solutions using Microsoft Copilot Studio and Azure AI Services.",
      "Mentor junior developers, perform design reviews, and establish rigorous coding standards and Agile best practices."
    ],
    achievements: [
      "Successfully delivered multi-tenant SaaS integration platform hosting hundreds of API integrations.",
      "Reduced infrastructure security exposure by moving critical secrets storage to Azure Key Vault."
    ],
    techStack: ["C#", "ASP.NET Core", "Azure Service Bus", "Azure Key Vault", "Dynatrace", "App Insights", "SQL Server", "Copilot Studio", "GitHub Actions"]
  },
  {
    id: "exp2",
    company: "Vareli Technac",
    location: "Pune, India",
    role: "Senior Software Developer Engineer",
    period: "May 2022 - Sep 2022",
    responsibilities: [
      "Led software development activities for Education ERP and CRM applications using Laravel and MySQL.",
      "Spearheaded requirement gathering, system analysis, and technical planning for a real-time Vehicle Tracking Management System.",
      "Designed and implemented backend architecture integrating Node.js, Python, and SIM-based hardware communication for seamless IoT device connectivity.",
      "Developed high-throughput data processing pipelines transforming real-time telemetry device data into alerts and actionable events."
    ],
    achievements: [
      "Optimized real-time GPS tracking stream to handle thousands of concurrent tracking devices seamlessly.",
      "Re-architected legacy CRM administrative panel for improved UI loading speed and operational efficiency."
    ],
    techStack: ["Laravel", "Node.js", "Python", "MySQL", "IoT Communication", "GPS APIs"]
  },
  {
    id: "exp3",
    company: "Scrimatec IT Solutions Pvt Ltd",
    location: "Pune, India",
    role: "Team Lead",
    period: "Jan 2019 - Apr 2022",
    responsibilities: [
      "Managed end-to-end software development and successful delivery of Healthcare, OTT, Educational, E-Commerce, and Android applications.",
      "Coordinated cross-functional teams using technologies like Angular, React, Java Spring Boot, Laravel, Node.js, and .NET.",
      "Designed and built robust REST APIs, administrative controls, and secure backend panels.",
      "Managed database design, backend logic, and client coordinate activities, ensuring high operational efficiency."
    ],
    achievements: [
      "Led a 10-person multi-disciplinary developer team to successfully deliver 5+ major enterprise client applications on schedule.",
      "Reduced system bugs and technical debt by implementing automated unit testing and rigorous pull request code reviews."
    ],
    techStack: ["Angular", "React", "Java Spring Boot", "Laravel", "Node.js", "SQL Server", "Android"]
  },
  {
    id: "exp4",
    company: "Operand Technologies & IT Solutions LLP",
    location: "Latur, India",
    role: "Team Lead",
    period: "May 2016 - Dec 2018",
    responsibilities: [
      "Developed and delivered web and mobile solutions for E-Commerce, CMS, recruitment, and billing management platforms.",
      "Built and integrated React Native mobile applications with PHP REST APIs and MySQL databases.",
      "Developed robust backend modules using PHP, ASP.NET, C#, Java Spring Boot, and SQL Server.",
      "Designed and implemented complex desktop billing and invoice management systems using WPF, C#, .NET, and SQL Server."
    ],
    achievements: [
      "Developed a custom standalone desktop billing system adopted by regional retailers, improving invoicing time.",
      "Successfully migrated multi-page web applications into high-performance responsive interfaces."
    ],
    techStack: ["ASP.NET", "C#", "WPF", "React Native", "PHP", "MySQL", "SQL Server", "Bootstrap"]
  }
];

export const projects: Project[] = [
  {
    id: "proj-bh",
    title: "Bright Horizons",
    category: "Cloud & Integrations",
    description: "High-performance enterprise middleware designed for testing, monitoring, and consuming Enterprise Eligibility APIs. Built specifically under an MSP (Managed Service Provider) role to guarantee system SLA, throughput, and error transparency.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "Azure Service Bus", "Azure App Insights", "Dynatrace", "GitHub"],
    role: "MSP Monitoring & Technical Developer",
    architecture: "Event-driven microservices model backed by Azure Service Bus queue patterns, with Dynatrace transaction tracing.",
    responsibilities: [
      "Consuming and testing Enterprise Eligibility APIs under strict runtime conditions.",
      "Integrating Azure Application Insights and Dynatrace telemetry for distributed tracing across cloud functions.",
      "Optimizing async queue processing to handle critical spikes in enrollment workloads."
    ],
    challenges: "Handling sporadic API failures from external vendor services without losing transaction state or blocking execution streams.",
    solution: "Designed a resilient dead-letter queue (DLQ) retry pattern with exponential back-off using Azure Service Bus and automated alert webhooks.",
    image: "bright_horizons"
  },
  {
    id: "proj-ldg",
    title: "Lucky Duck Group (LDG) Real Estate",
    category: "Full Stack Web",
    description: "Premium, highly interactive real estate web portal and CMS backend designed for a prominent US client. Facilitates seamless property listings, user searches, agent dashboards, and live schedule bookings.",
    tech: ["Laravel", "PHP", "MySQL", "Azure Service Bus", "Application Insights", "Dynatrace", "Tailwind CSS"],
    role: "Team Lead / Senior Software Developer",
    architecture: "Model-View-Controller backend with an API-driven frontend, featuring heavy caching and asynchronous data streaming.",
    responsibilities: [
      "Leading technical discussions, system architecture drafting, and task allocation.",
      "Implementing custom CMS admin dashboards and secure RESTful services.",
      "Integrating App Insights for tracking portal search metrics and user behaviors."
    ],
    challenges: "Search latency on real estate databases became slow when filtering millions of geo-spatial coordinates and price indicators.",
    solution: "Implemented redis indexing, cached query results, and optimized relational database schemas with custom index rules to reduce query latency by 85%.",
    image: "ldg_real_estate"
  },
  {
    id: "proj-crl",
    title: "CRL Ecommerce",
    category: "E-Commerce",
    description: "High-security pharmaceutical and e-commerce platform compliant with healthcare standards. Enables fast ordering, secure prescription uploads, and smart search capabilities for pharmacy inventories.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Bootstrap", "Secure REST APIs"],
    role: "Team Lead / Senior Developer",
    architecture: "Wordpress Multisites / WooCommerce core customized with tailor-made PHP security hooks, shipping integrations, and custom database tables.",
    responsibilities: [
      "Architecting prescription upload handlers and integrating encrypted storage directories.",
      "Creating customized WooCommerce payment gateway plug-ins and delivery tracking modules.",
      "Managing database scaling and high-availability setups."
    ],
    challenges: "Ensuring HIPAA compliance for uploaded medical files while maintaining fast page-load speeds for customers.",
    solution: "Configured pre-signed secure URLs with automated expiration, ensuring documents are stored off-site in private secure storage and streamed on-demand.",
    image: "crl_ecommerce"
  },
  {
    id: "proj-chatbot",
    title: "Azure AI Intelligent Chatbot",
    category: "AI & Automation",
    description: "Sophisticated enterprise-grade virtual assistant deployed as a website widget and integrated with Microsoft SharePoint, allowing employees and customers to retrieve real-time documents, FAQs, and perform tasks.",
    tech: ["Azure AI Services", "Microsoft Copilot Studio", "SharePoint API", "Power Automate", "Node.js"],
    role: "AI Integration Architect",
    architecture: "RAG (Retrieval-Augmented Generation) based conversational workflow that maps user intents to specific SharePoint documents and secure knowledge bases.",
    responsibilities: [
      "Configuring Copilot Studio conversational topics, natural language triggers, and variable bindings.",
      "Writing serverless Node.js helper routes and integrating Power Automate flow diagrams for data queries.",
      "Structuring prompt templates and fallback intent behaviors to maximize resolution rate."
    ],
    challenges: "Resolving complex document queries where the context lay locked in deeply nested PDF/Word formats inside SharePoint directories.",
    solution: "Built a customized search pipeline that indexes document metadata, feeding high-relevance chunks to Azure Cognitive Search for context-aware chatbot answers.",
    image: "ai_chatbot"
  },
  {
    id: "proj-rx",
    title: "RxTv Media Platform",
    category: "OTT & Streaming",
    description: "Feature-rich multi-platform OTT streaming media engine delivering digital content to thousands of users. Features subscription tiers, live channels, custom recommendation nodes, and multi-screen support.",
    tech: ["Angular", "Node.js", "Laravel", "MySQL", "FFmpeg", "HLS Streaming"],
    role: "Senior Full Stack Architect",
    architecture: "Distributed architecture where video transcoders upload to CDNs, while Angular frontends consume Node.js microservices for media state.",
    responsibilities: [
      "Designing high-concurrency Node.js API services for streaming authorization.",
      "Developing beautiful, responsive Angular user interfaces for video players and category grids.",
      "Optimizing media delivery pipelines."
    ],
    challenges: "Minimizing video buffer lag and handling dynamic network bandwidth switches for active mobile clients.",
    solution: "Configured adaptive bitrate streaming (HLS) using FFmpeg segmentation, connected to cloud CDNs with geo-aware cache layers.",
    image: "rxtv_media"
  },
  {
    id: "proj-ultrag",
    title: "Ultragenyx Platform",
    category: "Enterprise Multi-site",
    description: "Pharmaceutical multi-site portal network built for medical information, drug catalogs, and patient programs.",
    tech: ["WordPress CMS", "PHP", "MySQL", "JavaScript", "Custom Security Modules"],
    role: "CMS Lead Developer",
    architecture: "WordPress Multisite ecosystem with a centralized core engine and shared database instances, highly optimized for speed and compliance.",
    responsibilities: ["Developing core custom multisite themes", "Writing rigid security filters", "Integrating pharmaceutical API pipelines"],
    image: "ultragenyx"
  }
];

export const certifications: Certification[] = [
  { name: "SDE with AI", issuer: "Scaler Academy", year: "Pursuing" },
  { name: "Android App Development Certification", issuer: "ATS Delhi", year: "2015" },
  { name: "DDNT 5 (Diploma in .NET 5)", issuer: "NIIT", year: "2016" },
  { name: "Workshop on Robotics", issuer: "College Event", year: "2014" },
  { name: "International Workshop on Hadoop", issuer: "Hadoop Technical Institute", year: "2015" }
];

export const education: Education[] = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Pune University",
    year: "2013 - 2016",
    percentage: "66.50%"
  },
  {
    degree: "B.Sc. (IT) (Bachelor of Science in Information Technology)",
    institution: "University of Mumbai",
    year: "2010 - 2013",
    percentage: "64.15%"
  }
];

export const statistics = [
  { value: "10+", label: "Years of Experience", suffix: "" },
  { value: "50+", label: "Enterprise Projects", suffix: "" },
  { value: "100+", label: "REST APIs Designed", suffix: "" },
  { value: "20+", label: "AI & Bot Integrations", suffix: "" }
];

export const testimonials = [
  {
    name: "John Miller",
    role: "Director of Product, US Enterprise Client",
    feedback: "Vishal has been an outstanding technical leader and solution architect. He designed our entire integration pipeline using C# and Azure Service Bus, enabling us to handle millions of records reliably. His AI expertise with Copilot Studio helped us automate 70% of customer support workflows."
  },
  {
    name: "Sudhir Deshmukh",
    role: "Delivery Head, Scrimatec IT Solutions",
    feedback: "Vishal is a stellar Technical Lead. He led our cross-functional team across web, mobile, and IoT projects. His ability to switch between high-level solution architecture and hands-on coding in C#, Angular, and React is rare. A highly disciplined and proactive engineer."
  },
  {
    name: "Ramesh Sharma",
    role: "Principal Architect, Cloud Services",
    feedback: "Vishal's deep understanding of Clean Architecture, SOLID principles, and Azure services make him one of the best .NET architects I have worked with. He systematically optimized our database query patterns, saving us thousands of dollars in cloud computing costs."
  }
];
