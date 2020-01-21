import React from 'react';
import { useField, Field } from "formik";
import { RadioButton, RadioLabel, RadioContainer } from './styledRadio';

const Radio = ({ radioLabel, value, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <RadioContainer>
            <Field {...field} type="radio" value={value} as={RadioButton} />
            <RadioLabel>{radioLabel}</RadioLabel>
        </RadioContainer>
    );
}
export default Radio;