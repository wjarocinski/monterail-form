import React from 'react';
import PropTypes from "prop-types";
import { useField, Field } from "formik";
import { InputContaniner, InputLabel, InputError, InputDate, InputTime, RequiredMark } from './styledDateRow';
import Radio from "../Radio/Radio";

const DateRow = ({requiredMark, values, inputLabel, ...props}) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    const today = new Date();

    const currentDateFormatted = today.toISOString().slice(0, 10);
    const currentTimeFormatted = today.toLocaleString().slice(12, 17);

    const pickedDate = values.date;


    const isPickedDateBigger = pickedDate > currentDateFormatted;

    const isCurrentTimePastNoon = currentTimeFormatted > "12:00";

    const shouldAMBeDisabled = pickedDate ? !(isPickedDateBigger && isCurrentTimePastNoon) : false;

    const convertTo12Format = (timeIn24) => {
        const hours = timeIn24.split(":")[0];
        const minutes = timeIn24.split(":")[1];
        if(+hours <= 12){
            return `${hours}:${minutes}`
        } else {
            const hoursIn24Format = +hours - 12;
            return `${hoursIn24Format}:${minutes}`
        }
    }

    return (
        <InputContaniner>
            <InputLabel color={hasError ? "red": null}>
                {inputLabel.toUpperCase()}
                {requiredMark && <RequiredMark> *</RequiredMark>}
            </InputLabel>
            <Field
                {...field} 
                border={hasError ? "1px solid red": null} 
                type="date"
                as={InputDate}
                min={currentDateFormatted}
            />
            at
            <Field
                name="time"
                type="time"
                border={hasError ? "1px solid red": null} 
                as={InputTime}
                min={isPickedDateBigger ? "01:00" : isCurrentTimePastNoon ? convertTo12Format(currentTimeFormatted): currentTimeFormatted}
                max="12:59"
            />
            <Radio name="timeFormat" radioLabel="AM" value="am" disabled={shouldAMBeDisabled}/>
            <Radio name="timeFormat" radioLabel="PM" value="pm"/>
            {hasError && <InputError>{meta.error}</InputError>}
        </InputContaniner>
    );
}

DateRow.propTypes = {
    requiredMark: PropTypes.bool,
    values: PropTypes.object.isRequired,
    inputLabel: PropTypes.string.isRequired,
};


export default DateRow;