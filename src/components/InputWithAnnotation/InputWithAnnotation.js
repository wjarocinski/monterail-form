import React from 'react';
import PropTypes from "prop-types";
import { useField, Field } from "formik";
import { InputContaniner, InputLabel, InputError, InputShort, Annotation } from './styledInputWithAnnotation';
import { errorColor } from "../../constants/constants";

const InputWithAnnotation = ({annotation, inputLabel, placeholder, ...props}) => {
    const [field, meta] = useField(props);

    const hasError = meta.touched && meta.error;

    return (
        <InputContaniner>
            <InputLabel color={hasError ? errorColor : null}>
                {inputLabel.toUpperCase()}
            </InputLabel>
            <Field placeholder={placeholder} border={hasError && errorColor} as={InputShort} {...field}/>
            <Annotation>{annotation}</Annotation>
            {hasError && <InputError>{meta.error}</InputError>}
        </InputContaniner>
    );
}

InputWithAnnotation.propTypes = {
    annotation: PropTypes.string.isRequired,
    inputLabel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default InputWithAnnotation;