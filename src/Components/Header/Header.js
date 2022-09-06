import MainHeader from "./MainHeader";
import Introduction from "./Introduction";
import Navigation from "./Navigation";
import { useContext } from "react";
import UtilityContext from "../Store/Context/UtilityContext";
import Backdrop from "../UI/Backdrop";
const Header = () => {
  const utilityCxt = useContext(UtilityContext);
  const backdropClickHandler = () => {
    utilityCxt.closeMenuHandler();
  };
  return (
    <>
      {utilityCxt.menuIsOpen && <Navigation />}
      {utilityCxt.menuIsOpen && <Backdrop onClick={backdropClickHandler} />}
      <MainHeader />
      <Introduction />
    </>
  );
};
export default Header;
