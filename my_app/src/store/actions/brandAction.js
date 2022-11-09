import { getBrands } from "../../http/brandApi";
import { loadBrandsAction } from "../BrandStore";

export const loadBrands = (next) => {
  return (dispatch) => {
    getBrands()
      .then((res) => {
        return res;
      })
      .then((brands) => {
        dispatch(loadBrandsAction(brands));
      });
  };
};
