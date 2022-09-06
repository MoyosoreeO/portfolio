import Card from "./Card";
import style from "./Modal.module.css";
import Button from "./Button";
import UtilityContext from "../Store/Context/UtilityContext";
import MoreInfo from "../Skill/MoreInfo";
import { useContext } from "react";
const Modal = (props) => {
  const cxt = useContext(UtilityContext);
  const btnClickHandler = () => {
    cxt.closeSkillModal();
  };
  return (
    <Card className={`${style.card} ${props.className}`}>
      <div className={style.header}>
        <h5>{props.skill.name}</h5>
      </div>
      <div>
        <ul>
          {props.skill.sub.map((item) => {
            return (
              <li
                onClick={() => {
                  cxt.openMoreInfoHandler(item);
                }}
                key={item.id}
              >
                {item.icon && <img src={item.icon} alt="icon" />}
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {cxt.screenWidth < 900 && (
          <Button onClick={btnClickHandler} label="Close" />
        )}
      </div>
      {cxt.moreInfoIsOpen && cxt.screenWidth < 900 && (
        <MoreInfo className={style.moreInfo} />
      )}
    </Card>
  );
};

export default Modal;
