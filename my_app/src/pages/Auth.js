import React from 'react';
import s from './Auth.module.scss'
import Login from "../components/Login";
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import Registration from "../components/Registration";
const Auth = () => {

    const location = useLocation()

    return (
        <div className={s.auth}>
            { location.pathname === LOGIN_ROUTE ? <Login/>  : <Registration/> }
        </div>
    );
};

export default Auth;