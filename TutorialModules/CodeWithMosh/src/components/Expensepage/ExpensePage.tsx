import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import categories from "./categories";

interface Item {
  description: string;
  amount: number;
  category: string;
}

const ExpensePage = () => {
  const [category, setCategory] = useState("");

  const [items, setItems] = useState<Item[]>([]);

  const deleteItem = (input: number) => {
    console.log(input);
    setItems((items) => items.filter((_, index) => index !== input));
  };

  const filterList = (category: string) => {
    setCategory(category);
    console.log(category);
  };

  const visibileExpenses = category
    ? items.filter((e) => e.category === category)
    : items;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(item) => setItems([...items, { ...item }])}
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={filterList} />
      </div>
      <ExpenseList items={visibileExpenses} onDeleteItem={deleteItem} />
    </>
  );
};

export default ExpensePage;
