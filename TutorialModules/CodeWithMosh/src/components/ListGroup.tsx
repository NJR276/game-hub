import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (it: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1> List </h1>
      {items.length === 0 && <p> no Item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
