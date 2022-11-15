import React from "react";
import s from "./SortBnt.module.scss";

const SortBtn = ({ name, index, isActive, handleClick }) => {
  return (
    <div
      className={isActive ? `${s.wrapper} ${s.active}` : s.wrapper}
      onClick={(event) => handleClick(event, index)}
      index={index}
    >
      <div className={s.name} index={index}>
        {name}
      </div>
    </div>
  );
};

export default SortBtn;
