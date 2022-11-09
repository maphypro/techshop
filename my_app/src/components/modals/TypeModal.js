import React, { useState } from "react";
import Modal from "../Modal";
import { addType } from "../../http/typeApi";
import { useFormInput } from "../../hooks/useFormInput";
import { useDispatch } from "react-redux";
import { loadTypes } from "../../store/actions/typeAction";
import s from "./BrandAndTypeModal.module.scss";

function TypeModal({ isActive, setActive }) {
  const typeName = useFormInput("", { isEmpty: true });
  const dispatch = useDispatch();

  const handleAddType = async (e) => {
    e.preventDefault();
    addType(typeName.value).then(dispatch(loadTypes()));
  };

  return (
    <Modal isActive={isActive} setActive={setActive}>
      <form onSubmit={handleAddType} className={s.container}>
        <label>
          <p>Введите название типа</p>
          <input
            type="text"
            value={typeName.value}
            onChange={typeName.onChange}
            onBlur={typeName.onBlur}
          />
        </label>
        <input type="submit" value={"Подтвердить"} />
      </form>
    </Modal>
  );
}

export default TypeModal;
