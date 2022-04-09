import CartIcon from "../Cart/CartIcon";
import style from "./HeaderCartButton.module.css";

const HeaderCardButton = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={style.badge}>3</span>
    </button>
  );
};

export default HeaderCardButton;
