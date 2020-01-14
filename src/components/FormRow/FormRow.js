import React from 'react';
import { useField, Field } from "formik";
import { RowContaniner, RowTitle, RowError, Input } from './styledFormRow';

const FormRow = (props) => {
    const [field, meta] = useField(props);
    const { rowName, inputName, inputType, placeholder } = props;

    return (
        <RowContaniner>
            <RowTitle>
                {rowName.toUpperCase()}
            </RowTitle>
            <Field placeholder={placeholder} name={inputName} type={inputType} as={Input} {...field}/>
            {meta.touched && meta.error ? <RowError>{meta.error}</RowError> : null}
            
        </RowContaniner>
    );
}
export default FormRow;