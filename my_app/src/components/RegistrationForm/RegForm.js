import React, {useEffect, useState} from 'react';
import axios from "axios";
import RegFormStepOne from "./RegFormStepOne";
import RegFormStepTwo from "./RegFormStepTwo";
import {useLocation, useNavigate} from "react-router-dom";


function RegForm(props) {

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

    //отправляет данные о новом пользователе на сервер
    const sumbitRegistration = (e) => {
        e.preventDefault();
        axios.post('http://localhost:7000/api/user/registration', {
            email: inputs.email,
            password: inputs.password,
            role: 'USER'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //список шагов формы для отображения
    const TABS = [
        {
            component: RegFormStepOne,
            props: {
                changeInput: handleInputChange,
                email: inputs.email,
                password: inputs.password,
                confirmedPassword: inputs.confirmedPassword,
            }
        },
        {
            component: RegFormStepTwo,
            props: {}
        },
    ]


    let { state } = useLocation()
    const step = state?.activeStep ?? 0

    let tab = TABS[step]

    return (
        <form onSubmit={sumbitRegistration}>
            {<tab.component {...tab.props} />}
        </form>
    );
}

export default RegForm;