import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import { useDispatch, useSelector } from "react-redux";
import { loadTypes } from "../store/actions/typeAction";
import s from "./TypePopup.module.scss";
import { setActiveType } from "../store/TypeStore";
import { v4 } from "uuid";

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
        <div className={s.list}>
          {types.map((elem) => {
            return (
              <button typeid={elem.id} onClick={handlePickType} key={v4()}>
                {elem.name}
              </button>
            );
          })}
        </div>
      </Popup>
    </div>
  );
};

export default TypePopup;
