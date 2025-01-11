import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const App = () => {
  const [items, setItems] = useState([]); // State to store the list of items
  const [newItem, setNewItem] = useState(""); // State to store the input field value

  // Function to handle adding a new item
  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([newItem, ...items]); // Add the new item to the top of the list
      setNewItem(""); // Clear the input field
    }
  };

  return (
    <div className="container mt-5 bg-light p-4 box" >
      <h1 className="text-center mb-4">Item List Manager</h1>
      
      {/* Aligning input and button on the same line */}
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control me-2 w-auto" // Use w-auto to adjust width according to input content
          placeholder="Enter item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} // Update state on input change
        />
        <button
          className="btn btn-secondary ms-2"
          onClick={handleAddItem} // Trigger adding item when clicked
        >
          Add Item
        </button>
      </div>

      {/* List items with visible bullets */}
      <ul>
        {/* Using custom CSS for bullets */}
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <span>{item}</span> {/* Custom bullet using HTML entity */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
