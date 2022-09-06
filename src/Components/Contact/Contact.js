import SectionHeader from "../UI/SectionHeader";
import Card from "../UI/Card";
import style from "./Contact.module.css";
import phone from "../../Assets/Images/phone.svg";
import linkedIn from "../../Assets/Images/linkedin.svg";
import gmail from "../../Assets/Images/gmail.svg";
import github from "../../Assets/Images/github1.svg";
import { useInView } from "react-intersection-observer";
import avatar from "../../Assets/Images/hey.png";
const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "30%",
    threshold: 0.5,
  });
  return (
    <>
      <SectionHeader
        className={style["section-header"]}
        title="CONTACT"
        titleSpan="ME"
        span="D"
      />
      <div
        id="contact"
        ref={ref}
        className={`${style["contact-section"]} ${
          inView ? style.animation : ""
        }`}
      >
        <Card className={style.card}>
          <div>
            <img src={avatar} alt="goodbye" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lobortis aliquam justo, tristique faucibus nibh tincidunt et.
            Maecenas pharetra commodo sapien aliquet aliquet. Phasellus feugiat,
            erat egestas aliquam molestie, sapien magna vulputate nunc, vitae
            ornare lorem dui{" "}
          </p>
        </Card>
        <div className={style["contact-info"]}>
          <ul>
            <li>
              <a href="Tel:+2347052420943">
                <img src={phone} alt="Contact" />
              </a>
            </li>

            <li>
              <a
                href={encodeURI(
                  "https://mail.google.com/mail/u/1/?view=cm&fs=1&to=moyosoree.o@gmail.com&tf=1&body=I'd love to Hire you,lets Connect!"
                )}
              >
                <img src={gmail} alt="Contact" />
              </a>
            </li>
            <li>
              <img src={github} alt="Contact" />
            </li>
            <li>
              <img src={linkedIn} alt="Contact" />
            </li>
          </ul>
        </div>
        <div>
          <p className={style.copyright}>©Moyo.lao 2022</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
