import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id || item.name} item={item} />
          ))}

          <h2>Total Cart Amount: ₹{totalAmount}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
