import Card from "../UI/Card";
import style from "./ProjectItem.module.css";
import { useInView } from "react-intersection-observer";
import UtilityContext from "../Store/Context/UtilityContext";
import { useContext } from "react";

const ProjectItem = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "150%",
    threshold: 0.5,
  });
  const ctx = useContext(UtilityContext);
  return (
    <ul className={style.ul}>
      {ctx.project.map((item) => {
        return (
          <li
            onClick={() => {
              ctx.openModalHandler(item);
            }}
            ref={ref}
            className={`${style.list} ${inView ? style.show : ""}`}
            key={item.id}
          >
            <Card className={style.card}>
              <img src={encodeURI(item.src)} alt="projectImage" />
            </Card>
            <div className={style["project-info"]}>
              <h3>{item.name}</h3>

              <p>
                {" "}
                {item.about.slice(0, 150)}
                ...<button>Read More</button>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ProjectItem;
