import { $authHost, $host } from "./index";

export const addBrand = async (brandName) => {
  const res = await $authHost.post("api/brand", { name: brandName });
  return res;
};

export const getBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};
