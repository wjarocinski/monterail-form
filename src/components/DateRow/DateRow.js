import React from 'react';
import PropTypes from "prop-types";
import { useField, Field } from "formik";
import { InputContaniner, InputLabel, InputError, InputDate, InputTime, RequiredMark, RadioError } from './styledDateRow';
import { errorColor } from "../../constants/constants";
import Radio from "../Radio/Radio";

const DateRow = ({requiredMark, touched, errors, values, inputLabel, ...props}) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    const radioError = errors.timeFormat && touched.timeFormat;

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
            <InputLabel color={hasError ? errorColor : null}>
                {inputLabel.toUpperCase()}
                {requiredMark && <RequiredMark> *</RequiredMark>}
            </InputLabel>
            <Field
                {...field} 
                border={hasError && errorColor} 
                type="date"
                as={InputDate}
                min={currentDateFormatted}
            />
            at
            <Field
                name="time"
                type="time"
                border={hasError && errorColor} 
                as={InputTime}
                min={isPickedDateBigger ? "01:00" : isCurrentTimePastNoon ? convertTo12Format(currentTimeFormatted): currentTimeFormatted}
                max="12:59"
            />
            <Radio name="timeFormat" radioLabel="AM" value="am" disabled={shouldAMBeDisabled}/>
            <Radio name="timeFormat" radioLabel="PM" value="pm" />
            {hasError && <InputError>{meta.error}</InputError>}
            {radioError && <RadioError>{errors.timeFormat}</RadioError>}
        </InputContaniner>
    );
}

DateRow.propTypes = {
    requiredMark: PropTypes.bool,
    values: PropTypes.object.isRequired,
    inputLabel: PropTypes.string.isRequired,
};


export default DateRow;