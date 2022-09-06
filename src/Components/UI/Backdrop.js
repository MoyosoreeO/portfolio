import style from "./Backdrop.module.css";
const Backdrop = (props) => {
  return (
    <div onClick={props.onClick} className={style.backdrop}>
      {props.children}
    </div>
  );
};

export default Backdrop;
