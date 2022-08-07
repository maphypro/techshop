import React, {Fragment} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function RegFormStepTwo(props) {

    const location = useLocation();

    const navigate  = useNavigate();


    const prevButton = () => {
        navigate(location.pathname, {state: {activeStep: 0}})
        console.log(location)
    }

    return (
        <Fragment>
            <div>
                <button type={"button"}
                        onClick={prevButton}>
                    Prev
                </button>
                <button type={"button"}
                        onClick={() => 1}>
                    Next
                </button>
            </div>
            <div style={{fontSize: "32px"}}>
                MEOW
            </div>
        </Fragment>
    );
}

export default RegFormStepTwo;