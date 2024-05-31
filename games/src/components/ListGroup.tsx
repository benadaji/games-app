import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // items = [];

  // if (items.length === 0)
  //   return (
  //     <>
  //       <p>No item found</p>
  //     </>
  //   );

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item </p> : null;
  // };

  return (
    <Fragment>
      <h1>List</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p> No item found</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("onclcick")}
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
