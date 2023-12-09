import { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const FormReactHook = () => {
  // This {useRef} is a hook that allows us to reference an element in the DOM.
  // You can access any element and it's properties using this hook.
  // Initially, the value of the element is null, cuz it doesn't exist yet.
  // React will set the value of the element once it's rendered.

  const form = useForm<FormData>();

  console.log(form.formState.errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...form.register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {form.formState.errors.name?.type === "required" && (
          <p className="text-danger">Name field is required</p>
        )}
        {form.formState.errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be atleast 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...form.register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormReactHook;
