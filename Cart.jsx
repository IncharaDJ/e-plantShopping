import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h2>Total Cart Amount: ₹{calculateTotalAmount()}</h2>
    </div>
  );
};

export default Cart;
