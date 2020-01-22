import React from 'react';
import PropTypes from "prop-types";
import { useField, Field } from "formik";
import { InputContaniner, InputLabel, InputError, Input } from './styledCustomTextInput';

const CustomTextInput = ({inputLabel, type, placeholder, ...props}) => {
    const [field, meta] = useField(props);

    const hasError = meta.touched && meta.error;

    return (
        <InputContaniner>
            <InputLabel color={hasError ? "red": null}>
                {inputLabel.toUpperCase()}
            </InputLabel>
            <Field placeholder={placeholder} border={hasError ? "1px solid red": null} type={type} as={Input} {...field}/>
            {hasError ? <InputError>{meta.error}</InputError> : null}
        </InputContaniner>
    );
}

CustomTextInput.propTypes = {
    inputLabel: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
};

export default CustomTextInput;