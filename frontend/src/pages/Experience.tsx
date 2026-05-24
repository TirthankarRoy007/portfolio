import { ArrowRight, BriefcaseBusiness, Database, ServerCog } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioApi } from "../api/portfolioApi";
import { ErrorState } from "../components/ErrorState";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { LoadingState } from "../components/LoadingState";
import { useAsync } from "../hooks/useAsync";

export const Experience = () => {
  const { data, isLoading, error } = useAsync(portfolioApi.getExperience);

  return (
    <section className="section-shell">
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-5 bg-gradient-to-br from-ink via-brand to-accent p-5 text-white sm:p-6 lg:grid-cols-[1fr_0.7fr] lg:p-7">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-white/75">Experience</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
              Professional experience with backend ownership.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              A timeline of full stack work across ERP reporting, enrollment platforms,
              payment systems, hospital workflows, ONDC logistics, and research products.
            </p>
            <Link to="/projects" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
              View Related Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: BriefcaseBusiness, label: "2 roles", value: "21K + Wemotive" },
              { icon: ServerCog, label: "Core focus", value: "APIs and workflows" },
              { icon: Database, label: "Data work", value: "SQL and schema design" }
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
      <div className="mt-5">
        {isLoading && <LoadingState label="Loading experience" />}
        {error && <ErrorState message={error} />}
        {data && <ExperienceTimeline items={data} />}
      </div>
    </section>
  );
};
