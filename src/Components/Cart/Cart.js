import Modal from "../UI/Modal";
import style from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={style["cart-items"]}>
      {[{ name: "sushi", id: "c1", price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onHideCart} >Close</button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
