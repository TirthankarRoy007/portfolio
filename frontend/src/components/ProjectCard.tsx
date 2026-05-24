import { ArrowUpRight, ExternalLink, Github, Layers3, Rocket, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "../types/portfolio";
import { formatMonthYear } from "../utils/date";

const projectGradients = [
  "from-brand/90 via-cyan-600 to-ink",
  "from-accent/90 via-orange-500 to-ink",
  "from-emerald-500 via-brand to-ink",
  "from-slate-700 via-brand to-ink",
  "from-cyan-600 via-accent to-ink",
  "from-brand via-emerald-500 to-ink"
];

export const ProjectCard = ({ project }: { project: Project }) => {
  const gradient = projectGradients[(project.displayOrder - 1) % projectGradients.length];
  const primaryTech = project.techStack.slice(0, 3);

  return (
    <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-[2rem] transition hover:-translate-y-1 hover:shadow-glow">
      <div className={`relative min-h-40 overflow-hidden bg-gradient-to-br ${gradient} p-5 text-white`}>
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15 blur-2xl transition group-hover:scale-125" />
        <div className="absolute bottom-0 right-0 h-28 w-28 translate-x-8 translate-y-8 rounded-full border border-white/20" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-3xl bg-white/15 shadow-soft backdrop-blur">
            <Rocket size={25} />
          </div>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-normal text-white/90">
            Case Study
          </span>
        </div>

        <div className="relative mt-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90">
            <Sparkles size={14} />
            {formatMonthYear(project.startDate)} - {formatMonthYear(project.endDate)}
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{project.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-7 text-muted">{project.description}</p>

        <div className="mt-4 grid gap-2.5">
          {project.highlights.map((highlight, index) => (
            <div
              key={highlight}
              className="flex gap-3 rounded-2xl border border-white/70 bg-white/70 p-3 text-sm leading-6 text-muted shadow-sm transition hover:bg-white"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">
                {index + 1}
              </span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {primaryTech.map((tech) => (
            <span key={tech} className="inline-flex items-center gap-2 rounded-full bg-mint px-3 py-2 text-xs font-bold text-brand shadow-sm">
              <Layers3 size={13} />
              {tech}
            </span>
          ))}
          {project.techStack.slice(3).map((tech) => (
            <span key={tech} className="soft-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 border-t border-white/70 pt-4 text-sm font-semibold text-brand">
          {(project.githubUrl || project.liveUrl) ? (
            <>
              {project.githubUrl && (
                <a className="secondary-action px-4 py-2" href={project.githubUrl}>
                  <Github size={16} /> Code
                </a>
              )}
              {project.liveUrl && (
                <a className="primary-action px-4 py-2" href={project.liveUrl}>
                  <ExternalLink size={16} /> Live
                </a>
              )}
            </>
          ) : (
            <Link to="/contact" className="secondary-action px-4 py-2">
              Discuss this work <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
