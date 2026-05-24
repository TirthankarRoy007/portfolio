import { BriefcaseBusiness, CalendarDays, MapPin, Trophy } from "lucide-react";
import { Experience } from "../types/portfolio";
import { formatMonthYear } from "../utils/date";

export const ExperienceTimeline = ({ items }: { items: Experience[] }) => (
  <div className="relative">
    <div className="absolute left-5 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-brand via-accent to-transparent md:block" />

    <div className="space-y-5">
      {items.map((item, index) => (
        <article key={item.id} className="group relative md:pl-16">
          <div className="absolute left-0 top-7 hidden h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand to-ink text-white shadow-glow ring-8 ring-white/50 transition group-hover:scale-110 md:grid">
            <BriefcaseBusiness size={18} />
          </div>

          <div className="glass-panel overflow-hidden rounded-[2rem] transition hover:-translate-y-1 hover:shadow-glow">
            <div className="grid gap-4 bg-gradient-to-br from-white/85 via-white/70 to-mint/70 p-5 lg:grid-cols-[1fr_0.35fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">
                    0{index + 1}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-muted shadow-sm">
                    <CalendarDays size={14} className="text-brand" />
                    {formatMonthYear(item.startDate)} - {formatMonthYear(item.endDate)}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-muted shadow-sm">
                    <MapPin size={14} className="text-accent" />
                    {item.location}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-ink transition group-hover:text-brand">
                  {item.role}
                </h3>
                <p className="mt-1 text-lg font-semibold text-brand">{item.company}</p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{item.description}</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 shadow-sm">
                <Trophy size={22} className="text-accent" />
                <p className="mt-3 text-3xl font-semibold text-ink">{item.achievements.length}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-normal text-muted">
                  impact points
                </p>
              </div>
            </div>

            <div className="grid gap-3 p-5 pt-0 sm:grid-cols-2">
              {item.achievements.map((achievement, achievementIndex) => (
                <div
                  key={achievement}
                  className="rounded-2xl border border-white/70 bg-white/70 p-3 text-sm leading-6 text-muted shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <span className="mb-3 inline-grid h-7 w-7 place-items-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                    {achievementIndex + 1}
                  </span>
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);
