import React, { useEffect } from "react";
import s from "./App.module.scss";
import ApplicationRouter from "./components/ApplicationRouter";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./http/userApi";
import { userIsAuth } from "./store/UserStore";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

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
