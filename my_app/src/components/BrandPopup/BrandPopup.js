import React, { useCallback, useEffect } from "react";
import Popup from "reactjs-popup";
import { useDispatch, useSelector } from "react-redux";
import s from "./BrandPopup.module.scss";
import { loadBrands } from "../../store/actions/brandAction";
import { setActiveBrand } from "../../store/BrandStore";
import { v4 } from "uuid";
import BrandPopupList from "./BrandPopupList";

const BrandPopup = () => {
  const brands = useSelector((state) => state.brandReducer.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBrands());
  }, []);

  const handlePickBrand = useCallback(
    (event) => {
      const activeBrand = brands.find((elem) => {
        return elem.id === +event.target.getAttribute("brandid");
      });
      dispatch(setActiveBrand(activeBrand));
    },
    [brands]
  );

  return (
    <div className={s.popup}>
      <Popup
        trigger={
          <button type="button" className={s.trigger}>
            Выберите бренд устройств
          </button>
        }
      >
        <BrandPopupList brands={brands} handlePickBrand={handlePickBrand} />
      </Popup>
    </div>
  );
};

export default BrandPopup;
