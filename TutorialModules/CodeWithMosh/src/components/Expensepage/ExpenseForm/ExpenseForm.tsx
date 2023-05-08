import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm, FormState } from "react-hook-form";
import { z } from "Zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be atleast 3 chars" }),
  amount: z.number({ invalid_type_error: "Amount Field is Required" }).min(1),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Item {
  description: string;
  amount: number;
  category: typeof categories;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger"> {errors.description.message} </p>
        )}

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger"> {errors.amount.message} </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger"> {errors.category.message} </p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
