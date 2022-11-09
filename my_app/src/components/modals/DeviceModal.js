import React, { useEffect, useId, useState } from "react";
import s from "./DeviceModal.module.scss";
import Modal from "../Modal";
import { addType, getTypes } from "../../http/typeApi";
import { useFormInput } from "../../hooks/useFormInput";
import { getBrands } from "../../http/brandApi";
import { addDevice } from "../../http/deviceApi";
import { v4 } from "uuid";

function DeviceModal({
  isActive,
  setActive,
  typesLoaded,
  types,
  brandsLoaded,
  brands,
}) {
  const [deviceType, setDeviceType] = useState("");
  const [deviceBrand, setDeviceBrand] = useState("");
  const devicePrice = useFormInput("", { isEmpty: true });
  const deviceName = useFormInput("", { isEmpty: true });
  const [deviceImg, setDeviceImg] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (typesLoaded && brandsLoaded) {
      setDeviceBrand(brands[0].id);
      setDeviceType(types[0].id);
    }
  }, [typesLoaded, brandsLoaded]);

  const handleAddDevice = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", deviceName.value);
    formData.append("price", `${devicePrice.value}`);
    formData.append("img", deviceImg);
    formData.append("brandId", deviceBrand);
    formData.append("typeId", deviceType);
    formData.append("info", JSON.stringify(info));
    console.log(deviceBrand, deviceType);
    await addDevice(formData);
  };

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", id: v4() }]);
  };

  const changeInfo = (key, value, id) => {
    setInfo(
      info.map((elem) => {
        if (elem.id === id) {
          return { ...elem, [key]: value };
        }
        return elem;
      })
    );
  };

  const removeInfo = (id) => {
    setInfo(info.filter((elem) => elem.id !== id));
  };

  return (
    <Modal isActive={isActive} setActive={setActive}>
      <div className={s.container}>
        <label>
          <p>Выберите тип устройства</p>
          <select
            //value={deviceType.id}
            onChange={(e) => setDeviceType(e.target.value)}
          >
            {typesLoaded ? (
              types.map((elem) => (
                <option value={elem.id} key={elem.id} on>
                  {elem.name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </label>
        <label>
          <p>Выберите бренд устройства</p>
          <select
            //value={deviceBrand.id}
            onChange={(e) => setDeviceBrand(e.target.value)}
          >
            {brandsLoaded ? (
              brands.map((elem) => (
                <option value={elem.id} key={elem.id}>
                  {elem.name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </label>
        <label>
          <p>Введите название товара</p>
          <input value={deviceName.value} onChange={deviceName.onChange} />
        </label>
        <label>
          <p>Введите цену товара</p>
          <input value={devicePrice.value} onChange={devicePrice.onChange} />
        </label>
        <label>
          <p>Выберите изображение товара</p>
          <input
            type={"file"}
            onChange={(e) => setDeviceImg(e.target.files[0])}
          />
        </label>
        <div className={s.info}>
          <p>Добавить информацию о товаре</p>
          {info.map((elem) => (
            <label>
              <input
                type="text"
                value={elem.title}
                onChange={(e) => changeInfo("title", e.target.value, elem.id)}
              />
              <input
                type="text"
                value={elem.description}
                onChange={(e) =>
                  changeInfo("description", e.target.value, elem.id)
                }
              />
              <button onClick={(e) => removeInfo(elem.id)}>-</button>
            </label>
          ))}
          <button onClick={addInfo}>+</button>
        </div>
        <input type="submit" value={"Подтвердить"} onClick={handleAddDevice} />
      </div>
    </Modal>
  );
}

export default DeviceModal;
