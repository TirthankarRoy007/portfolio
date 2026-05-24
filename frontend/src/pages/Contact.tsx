import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioApi } from "../api/portfolioApi";
import { ContactForm } from "../components/ContactForm";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { useAsync } from "../hooks/useAsync";

export const Contact = () => {
  const { data, isLoading, error } = useAsync(portfolioApi.getProfile);

  return (
    <section className="section-shell">
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-5 bg-gradient-to-br from-ink via-brand to-accent p-5 text-white sm:p-6 lg:grid-cols-[1fr_0.65fr] lg:p-7">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white/85">
              <Sparkles size={16} />
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
              Let’s talk about the role, the system, or the problem.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              Best fit: backend-heavy full stack work, product APIs, data models,
              payment flows, dashboards, and workflow-heavy platforms.
            </p>
          </div>
          <div className="grid content-start gap-3">
            {["Backend Ownership", "Full Stack Delivery", "PostgreSQL + APIs"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-sm font-semibold backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="grid gap-4">
          {isLoading && <LoadingState label="Loading contact details" />}
          {error && <ErrorState message={error} />}
          {data && (
            <>
            <div className="glass-panel rounded-[1.75rem] p-5 text-sm text-muted">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-brand to-ink p-5 text-white shadow-glow">
                <Send size={22} />
                <h2 className="mt-4 text-2xl font-semibold">Let’s build something practical.</h2>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Available for full stack and backend-focused engineering opportunities.
                </p>
              </div>

              <div className="mt-4 grid gap-3">
              <a className="flex items-center gap-3 rounded-2xl bg-white/75 px-4 py-3 transition hover:-translate-y-0.5 hover:text-brand hover:shadow-soft" href={`mailto:${data.email}`}>
                <Mail size={18} className="text-brand" />
                {data.email}
              </a>
              <a className="flex items-center gap-3 rounded-2xl bg-white/75 px-4 py-3 transition hover:-translate-y-0.5 hover:text-brand hover:shadow-soft" href={`tel:${data.phone}`}>
                <Phone size={18} className="text-brand" />
                {data.phone}
              </a>
              <p className="flex items-center gap-3 rounded-2xl bg-white/75 px-4 py-3">
                <MapPin size={18} className="text-brand" />
                {data.location}
              </p>
              </div>
              <p className="rounded-2xl border border-white/70 bg-white/60 px-4 py-3 leading-6">
                Typical fit: API-heavy products, PostgreSQL-backed systems, payment workflows, and React dashboards.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a className="glass-panel flex items-center justify-between rounded-2xl p-4 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:text-brand hover:shadow-glow" href={data.linkedinUrl}>
                <span className="inline-flex items-center gap-3">
                  <Linkedin size={18} className="text-brand" />
                  LinkedIn
                </span>
                <ArrowRight size={16} />
              </a>
              <a className="glass-panel flex items-center justify-between rounded-2xl p-4 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:text-brand hover:shadow-glow" href={data.githubUrl}>
                <span className="inline-flex items-center gap-3">
                  <Github size={18} className="text-brand" />
                  GitHub
                </span>
                <ArrowRight size={16} />
              </a>
              <Link className="glass-panel flex items-center justify-between rounded-2xl p-4 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:text-brand hover:shadow-glow" to="/projects">
                <span>Review project work</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            </>
          )}
        </aside>
        <ContactForm />
      </div>
    </section>
  );
};
