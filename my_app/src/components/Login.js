import React, {useState} from 'react';

import s from "./Registration.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login} from "../http/userApi";
import {useDispatch} from "react-redux";
import {userIsAuth} from "../store/UserStore";


function Login(props) {

    //контролируемый ввод в поля формы
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    //контролируемый ввод в поля формы
    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmitFrom = (e) => {
        e.preventDefault();
        //отправить запрос
        const token = login(inputs.email, inputs.password)
        //редиректнуть на страницу авторизации
        if (token) {
            dispatch(userIsAuth)
            navigate(SHOP_ROUTE)
        }
        else {
            navigate(LOGIN_ROUTE)
        }
    }

    return (
        <div className={s.container}>
            <h1>Войти</h1>
            <form className={s.form} onSubmit={handleSubmitFrom}>
                <label className={s.group}>
                    <p className={s.inputName}>E-mail:</p>
                    <input
                        type="text"
                        name="email"
                        value={inputs.email}
                        onChange={handleInputChange}/>
                </label>
                <label className={s.group}>
                    <p className={s.inputName}>Password:</p>
                    <input type="text"
                           name="password"
                           value={inputs.password}
                           onChange={handleInputChange}/>
                </label>
                <div className={s.box}>
                    <input type="submit"
                           value={'Войти'}
                    />
                    <div>
                        Ещё не зарегистрированы? <Link to={LOGIN_ROUTE}>Зарегестрироваться</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;