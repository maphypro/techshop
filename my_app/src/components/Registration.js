import React, {useState} from 'react';
import s from './Registration.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {registration} from "../http/userApi";


function Registration() {

    //контролируемый ввод в поля формы
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmedPassword: ''
    })

    //контролируемый ввод в поля формы
    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();

    const handleSubmitFrom = (e) => {
        e.preventDefault();
        //отправить запрос
        const token = registration(inputs.email, inputs.password)
        //редиректнуть на страницу авторизации
        if (token) {
            navigate(LOGIN_ROUTE)
        }
        else {
            navigate(REGISTRATION_ROUTE)
        }
    }

    return (
        <div className={s.container}>
            <h1>Регистрация</h1>
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
                <label className={s.group}>
                    <p className={s.inputName}>Confirm password:</p>
                    <input type="text"
                           name="confirmedPassword"
                           value={inputs.confirmedPassword}
                           onChange={handleInputChange}/>
                </label>
                <div className={s.box}>
                    <input type="submit"
                           value={'Подтвердить'}
                    />
                    <div>
                        Уже зарегистрированы? <Link to={LOGIN_ROUTE}>Войти</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Registration;