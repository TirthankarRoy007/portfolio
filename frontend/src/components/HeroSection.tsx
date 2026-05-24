import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { resumeFile, resumeFileName } from "../constants/resume";
import { Profile } from "../types/portfolio";

interface HeroSectionProps {
  profile: Profile;
}

export const HeroSection = ({ profile }: HeroSectionProps) => (
  <section className="relative">
    <div className="section-shell grid gap-6 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-12">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-brand shadow-sm backdrop-blur">
          <Sparkles size={16} />
          3 years · Backend-strong full stack development
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-2xl font-semibold text-brand sm:text-3xl">
          {profile.title}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg">{profile.summary}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/projects" className="primary-action">
            View Projects <ArrowRight size={18} />
          </Link>
          <a href={resumeFile} download={resumeFileName} className="secondary-action">
            Download Resume <Download size={18} />
          </a>
          <Link to="/experience" className="secondary-action">
            See Experience
          </Link>
          <Link to="/contact" className="secondary-action">
            Contact Me
          </Link>
        </div>
        <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["3+", "Years"],
            ["20+", "APIs"],
            ["6", "Projects"],
            ["5", "Domains"]
          ].map(([value, label]) => (
            <div key={label} className="glass-panel rounded-2xl px-4 py-3">
              <p className="text-2xl font-semibold text-ink">{value}</p>
              <p className="text-xs font-semibold uppercase tracking-normal text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <aside className="glass-panel rounded-[2rem] p-4 shadow-glow">
        <div className="rounded-[1.5rem] bg-gradient-to-br from-brand to-ink p-5 text-white shadow-soft">
          <p className="text-sm font-semibold text-white/75">Available for</p>
          <h2 className="mt-2 text-2xl font-semibold">Full Stack and Backend Roles</h2>
          <p className="mt-3 text-sm leading-6 text-white/80">
            Node.js, TypeScript, React, PostgreSQL, REST APIs, Docker, and AWS workflows.
          </p>
        </div>
        <div className="mt-4 space-y-2.5 text-sm text-muted">
          {[
            { icon: MapPin, label: profile.location, href: null },
            { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
            { icon: Linkedin, label: "LinkedIn", href: profile.linkedinUrl },
            { icon: Github, label: "GitHub", href: profile.githubUrl }
          ].map((item) => {
            const Icon = item.icon;
            const className =
              "flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-4 py-2.5 transition hover:-translate-y-0.5 hover:text-brand hover:shadow-soft";

            return item.href ? (
              <a key={item.label} className={className} href={item.href}>
                <Icon size={18} className="text-brand" />
                {item.label}
              </a>
            ) : (
              <p key={item.label} className={className}>
                <Icon size={18} className="text-brand" />
                {item.label}
              </p>
            );
          })}
        </div>
      </aside>
    </div>
  </section>
);
