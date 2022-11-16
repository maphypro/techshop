import React, { useCallback, useEffect, useState } from "react";
import s from "./LeftFilters.module.scss";
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

function LeftFilters() {
  const brands = useSelector((state) => state.brandReducer.brands);
  const types = useSelector((state) => state.typeReducer.types);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBrands());
    dispatch(loadTypes());
  }, []);

  return (
    <div className={s.filters_wrapper}>
      <DropdownMenu name={"Тип устройств"} isActive={true}>
        <div>
          {types.map((elem) => (
            <Checkbox
              key={elem.id}
              name={elem.name}
              index={elem.id}
              items={types}
              itemType={itemType.TYPE}
              defaultActive={false}
            />
          ))}
        </div>
      </DropdownMenu>
      <DropdownMenu name={"Производитель"} isActive={true}>
        <div>
          {brands.map((elem) => (
            <Checkbox
              key={elem.id}
              name={elem.name}
              index={elem.id}
              items={brands}
              itemType={itemType.BRAND}
              defaultActive={false}
            />
          ))}
        </div>
      </DropdownMenu>
    </div>
  );
}

export default LeftFilters;
