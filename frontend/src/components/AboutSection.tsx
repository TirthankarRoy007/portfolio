import { ArrowRight, Database, Download, GitBranch, ServerCog, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { resumeFile, resumeFileName } from "../constants/resume";

export const AboutSection = () => (
  <section className="section-shell">
    <div className="glass-panel overflow-hidden rounded-[2rem]">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative bg-gradient-to-br from-ink via-brand to-accent p-5 text-white sm:p-6 lg:p-7">
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <p className="text-sm font-semibold uppercase tracking-normal text-white/75">About</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            I build backend-heavy products that stay calm when workflows get complicated.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/80">
            My sweet spot is the space between product behavior, database design,
            API architecture, and pragmatic frontend delivery.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              { icon: ServerCog, label: "API Architecture", value: "REST, services, workflows" },
              { icon: Database, label: "Data Systems", value: "PostgreSQL, SQL, ERDs" },
              { icon: Workflow, label: "Business Logic", value: "Payments, slots, reports" },
              { icon: GitBranch, label: "Delivery", value: "Docker, AWS, releases" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur">
                  <Icon size={21} />
                  <p className="mt-3 text-sm font-semibold">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-white/70">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-5 sm:p-6 lg:p-7">
          <div className="space-y-3 text-[15px] leading-7 text-muted">
            <p>
              I’m a full stack developer who enjoys building backend-heavy systems with clean architecture,
              scalable APIs, optimized databases, and reliable business workflows.
            </p>

            <p>
              Over the last 3 years, I’ve worked on products across edtech, healthcare,
              logistics, mobility, and research, building everything from ERP reporting modules
              and enrollment platforms to payment systems and production-grade backend services.
            </p>

            <p>
              At 21K School, I worked on large-scale enrollment and learning platforms like
              Learning Floww and Learning Garage, where I handled backend architecture,
              PostgreSQL schema design, payment integrations, reporting workflows, and
              slot conflict resolution logic.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {["Node.js", "TypeScript", "React", "PostgreSQL", "REST APIs", "Docker", "AWS"].map(
              (item) => (
                <span key={item} className="soft-chip">
                  {item}
                </span>
              )
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link to="/projects" className="primary-action">
              See Project Work <ArrowRight size={16} />
            </Link>
            <a href={resumeFile} download={resumeFileName} className="secondary-action">
              Download Resume <Download size={16} />
            </a>
            <Link to="/contact" className="secondary-action">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
