import s from "./TypePopup.module.scss";
import { v4 } from "uuid";
import { memo } from "react";

const TypePopupList = ({ types, handlePickType }) => {
  return (
    <div className={s.list}>
      {types.map((elem) => {
        return (
          <button typeid={elem.id} onClick={handlePickType} key={v4()}>
            {elem.name}
          </button>
        );
      })}
    </div>
  );
};

export default memo(TypePopupList);
