import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const ListGroup = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  function handleClick() {
    console.log("Button clicked");
    if (inputValue != "") {
      setTodos((prev) => [...prev, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  }
  function handleDelete(index) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }
  function handleComplete(index) {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <>
      <div className="relative w-full max-w-md">
        <input
          type="text"
          name="todo"
          className="border border-black rounded-full p-2 pr-10 w-full"
          placeholder="Add todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleClick}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full w-8 h-8 text-sm flex items-center justify-center leading-none"
        >
          +
        </button>
      </div>
      <div className="w-full max-w-md my-4">
        <ul className="list-disc pl-6 grid gap-2">
          {todos.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-1"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" onClick={() => handleComplete(index)} />
                <span
                  className={`${
                    item.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {item.text}
                </span>
              </div>
              <button
                title="Delete"
                className="text-red-500 hover:text-gray-700"
                onClick={() => handleDelete(index)}
              >
                <TrashIcon className="w-6 h-6" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListGroup;
