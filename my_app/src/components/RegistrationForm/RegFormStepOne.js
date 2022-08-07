import React, {Fragment} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function RegFormStepOne({changeInput, email, password, confirmedPassword}) {

    const location = useLocation();

    const navigate  = useNavigate();


    const nextButton = () => {
        navigate(location.pathname, {state: {activeStep: 1}})
        console.log(location)
    }

    return (
        <Fragment>
            <div>
                <button type={"button"}>
                    Prev
                </button>
                <button type={"button"}
                        onClick={nextButton}>
                    Next
                </button>
            </div>
            <label>
                E-mail:
                <input type="text" name="email" value={email} onChange={changeInput}/>
            </label>
            <label>
                Password:
                <input type="text" name="password" value={password} onChange={changeInput}/>
            </label>
            <label>
                Confirm password:
                <input type="text" name="confirmedPassword" value={confirmedPassword} onChange={changeInput}/>
            </label>
        </Fragment>
    );
}

export default RegFormStepOne;