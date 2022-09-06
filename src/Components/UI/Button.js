import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style.button} ${props.className}`}
    >
      {props.label}
    </button>
  );
};
export default Button;
