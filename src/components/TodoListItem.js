import React from "react";

const TodoListItem = ({ mustdo }) => {
  const mustDoList = mustdo.map((mustdo) => <p>{mustdo.text}</p>);
  return (
    <div className="TodoList_item">
      <hr />
      <p>{mustDoList}</p>
    </div>
  );
};

export default TodoListItem;
