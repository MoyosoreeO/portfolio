import style from "./Skill.module.css";
import SectionHeader from "../UI/SectionHeader";
import github from "../../Assets/Images/github1.svg";
import jquery from "../../Assets/Images/jquery.svg";
import javascript from "../../Assets/Images/javascript.svg";
import reactIcon from "../../Assets/Images/reactIcon.svg";
import tailwind from "../../Assets/Images/tailw.svg";
import VS from "../../Assets/Images/VS.svg";
import html from "../../Assets/Images/html5.svg";
import css from "../../Assets/Images/devicon.svg";
import { useInView } from "react-intersection-observer";
import UtilityContext from "../Store/Context/UtilityContext";
import { useContext } from "react";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";
import MoreInfo from "./MoreInfo";
const Skill = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100%",
    threshold: 1,
  });
  const cxt = useContext(UtilityContext);
  const skills = [
    {
      name: "LANGUAGES",
      id: "s1",
      sub: [
        {
          name: "Javascript- ES6",
          icon: javascript,
          id: "ss1a",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "CSS/SASS",
          icon: css,
          id: "ss1b",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "HTML",
          icon: html,
          id: "ss1c",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
      ],
    },
    {
      name: "FRAMEWORKS",
      id: "s2",
      sub: [
        {
          name: "React",
          icon: reactIcon,
          id: "ss2a",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "JQuery",
          icon: jquery,
          id: "ss2b",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "Tailwind",
          icon: tailwind,
          id: "ss2c",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
      ],
    },
    {
      name: "UTILITY TOOLS",
      id: "s3",
      sub: [
        {
          name: "Chrome Dev-tools",
          icon: tailwind,
          id: "ss3a",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "React Dev-tools",
          icon: tailwind,
          id: "ss3b",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "Git/GitHub",
          icon: github,
          id: "ss3c",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "VS-code",
          icon: VS,
          id: "ss3d",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
      ],
    },
    {
      name: "SOFT SKILLS",
      id: "s4",
      sub: [
        {
          name: "Good Communication",
          id: "ss4a",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "Time Manegement",
          id: "ss4b",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "Organization",
          id: "ss4c",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
        {
          name: "Teamwork",
          id: "ss4d",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
        },
      ],
    },
  ];
  const backdropHandler = () => {
    cxt.closeSkillModal();
    if (cxt.moreInfoIsOpen) {
      cxt.closeMoreInfoHandler();
    }
  };
  return (
    <>
      {cxt.skillIsOpen && cxt.screenWidth < 900 && (
        <Backdrop onClick={backdropHandler} />
      )}
      <SectionHeader
        className={style.sectionHeader}
        title="MY"
        titleSpan="SKILLSET"
        span="C"
      />
      <section
        ref={ref}
        className={`${style["skill-section"]} ${inView ? style.animation : ""}`}
      >
        {skills.map((item) => {
          return (
            <div
              className={style.list}
              key={item.id}
              onClick={() => {
                if (cxt.screenWidth < 900) {
                  cxt.openSkillModal(item);
                }
              }}
            >
              <h4>{item.name}</h4>
              {cxt.screenWidth > 900 && (
                <>
                  <Modal className={style.modal} skill={item} />
                </>
              )}
            </div>
          );
        })}
      </section>
      {cxt.moreInfoIsOpen && cxt.screenWidth > 900 && (
        <MoreInfo className={style["moreInfo__desktop"]} />
      )}
    </>
  );
};
export default Skill;
