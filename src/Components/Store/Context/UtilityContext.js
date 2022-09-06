import React, { useEffect, useState } from "react";

const availableProjects = [
  {
    id: "p1",
    name: "Quraan Indexer",
    about:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
    src: "logo512.png",
    tools: "ES6, HTML, CSS.",
    href: "https://moyosoreeo.github.io/Quraan-Indexer/",
  },
  {
    id: "p2",
    name: "Quraan Indexer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
    src: "logo512.png",
    tools: "ES6, HTML, CSS.",
    href: "https://moyosoreeo.github.io/Quraan-Indexer/",
  },
  {
    id: "p3",
    name: "Quraan Indexer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
    src: "logo512.png",
    tools: "ES6, HTML, CSS.",
    href: "https://moyosoreeo.github.io/Quraan-Indexer/",
  },
  {
    id: "p4",
    name: "Quraan Indexer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
    src: "logo512.png",
    tools: "ES6, HTML, CSS.",
    href: "https://moyosoreeo.github.io/Quraan-Indexer/",
  },
  {
    id: "p5",
    name: "Quraan Indexer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
    src: "logo512.png",
    tools: "ES6, HTML, CSS.",
    href: "https://moyosoreeo.github.io/Quraan-Indexer/",
  },
  {
    id: "p6",
    name: "Quraan Indexer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis aliquam justo, tristique faucibus nibh tincidunt et. Maecenas pharetra Vivamus elementum egestas lorem, in condimentum nisl ultrices eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis",
    src: "logo512.png",
    tools: "ES6, HTML, CSS.",
    href: "https://moyosoreeo.github.io/Quraan-Indexer/",
  },
];
const UtilityContext = React.createContext({
  project: [],
  openedProject: {},
  menuIsOpen: false,
  openMenuHandler: () => {},
  closeMenuHandler: () => {},
  modalIsOpen: false,
  closeModalHandler: () => {},
  openModalHandler: () => {},
  skill: {},
  skillIsOpen: false,
  openSkillModal: () => {},
  closeSkillModal: () => {},
  screenWidth: 0,
  moreInfoItem: {},
  moreInfoIsOpen: false,
  openMoreInfoHandler: () => {},
  closeMoreInfoHandler: () => {},
});

export const UtilityContextProvider = (props) => {
  //calculate Width prop
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const id = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 500);
      return () => {
        clearTimeout(id);
      };
    });
  }, []);
  const [projects, setProjects] = useState(availableProjects);
  const [openedProject, setOpenedProject] = useState({});
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //Project-modal logics
  const openModalHandler = (project) => {
    document.body.style.overflow = "hidden";
    setOpenedProject(project);
    setModalIsOpen(true);
    setProjects((prev) => {
      const newProject = prev.filter((item) => {
        return item.id !== project.id;
      });
      return newProject;
    });
  };
  const closeModalHandler = () => {
    document.body.style.overflow = "";
    setModalIsOpen(false);
    setProjects(availableProjects);
    setOpenedProject({});
  };
  //Skill-modal logic
  const [skill, setSkill] = useState({});
  const [skillIsOpen, setSkillIsOpen] = useState(false);
  document.onload = () => {
    if (screenWidth > 768) {
      setSkillIsOpen(true);
    }
  };
  const openSkillModal = (item) => {
    document.body.style.overflow = "hidden";
    setSkill(item);
    setSkillIsOpen(true);
  };
  const closeSkillModal = () => {
    document.body.style.overflow = "";
    setSkillIsOpen(false);
    setSkill({});
  };

  //skill-moreInfo Logic
  const [moreInfoIsOpen, setMoreInfo] = useState(false);
  const [moreInfoItem, setMoreInfoItem] = useState({});
  const openMoreInfoHandler = (item) => {
    setMoreInfo(true);
    setMoreInfoItem(item);
  };
  const closeMoreInfoHandler = () => {
    setMoreInfo(false);
  };

  //menu logics
  const openMenuHandler = () => {
    if (menuIsOpen === true) {
      document.body.style.overflow = "scroll";
      setMenuIsOpen(false);
    } else {
      document.body.style.overflow = "hidden";
      setMenuIsOpen(true);
    }
  };
  const closeMenuHandler = () => {
    document.body.style.overflow = "scroll";
    setMenuIsOpen(false);
  };

  return (
    <UtilityContext.Provider
      value={{
        screenWidth: screenWidth,
        project: projects,
        openedProject: openedProject,
        menuIsOpen: menuIsOpen,
        openMenuHandler: openMenuHandler,
        closeMenuHandler: closeMenuHandler,
        modalIsOpen: modalIsOpen,
        openModalHandler: openModalHandler,
        closeModalHandler: closeModalHandler,
        skill: skill,
        skillIsOpen: skillIsOpen,
        openSkillModal: openSkillModal,
        closeSkillModal: closeSkillModal,
        moreInfoItem: moreInfoItem,
        openMoreInfoHandler: openMoreInfoHandler,
        closeMoreInfoHandler: closeMoreInfoHandler,
        moreInfoIsOpen: moreInfoIsOpen,
      }}
    >
      {props.children}
    </UtilityContext.Provider>
  );
};

export default UtilityContext;
