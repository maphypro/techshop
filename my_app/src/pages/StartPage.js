import React from 'react';
import s from './StartPage.module.scss'
import RegistrationForm from "../components/RegistrationForm";


function StartPage(props) {
    return (
        <div className={s.start_page}>
            <RegistrationForm/>
        </div>
    );
}

export default StartPage;