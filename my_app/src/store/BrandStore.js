const LOAD_BRANDS = "LOAD_BRANDS";
const SET_ACTIVE_BRAND = "SET_ACTIVE_BRAND";

const initialState = {
  brands: [],
  activeBrand: {},
};

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BRANDS: {
      return { ...state, brands: action.payload };
    }
    case SET_ACTIVE_BRAND: {
      return { ...state, activeBrand: action.payload };
    }
    default:
      return state;
  }
};

export const loadBrandsAction = (payload) => {
  return {
    type: LOAD_BRANDS,
    payload,
  };
};

export const setActiveBrand = (payload) => {
  return {
    type: SET_ACTIVE_BRAND,
    payload,
  };
};
