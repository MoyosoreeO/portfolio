import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./ProjectModal.module.css";
import Backdrop from "../UI/Backdrop";
import Typewriter from "typewriter-effect";
import UtilityContext from "../Store/Context/UtilityContext";
import { useContext } from "react";
const ProjectModal = () => {
  const cxt = useContext(UtilityContext);
  const clickHandler = () => {
    cxt.closeModalHandler();
  };
  const BackdropHandler = () => {
    cxt.closeModalHandler();
  };
  return (
    <>
      <Backdrop onClick={BackdropHandler} />
      <div className={style["project-modal"]}>
        <h3>{cxt.openedProject.name}</h3>
        <Card className={style.card}>
          <img src={cxt.openedProject.src} alt="project" />
        </Card>
        <div className={style.info}>
          <div className={style["project-modal__description"]}>
            <span className={style.tools}> TOOLS</span>{" "}
            <Typewriter
              options={{
                strings: cxt.openedProject.tools,
                autoStart: true,
                loop: true,
              }}
            />
            <p> {cxt.openedProject.about}</p>
          </div>
          <div className={style["project-modal__controls"]}>
            <Button onClick={clickHandler} label="Close" />
            <a href={cxt.openedProject.href}>
              <Button label="Visit" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
