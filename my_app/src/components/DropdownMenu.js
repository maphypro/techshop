import React, { useState } from "react";
import s from "./DropdownMenu.module.scss";
import arrow from "../assets/arrow.svg";

const DropdownMenu = ({ name, isActive, children }) => {
  const [active, setActive] = useState(isActive);

  return (
    <div className={s.wrapper}>
      <div className={s.head_wrapper} onClick={(e) => setActive(!active)}>
        <div className={s.head}>
          <img
            src={arrow}
            className={active ? s.arrow_active : s.arrow}
            alt={"arr"}
          />
          <div className={s.name}>{name}</div>
        </div>
      </div>
      <div
        className={
          active ? s.content_wrapper + s.content_active : s.content_wrapper
        }
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownMenu;
