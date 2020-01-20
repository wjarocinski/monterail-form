import React from 'react';
import { useField } from "formik";
import { RadioGroupContaniner, RadioGroupLabel, RadioGroupError, RadioButton } from './styledRowGroup';

const RowGroup = ({radioGroupLabel, children, ...props}) => {
    const [field, meta] = useField(props);

    const hasError = meta.touched && meta.error;

    // return (

        // <RadioGroupContaniner>
        //     <RadioGroupLabel color={hasError ? "red": null}>
        //         {radioGroupLabel.toUpperCase()}
        //     </RadioGroupLabel>
        //     {children}
        //     {/* <Field placeholder={placeholder} border={hasError ? "1px solid red": null} type="radio" as={RadioButton} {...field}/> */}
        //     {hasError ? <RadioGroupError>{meta.error}</RadioGroupError> : null}
        // </RadioGroupContaniner>
    // );
}
export default RowGroup;