"use client";

import { useState } from "react";

export const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addJob = () => {
    if (!inputValue.trim()) return;

    const newJob = {
      title: inputValue,
      isDone: false,
    };
    setToDoList((toDoList) => [...toDoList, newJob]);
    setInputValue("");
  };

  const deleteJob = (indexToDelete) => {
    setToDoList((toDoList) =>
      toDoList.filter((_, index) => index !== indexToDelete),
    );
  };

  return (
    <div className="bg-white rounded-xl">
      <div className="p-5">
        <h1 className="text-black font-bold text-[30px]">✅ToDo List</h1>

        <h2 className="text-gray-400 font-bold">{toDoList.length} Work</h2>
      </div>

      <div className="flex justify-around p-10">
        <input
          className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border rounded-md px-3 py-2 border-slate-400 hover:border-slate-300 shadow-sm"
          placeholder="Type here..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
        />
        <button
          onClick={addJob}
          className="rounded-xl bg-gray-400 flex justify-center items-center px-4"
        >
          Submit
        </button>
      </div>

      <div className="p-5 flex flex-col gap-2">
        {toDoList.map((toDo, index) => (
          <div
            key={index}
            className="flex p-3 text-black bg-gray-200 rounded-xl justify-between"
          >
            <span>{toDo.title}</span>
            <button onClick={() => deleteJob(index)}>🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
};
