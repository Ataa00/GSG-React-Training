// It is used to return multiple elements. Because each elemenet will be
// convereted to JavaScript code and then it will fill into errors. So, use Fragment or
// the shortcut <> to avoid that.
// import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

interface Props {
  title: string;
  items: string[];
  onSelectItem: (item: string, index: number, event: MouseEvent) => void;
}

function ListGroup({ title, items, onSelectItem }: Props) {
  // const Message = items.length === 0 ? <p>No item found.</p> : null;
  const Message = items.length === 0 && <p>No item found.</p>;

  // Each state in each component will be independet, so if another component is called in the App
  // the first one will have it's own state and the other one will have it's own state as well.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // I is not practical way to do that in react. Instead, use Fragment
    // <div>
    // Or you can use the shortcut <>
    // <Fragment>
    <>
      <h1>{title}</h1>
      {Message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => {
              onSelectItem(item, index, event);
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
  // </Fragment>
  // </div>
}

export default ListGroup;
