import React from 'react';
import { useField, Field } from "formik";
import { InputContaniner, InputLabel, InputError, InputDate, InputTime } from './styledDateRow';
import Radio from "../Radio/Radio";

const DateRow = ({inputLabel, timeName, dateName, placeholder, ...props}) => {
    const [field, meta] = useField(props);

    const hasError = meta.touched && meta.error;

    return (
        <InputContaniner>
            <InputLabel color={hasError ? "red": null}>
                {inputLabel.toUpperCase()}
            </InputLabel>
            <Field border={hasError ? "1px solid red": null} type="date" as={InputDate} />
            at
            {/* <Field border={hasError ? "1px solid red": null} name={timeName} type="time" as={InputTime} {...field}/> */}
            <Radio name="timeFormat" radioLabel="AM" value="am"/>
            <Radio name="timeFormat" radioLabel="PM" value="pm"/>
            {hasError ? <InputError>{meta.error}</InputError> : null}
        </InputContaniner>
    );
}

export default DateRow;