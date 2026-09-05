import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "./CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        width="100"
      />

      <div>
        <h3>{item.name}</h3>
        <p>Price: ₹{item.price}</p>

        <div>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          <span style={{ margin: "0 10px" }}>
            {item.quantity}
          </span>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>
        </div>

        <p>
          Total: ₹{item.price * item.quantity}
        </p>

        <button onClick={() => dispatch(removeItem(item.id))}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
