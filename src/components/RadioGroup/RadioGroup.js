import React from 'react';
import { useField, Field } from "formik";
import { RadioGroupContaniner, RadioGroupLabel, RadioGroupError, RadioButton } from './styledRadioGroup';

const RadioGroup = ({radioGroupLabel, ...props}) => {
    const [field, meta] = useField(props);

    const hasError = meta.touched && meta.error;

    return (
        <RadioGroupContaniner>
            <RadioGroupLabel color={hasError ? "red": null}>
                {radioGroupLabel.toUpperCase()}
            </RadioGroupLabel>
            <Field type="radio" {...field} value="free"/>
            <Field type="radio" {...field} value="paid"/>
            {/* <Field placeholder={placeholder} border={hasError ? "1px solid red": null} type="radio" as={RadioButton} {...field}/> */}
            {hasError ? <RadioGroupError>{meta.error}</RadioGroupError> : null}
        </RadioGroupContaniner>
    );
}
export default RadioGroup;