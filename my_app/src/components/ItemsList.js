import React, { useEffect } from "react";
import s from "./ItemsList.module.scss";
import { v4 } from "uuid";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { loadDevices } from "../store/actions/deviceAction";
import { useFilters } from "../hooks/useFilters";

const ItemsList = () => {
  const devices = useSelector((state) => state.deviceReducer.devices);
  const dispatch = useDispatch();

  const items = [];

  const { typesId, brandsId, sortingField, sortingOrder, limit, page } =
    useFilters();

  useEffect(() => {
    dispatch(
      loadDevices({
        typesId,
        brandsId,
        sortingField,
        sortingOrder,
        limit,
        page,
      })
    );
  }, [typesId.length, brandsId.length, sortingField, sortingOrder, limit]);

  devices.forEach((item, index) => {
    items.push(
      <Item
        key={v4()}
        name={item.name}
        price={item.price}
        img={item.img}
        rating={item.rating}
        id={item.id}
      />
    );
  });

  return <div className={s.list_wrapper}>{items.map((elem) => elem)}</div>;
};

export default ItemsList;
