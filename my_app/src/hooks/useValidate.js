import {useEffect, useState} from "react";

export const useValidate = (inputValue, validations) => {
    const [emailError, setEmailError] = useState(false)
    const [emptyError, setEmptyError] = useState(true)
    const [minLenError, setMinLenError] = useState(false)
    const [isInputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength': {
                    inputValue.length < validations[validation] ? setMinLenError(true) : setMinLenError(false)
                    break;
                }
                case 'isEmpty': {
                    inputValue ? setEmptyError(false) : setEmptyError(true)
                    break;
                }
                case 'isEmail': {
                    const regExpForEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    setEmailError(!String(inputValue).match(regExpForEmail))
                    break;
                }
            }
        }
    }, [inputValue])

    useEffect(() => {
        if (emailError || emptyError || minLenError) {
            setInputValid(false)
        }
        else {
            setInputValid(true)
        }
    }, [emailError, emptyError, minLenError])

    return {
        emptyError,
        minLenError,
        emailError,
        isInputValid
    }
}