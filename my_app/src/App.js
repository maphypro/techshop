import React, { useEffect } from "react";
import s from "./App.module.scss";
import ApplicationRouter from "./components/ApplicationRouter";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./http/userApi";
import { userIsAuth } from "./store/UserStore";
import Header from "./components/Header";
import { loadDevices } from "./store/actions/deviceAction";

function App() {
  const dispatch = useDispatch();

  let obj = useSelector((state) => {
    return {
      typeId:
        "id" in state.typeReducer.activeType
          ? state.typeReducer.activeType.id
          : null,
      brandId:
        "id" in state.brandReducer.activeBrand
          ? state.brandReducer.activeBrand.id
          : null,
      limit: state.deviceReducer.limit,
      page: state.deviceReducer.page,
    };
  });

  useEffect(() => {
    dispatch(loadDevices(obj));
  }, []);

  useEffect(() => {
    checkAuth().then(() => {
      dispatch(userIsAuth);
    });
  }, []);

  return (
    <div className={s.app}>
      <Header />
      <ApplicationRouter />
    </div>
  );
}

export default App;
