import { getTypes } from "../../http/typeApi";
import { loadTypesAction } from "../TypeStore";

export const loadTypes = (next) => {
  return (dispatch) => {
    getTypes()
      .then((res) => {
        return res;
      })
      .then((types) => {
        dispatch(loadTypesAction(types));
      });
  };
};
