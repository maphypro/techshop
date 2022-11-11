import { getAllDevices, getOneDevice } from "../../http/deviceApi";
import { loadDevicesAction } from "../DeviceStore";

export const loadDevices = ({ brandsId, typesId, limit, page }) => {
  return (dispatch) => {
    getAllDevices(brandsId, typesId, limit, page)
      .then((res) => {
        return res.data.rows;
      })
      .then((devices) => {
        dispatch(loadDevicesAction(devices));
      });
  };
};

export const loadDeviceInfo = (id) => {
  return (dispatch) => {
    getOneDevice(id).then((res) => console.log(res));
  };
};
