import React from 'react';
import PropTypes from "prop-types";
import { useField, Field } from "formik";
import { SelectContaniner, SelectLabel, SelectError, Select, RequiredMark } from './styledCustomSelectInput';
import {errorColor} from "../../constants/constants";

const CustomSelectInput = ({requiredMark, inputLabel, placeholder, optionValues, ...props}) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    return (
        <SelectContaniner>
            <SelectLabel color={hasError ? errorColor : null}>
                {inputLabel.toUpperCase()}
                {requiredMark && <RequiredMark>*</RequiredMark>}
            </SelectLabel>
            <Field as={Select} {...field} border={hasError && errorColor}>
                {placeholder && <option value="">{placeholder}</option>}
                {optionValues.map(value => <option key={value.id} value={value.id}>{value.name} {value.lastname}</option>)}
            </Field>
            {hasError ? <SelectError>{meta.error}</SelectError> : null}
        </SelectContaniner>
    );
}

CustomSelectInput.propTypes = {
    requiredMark: PropTypes.bool,
    inputLabel: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    optionValues: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            lastName: PropTypes.string,
        })
    ).isRequired
};

export default CustomSelectInput;