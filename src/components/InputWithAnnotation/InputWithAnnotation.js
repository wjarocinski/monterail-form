import React from 'react';
import { useField, Field } from "formik";
import { InputContaniner, InputLabel, InputError, InputShort, Annotation } from './styledInputWithAnnotation';

const InputWithAnnotation = ({annotation, inputLabel, placeholder, ...props}) => {
    const [field, meta] = useField(props);

    const hasError = meta.touched && meta.error;

    return (
        <InputContaniner>
            <InputLabel color={hasError ? "red": null}>
                {inputLabel.toUpperCase()}
            </InputLabel>
            <Field placeholder={placeholder} border={hasError ? "1px solid red": null} as={InputShort} {...field}/>
            {hasError ? <InputError>{meta.error}</InputError> : null}
            <Annotation>{annotation}</Annotation>
        </InputContaniner>
    );
}
export default InputWithAnnotation;