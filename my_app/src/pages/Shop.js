import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Shop.module.scss";
import ItemsList from "../components/ItemsList";
import LeftFilters from "../components/LeftFilters";
import TopFilters from "../components/TopFilters";

const Shop = () => {
  return (
    <div className={s.shop}>
      <div className={s.container}>
        <LeftFilters />
        <div className={s.topFiltersAndItemsListWrapper}>
          <TopFilters />
          <ItemsList />
        </div>
      </div>
    </div>
  );
};

export default Shop;
