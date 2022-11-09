import React from "react";
import s from "./Filters.module.scss";
import BrandPopup from "./BrandPopup/BrandPopup";
import TypePopup from "./TypePopup/TypePopup";
import { setActiveType } from "../store/TypeStore";
import { setActiveBrand } from "../store/BrandStore";
import { useDispatch } from "react-redux";
import DropdownMenu from "./DropdownMenu";

function Filters() {
  const dispatch = useDispatch();

  return (
    <div className={s.filters_wrapper}>
      <DropdownMenu name={"Цена"}>
        <div>
          <div className={s.test}>1</div>
          <div className={s.test}>2</div>
          <div className={s.test}>3</div>
        </div>
      </DropdownMenu>
      <DropdownMenu name={"Производитель"}>
        <div>
          <div className={s.test}>А</div>
          <div className={s.test}>Б</div>
          <div className={s.test}>В</div>
        </div>
      </DropdownMenu>
      {
        //<TypePopup />
        //<BrandPopup />
        /*
        <button
          onClick={() => {
            dispatch(setActiveType({}));
            dispatch(setActiveBrand({}));
          }}
        >
          Сбросить фильтры
        </button>*/
      }
    </div>
  );
}

export default Filters;
