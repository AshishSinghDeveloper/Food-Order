import { Fragment } from "react";
import style from "./Header.module.css";
import mealImage from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>Restaurent</h1>
        <button>Cart</button>
      </header>
      <div className={style["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
