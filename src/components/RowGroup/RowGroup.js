import React from 'react';
import PropTypes from "prop-types"; 
import { useField, Field } from "formik";
import { paidValue, freeValue, errorColor } from "../../constants/constants";
import { RadioGroupContaniner, RadioGroupLabel, Input, FeeError } from './styledRowGroup';
import Radio from "../Radio/Radio";

const RowGroup = ({ values, errors, touched, groupLabel, feeName, ...props}) => {
    const [field] = useField(props);

    const isPaid = values && values.paid_event === paidValue;

    const isFeeRequired = errors.event_fee && touched.event_fee ? errors.event_fee : null;
    return (
        <RadioGroupContaniner>
            <RadioGroupLabel>
                {groupLabel.toUpperCase()}
            </RadioGroupLabel>
            <Radio {...field} radioLabel="Free event" value={freeValue} checked={values.paid_event === freeValue} {...props}/>
            <Radio {...field} radioLabel="Paid event" value={paidValue} {...props}/>
            {isPaid ? <Field placeholder="Fee" border={isFeeRequired && errorColor} name={feeName} as={Input} /> : null}
            {isPaid ? "$" : null}
            {isFeeRequired && <FeeError>{errors.event_fee}</FeeError>}
        </RadioGroupContaniner>
    );
}

RowGroup.propTypes = {
    groupLabel: PropTypes.string.isRequired,
    feeName: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default RowGroup;