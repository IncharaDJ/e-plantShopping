```jsx
import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "./CartSlice";

const CartItem = ({ item, cartItems = [] }) => {
  const dispatch = useDispatch();

  // Calculate total amount for all cart items
  const cartTotal = cartItems.reduce(
    (total, cartItem) =>
      total + cartItem.price * cartItem.quantity,
    0
  );

  // Decrease quantity, and remove item if quantity becomes zero
  const handleDecrease = () => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(decreaseQuantity(item.id));
    }
  };

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        width="100"
      />

      <div>
        <h3>{item.name}</h3>

        <p>
          Price: ₹{item.price}
        </p>

        <div>
          <button onClick={handleDecrease}>
            -
          </button>

          <span style={{ margin: "0 10px" }}>
            {item.quantity}
          </span>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>
        </div>

        <p>
          Total: ₹{item.price * item.quantity}
        </p>

        <button
          onClick={() =>
            dispatch(removeItem(item.id))
          }
        >
          Remove
        </button>
      </div>

      {cartItems.length > 0 && (
        <div className="cart-total">
          <h2>
            Total Cart Amount: ₹{cartTotal}
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartItem;
```

