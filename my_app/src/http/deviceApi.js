import { $authHost, $host } from "./index";

export const addDevice = async (device) => {
  const { data } = $authHost.post("api/device", device);
  return data;
};

export const getOneDevice = async (id) => {
  const device = $host.get(`api/device/${id}`);
  return device;
};

export const getAllDevices = async (
  brandsId,
  typesId,
  sortingField,
  sortingOrder,
  limit,
  page
) => {
  const device = $host.get(`api/device/`, {
    params: {
      brandsId: brandsId,
      typesId: typesId,
      sortingField: sortingField,
      sortingOrder: sortingOrder,
      limit: limit,
      page: page,
    },
  });
  //console.log(device);
  return device;
};
