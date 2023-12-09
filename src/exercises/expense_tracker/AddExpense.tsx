import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface AddExpenseProps {
  onAddExpense: (expense: FieldValues) => void;
  listOfCategories: Categories[];
}

interface Categories {
  id: string;
  label: string;
  value: string;
}

const schema = z.object({
  description: z
    .string({
      required_error: "Description is required",
    })
    .nonempty({
      message: "Description is required",
    })
    .max(10, {
      message: "Description must be atleast 10 characters",
    }),
  amount: z
    .number({
      invalid_type_error: "Amount is required",
    })
    .positive({
      message: "Amount must be a positive number",
    }),
  category: z.string().nonempty({
    message: "Please select a category",
  }),
});

type FormData = z.infer<typeof schema>;

const AddExpense = ({ onAddExpense, listOfCategories }: AddExpenseProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const categories = listOfCategories.map((category) => {
    return (
      <option key={category.value} id={category.id} value={category.value}>
        {category.label}
      </option>
    );
  });

  return (
    <form onSubmit={handleSubmit(onAddExpense)}>
      <div className="mb-3">
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
          <p className="text-danger">{errors.description?.message}</p>
        )}
      </div>

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
          <p className="text-danger">{errors.amount?.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <select {...register("category")} id="category" className="form-select">
          <option></option>
          {categories}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category?.message}</p>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddExpense;
