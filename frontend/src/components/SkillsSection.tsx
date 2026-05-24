import { BrainCircuit, ChevronDown, GitBranch, LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Skill } from "../types/portfolio";

interface SkillVisual {
  Icon?: LucideIcon;
  logoUrl?: string;
}

const skillVisuals: Record<string, SkillVisual> = {
  "Node.js": { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  TypeScript: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  JavaScript: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  Python: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  DSA: { Icon: BrainCircuit },
  "Express.js": { logoUrl: "https://cdn.simpleicons.org/express/4B5563" },
  FastAPI: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  "REST API": { logoUrl: "https://cdn.simpleicons.org/swagger/85EA2D" },
  Microservices: { logoUrl: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  React: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  HTML: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  CSS: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  PostgreSQL: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  MySQL: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  MongoDB: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  DynamoDB: { logoUrl: "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg" },
  RDS: { logoUrl: "https://icon.icepanel.io/AWS/svg/Database/RDS.svg" },
  NoSQL: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  Sequelize: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" },
  TypeORM: { logoUrl: "https://cdn.simpleicons.org/typeorm/E83524" },
  Docker: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  Git: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  GitHub: { logoUrl: "https://cdn.simpleicons.org/github/4B5563" },
  AWS: { logoUrl: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
  EC2: { logoUrl: "https://icon.icepanel.io/AWS/svg/Compute/EC2.svg" },
  Lambda: { logoUrl: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg" },
  S3: { logoUrl: "https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg" },
  CloudWatch: { logoUrl: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudWatch.svg" },
  RabbitMQ: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
  JWT: { logoUrl: "https://cdn.simpleicons.org/jsonwebtokens/7C3AED" },
  Bcrypt: { logoUrl: "https://cdn.simpleicons.org/letsencrypt/003A70" },
  Jest: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  Linux: { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  Cursor: { logoUrl: "https://cdn.simpleicons.org/cursor/4B5563" },
  "GitHub Copilot": { logoUrl: "https://cdn.simpleicons.org/githubcopilot/4B5563" },
  "OpenAI Codex": { logoUrl: "https://cdn.simpleicons.org/openai/412991" },
  Claude: { logoUrl: "https://cdn.simpleicons.org/claude/D97757" },
  "Agile Methodology": { logoUrl: "https://cdn.simpleicons.org/jira/0052CC" }
};

const SkillLogo = ({ visual }: { visual: SkillVisual }) => {
  const [hasImageError, setHasImageError] = useState(false);
  const Icon = visual.Icon ?? GitBranch;

  if (visual.logoUrl && !hasImageError) {
    return (
      <img
        src={visual.logoUrl}
        alt=""
        className="h-5 w-5 object-contain saturate-150 contrast-125"
        loading="lazy"
        onError={() => setHasImageError(true)}
      />
    );
  }

  return <Icon size={18} className="text-brand" />;
};

const skillDescriptions: Record<string, string> = {
  "Node.js": "Backend APIs, services, payments, and workflow-heavy features.",
  TypeScript: "Typed frontend and backend code with cleaner contracts.",
  JavaScript: "Core language for React and Node.js work.",
  Python: "Backend services, scripting, and FastAPI workflows.",
  DSA: "Problem solving, logic design, and edge-case handling.",
  "Express.js": "Routing, middleware, REST APIs, and service layers.",
  FastAPI: "Python APIs with validation and clean route structure.",
  "REST API": "Endpoint design, validations, integrations, and response contracts.",
  Microservices: "Service boundaries for scalable backend workflows.",
  React: "Reusable UI components and API-driven frontend pages.",
  HTML: "Semantic page structure and accessible markup.",
  CSS: "Responsive layouts, polish, and visual consistency.",
  PostgreSQL: "Schema design, relational models, and complex queries.",
  MySQL: "Relational database design and optimized backend queries.",
  MongoDB: "Document data modeling for flexible application data.",
  DynamoDB: "AWS key-value/document storage for cloud workflows.",
  RDS: "Managed relational databases on AWS.",
  NoSQL: "Flexible data models where relational tables are not ideal.",
  Sequelize: "Model-based database access and associations.",
  TypeORM: "Entity-driven data access with repository boundaries.",
  Docker: "Consistent local and deployment environments.",
  Git: "Version control, branches, and reviewable changes.",
  GitHub: "Repository workflows and collaboration.",
  AWS: "Cloud hosting, storage, monitoring, and deployments.",
  EC2: "Running backend services on cloud instances.",
  Lambda: "Event-driven serverless backend jobs.",
  S3: "Object storage for files and assets.",
  CloudWatch: "Logs and monitoring for AWS services.",
  RabbitMQ: "Async messaging and background workflows.",
  JWT: "Token-based authentication for APIs.",
  Bcrypt: "Password hashing for auth flows.",
  Jest: "Tests for backend logic and pricing workflows.",
  Linux: "Terminal, server, and deployment workflows.",
  Cursor: "AI-assisted development and faster code navigation.",
  "GitHub Copilot": "Boilerplate and repetitive coding assistance.",
  "OpenAI Codex": "Code exploration and implementation support.",
  Claude: "Architecture reasoning, copy, and documentation support.",
  "Agile Methodology": "Iterative delivery and product-team collaboration."
};

export const SkillsSection = ({ skills }: { skills: Skill[] }) => {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  const skillGroups = useMemo(
    () =>
      Object.entries(
        skills.reduce<Record<string, Skill[]>>((groups, skill) => {
          groups[skill.category] = [...(groups[skill.category] ?? []), skill];
          return groups;
        }, {})
      ),
    [skills]
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {skillGroups.map(([category, categorySkills]) => (
        <section key={category} className="glass-panel rounded-[1.5rem] p-4 shadow-glow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand/80">{category}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{categorySkills.length} skill{categorySkills.length > 1 ? "s" : ""}</h3>
            </div>
            <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand">
              {categorySkills.length}
            </span>
          </div>

          <div className="mt-4 grid gap-2">
            {categorySkills.map((skill) => {
              const visual = skillVisuals[skill.name] ?? {};
              const isActive = activeSkillId === skill.id;

              return (
                <div key={skill.id} className="rounded-[1.25rem] border border-line/70 bg-white/90 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setActiveSkillId(isActive ? null : skill.id)}
                    className="flex w-full items-center gap-3 px-3 py-2.5 text-left transition hover:bg-white"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-line/80">
                      <SkillLogo visual={visual} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-ink">{skill.name}</p>
                      <p className="text-xs text-muted">{skill.category}</p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted transition duration-200 ${isActive ? "rotate-180 text-brand" : ""}`}
                    />
                  </button>
                  {isActive && (
                    <div className="border-t border-line/70 bg-surface px-3 py-3 text-sm leading-6 text-muted">
                      {skillDescriptions[skill.name] ??
                        `Used in ${skill.category.toLowerCase()} work across full stack product features.`}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};
