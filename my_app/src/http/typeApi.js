import { $authHost, $host } from "./index";

export const addType = async (typeName) => {
  const res = await $authHost.post("api/type", { name: typeName });
  return res;
};

export const getTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};
