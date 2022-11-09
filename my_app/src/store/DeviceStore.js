const LOAD_DEVICES = "LOAD_DEVICES";
const LOAD_DEVICE_INFO = "LOAD_DEVICE_BY_ID";

const initialState = {
  devices: [],
  devicesInfo: [],
  page: 1,
  limit: 77,
};

export const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DEVICES: {
      //
      // console.log(state.devices);
      return { ...state, devices: action.payload };
    }
    case LOAD_DEVICE_INFO: {
      return { ...state, devicesInfo: [...state.devicesInfo, action.payload] };
    }
    default:
      return state;
  }
};

export const loadDevicesAction = (payload) => {
  return { type: LOAD_DEVICES, payload };
};

export const loadDeviceByIdAction = (payload) => {
  return { type: LOAD_DEVICE_INFO, payload };
};
