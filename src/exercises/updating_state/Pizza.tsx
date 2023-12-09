import { useState } from "react";
import produce from "immer";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pizza",
    toppings: ["Pepperoni", "Chilli"] as string[],
  });

  return (
    <>
      <div>Pizza toppings</div>
      <ul>
        {pizza.toppings.map((p) => {
          return <li>{p}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          const newPizza = produce((draft) => {
            draft.toppings.push("Cheese");
          });

          setPizza(newPizza);
        }}
      >
        Add topping
      </button>
    </>
  );
};

export default Pizza;
