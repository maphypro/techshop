import React from 'react';
import s from './StartPage.module.scss'
import RegForm from "../components/RegistrationForm/RegForm";


function StartPage(props) {
    return (
        <div className={s.start_page}>
            <RegForm/>
        </div>
    );
}

export default StartPage;