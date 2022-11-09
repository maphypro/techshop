import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import { useDispatch, useSelector } from "react-redux";
import { loadTypes } from "../../store/actions/typeAction";
import s from "./TypePopup.module.scss";
import { setActiveType } from "../../store/TypeStore";
import { v4 } from "uuid";
import TypePopupList from "./TypePopupList";

const TypePopup = () => {
  const types = useSelector((state) => state.typeReducer.types);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTypes());
  }, []);

  const handlePickType = (event) => {
    const activeType = types.find((elem) => {
      return elem.id === +event.target.getAttribute("typeid");
    });
    dispatch(setActiveType(activeType));
  };

  return (
    <div className={s.popup}>
      <Popup
        trigger={
          <button type="button" className={s.trigger}>
            Выберите тип устройств
          </button>
        }
      >
        <TypePopupList types={types} handlePickType={handlePickType} />
      </Popup>
    </div>
  );
};

export default TypePopup;
