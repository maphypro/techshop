import React, { useState } from "react";
import Modal from "../Modal";
import { addBrand } from "../../http/brandApi";
import { useFormInput } from "../../hooks/useFormInput";
import { useDispatch } from "react-redux";
import { loadBrands } from "../../store/actions/brandAction";
import s from "./BrandAndTypeModal.module.scss";

function TypeModal({ isActive, setActive }) {
  const brandName = useFormInput("", { isEmpty: true });
  const dispatch = useDispatch();

  const handleAddBrand = async (e) => {
    e.preventDefault();
    addBrand(brandName.value).then(dispatch(loadBrands()));
  };

  return (
    <Modal isActive={isActive} setActive={setActive}>
      <form onSubmit={handleAddBrand} className={s.container}>
        <label>
          <p>Введите название типа</p>
          <input
            type="text"
            value={brandName.value}
            onChange={brandName.onChange}
            onBlur={brandName.onBlur}
          />
        </label>
        <input type="submit" value={"Подтвердить"} />
      </form>
    </Modal>
  );
}

export default TypeModal;
