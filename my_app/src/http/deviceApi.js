import { $authHost, $host } from "./index";

export const addDevice = async (device) => {
  const { data } = $authHost.post("api/device", device);
  return data;
};

export const getOneDevice = async (id) => {
  const device = $host.get(`api/device/${id}`);
  return device;
};

export const getAllDevices = async (brandsId, typesId, limit, page) => {
  //console.log(brandId, typeId, limit, page);
  //console.log(brandsId, typesId);
  const device = $host.get(`api/device/`, {
    params: {
      brandsId: brandsId,
      typesId: typesId,
      limit: limit,
      page: page,
    },
  });
  //console.log(device);
  return device;
};
