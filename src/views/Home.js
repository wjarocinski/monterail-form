import React from "react";
import { Formik } from "formik"
import validationSchema from "../validation";
import categories from "../mocks/categories.json";
import employees from "../mocks/employes.json";

import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import FormTile from "../components/FormTile/FormTile";
import CustomSelectInput from "../components/CustomSelectInput/CustomSelectInput";
import TextArea from "../components/TextArea/TextArea";
import InputWithAnnotation from "../components/InputWithAnnotation/InputWithAnnotation";
import DateRow from "../components/DateRow/DateRow";

import { Form, Button } from "../themes";
import RowGroup from "../components/RowGroup/RowGroup";

const today = new Date();

const initialValues = {
    title: "", 
    description: "", 
    category_id: "",
    paid_event: "free",
    event_fee: "",
    reward: "",
    coordinator: "",
    email: "",
    date: today,
    time: "",
    timeFormat: "am",
    duration: ""
};

  

const Home = () => {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {

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

          const dateString = `${values.date}T${convertTo24Format(values.time)}`

          setSubmitting(true);
          //make async call or just console.log the values
          console.log("SUBMITING", values);
          console.log("DATESTRING", dateString)
          setSubmitting(false);
        }}>{({
          values,
          isSubmitting,
          handleSubmit, 
          errors,
          touched
        }) => (
            <Form onSubmit={handleSubmit}>
            <FormTile tileName="About">
                <CustomTextInput inputLabel="Title *" name="title" placeholder="Make it short and clear" />
                <TextArea textAreaLabel="Description" name="description" placeholder="Write about your event, be creative"/>
                <CustomSelectInput inputLabel="Category" name="category_id" placeholder="Select category (skills, interests, locations)" optionValues={categories}/>
                <RowGroup name="paid_event" groupLabel="Payment" values={values}  feeName="event_fee" errors={errors} touched={touched} />
                <InputWithAnnotation inputLabel="Reward" name="reward" placeholder="Number" annotation="reward points for attendance"/>
            </FormTile>
            <FormTile tileName="Coordinator">
                <CustomSelectInput inputLabel="Responsible *" name="coordinator" placeholder="Responsible" optionValues={employees}/>
                <CustomTextInput inputLabel="Email" placeholder="Email" name="email" type="email"/>
            </FormTile>
            <FormTile tileName="When">
                <DateRow inputLabel="Starts on" name="date" values={values}/>
                <InputWithAnnotation inputLabel="Duration" name="duration" placeholder="Number" annotation="hour"/>
            </FormTile>
            <Button disbaled={isSubmitting} type="submit">PUBLISH EVENT</Button>
          </Form>
        )}
      </Formik>
    );
}
export default Home;