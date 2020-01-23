import React from 'react';
import PropTypes from "prop-types";
import { useField, Field } from "formik";
import { InputContaniner, InputLabel, InputError, Input, RequiredMark } from './styledCustomTextInput';
import {errorColor} from "../../constants/constants";

const CustomTextInput = ({requiredMark, inputLabel, type, placeholder, ...props}) => {
    const [field, meta] = useField(props);

    const hasError = meta.touched && meta.error;

    return (
        <InputContaniner>
            <InputLabel color={hasError ? errorColor : null}>
                {inputLabel.toUpperCase()}
                {requiredMark && <RequiredMark>*</RequiredMark>}
            </InputLabel>
            <Field placeholder={placeholder} border={hasError && errorColor} type={type} as={Input} {...field}/>
            {hasError && <InputError>{meta.error}</InputError>}
        </InputContaniner>
    );
}

CustomTextInput.propTypes = {
    requiredMark: PropTypes.bool,
    inputLabel: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
};

export default CustomTextInput;