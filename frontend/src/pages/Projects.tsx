import { ArrowRight, Code2, Database, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioApi } from "../api/portfolioApi";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { ProjectCard } from "../components/ProjectCard";
import { useAsync } from "../hooks/useAsync";

export const Projects = () => {
  const { data, isLoading, error } = useAsync(portfolioApi.getProjects);

  return (
    <section className="section-shell">
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-5 bg-gradient-to-br from-brand via-teal-700 to-ink p-5 text-white sm:p-6 lg:grid-cols-[1fr_0.75fr] lg:p-7">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-white/75">Projects</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
              Systems, workflows, APIs, and product backends.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              Selected work spanning Learning Floww, Personal Exposure Reporter,
              school platforms, coupon engines, medicine reminders, and commerce systems.
            </p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
              Discuss a Role <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: Rocket, label: "Delivery", value: "End-to-end builds" },
              { icon: Database, label: "Backend", value: "ERDs, SQL, APIs" },
              { icon: Code2, label: "Stack", value: "Node, TS, React" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur">
                  <Icon size={20} className="text-white" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-normal text-white/65">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {isLoading && <LoadingState label="Loading projects" />}
        {error && <ErrorState message={error} />}
        {data?.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
};
