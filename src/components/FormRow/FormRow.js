import React from 'react';
import { useField, Field } from "formik";
import { RowContaniner, RowTitle, RowError, Input } from './styledFormRow';

const FormRow = (props) => {
    const [field, meta] = useField(props);
    const { rowName, inputName, inputType, placeholder } = props;

    const hasError = meta.touched && meta.error;

    return (
        <RowContaniner>
            <RowTitle color={hasError ? "red": null}>
                {rowName.toUpperCase()}
            </RowTitle>
            <Field placeholder={placeholder} name={inputName} border={hasError ? "1px solid red": null} type={inputType} as={Input} {...field}/>
            {hasError ? <RowError>{meta.error}</RowError> : null}
            
        </RowContaniner>
    );
}
export default FormRow;