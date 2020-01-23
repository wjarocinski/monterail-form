import React from 'react';
import PropTypes from "prop-types";
import { useField, Field } from "formik";
import { InputContaniner, InputLabel, InputError, InputDate, InputTime, RequiredMark, RadioError } from './styledDateRow';
import { errorColor, noon, minTime, maxTime } from "../../constants/constants";
import { currentDateFormattedToIso, currentTimeFormattedToLocale, convertTo12Format } from "../../constants/formatters";
import Radio from "../Radio/Radio";

const DateRow = ({requiredMark, touched, errors, values, inputLabel, ...props}) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    const radioError = errors.timeFormat && touched.timeFormat;

    const today = new Date();

    const currentDateFormatted = currentDateFormattedToIso(today);
    const currentTimeFormatted = currentTimeFormattedToLocale(today);
    // const currentTimeFormatted = "11:45";

    const pickedDate = values.date;

    const isPickedDateBigger = pickedDate > currentDateFormatted;

    console.log(noon)

    const isCurrentTimePastNoon = currentTimeFormatted > noon;
    const isAmSelected = values.timeFormat === "am";

    console.log({currentTimeFormatted})
    console.log({currentDateFormatted})
    console.log({pickedDate})
    console.log({isPickedDateBigger})
    console.log({isCurrentTimePastNoon})
    console.log({isAmSelected})

    // const shouldAMBeDisabled = pickedDate ? !(isPickedDateBigger && isCurrentTimePastNoon) : false;

    const shouldAMBeDisabled = pickedDate ? (isPickedDateBigger || (!isPickedDateBigger && !isCurrentTimePastNoon)) ? false : true : false;


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
                // min={isPickedDateBigger ? 
                //         minTime : 
                //             isCurrentTimePastNoon ? convertTo12Format(currentTimeFormatted) : 
                //                 currentTimeFormatted
                //     }
                min={isPickedDateBigger ? 
                    minTime : 
                        !isAmSelected ? convertTo12Format(currentTimeFormatted) :
                            isCurrentTimePastNoon ? convertTo12Format(currentTimeFormatted) :
                                currentTimeFormatted
                }
                max={maxTime}
            />
            <Radio name="timeFormat" radioLabel="AM" value="am" disabled={shouldAMBeDisabled} />
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