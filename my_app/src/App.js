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
      typesId:
        state.typeReducer.activeTypes.length !== 0
          ? state.typeReducer.activeTypes.id
          : [],
      brandsId:
        state.brandReducer.activeBrands.length !== 0
          ? state.brandReducer.activeBrands.id
          : [],
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
