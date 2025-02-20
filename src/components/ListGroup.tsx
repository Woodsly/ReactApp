import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const message = items.length === 0 ? <p>No item found</p> : null;

  //its better to use a constant like message above if we dont need a parameter
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  //event handler - handles click events
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    //empty bracket tells react to use fragment to wrap children
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li> //key could be ID in real environment
        ))}
      </ul>
    </>
  );

  //if condition is true, then render the element - <p>No item found</p>
  //if false then result of expression is false and nothing gets rednered
}

export default ListGroup;
