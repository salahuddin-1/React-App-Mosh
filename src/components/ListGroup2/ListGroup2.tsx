import { MouseEvent, useState } from "react";
import styled from "styled-components";

// This file uses styled components

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 10px 0;
  background: ${(props) => (props.active ? "pink" : "none")};
`;

interface ListGroupProps {
  items: string[];
  headings: string;
  onItemSelected: (item: string) => void;
}

function ListGroup2(props: ListGroupProps) {
  // Event Handlers
  const onItemClicked = (event: MouseEvent) => console.log("Item clicked");

  // Use State
  const [selectedIndex, setIndex] = useState(-1);

  const mappedItems = props.items.map((item, index) => (
    <ListItem
      active={index === selectedIndex}
      key={index}
      onClick={() => {
        setIndex(index);
        props.onItemSelected(item);
      }}
      // Inline styles, here you can individualize styles for each item
      // but it is not recommended
      style={{
        cursor: "pointer",
      }}
    >
      {item}
    </ListItem>
  ));

  const getMessage = () =>
    props.items.length === 0 && <p>No items to display</p>;

  return (
    <>
      <h1>{props.headings}</h1>
      {getMessage()}
      <List>{mappedItems}</List>
    </>
  );
}

export default ListGroup2;
