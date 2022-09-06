import Card from "../UI/Card";
import Button from "../UI/Button";
import UtilityContext from "../Store/Context/UtilityContext";
import { useContext } from "react";
import style from "./MoreInfo.module.css";
const MoreInfo = (props) => {
  const ctx = useContext(UtilityContext);
  return (
    <Card className={props.className}>
      <div>
        <div className={style.header}>
          <h5>{ctx.moreInfoItem.name}</h5>
        </div>
        <div>
          <p>{ctx.moreInfoItem.info}</p>
        </div>
      </div>
      <Button
        onClick={() => {
          ctx.closeMoreInfoHandler();
        }}
        label="Nice"
      />
    </Card>
  );
};
export default MoreInfo;
