import React from 'react';
import { useField, Field } from "formik";
import { RowContaniner, RowTitle, RowError, Text, Input } from './styledFormRow';

const FormRow = (props) => {
    const [field, meta] = useField(props);
    const { rowName, inputName, inputType, placeholder } = props;

    return (
        <RowContaniner>
            <RowTitle>
                {rowName.toUpperCase()}
            </RowTitle>
            <Field placeholder={placeholder} name={inputName} type={inputType} as={Input} {...field}/>
            <RowError>
                {meta.touched && meta.error ? <Text color="red">{meta.error}</Text> : null}
            </RowError>
        </RowContaniner>
    );
}
export default FormRow;