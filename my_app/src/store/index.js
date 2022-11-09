import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./UserStore";
import { deviceReducer } from "./DeviceStore";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { typeReducer } from "./TypeStore";
import { brandReducer } from "./BrandStore";

const rootReducer = combineReducers({
  userReducer,
  deviceReducer,
  typeReducer,
  brandReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
