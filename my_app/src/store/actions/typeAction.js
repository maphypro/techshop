import { getTypes } from "../../http/typeApi";
import { loadTypesAction, setActiveType } from "../TypeStore";

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

export const setTypeActive = (next) => {
  return (dispatch) => {
    dispatch(setActiveType());
    //внутри этой функции должен диспатчиться экшн
  };
};
