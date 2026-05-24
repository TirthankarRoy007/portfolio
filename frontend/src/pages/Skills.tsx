import { portfolioApi } from "../api/portfolioApi";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { SkillsSection } from "../components/SkillsSection";
import { useAsync } from "../hooks/useAsync";

export const Skills = () => {
  const { data, isLoading, error } = useAsync(portfolioApi.getSkills);

  return (
    <section className="section-shell">
      <p className="section-kicker">Skills</p>
      <h1 className="section-title mt-2">Technical skills</h1>
      <div className="mt-6">
        {isLoading && <LoadingState label="Loading skills" />}
        {error && <ErrorState message={error} />}
        {data && <SkillsSection skills={data} />}
      </div>
    </section>
  );
};
