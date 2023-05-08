import React from "react";

interface Item {
  id: number;
  title: string;
  quantity: number;
}

interface Cart {
  discount: number;
  items: Item[];
}

interface Props {
  cart: Cart;
  onAdd: (id: number) => void;
}

const Cart = ({ cart, onAdd }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} Quantity: {item.quantity}{" "}
            <button
              onClick={() => {
                onAdd(item.id);
              }}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
