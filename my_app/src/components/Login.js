import React, { useState } from "react";

import s from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login } from "../http/userApi";
import { useDispatch } from "react-redux";
import { userIsAuth } from "../store/UserStore";
import { useFormInput } from "../hooks/useFormInput";
import device from "../pages/Device";

function Login(props) {
  const email = useFormInput("", { isEmail: true, isEmpty: true });
  const password = useFormInput("", { isEmpty: true, minLength: 1 });

  const [serverError, setServerError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitFrom = async (e) => {
    e.preventDefault();
    //отправить запрос

    try {
      let token = await login(email.value, password.value);
      dispatch(userIsAuth);
      navigate(SHOP_ROUTE);
      setServerError(false);
    } catch (e) {
      setServerError(true);
    }
  };

  return (
    <div className={s.container}>
      <h1>Войти</h1>
      <form className={s.form} onSubmit={handleSubmitFrom}>
        {email.isDirty && !email.isInputValid ? (
          <div>Некорректный email</div>
        ) : null}
        <label className={s.group}>
          <p className={s.inputName}>E-mail:</p>
          <input
            type="text"
            name="email"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
          />
        </label>
        {password.isDirty && !password.isInputValid ? (
          <div>Некорректный пароль</div>
        ) : null}
        <label className={s.group}>
          <p className={s.inputName}>Password:</p>
          <input
            type="text"
            name="password"
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
          />
        </label>
        {serverError ? (
          <div className={s.err}>Неправильный email или пароль!</div>
        ) : null}
        <div className={s.box}>
          <input
            type="submit"
            value={"Войти"}
            disabled={!password.isInputValid && !email.isInputValid}
          />
          <div>
            Ещё не зарегистрированы?
            <Link to={REGISTRATION_ROUTE}>Зарегестрироваться</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
