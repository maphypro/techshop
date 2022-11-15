import React, { useState } from "react";
import s from "./TopFilters.module.scss";
import SortBtn from "./SortBtn";
import { sortDevice } from "../store/DeviceStore";
import { useDispatch } from "react-redux";

const TopFilters = () => {
  const [activeButtons, setActiveButtons] = useState([
    { isActive: true, name: "Сначала дешевые", field: "price", order: "ASC" },
    { isActive: false, name: "Сначала дорогие", field: "price", order: "DESC" },
  ]);

  const dispatch = useDispatch();

  const handleClick = (event, idx) => {
    const nextActiveButtons = [...activeButtons];
    const activeButton = nextActiveButtons.find((elem) => elem.isActive);
    activeButton.isActive = false;
    const newActiveButton = nextActiveButtons.find(
      (elem, index) => index === +event.target.getAttribute("index")
    );
    newActiveButton.isActive = true;
    setActiveButtons(nextActiveButtons);
    dispatch(
      sortDevice({
        sortingField: newActiveButton.field,
        sortingOrder: newActiveButton.order,
      })
    );
  };

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Сортировка: </div>
      {activeButtons.map((elem, index) => (
        <SortBtn
          name={elem.name}
          field={elem.field}
          order={elem.order}
          index={index}
          isActive={elem.isActive}
          handleClick={handleClick}
          key={index}
        />
      ))}
    </div>
  );
};

export default TopFilters;
