import { Fragment } from "react";
import style from "./Header.module.css";
import mealImage from "../../assets/meals.jpeg";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>My Restaurant</h1>
        <HeaderCardButton></HeaderCardButton>
      </header>
      <div className={style["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
