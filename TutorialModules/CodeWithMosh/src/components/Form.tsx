import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm, FormState } from "react-hook-form";
import { z } from "Zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 chars" }),
  age: z.number({ invalid_type_error: "Age Field is Required" }).min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    return console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger"> {errors.name.message} </p>}

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger"> {errors.age.message} </p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
