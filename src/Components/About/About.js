import Card from "../UI/Card";
import style from "./About.module.css";
import avatar from "../../Assets/Images/hey.png";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../UI/SectionHeader";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "40%",
  });
  return (
    <div id="me" ref={ref} className={inView ? style.animation : ""}>
      <Card className={style.card}>
        <div className={style["avatar-container"]}>
          <img src={avatar} alt="myavarta" />
        </div>
        <SectionHeader span="A" title="ABOUT" titleSpan="ME" />
        <div className={style.description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lobortis aliquam justo, tristique faucibus nibh tincidunt et.
            Maecenas pharetra commodo sapien aliquet aliquet. Phasellus feugiat,
            erat egestas aliquam molestie, sapien magna vulputate nunc, vitae
            ornare lorem dui iaculis nisl. Praesent maximus eros et erat varius,
            vitae posuere arcu bibendum. Vivamus elementum egestas lorem, in
            condimentum nisl ultrices eget. Curabitur eget lectus quis mauris
            maximus imperdiet vitae non erat. Pellentesque pulvinar tortor sed
            aliquet congue. Suspendisse dignissim nec massa ut finibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lobortis aliquam justo, tristique faucibus nibh tincidunt et.
            Maecenas pharetra commodo sapien aliquet aliquet. Phasellus feugiat,
            erat egestas.
          </p>
        </div>
      </Card>
    </div>
  );
};
export default About;
