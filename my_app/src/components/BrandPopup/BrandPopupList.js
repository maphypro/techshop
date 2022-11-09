import s from "./BrandPopup.module.scss";
import { v4 } from "uuid";
import { memo } from "react";

const BrandPopupList = ({ brands, handlePickBrand }) => {
  return (
    <div className={s.list}>
      {brands.map((elem) => {
        return (
          <button brandid={elem.id} onClick={handlePickBrand} key={v4()}>
            {elem.name}
          </button>
        );
      })}
    </div>
  );
};

export default memo(BrandPopupList);
