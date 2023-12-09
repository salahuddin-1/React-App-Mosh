import { useState } from "react";

interface Expense {
  categoryId: string;
  description: string;
  amount: number;
  category: string;
  index: number;
}

interface ExpenseTableProps {
  listOfCategories: Categories[];
  groceries: Expense[];
  utilities: Expense[];
  entertainment: Expense[];
  groceriesTotal: number;
  utilitiesTotal: number;
  entertainmentTotal: number;
  total: number;
  onDeleteExpense: (expense: Expense) => void;
}

interface Categories {
  id: string;
  label: string;
  value: string;
}

const ExpenseTable = ({
  listOfCategories,
  groceries,
  utilities,
  entertainment,
  groceriesTotal,
  utilitiesTotal,
  entertainmentTotal,
  total,
  onDeleteExpense,
}: ExpenseTableProps) => {
  const [category, selectCategory] = useState<string>();

  const categories = listOfCategories.map((category) => {
    return (
      <option key={category.value} id={category.id} value={category.value}>
        {category.label}
      </option>
    );
  });

  const groceriesElement = groceries.map((grocery) => {
    return (
      <tr key={grocery.description + grocery.amount}>
        <td>{grocery.description}</td>
        <td>${grocery.amount}</td>
        <td>{grocery.category}</td>
        <td>
          <button
            onClick={() => {
              onDeleteExpense(grocery);
            }}
            type="button"
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  const utilitiesElement = utilities.map((utility) => {
    return (
      <tr key={utility.description + utility.amount}>
        <td>{utility.description}</td>
        <td>${utility.amount}</td>
        <td>{utility.category}</td>
        <td>
          <button
            onClick={() => {
              onDeleteExpense(utility);
            }}
            type="button"
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  const entertainmentElement = entertainment.map((entertainment) => {
    return (
      <tr key={entertainment.description + entertainment.amount}>
        <td>{entertainment.description}</td>
        <td>${entertainment.amount}</td>
        <td>{entertainment.category}</td>
        <td>
          <button
            onClick={() => {
              onDeleteExpense(entertainment);
            }}
            type="button"
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  const getSpecificCategory = () => {
    if (category === "groceries") {
      return groceriesElement;
    } else if (category === "utilities") {
      return utilitiesElement;
    } else if (category === "entertainment") {
      return entertainmentElement;
    }

    return (
      <>
        {groceriesElement}
        {utilitiesElement}
        {entertainmentElement}
      </>
    );
  };

  const getSpecificCategoryTotal = (): number => {
    if (category === "groceries") {
      return groceriesTotal;
    } else if (category === "utilities") {
      return utilitiesTotal;
    } else if (category === "entertainment") {
      return entertainmentTotal;
    }

    return total;
  };

  return (
    <div className="mb-3">
      <select
        onChange={(e) => {
          selectCategory(e.target.value.toLowerCase());
        }}
        id="category"
        className="form-select"
      >
        {categories}
      </select>

      <br></br>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {getSpecificCategory()}

          <tr>
            <td>Total</td>
            <td>${getSpecificCategoryTotal()}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
