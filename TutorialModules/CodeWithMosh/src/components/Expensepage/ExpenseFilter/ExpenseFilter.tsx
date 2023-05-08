import React, { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
        {/* <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option> */}
      </select>
    </>
  );
};

export default ExpenseFilter;
