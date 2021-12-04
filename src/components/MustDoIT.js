import React from "react";
import EnterYourMustDo from "./EnterYourMustDo";
import TodoList from "./TodoList";
import "./MustDoIt.css";

const MustDoIT = ({ value, mustdo, onChange, onCreate, key }) => {
  return (
    <div className="MustDoIt">
      <EnterYourMustDo
        value={value}
        onChange={onChange}
        onCreate={onCreate}
      ></EnterYourMustDo>
      <TodoList mustdo={mustdo} key={key}></TodoList>
    </div>
  );
};

export default MustDoIT;
