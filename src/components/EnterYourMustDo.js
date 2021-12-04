import React from "react";
import "./EnterYourMustDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EnterYourMustDo = ({ value, onChange, onCreate }) => {
  return (
    <div className="EnterYourMustDo">
      <form action="" className="EnterYourMustDo_form">
        <input
          type="text"
          placeholder="   Enter Your Must Do"
          className="EnterYourMustDo_input"
          value={value}
          onChange={onChange}
        ></input>
      </form>
      <button className="EnterYourMustDo_button" onClick={onCreate}>
        <FontAwesomeIcon icon={faPen} className="faPen" />
      </button>
    </div>
  );
};

export default EnterYourMustDo;
