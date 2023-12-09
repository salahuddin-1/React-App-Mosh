import { MouseEvent, useState } from "react";
import styles from "./ListGroup.module.css";

// In React cannot return multiple elements from a component.
// Like this: return <h1>Hi</h1> <h2>Bye</h2> - WRONG
// Instead, we can wrap them in a <div> or <> (React.Fragment)

interface ListGroupProps {
  items: string[];
  headings: string;
  onItemSelected: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  // In JSX we don't have forloop, instead we use map

  // Here we map the items array to an array of JSX elements
  // We use {} to evaluate the expression,
  // an expression is a piece of code that produces a value

  // Event Handlers
  const onItemClicked = (event: MouseEvent) => console.log("Item clicked");

  // Use State
  // In React every component has its own state
  const [selectedIndex, setIndex] = useState(-1);

  const mappedItems = props.items.map((item, index) => (
    <li
      className={
        selectedIndex == index ? "list-group-item active" : "list-group-item"
      }
      key={item}
      onClick={() => {
        setIndex(index);
        props.onItemSelected(item);
      }}
    >
      {item}
    </li>
  ));

  const getMessage = () =>
    props.items.length === 0 && <p>No items to display</p>;

  return (
    <>
      <h1>{props.headings}</h1>
      {getMessage()}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {mappedItems}
      </ul>
    </>
  );
}

export default ListGroup;
