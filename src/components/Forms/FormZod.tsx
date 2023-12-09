import { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, {
    message: "The name must be atleast 3 characters",
  }),
  age: z
    .number({
      invalid_type_error: "Age field is required",
    })
    .min(18, {
      message: "You must be 18 years or older",
    }),
});

type FormData = z.infer<typeof schema>;

const FormZod = () => {
  // This {useRef} is a hook that allows us to reference an element in the DOM.
  // You can access any element and it's properties using this hook.
  // Initially, the value of the element is null, cuz it doesn't exist yet.
  // React will set the value of the element once it's rendered.

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

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
          {...form.register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {form.formState.errors.name && (
          <p className="text-danger">{form.formState.errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...form.register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {form.formState.errors.age && (
          <p className="text-danger">{form.formState.errors.age.message}</p>
        )}
      </div>
      <button
        disabled={!form.formState.isValid}
        className="btn btn-primary"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FormZod;
