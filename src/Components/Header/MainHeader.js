import { useContext } from "react";
import UtilityContext from "../Store/Context/UtilityContext";
import "./MainHeader.css";
import dev from "../../Assets/Images/code.svg";
const MainHeader = () => {
  const utilityCtx = useContext(UtilityContext);
  return (
    <header className="header">
      <div className="logo">
        <div className={"name"}>
          <h1>Moyo.</h1>
          <h1>lao</h1>
        </div>

        <div className="icon">
          <img src={dev} alt="dev" />
        </div>
      </div>

      <div onClick={utilityCtx.openMenuHandler} className="menu">
        <div className={utilityCtx.menuIsOpen ? "open" : ""}></div>
      </div>
    </header>
  );
};

export default MainHeader;
