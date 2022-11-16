const LOAD_DEVICES = "LOAD_DEVICES";
const LOAD_DEVICE_INFO = "LOAD_DEVICE_BY_ID";
const SET_ACTIVE_SORT = "SET_ACTIVE_SORT";
const SHOW_MORE = "SHOW_MORE";

const initialState = {
  devices: [],
  devicesInfo: [],
  page: 1,
  defaultLimit: 3,
  limit: 3,
  sortingField: "price",
  sortingOrder: "ASC",
};

export const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DEVICES: {
      return { ...state, devices: action.payload };
    }
    case LOAD_DEVICE_INFO: {
      return { ...state, devicesInfo: [...state.devicesInfo, action.payload] };
    }
    case SET_ACTIVE_SORT: {
      return {
        ...state,
        sortingField: action.payload.sortingField,
        sortingOrder: action.payload.sortingOrder,
      };
    }
    case SHOW_MORE: {
      return {
        ...state,
        limit: state.limit + state.defaultLimit,
      };
    }
    default:
      return state;
  }
};

export const loadDevicesAction = (payload) => {
  return { type: LOAD_DEVICES, payload };
};

export const sortDevice = (payload) => {
  return { type: SET_ACTIVE_SORT, payload };
};

export const shorMore = () => {
  return { type: SHOW_MORE };
};
