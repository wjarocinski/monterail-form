import React from 'react';
import { useField, Field } from "formik";
import { RadioButton, RadioLabel, RadioContainer } from './styledRadio';

const Radio = ({radioLabel, value, ...props}) => {
    const [field, meta] = useField(props);

    // const hasError = meta.touched && meta.error;

    return (
        <RadioContainer>
            <Field type="radio" value={value} as={RadioButton} {...field}/>
            <RadioLabel>{radioLabel}</RadioLabel>
        </RadioContainer>
    );
}
export default Radio;