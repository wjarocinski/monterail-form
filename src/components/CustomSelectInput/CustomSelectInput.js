import React from 'react';
import { useField, Field } from "formik";
import { SelectContaniner, SelectLabel, SelectError, Select } from './styledCustomSelectInput';

const CustomSelectInput = ({inputLabel, placeholder, optionValues, ...props}) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    return (
        <SelectContaniner>
            <SelectLabel color={hasError ? "red" : null}>
                {inputLabel.toUpperCase()}
            </SelectLabel>
            <Field as={Select} {...field} border={hasError ? "1px solid red" : null}>
                <option value="">{placeholder}</option>
                {optionValues.map(value => <option key={value.id} value={value.id}>{value.name} {value.lastname}</option>)}
            </Field>
            {hasError ? <SelectError>{meta.error}</SelectError> : null}
        </SelectContaniner>
    );
}
export default CustomSelectInput;