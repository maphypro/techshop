import React from 'react';
import s from './Header.module.scss'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {BASKET_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const Header = () => {

    const isAuth = useSelector(state => state.userReducer.isAuth)

    return (
        <header className={s.header}>
            <div className={s.logo_wrapper}>
                <img  src={logo} alt={'technocity'} className={s.logo}/>
            </div>
            <nav className={s.navbar_wrapper}>
                { isAuth ?
                    <div className={s.navbar_auth}>
                        <div className={s.basket_wrapper}>
                            <Link to={BASKET_ROUTE} className={s.basket}>Корзина</Link>
                        </div>
                        <div className={s.avatar_wrapper}>
                            <img src={avatar} alt="avatar" className={s.avatar}/>
                        </div>
                    </div>
                    :
                    <div className={s.navbar_not_auth}>
                        <Link to={LOGIN_ROUTE}>Войти</Link>
                    </div>
                }
            </nav>
        </header>
    );
};

export default Header;