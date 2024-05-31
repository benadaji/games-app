import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

interface props {
  item: string[];
  heading: string;
}

function ListGroup(props: props) {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // //event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>List</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p> No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}

        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
