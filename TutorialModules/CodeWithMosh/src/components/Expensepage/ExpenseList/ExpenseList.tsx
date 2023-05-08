import React, { useState, useEffect } from "react";
import "./ExpenseList.css";
import categories from "../categories";

interface Item {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  items: Item[];
  onDeleteItem: (index: number) => void;
}

const ExpenseList = ({ items, onDeleteItem }: Props) => {
  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.description}>
              <td className="align-middle">
                <span className="pr-3">{item.description}</span>
              </td>
              <td className="align-middle">
                <span className="pr-3">$ {item.amount}.00</span>
              </td>
              <td className="align-middle">
                <span className="pr-3">{item.category}</span>
              </td>
              <td className="align-middle ">
                <span className="pr-3">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      onDeleteItem(index);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="align-middle">
              <span className="pr-3">Total</span>
            </td>
            <td className="align-middle">
              <span className="pr-3">
                ${items.reduce((acc, item) => item.amount + acc, 0).toFixed(2)}
              </span>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
