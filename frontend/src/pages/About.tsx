import { ArrowRight, BadgeCheck, Building2, Gauge, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";

export const About = () => (
  <>
    <AboutSection />
    <section className="section-shell pt-0">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="glass-panel rounded-[2rem] p-5 sm:p-6">
          <BadgeCheck size={26} className="text-brand" />
          <p className="mt-5 section-kicker">Recruiter Snapshot</p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight text-ink">
            Full stack developer who can take features from UI to database.
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-muted">
            Comfortable across React, TypeScript, Node.js, APIs, PostgreSQL,
            payments, reporting workflows, and production delivery.
          </p>
          <Link to="/contact" className="mt-5 primary-action">
            Let’s Talk <ArrowRight size={16} />
          </Link>
        </div>

        <div className="glass-panel rounded-[2rem] p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
            <p className="section-kicker">
              Operating Style
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink">
              Product-minded, system-first, and comfortable with messy business logic.
            </h3>
          </div>

            <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <Gauge className="text-brand" size={22} />
              <p className="mt-4 text-3xl font-bold text-ink">3</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Years building production-grade full stack applications
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <Building2 className="text-accent" size={22} />
              <p className="mt-4 text-3xl font-bold text-ink">6+</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Major systems built across edtech, healthcare, logistics, and research
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <Layers3 className="text-brand" size={22} />
              <p className="mt-4 text-3xl font-bold text-ink">Backend</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                APIs, ERDs, payments, workflows, reporting modules, and database optimization
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <BadgeCheck className="text-accent" size={22} />
              <p className="mt-4 text-3xl font-bold text-ink">Frontend</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                React + TypeScript interfaces connected to clean backend services
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </>
);
