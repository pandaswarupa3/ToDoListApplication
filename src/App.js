import { useState } from "react";
import "./styles.css";
import Lists from "./Lists";

export default function App() {
  const [additem, setAddItem] = useState("");
  const [btn, setBtn] = useState([]);

  function handleChange(event) {
    setAddItem(event.target.value);
  }

  function handleClick() {
    if (additem.trim() === "") return;
    setBtn((prevValue) => [...prevValue, { text: additem, completed: false }]);
    setAddItem("");
  }

  function handleDelete(id) {
    setBtn((prevValue) => prevValue.filter((_, index) => id !== index));
  }

  function handleToggle(id) {
    setBtn((prevValue) =>
      prevValue.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <input
        type="text"
        placeholder="Enter the item to add"
        onChange={handleChange}
        value={additem}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {btn.map((ele, index) => (
          <Lists
            key={index}
            id={index}
            item={ele.text}
            completed={ele.completed}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
}
