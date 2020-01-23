import React from 'react';
import PropTypes from "prop-types";
import { useField, Field } from "formik";
import { TextAreaContaniner, TextAreaLabel, TextAreaError, sTextArea, CharInfoLabel, TextAreaAndInfoContainer, RequiredMark } from './styledTextArea';
import { errorColor } from "../../constants/constants";

const TextArea = ({requiredMark, textAreaLabel, placeholder , ...props}) => {
    const [field, meta] = useField(props);

    const hasError = meta.touched && meta.error;
    const usedCharacters = meta.value.length;

    return (
        <TextAreaContaniner>
            <TextAreaLabel color={hasError ? errorColor : null}>
                {textAreaLabel.toUpperCase()}
                {requiredMark && <RequiredMark> *</RequiredMark>}
            </TextAreaLabel>
            <TextAreaAndInfoContainer>
                <Field placeholder={placeholder} border={hasError && errorColor} as={sTextArea} rows="8" {...field}/>
                <CharInfoLabel color={hasError ? errorColor : null}>
                    You have {140 - usedCharacters} characters left.
                </CharInfoLabel>
            </TextAreaAndInfoContainer>
            {hasError && <TextAreaError>{meta.error}</TextAreaError>}
        </TextAreaContaniner>
    );
}

TextArea.propTypes = {
    requiredMark: PropTypes.bool,
    textAreaLabel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default TextArea;