import Typewriter from "typewriter-effect";
import style from "./Introduction.module.css";
import avatar from "../../Assets/Images/avatar.png";

const Introduction = () => {
  return (
    <div className={style.introduction}>
      <div className={style["avatar-container"]}>
        <img src={avatar} alt="my-avatar" />{" "}
      </div>
      <div>
        <span className={style.greet}>Hi there, I'm Moyosore:</span>
        <h3 className={style.typewriter}>
          <Typewriter
            options={{
              strings: ["Frontend Engineer", "Medical Student", "Writer."],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>
    </div>
  );
};
export default Introduction;
