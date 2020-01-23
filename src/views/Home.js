import React from "react";
import { Formik } from "formik"
import { ThemeProvider } from "styled-components";
import validationSchema from "../validation";
import categories from "../mocks/categories.json";
import employees from "../mocks/employes.json";
import { Form, Button, errorTheme } from "../themes";
import {convertTo24Format} from "../constants/formatter";

import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import CustomSelectInput from "../components/CustomSelectInput/CustomSelectInput";
import InputWithAnnotation from "../components/InputWithAnnotation/InputWithAnnotation";
import TextArea from "../components/TextArea/TextArea";
import FormTile from "../components/FormTile/FormTile";
import DateRow from "../components/DateRow/DateRow";
import RowGroup from "../components/RowGroup/RowGroup";


const initialValues = {
    title: "", 
    description: "", 
    category_id: "",
    paid_event: "free",
    event_fee: 0,
    reward: "",
    coordinator: 3,
    email: "",
    date: "",
    time: "",
    timeFormat: "",
    duration: ""
};

const Home = (props) => {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {

          const {title, description, category_id, paid_event, event_fee, reward, duration, coordinator, email, date, time, timeFormat} = values;

          const dateString = `${date}T${convertTo24Format(time, timeFormat)}`
          const durationInSec = +duration * 3600;

          const mappedValues = {
            title,
            description,
            category_id: category_id ? parseInt(category_id) : "",
            paid_event: paid_event === "paid" ? true : false,
            event_fee: event_fee ? parseInt(event_fee) : "",
            reward: reward ? parseInt(reward): "",
            date: dateString,
            duration: durationInSec,
            coordinator: {
              email,
              id: coordinator,
            },
          }

          setSubmitting(true);
          //make async call or just console.log the values
          console.log("SUBMITING", mappedValues);
          setSubmitting(false);
          props.history.push("/success");
        }}>{({
          values,
          isSubmitting,
          handleSubmit, 
          errors,
          touched
        }) => (
          <ThemeProvider theme={errorTheme}>
            <Form onSubmit={handleSubmit}>
            <FormTile tileName="About">
                <CustomTextInput inputLabel="Title" requiredMark name="title" placeholder="Make it short and clear" />
                <TextArea textAreaLabel="Description" requiredMark name="description" placeholder="Write about your event, be creative"/>
                <CustomSelectInput inputLabel="Category" name="category_id" placeholder="Select category (skills, interests, locations)" optionValues={categories}/>
                <RowGroup name="paid_event" groupLabel="Payment" values={values}  feeName="event_fee" errors={errors} touched={touched} />
                <InputWithAnnotation inputLabel="Reward" name="reward" placeholder="Number" annotation="reward points for attendance"/>
            </FormTile>
            <FormTile tileName="Coordinator">
                <CustomSelectInput inputLabel="Responsible" requiredMark name="coordinator" optionValues={employees}/>
                <CustomTextInput inputLabel="Email" placeholder="Email" name="email" type="email"/>
            </FormTile>
            <FormTile tileName="When">
                <DateRow requiredMark inputLabel="Starts on" name="date" errors={errors} touched={touched} values={values}/>
                <InputWithAnnotation inputLabel="Duration" name="duration" placeholder="Number" annotation="hour"/>
            </FormTile>
            <Button disbaled={isSubmitting} type="submit">PUBLISH EVENT</Button>
          </Form>
          </ThemeProvider>
        )}
      </Formik>
    );
}
export default Home;