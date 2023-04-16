"use client";

import { useState } from "react";
import Button from "../components/Button";

function List() {
  const [products, setProducts] = useState([
    {
      name: "Tomatoes",
      quantity: 1,
    },
    {
      name: "Pasta",
      quantity: 1,
    },
    {
      name: "Coconut",
      quantity: 1,
    },
  ]);

  function quantityControl(
    name: string,
    calculationType: "increase" | "decrease"
  ) {
    if (calculationType === "increase") {
      setProducts((prev) => {
        return prev.map((product) => {
          if (product.name === name) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      });
    } else {
      setProducts((prev) => {
        return prev.map((product) => {
          if (product.name === name) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        });
      });
    }
  }

  return (
    <>
      <h4 className="title">List</h4>
      {products.map((product, i) => (
        <div className="food" key={`${product}-${i}`}>
          <img src={`/food${i}.png`} className="listImage" />
          <h4>{product.name}</h4>
          <Button
            type="button"
            color="blue"
            onClick={() => quantityControl(product.name, "decrease")}
          >
            -
          </Button>
          <span> {product.quantity} </span>
          <Button
            type="button"
            color="blue"
            onClick={() => quantityControl(product.name, "increase")}
          >
            +
          </Button>
        </div>
      ))}
    </>
  );
}

export default List;
