import style from "./SectionHeader.module.css";
const SectionHeader = (props) => {
  return (
    <div className={`${style["section-header"]} ${props.className}`}>
      <span className={style["section-header__span"]}>{props.span}</span>
      <h3>
        {props.title} <span>{props.titleSpan}</span>
      </h3>
    </div>
  );
};
export default SectionHeader;
