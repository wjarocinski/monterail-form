import React from 'react';
import { useField, Field } from "formik";
import { InputContaniner, InputLabel, InputError, InputDate, InputTime } from './styledDateRow';
import Radio from "../Radio/Radio";

const DateRow = ({values, inputLabel, timeName, dateName, placeholder, ...props}) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    const currentDateFormatted = meta.initialValue.toISOString().slice(0, 10);
    const currentTimeFormatted = meta.initialValue.toLocaleString().slice(12, 17);

    const pickedTime = values.time;
    const pickedDate = values.date;

    const isPickedDateBigger = pickedDate > currentDateFormatted ? true : false;

    //converting 24h to 12h
    const isAm = values.timeFormat === "am";
    const timeConvertedTo24 = isAm ? currentTimeFormatted : currentTimeFormatted + 12;

    const isCurrentTimePastNoon = currentTimeFormatted > "12:00";

    

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

    const convertTo24Format = (timeIn12) => {
        const hours = timeIn12.split(":")[0];
        const minutes = timeIn12.split(":")[1];

        if(values.timeFormat === "am" && +hours === 12){
            return `00:${minutes}`;
        } else if(values.timeFormat === "am" && +hours < 12){
            return `${hours}:${minutes}`
        } else {
            const hoursIn12Format = +hours + 12;
            return `${hoursIn12Format}:${minutes}`;
        }
    }

    // console.log(convertTo24Format("12:12"))
    // console.log(convertTo24Format("1:12"))
    // console.log(convertTo24Format("11:12"))
    // console.log(convertTo24Format("4:12"))
    // console.log(convertTo24Format("3:12"))
    // console.log(convertTo24Format("8:12"))
    // console.log(convertTo24Format("11:12"))


    return (
        <InputContaniner>
            <InputLabel color={hasError ? "red": null}>
                {inputLabel.toUpperCase()}
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
            <Radio name="timeFormat" radioLabel="AM" value="am"/>
            <Radio name="timeFormat" radioLabel="PM" value="pm"/>
            {hasError ? <InputError>{meta.error}</InputError> : null}
        </InputContaniner>
    );
}

export default DateRow;