import ProjectItem from "./ProjectItem";
import style from "./ProjectSection.module.css";
import SectionHeader from "../UI/SectionHeader";
const ProjectSection = () => {
  return (
    <section id="projects">
      <SectionHeader
        className={style.sectionHeader}
        title="RECENT"
        titleSpan="PROJECTS"
        span="B"
      />
      <ProjectItem />
    </section>
  );
};
export default ProjectSection;
