import style from "./Navigation.module.css";
import UtilityContext from "../Store/Context/UtilityContext";
import { useContext } from "react";
const Navigation = () => {
  const cxt = useContext(UtilityContext);
  const clickHandler = () => {
    cxt.closeMenuHandler();
  };
  return (
    <nav className={style.nav} onClick={clickHandler}>
      <ul>
        <li>
          <a href="#me"> About</a>
        </li>
        <li>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          <a href="#contact"> Contact</a>
        </li>
        <li>
          <a href=""> Resume</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
