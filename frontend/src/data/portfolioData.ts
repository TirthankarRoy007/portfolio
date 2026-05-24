import { Experience, Profile, Project, Skill } from "../types/portfolio";

export const profile: Profile = {
  id: "profile-tirthankar-roy",
  name: "Tirthankar Roy",
  title: "Full Stack Developer",
  summary:
    "Full-stack developer with experience building scalable applications using Node.js, TypeScript, React, Python, PostgreSQL, and MySQL. Experienced in high-performance REST APIs, database optimization, complex business workflows, Docker deployments, AWS services, and production-ready backend systems.",
  email: "rtirtha97@gmail.com",
  phone: "7002281280",
  location: "Bengaluru, India",
  linkedinUrl: "https://www.linkedin.com/in/tirthankar-roy-6bba99106",
  githubUrl: "https://github.com/TirthankarRoy007"
};

export const skills: Skill[] = [
  { id: "skill-typescript", name: "TypeScript", category: "Languages", displayOrder: 1 },
  { id: "skill-javascript", name: "JavaScript", category: "Languages", displayOrder: 2 },
  { id: "skill-python", name: "Python", category: "Languages", displayOrder: 3 },
  { id: "skill-dsa", name: "DSA", category: "Computer Science", displayOrder: 1 },
  { id: "skill-node-js", name: "Node.js", category: "Backend", displayOrder: 1 },
  { id: "skill-express-js", name: "Express.js", category: "Backend", displayOrder: 2 },
  { id: "skill-fastapi", name: "FastAPI", category: "Backend", displayOrder: 3 },
  { id: "skill-rest-api", name: "REST API", category: "Backend", displayOrder: 4 },
  { id: "skill-microservices", name: "Microservices", category: "Backend", displayOrder: 5 },
  { id: "skill-react", name: "React", category: "Frontend", displayOrder: 1 },
  { id: "skill-html", name: "HTML", category: "Frontend", displayOrder: 2 },
  { id: "skill-css", name: "CSS", category: "Frontend", displayOrder: 3 },
  { id: "skill-postgresql", name: "PostgreSQL", category: "Database", displayOrder: 1 },
  { id: "skill-mysql", name: "MySQL", category: "Database", displayOrder: 2 },
  { id: "skill-mongodb", name: "MongoDB", category: "Database", displayOrder: 3 },
  { id: "skill-dynamodb", name: "DynamoDB", category: "Database", displayOrder: 4 },
  { id: "skill-rds", name: "RDS", category: "Database", displayOrder: 5 },
  { id: "skill-nosql", name: "NoSQL", category: "Database", displayOrder: 6 },
  { id: "skill-sequelize", name: "Sequelize", category: "ORM", displayOrder: 1 },
  { id: "skill-typeorm", name: "TypeORM", category: "ORM", displayOrder: 2 },
  { id: "skill-docker", name: "Docker", category: "DevOps", displayOrder: 1 },
  { id: "skill-git", name: "Git", category: "DevOps", displayOrder: 2 },
  { id: "skill-github", name: "GitHub", category: "DevOps", displayOrder: 3 },
  { id: "skill-aws", name: "AWS", category: "Cloud", displayOrder: 1 },
  { id: "skill-ec2", name: "EC2", category: "Cloud", displayOrder: 2 },
  { id: "skill-lambda", name: "Lambda", category: "Cloud", displayOrder: 3 },
  { id: "skill-s3", name: "S3", category: "Cloud", displayOrder: 4 },
  { id: "skill-cloudwatch", name: "CloudWatch", category: "Cloud", displayOrder: 5 },
  { id: "skill-rabbitmq", name: "RabbitMQ", category: "Messaging", displayOrder: 1 },
  { id: "skill-jwt", name: "JWT", category: "Security", displayOrder: 1 },
  { id: "skill-bcrypt", name: "Bcrypt", category: "Security", displayOrder: 2 },
  { id: "skill-jest", name: "Jest", category: "Testing", displayOrder: 1 },
  { id: "skill-linux", name: "Linux", category: "Tools", displayOrder: 1 },
  { id: "skill-cursor", name: "Cursor", category: "AI Tools", displayOrder: 1 },
  { id: "skill-github-copilot", name: "GitHub Copilot", category: "AI Tools", displayOrder: 2 },
  { id: "skill-openai-codex", name: "OpenAI Codex", category: "AI Tools", displayOrder: 3 },
  { id: "skill-claude", name: "Claude", category: "AI Tools", displayOrder: 4 },
  { id: "skill-agile-methodology", name: "Agile Methodology", category: "Process", displayOrder: 1 }
];

export const experience: Experience[] = [
  {
    id: "experience-21k-school",
    company: "21K School",
    role: "Full Stack Developer",
    location: "Bengaluru",
    startDate: "2026-03-01",
    endDate: null,
    description:
      "Building scalable school ERP, enrollment, learning, reporting, payment, and scheduling systems across full-stack product workflows.",
    achievements: [
      "Built and optimized ERP reporting modules using complex SQL queries, improving report generation speed and reliability.",
      "Developed the Learning Garage Summer Camp feature, enabling seamless course purchases without affecting existing workflows.",
      "Led backend development for Learning Floww with scalable APIs and robust system architecture.",
      "Implemented slot conflict resolution logic to handle overlapping schedules and improve booking accuracy.",
      "Integrated payment gateways and invoice generation workflows for registration payments.",
      "Integrated external APIs and optimized databases for real-time consistency and high-performance backend operations."
    ],
    displayOrder: 1
  },
  {
    id: "experience-wemotive-technologies",
    company: "Wemotive Technologies",
    role: "Software Developer",
    location: "Pune",
    startDate: "2023-04-01",
    endDate: "2026-02-28",
    description:
      "Developed backend services, integrations, and production deployments for research, healthcare, mobility, logistics, and commerce platforms.",
    achievements: [
      "Built the University of Miami research project backend from scratch, covering data modeling, APIs, and performance improvements.",
      "Developed key hospital management system features including scheduling and availability with API optimizations.",
      "Designed advanced cab payment workflows to improve user experience and system reliability.",
      "Contributed to ONDC logistics integration with a scalable order management system for complex workflows.",
      "Developed RESTful APIs, managed async operations and integrations, and deployed production-ready applications with Docker."
    ],
    displayOrder: 2
  }
];

export const projects: Project[] = [
  {
    id: "project-learning-floww",
    title: "Learning Floww",
    description:
      "Enrollment platform backend for 21K School with registration payments, invoice generation, and student enrollment workflows.",
    highlights: [
      "Led backend development as Dev Lead.",
      "Designed ERD, database schema, and scalable backend architecture.",
      "Implemented payment gateway integration, invoice generation, and unique enrollment ID creation."
    ],
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "TypeORM", "REST APIs"],
    startDate: "2025-04-01",
    endDate: "2025-05-31",
    githubUrl: null,
    liveUrl: null,
    displayOrder: 1
  },
  {
    id: "project-personal-exposure-reporter",
    title: "Personal Exposure Reporter",
    description:
      "University of Miami research backend for reporting personal exposure data with secure access control and optimized queries.",
    highlights: [
      "Built complete backend architecture from scratch.",
      "Handled database design, ERD creation, APIs, and complex business logic.",
      "Implemented RBAC authorization and optimized critical SQL queries."
    ],
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
    startDate: "2024-09-01",
    endDate: "2025-10-31",
    githubUrl: null,
    liveUrl: null,
    displayOrder: 2
  },
  {
    id: "project-school-management-system",
    title: "School Management System",
    description:
      "Backend APIs for managing students, enrollments, subjects, learning goals, and role-based school workflows.",
    highlights: [
      "Designed scalable RESTful APIs with Express.",
      "Implemented JWT authentication and role-based access control.",
      "Optimized PostgreSQL models using Sequelize ORM."
    ],
    techStack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Sequelize"],
    startDate: "2025-12-01",
    endDate: "2026-01-31",
    githubUrl: null,
    liveUrl: null,
    displayOrder: 3
  },
  {
    id: "project-coupon-management-system",
    title: "Coupon Management System",
    description:
      "Scalable coupon engine supporting multiple discount strategies and pricing rules.",
    highlights: [
      "Supported cart-wise, product-wise, and BxGy coupon types.",
      "Implemented robust validation and precise pricing logic.",
      "Added strong Jest coverage for reliability."
    ],
    techStack: ["Node.js", "TypeScript", "Jest", "REST APIs"],
    startDate: "2025-10-01",
    endDate: "2025-11-30",
    githubUrl: null,
    liveUrl: null,
    displayOrder: 4
  },
  {
    id: "project-medicine-reminder-system",
    title: "Medicine Reminder System",
    description:
      "Backend for medicine tracking, refill prediction, alerts, and secure user workflows.",
    highlights: [
      "Built a production-grade FastAPI backend.",
      "Implemented secure JWT authentication.",
      "Added automated stock monitoring with real-time alerts."
    ],
    techStack: ["Python", "FastAPI", "MySQL", "JWT"],
    startDate: "2025-11-01",
    endDate: "2025-12-31",
    githubUrl: null,
    liveUrl: null,
    displayOrder: 5
  },
  {
    id: "project-e-commerce-website",
    title: "E-Commerce Website",
    description:
      "Amazon-like commerce backend for users, products, carts, orders, payment, and shipping workflows.",
    highlights: [
      "Developed scalable backend APIs for core commerce modules.",
      "Implemented JWT authentication and encrypted password storage.",
      "Integrated payment and shipping services with validation and error handling."
    ],
    techStack: ["Node.js", "Express", "JWT", "Bcrypt", "REST APIs"],
    startDate: "2023-05-01",
    endDate: "2023-06-30",
    githubUrl: null,
    liveUrl: null,
    displayOrder: 6
  }
];
