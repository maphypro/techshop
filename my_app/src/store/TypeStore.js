const LOAD_TYPES = "LOAD_TYPES";
const SET_ACTIVE_TYPE = "SET_ACTIVE_TYPES";
const DISCARD_TYPE = "DISCARD_TYPE";

const initialState = {
  types: [],
  activeTypes: [],
};

export const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TYPES: {
      //console.log("Load Types");
      return { ...state, types: action.payload };
    }
    case SET_ACTIVE_TYPE: {
      return { ...state, activeTypes: [...state.activeTypes, action.payload] };
    }
    case DISCARD_TYPE: {
      return {
        ...state,
        activeTypes: state.activeTypes.filter(
          (value, index) => value.id !== action.payload.id
        ),
      };
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
  //console.log(payload);
  return {
    type: SET_ACTIVE_TYPE,
    payload,
  };
};

export const discardType = (payload) => {
  return {
    type: DISCARD_TYPE,
    payload,
  };
};
