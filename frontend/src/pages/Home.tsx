import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioApi } from "../api/portfolioApi";
import { AboutSection } from "../components/AboutSection";
import { ErrorState } from "../components/ErrorState";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { HeroSection } from "../components/HeroSection";
import { LoadingState } from "../components/LoadingState";
import { ProjectCard } from "../components/ProjectCard";
import { SkillsSection } from "../components/SkillsSection";
import { useAsync } from "../hooks/useAsync";

export const Home = () => {
  const profile = useAsync(portfolioApi.getProfile);
  const skills = useAsync(portfolioApi.getSkills);
  const experience = useAsync(portfolioApi.getExperience);
  const projects = useAsync(portfolioApi.getProjects);

  return (
    <>
      {profile.isLoading && (
        <div className="section-shell">
          <LoadingState label="Loading profile" />
        </div>
      )}
      {profile.error && (
        <div className="section-shell">
          <ErrorState message={profile.error} />
        </div>
      )}
      {profile.data && <HeroSection profile={profile.data} />}
      <AboutSection />
      <section className="section-shell">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title mt-2">Recent roles and impact</h2>
          </div>
          <Link to="/experience" className="secondary-action w-fit">
            Full Timeline <ArrowRight size={16} />
          </Link>
        </div>
        {experience.isLoading && <LoadingState label="Loading experience" />}
        {experience.error && <ErrorState message={experience.error} />}
        {experience.data && <ExperienceTimeline items={experience.data.slice(0, 2)} />}
      </section>
      <section className="section-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Projects</p>
            <h2 className="section-title mt-2">Selected engineering work</h2>
          </div>
          <Link to="/projects" className="secondary-action w-fit">
            All Projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {projects.isLoading && <LoadingState label="Loading projects" />}
          {projects.error && <ErrorState message={projects.error} />}
          {projects.data?.slice(0, 4).map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
      <section className="section-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title mt-2">Core technical toolkit</h2>
          </div>
          <Link to="/contact" className="primary-action w-fit">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-4">
          {skills.isLoading && <LoadingState label="Loading skills" />}
          {skills.error && <ErrorState message={skills.error} />}
          {skills.data && <SkillsSection skills={skills.data} />}
        </div>
      </section>
    </>
  );
};
