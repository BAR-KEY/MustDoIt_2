import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="TodoList">
      <div className="TodoList_title">Must Do</div>
      <div className="TodoList_items">
        <TodoListItem mustdo={props.mustdo}></TodoListItem>
      </div>
    </div>
  );
};

export default TodoList;
