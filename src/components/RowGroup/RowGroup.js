import React from 'react';
import { useField, Field } from "formik";

import Radio from "../Radio/Radio";
import { RadioGroupContaniner, RadioGroupLabel, Input} from './styledRowGroup';

const RowGroup = ({ values, groupLabel, feeName, ...props}) => {
    const [field, meta] = useField(props);

    const isPaid = values && values.paid_event === "paid";
    const hasError = meta.touched && meta.error;

    return (
        <RadioGroupContaniner>
            <RadioGroupLabel>
                {groupLabel.toUpperCase()}
            </RadioGroupLabel>
            <Radio {...field} radioLabel="Free event" value="free" {...props}/>
            <Radio {...field} radioLabel="Paid event" value="paid" {...props}/>
            {isPaid ? <Field placeholder="Fee" border={hasError ? "1px solid red": null} name={feeName} as={Input} /> : null}
            {isPaid ? "$" : null}
        </RadioGroupContaniner>
    );
}
export default RowGroup;