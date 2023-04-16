"use client";

import Button from "../components/Button";
import CartItem from "./CartItem";
import { cartItems } from "./data";

function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      {cartItems.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}

export default Cart;
