import React from 'react';
import { useField, Field } from "formik";

import Radio from "../Radio/Radio";
import { RadioGroupContaniner, RadioGroupLabel, Input, FeeError } from './styledRowGroup';

const RowGroup = ({ values, errors, touched, groupLabel, feeName, ...props}) => {
    const [field, meta] = useField(props);

    const isPaid = values && values.paid_event === "paid";

    const isFeeRequired = errors.event_fee && touched.event_fee ? errors.event_fee : null;
    return (
        <RadioGroupContaniner>
            <RadioGroupLabel>
                {groupLabel.toUpperCase()}
            </RadioGroupLabel>
            <Radio {...field} radioLabel="Free event" value="free" checked={values.paid_event === "free"} {...props}/>
            <Radio {...field} radioLabel="Paid event" value="paid" {...props}/>
            {isPaid ? <Field placeholder="Fee" border={isFeeRequired ? "1px solid red": null} name={feeName} as={Input} /> : null}
            {isPaid ? "$" : null}
            {isFeeRequired ? <FeeError>{errors.event_fee}</FeeError>: null}
        </RadioGroupContaniner>
    );
}
export default RowGroup;