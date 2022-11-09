import React, { useState } from "react";
import s from "./Registration.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi";
import { userIsAuth } from "../store/UserStore";
import { useFormInput } from "../hooks/useFormInput";

function Registration() {
  const email = useFormInput("", { isEmail: true, isEmpty: true });
  const password = useFormInput("", { isEmpty: true, minLength: 5 });
  const confirmedPassword = useFormInput("", { isEmpty: true, minLength: 5 });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmitFrom = async (e) => {
    e.preventDefault();

    try {
      let token = await registration(email.value, password.value);
      navigate(LOGIN_ROUTE);
      setError(false);
    } catch (e) {
      console.log(e.message);
      setError(true);
    }
  };

  return (
    <div className={s.container}>
      <h1>Регистрация</h1>
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
        {password.value !== confirmedPassword.value &&
        confirmedPassword.isDirty ? (
          <div>Пароли не совпадают</div>
        ) : null}
        <label className={s.group}>
          <p className={s.inputName}>Confirm password:</p>
          <input
            type="text"
            name="confirmedPassword"
            value={confirmedPassword.value}
            onChange={confirmedPassword.onChange}
            onBlur={confirmedPassword.onBlur}
          />
        </label>
        {error ? (
          <div className={s.err}>Пользователь с таким email уже существует</div>
        ) : null}
        <div className={s.box}>
          <input type="submit" value={"Подтвердить"} />
          <div>
            Уже зарегистрированы? <Link to={LOGIN_ROUTE}>Войти</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
