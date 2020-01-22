import React from 'react';
import { useField, Field } from "formik";
import { RadioButton, RadioLabel, RadioContainer } from './styledRadio';

const Radio = ({ disabled, checked, radioLabel, value, ...props}) => {
    const [field] = useField(props);

    return (
        <RadioContainer>
            <Field {...field} type="radio" value={value} as={RadioButton} disabled={disabled} checked={checked}/>
            <RadioLabel>{radioLabel}</RadioLabel>
        </RadioContainer>
    );
}
export default Radio;