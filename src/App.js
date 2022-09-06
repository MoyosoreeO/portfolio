import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import ProjectSection from "./Components/Projects/ProjectSection";
import Skills from "./Components/Skill/Skill";
import Contact from "./Components/Contact/Contact";
import UtilityContext from "./Components/Store/Context/UtilityContext";
import { useContext } from "react";
import ProjectModal from "./Components/Projects/ProjectModal";
import Modal from "./Components/UI/Modal";
import style from "./App.module.css";
// import MoreInfo from "./Components/Skill/MoreInfo";
function App() {
  const ctx = useContext(UtilityContext);
  return (
    <>
      {ctx.modalIsOpen && <ProjectModal />}
      {ctx.skillIsOpen && ctx.screenWidth < 900 ? (
        <Modal className={style.modal} skill={ctx.skill} />
      ) : (
        ""
      )}
      <Header />
      <main>
        <About />
        <ProjectSection />
        <Skills />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
export default App;
