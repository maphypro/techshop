import React, { useCallback, useEffect, useState } from "react";
import s from "./Filters.module.scss";
import { setActiveType } from "../store/TypeStore";
import { setActiveBrand } from "../store/BrandStore";
import { useDispatch, useSelector } from "react-redux";
import DropdownMenu from "./DropdownMenu";
import Checkbox from "./Checkbox";
import { loadBrands } from "../store/actions/brandAction";
import { loadTypes, setTypeActive } from "../store/actions/typeAction";

export const itemType = {
  TYPE: "TYPE",
  BRAND: "BRAND",
};

function Filters() {
  const brands = useSelector((state) => state.brandReducer.brands);
  const types = useSelector((state) => state.typeReducer.types);

  const dispatch = useDispatch();
  //dispatch(setActiveType(types.find((elem) => elem.name === "Смартфон")));

  useEffect(() => {
    dispatch(loadBrands());
    dispatch(loadTypes());
  }, []);

  return (
    <div className={s.filters_wrapper}>
      <DropdownMenu name={"Тип устройств"}>
        <div>
          {types.map((elem) => (
            <Checkbox
              key={elem.id}
              name={elem.name}
              index={elem.id}
              items={types}
              itemType={itemType.TYPE}
              defaultActive={elem.name === "Смартфон"}
            />
          ))}
        </div>
      </DropdownMenu>
      <DropdownMenu name={"Производитель"}>
        <div>
          {brands.map((elem) => (
            <Checkbox
              key={elem.id}
              name={elem.name}
              index={elem.id}
              items={brands}
              itemType={itemType.BRAND}
              defaultActive={true}
            />
          ))}
        </div>
      </DropdownMenu>
    </div>
  );
}

export default Filters;
