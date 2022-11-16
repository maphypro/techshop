import React from "react";
import s from "./PaginationShowMore.module.scss";
import { useDispatch } from "react-redux";
import { shorMore } from "../store/DeviceStore";
const PaginationShowMore = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(shorMore());
  };

  return (
    <div className={s.wrapper} onClick={handleClick}>
      <div>Показать ещё</div>
    </div>
  );
};

export default PaginationShowMore;
