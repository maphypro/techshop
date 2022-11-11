import React, { useState } from "react";
import s from "./Checkbox.module.scss";
import { discardType, setActiveType } from "../store/TypeStore";
import { itemType as TYPES_OF_ITEMS } from "./Filters";
import { discardBrand, setActiveBrand } from "../store/BrandStore";
import { useDispatch } from "react-redux";

function Checkbox({ name, index, items, itemType, defaultActive }) {
  const [isActive, setActive] = useState(defaultActive);
  const dispatch = useDispatch();

  const handlePickItem = (e) => {
    const pickedItem = items.find((elem) => {
      return elem.id === +e.target.getAttribute("iidx");
    });
    setActive((value) => !value);

    switch (itemType) {
      case TYPES_OF_ITEMS.TYPE: {
        if (!isActive) {
          console.log("dispatch add type");
          dispatch(setActiveType(pickedItem));
        } else {
          console.log("dispatch remove type");
          dispatch(discardType(pickedItem));
        }
        break;
      }
      case TYPES_OF_ITEMS.BRAND: {
        if (!isActive) {
          console.log("dispatch add brand");
          dispatch(setActiveBrand(pickedItem));
        } else {
          console.log("dispatch remove brand");
          dispatch(discardBrand(pickedItem));
        }
        break;
      }
    }
  };

  return (
    <div className={s.checkbox_wrapper} iidx={index} onClick={handlePickItem}>
      <div className={s.box} iidx={index}>
        {isActive ? <div className={s.mark} iidx={index}></div> : null}
      </div>
      <div className={s.name} iidx={index}>
        {name}
      </div>
    </div>
  );
}

export default Checkbox;
