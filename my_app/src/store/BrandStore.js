const LOAD_BRANDS = "LOAD_BRANDS";
const SET_ACTIVE_BRAND = "SET_ACTIVE_BRAND";
const DISCARD_BRAND = "DISCARD_BRAND";

const initialState = {
  brands: [],
  activeBrands: [],
};

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BRANDS: {
      return { ...state, brands: action.payload };
    }
    case SET_ACTIVE_BRAND: {
      return {
        ...state,
        activeBrands: [...state.activeBrands, action.payload],
      };
    }
    case DISCARD_BRAND: {
      console.log(action.payload);
      return {
        ...state,
        activeBrands: state.activeBrands.filter(
          (value, index) => value.id !== action.payload.id
        ),
      };
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

export const discardBrand = (payload) => {
  return {
    type: DISCARD_BRAND,
    payload,
  };
};
