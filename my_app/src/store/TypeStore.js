const LOAD_TYPES = "LOAD_TYPES";
const SET_ACTIVE_TYPE = "SET_ACTIVE_TYPE";

const initialState = {
  types: [],
  activeType: {},
};

export const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TYPES: {
      return { ...state, types: action.payload };
    }
    case SET_ACTIVE_TYPE: {
      console.log(action.payload);
      return { ...state, activeType: action.payload };
    }
    default:
      return state;
  }
};

export const loadTypesAction = (payload) => {
  return {
    type: LOAD_TYPES,
    payload,
  };
};

export const setActiveType = (payload) => {
  return {
    type: SET_ACTIVE_TYPE,
    payload,
  };
};
