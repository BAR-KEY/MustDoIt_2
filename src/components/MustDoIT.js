import React from "react";
import EnterYourMustDo from "./EnterYourMustDo";
import TodoList from "./TodoList";
import "./MustDoIt.css";

const MustDoIT = ({ input, mustdo, onChange }) => {
  return (
    <div className="MustDoIt">
      <EnterYourMustDo input={input} onChange={onChange}></EnterYourMustDo>
      <TodoList mustdo={mustdo}></TodoList>
    </div>
  );
};

export default MustDoIT;
