import React from 'react';
import s from './Header.module.scss'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {logout} from "../http/userApi";
import {userIsNotAuth} from "../store/UserStore";

const Header = () => {

    const isAuth = useSelector(state => state.userReducer.isAuth)
    const dispatch = useDispatch();

    const logOut = () => {
        logout().catch(e => alert(e.message()));
        dispatch(userIsNotAuth)
    }

    return (
        <header className={s.header}>
            <div className={s.logo_wrapper}>
                <Link to={SHOP_ROUTE}>
                    <img  src={logo} alt={'technocity'} className={s.logo}/>
                </Link>
            </div>
            <nav className={s.navbar_wrapper}>
                { isAuth ?
                    <div className={s.navbar_auth}>
                        <button className={s.admin_btn_wrapper}>
                            <Link to={ADMIN_ROUTE}>Админка</Link>
                        </button>
                        <button className={s.logout_wrapper}
                                onClick={logOut}>
                            Log out
                        </button>
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