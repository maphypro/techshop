import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import { useDispatch, useSelector } from "react-redux";
import s from "./BrandPopup.module.scss";
import { loadBrands } from "../store/actions/brandAction";
import { setActiveBrand } from "../store/BrandStore";
import { v4 } from "uuid";

const BrandPopup = () => {
  const brands = useSelector((state) => state.brandReducer.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBrands());
  }, []);

  const handlePickBrand = (event) => {
    const activeBrand = brands.find((elem) => {
      return elem.id === +event.target.getAttribute("brandid");
    });
    dispatch(setActiveBrand(activeBrand));
  };

  return (
    <div className={s.popup}>
      <Popup
        trigger={
          <button type="button" className={s.trigger}>
            Выберите бренд устройств
          </button>
        }
      >
        <div className={s.list}>
          {brands.map((elem) => {
            return (
              <button brandid={elem.id} onClick={handlePickBrand} key={v4()}>
                {elem.name}
              </button>
            );
          })}
        </div>
      </Popup>
    </div>
  );
};

export default BrandPopup;
