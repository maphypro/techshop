import React, { useEffect, useState } from "react";
import s from "./Item.module.scss";

const Item = ({ name, price, rating, img, id }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    //console.log(img);
  }, [img]);

  return (
    <div className={s.item_wrapper}>
      <div className={s.item}>
        <div className={s.img_wrapper}>
          <img
            src={`http://localhost:7000/${img}`}
            alt="Image"
            className={s.img}
          />
        </div>
        <div
          className={s.name_wrapper}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        >
          {tooltipVisible ? (
            <div className={s.tooltip}>{name}</div>
          ) : (
            <div className={s.name}>{name}</div>
          )}
        </div>
        <div className={s.price}>{price}</div>
      </div>
    </div>
  );
};

export default Item;
