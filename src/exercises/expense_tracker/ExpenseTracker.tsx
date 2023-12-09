import { FieldValues } from "react-hook-form";
import AddExpense from "./AddExpense";
import ExpenseTable from "./ExpenseTable";
import { useState } from "react";
import produce from "immer";

interface Expense {
  categoryId: string;
  description: string;
  amount: number;
  category: string;
  index: number;
}

interface Expenses {
  groceries: Expense[]; // Groceries
  utilities: Expense[]; // Utilities
  entertainment: Expense[]; // Entertainment
  groceriesTotal: number;
  utilitiesTotal: number;
  entertainmentTotal: number;
  total: number;
}

const ExpenseTracker = () => {
  const initialExpensesState: Expenses = {
    groceries: [],
    utilities: [],
    entertainment: [],
    groceriesTotal: 0,
    utilitiesTotal: 0,
    entertainmentTotal: 0,
    total: 0,
  };

  const [expenses, updateExpense] = useState<Expenses>(initialExpensesState);

  return (
    <div className="expense-tracker">
      <AddExpense
        onAddExpense={(expense: FieldValues) => {
          if (expense.category === "groceries") {
            const newExpense = produce<Expenses>((draft) => {
              draft.groceries.push({
                categoryId: "1",
                description: expense.description,
                amount: expense.amount,
                category: expense.category,
                index: draft.groceries.length,
              });

              const amount = Number(expense.amount);
              const prevGroceryTotal: number = expenses.groceriesTotal;
              const currentGroceryTotal: number = prevGroceryTotal + amount;

              draft.groceriesTotal = currentGroceryTotal;

              const prevGrandTotal: number = expenses.total;
              const currentGrandTotal: number = prevGrandTotal + amount;

              draft.total = currentGrandTotal;
            });

            updateExpense(newExpense);
          } else if (expense.category === "utilities") {
            const newExpense = produce<Expenses>((draft) => {
              draft.utilities.push({
                categoryId: "2",
                description: expense.description,
                amount: expense.amount,
                category: expense.category,
                index: draft.utilities.length,
              });

              const amount = Number(expense.amount);
              const prevUtilityTotal: number = expenses.utilitiesTotal;
              const currentUtilityTotal: number = prevUtilityTotal + amount;

              draft.utilitiesTotal = currentUtilityTotal;

              const prevGrandTotal: number = expenses.total;
              const currentGrandTotal: number = prevGrandTotal + amount;

              draft.total = currentGrandTotal;
            });

            updateExpense(newExpense);
          } else if (expense.category === "entertainment") {
            const newExpense = produce<Expenses>((draft) => {
              draft.entertainment.push({
                categoryId: "3",
                description: expense.description,
                amount: expense.amount,
                category: expense.category,
                index: draft.entertainment.length,
              });

              const amount = Number(expense.amount);
              const prevEntertainmentTotal: number =
                expenses.entertainmentTotal;
              const currentEntertainmentTotal: number =
                prevEntertainmentTotal + amount;

              draft.entertainmentTotal = currentEntertainmentTotal;

              const prevGrandTotal: number = expenses.total;
              const currentGrandTotal: number = prevGrandTotal + amount;

              draft.total = currentGrandTotal;
            });

            updateExpense(newExpense);
          }
        }}
        listOfCategories={[
          {
            id: "1",
            label: "Groceries",
            value: "groceries",
          },

          {
            id: "2",
            label: "Utilities",
            value: "utilities",
          },

          {
            id: "3",
            label: "Entertainment",
            value: "entertainment",
          },
        ]}
      />

      <br />
      <br />

      <ExpenseTable
        onDeleteExpense={(expense: Expense) => {
          console.log(expense.index);

          const deletedExpense = produce<Expenses>((draft) => {
            if (expense.category === "groceries") {
              // Delete the expense
              draft.groceries = draft.groceries.filter((grocery) => {
                if (grocery.index !== expense.index) {
                  return grocery;
                }
              });

              // Update the total
              const amount = Number(expense.amount);
              const prevGroceryTotal: number = expenses.groceriesTotal;
              const currentGroceryTotal: number = prevGroceryTotal - amount;

              draft.groceriesTotal = currentGroceryTotal;

              const prevGrandTotal: number = expenses.total;
              const currentGrandTotal: number = prevGrandTotal - amount;

              draft.total = currentGrandTotal;
            }

            if (expense.category === "utilities") {
              // Delete the expense
              draft.utilities = draft.utilities.filter((utility) => {
                if (utility.index !== expense.index) {
                  return utility;
                }
              });

              // Update the total
              const amount = Number(expense.amount);
              const prevUtilityTotal: number = expenses.utilitiesTotal;
              const currentUtilityTotal: number = prevUtilityTotal - amount;

              draft.utilitiesTotal = currentUtilityTotal;

              const prevGrandTotal: number = expenses.total;
              const currentGrandTotal: number = prevGrandTotal - amount;

              draft.total = currentGrandTotal;
            }

            if (expense.category === "entertainment") {
              // Delete the expense
              draft.entertainment = draft.entertainment.filter(
                (entertainment) => {
                  if (entertainment.index !== expense.index) {
                    return entertainment;
                  }
                }
              );

              // Update the total
              const amount = Number(expense.amount);
              const prevEntertainmentTotal: number =
                expenses.entertainmentTotal;
              const currentEntertainmentTotal: number =
                prevEntertainmentTotal - amount;

              draft.entertainmentTotal = currentEntertainmentTotal;

              const prevGrandTotal: number = expenses.total;
              const currentGrandTotal: number = prevGrandTotal - amount;

              draft.total = currentGrandTotal;
            }
          });

          updateExpense(deletedExpense);
        }}
        groceries={expenses.groceries}
        utilities={expenses.utilities}
        entertainment={expenses.entertainment}
        groceriesTotal={expenses.groceriesTotal}
        utilitiesTotal={expenses.utilitiesTotal}
        entertainmentTotal={expenses.entertainmentTotal}
        total={expenses.total}
        listOfCategories={[
          {
            id: "1",
            label: "All Categories",
            value: "All Categories",
          },

          {
            id: "2",
            label: "Groceries",
            value: "Groceries",
          },

          {
            id: "3",
            label: "Utilities",
            value: "Utilities",
          },

          {
            id: "4",
            label: "Entertainment",
            value: "Entertainment",
          },
        ]}
      />
    </div>
  );
};

export default ExpenseTracker;
