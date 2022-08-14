import React, {useState} from 'react';

import s from "./Login.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login} from "../http/userApi";
import {useDispatch} from "react-redux";
import {userIsAuth} from "../store/UserStore";


function Login(props) {

    //контролируемый ввод в поля формы
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState(false)

    //контролируемый ввод в поля формы
    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmitFrom = async (e) => {
        e.preventDefault();
        //отправить запрос

        try {
            let token = await login(inputs.email, inputs.password)
            dispatch(userIsAuth)
            navigate(SHOP_ROUTE)
            setError(false);
        } catch (e) {
            setError(true)
            alert(e.message)
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
                { error ? <div className={s.err}>Неправильный email или пароль!</div> : null }
                <div className={s.box}>
                    <input type="submit"
                           value={'Войти'}
                    />
                    <div>
                        Ещё не зарегистрированы? <Link to={REGISTRATION_ROUTE}>Зарегестрироваться</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;