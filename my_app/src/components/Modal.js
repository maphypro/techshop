import React from "react";
import s from "./Modal.module.scss";
import { Scrollbars } from "react-custom-scrollbars-2";

function Modal({ isActive, setActive, children }) {
  return (
    <div
      className={isActive ? `${s.wrapper} + ' ' + ${s.active}` : s.wrapper}
      onClick={() => {
        setActive(false);
      }}
    >
      <Scrollbars
        className={s.content}
        onClick={(e) => e.stopPropagation()}
        autoHeight={true}
        autoHeightMax={"80vh"}
        autoHide={true}
      >
        {children}
      </Scrollbars>
    </div>
  );
}

export default Modal;
