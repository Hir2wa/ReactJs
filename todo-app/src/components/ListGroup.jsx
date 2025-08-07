import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const ListGroup = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  function handleClick() {
    console.log("Button clicked");
    if (inputValue.trim() !== "") {
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
      <h2 className="text-[#ECECEC] text-9xl mb-4">todos</h2>
      <div className="relative w-full max-w-md">
        <input
          type="text"
          name="todo"
          className="border border-black rounded-full p-2 pr-30 w-full"
          placeholder="Add todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleClick}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white rounded-full w-8 h-8 text-sm flex items-center justify-center leading-none"
        >
          <BiPlus className="bg-[#008F88] text-white rounded-full" />
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
                type="button"
                title="Delete"
                onClick={() => handleDelete(index)}
                className=" flex items-center justify-center"
              >
                <MdDelete
                  size={20}
                  className="bg-[#F2F4F5] text-red-500 rounded-full"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListGroup;
