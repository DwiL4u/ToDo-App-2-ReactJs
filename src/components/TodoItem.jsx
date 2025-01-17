import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItem = ({ text, id, isComplete, deleteTodo, toggleComplete }) => {
  return (
    <div className="flex item-center my-3 gap-2">
      <div
        onClick={() => {
          toggleComplete(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img className="w-7" src={isComplete ? tick : not_tick} alt="" />
        <p
          className={`text-slate-700 ml-4 text-[20px] decoration-red-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt=""
        className="w-4 h-5 cursor-pointer hover:bg-gray-200 rounded-md"
      />
    </div>
  );
};

export default TodoItem;
