import React from 'react';
import { useField, Field } from "formik";
import { TextAreaContaniner, TextAreaLabel, TextAreaError, sTextArea, CharInfoLabel, TextAreaAndInfoContainer } from './styledTextArea';

const TextArea = (props) => {
    const [field, meta] = useField(props);
    const { textAreaLabel, placeholder } = props;

    const hasError = meta.touched && meta.error;
    const usedCharacters = meta.value.length;

    return (
        <TextAreaContaniner>
            <TextAreaLabel color={hasError ? "red": null}>
                {textAreaLabel.toUpperCase()}
            </TextAreaLabel>
            <TextAreaAndInfoContainer>
                <Field placeholder={placeholder} border={hasError ? "1px solid red": null} as={sTextArea} rows="8" {...field}/>
                <CharInfoLabel color={hasError ? "red": null}>
                    You have {140 - usedCharacters} characters left.
                </CharInfoLabel>
            </TextAreaAndInfoContainer>
            {hasError ? <TextAreaError>{meta.error}</TextAreaError> : null}
        </TextAreaContaniner>
    );
}
export default TextArea;