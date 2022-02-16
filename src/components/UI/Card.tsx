import classes from "./Card.module.css";

const Card: React.FC<{ classProps?: string }> = (props) => {
  // console.log(typeof props.classProps);
  return (
    <div
      className={`${classes.card} ${props.classProps ? props.classProps : ""}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
