import React from 'react';
import { useField, Field } from "formik";
import { TextAreaContaniner, TextAreaLabel, TextAreaError, sTextArea } from './styledTextArea';

const TextArea = (props) => {
    const [field, meta] = useField(props);
    const { textAreaLabel, placeholder } = props;

    const hasError = meta.touched && meta.error;

    return (
        <TextAreaContaniner>
            <TextAreaLabel color={hasError ? "red": null}>
                {textAreaLabel.toUpperCase()}
            </TextAreaLabel>
            <Field placeholder={placeholder} border={hasError ? "1px solid red": null} as={sTextArea} {...field}/>
            {hasError ? <TextAreaError>{meta.error}</TextAreaError> : null}
        </TextAreaContaniner>
    );
}
export default TextArea;