"use client";

import { useState } from "react";

export const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const addJob = () => {
    if (!inputValue.trim()) return;

    const newJob = {
      id: Date.now(),
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

  const changeSelectedCategory = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const changeJobStatus = (index, status) => {
    const result = toDoList.map((todo, i) => {
      if (index === i) {
        const newJob = { title: todo.title, isDone: status };
        return newJob;
      } else {
        return todo;
      }
    });
    setToDoList(result);
  };

  const filteredList = toDoList.filter((job) => {
    if (selectedCategory === "DONE") return job.isDone === true;
    if (selectedCategory === "PENDING") return job.isDone === false;
    if (selectedCategory === "ALL") return true;
  });

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="bg-cyan-600 to-indigo-600 p-6 text-white">
        <h1 className="font-extrabold text-2xl tracking-tight flex items-center gap-2">
          <span>✅</span> ToDo List
        </h1>
        <h2 className="text-blue-100 text-sm font-medium mt-1">
          {toDoList.length} {toDoList.length === 1 ? "Task" : "Tasks"} Total
        </h2>
      </div>

      <div className="p-6 pb-4">
        <div className="flex gap-2">
          <input
            className="flex bg-slate-50 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-200 rounded-xl px-4 py-2.5 "
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
          />
          <button
            onClick={addJob}
            className="rounded-xl bg-blue-600 hover:bg-blue-700  text-white font-semibold text-sm px-5 py-2.5 shadow-sm  cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="px-6 pb-2">
        <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1.5 rounded-xl text-xs font-semibold">
          <button
            onClick={() => {
              changeSelectedCategory("ALL");
            }}
            className={`py-2 rounded-lg transition-all cursor-pointer ${
              selectedCategory === "ALL"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => {
              changeSelectedCategory("DONE");
            }}
            className={`py-2 rounded-lg transition-all cursor-pointer ${
              selectedCategory === "DONE"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            DONE
          </button>
          <button
            onClick={() => {
              changeSelectedCategory("PENDING");
            }}
            className={`py-2 rounded-lg transition-all cursor-pointer ${
              selectedCategory === "PENDING"
                ? "text-blue-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            PENDING
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="p-6 pt-3 flex flex-col gap-2.5 max-h-96 overflow-y-auto">
        {toDoList.length > 0 &&
          filteredList.map((toDo, index) => (
            <div
              key={index}
              className="group flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 rounded-xl transition-all"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <input
                  type="checkbox"
                  checked={toDo.isDone}
                  onChange={(event) => {
                    changeJobStatus(index, event.target.checked);
                  }}
                  className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                />
                <span
                  className={`text-sm font-medium truncate transition-all ${
                    toDo.isDone
                      ? "line-through text-slate-400"
                      : "text-slate-700"
                  }`}
                >
                  {toDo.title}
                </span>
              </div>
              <button
                onClick={() => deleteJob(index)}
                className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors cursor-pointer"
                title="Delete task"
              >
                🗑️
              </button>
            </div>
          ))}

        {filteredList.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-xl py-8 px-4 bg-slate-50 border border-dashed border-slate-200 text-slate-400 text-sm">
            No work in this section
          </div>
        )}
      </div>
    </div>
  );
};
