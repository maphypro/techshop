import {useState} from "react";
import {useValidate} from "./useValidate";

export const useFormInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)

    const validate = useValidate(value, validations)

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onBlur = (event) => {
        if (value !== initialValue) {
            setDirty(true)
        }
        console.log('Blur event triggered')
    }

    return { value, isDirty, onChange, onBlur, isInputValid: validate.isInputValid }
}