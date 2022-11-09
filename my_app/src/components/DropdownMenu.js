import React, { useState } from "react";
import s from "./DropdownMenu.module.scss";
import arrow from "../assets/arrow.svg";

const DropdownMenu = ({ name, children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={s.wrapper}>
      <div className={s.head_wrapper} onClick={(e) => setActive(!active)}>
        <div className={s.head}>
          <img src={arrow} className={s.arrow} alt={"arr"} />
          <div className={s.name}>{name}</div>
        </div>
      </div>
      <div
        className={active ? s.content_wrapper + s.active : s.content_wrapper}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownMenu;
