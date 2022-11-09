import React, { useEffect, useState } from "react";
import s from "./Admin.module.scss";
import { getBrands } from "../http/brandApi";
import { getTypes } from "../http/typeApi";
import TypeModal from "../components/modals/TypeModal";
import BrandModal from "../components/modals/BrandModal";
import DeviceModal from "../components/modals/DeviceModal";

const Admin = () => {
  const [typeActive, setTypeActive] = useState(false);
  const [brandActive, setBrandActive] = useState(false);
  const [deviceActive, setDeviceActive] = useState(false);
  const [typesLoaded, setTypesLoaded] = useState(false);
  const [types, setTypes] = useState([]);
  const [brandsLoaded, setBrandsLoaded] = useState(false);
  const [brands, setBrands] = useState([]);

  const onTypeSelect = () => {
    getTypes().then((data) => {
      setTypesLoaded(true);
      setTypes(data);
    });
  };

  const onBrandSelect = () => {
    getBrands().then((data) => {
      setBrandsLoaded(true);
      setBrands(data);
    });
  };

  return (
    <div className={s.wrapper}>
      <form className={s.content}>
        <input
          className={s.input}
          type="button"
          value={"Добавить тип"}
          onClick={() => setTypeActive(true)}
        />
        <input
          className={s.input}
          type="button"
          value={"Добавить бренд"}
          onClick={() => setBrandActive(true)}
        />
        <input
          className={s.input}
          type="button"
          value={"Добавить устройство"}
          onClick={() => {
            onTypeSelect();
            onBrandSelect();
            setDeviceActive(true);
          }}
        />
      </form>
      <TypeModal isActive={typeActive} setActive={setTypeActive} />
      <BrandModal isActive={brandActive} setActive={setBrandActive} />
      <DeviceModal
        isActive={deviceActive}
        setActive={setDeviceActive}
        typesLoaded={typesLoaded}
        types={types}
        brandsLoaded={brandsLoaded}
        brands={brands}
      />
    </div>
  );
};

export default Admin;
