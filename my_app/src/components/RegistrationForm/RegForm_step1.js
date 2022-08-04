import React, {useState} from 'react';
import axios from "axios";

function RegistrationForm(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const sumbitRegistration = (e) => {
        e.preventDefault();
        axios.post('http://localhost:7000/api/user/registration', {
            email: email,
            password: password,
            role: 'USER'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <form onSubmit={sumbitRegistration}>
            <label>
                E-mail:
                <input type="text" name="email" value={email} onChange={onChangeEmail}/>
            </label>
            <label>
                Password:
                <input type="text" name="password" value={password} onChange={onChangePassword}/>
            </label>
            <input type="submit" value="Далее"/>
        </form>
    );
}

export default RegistrationForm;