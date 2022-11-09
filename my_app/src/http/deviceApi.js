import { $authHost, $host } from "./index";

export const addDevice = async (device) => {
  const { data } = $authHost.post("api/device", device);
  return data;
};

export const getOneDevice = async (id) => {
  const device = $host.get(`api/device/${id}`);
  return device;
};

export const getAllDevices = async (brandId, typeId, limit, page) => {
  //console.log(brandId, typeId, limit, page);

  const device = $host.get(`api/device/`, {
    params: {
      brandId: brandId,
      typeId: typeId,
      limit: limit,
      page: page,
    },
  });
  //console.log(device);
  return device;
};
