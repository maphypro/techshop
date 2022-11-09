import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Shop.module.scss";
import ItemsList from "../components/ItemsList";
import Filters from "../components/Filters";

const Shop = () => {
  return (
    <div className={s.shop}>
      <div className={s.container}>
        <Filters />
        <ItemsList />
      </div>
    </div>
  );
};

export default Shop;
