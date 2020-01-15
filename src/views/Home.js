import React from "react";
import { Formik } from "formik"
import validationSchema from "../validation";
import FormRow from "../components/FormRow/FormRow";
import FormTile from "../components/FormTile/FormTile";

import { Form, Button } from "../themes";

const initialValues = {
    //About
    title: "", 
    description: "", 
    category_id: null,
    paid_event: false,
    event_fee: null,
    reward: null,
    //Coordinator 
    coordinator: "",
    email: "",
    //When
    date: "",
    duration: null
  };

const Home = () => {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          setSubmitting(true);
          //make async call or just console.log the values
          console.log(values);
          setSubmitting(false);
        }}>{({
          values,
          isSubmitting,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
            <Form onSubmit={handleSubmit}>
            <FormTile tileName="About">
                <FormRow rowName="Title *" placeholder="Make it short and clear" name="title" type="text"/>
                <FormRow rowName="Description *" placeholder="Write about your event, be creative" name="description" type="textarea"/>
                <FormRow rowName="Category" placeholder="Select category (skills, interests, locations)" name="category" type="select"/>
            </FormTile>
            <FormTile tileName="Coordinator">
                <FormRow rowName="Responsible *" placeholder="Responsible" name="coordinator" type="text"/>
                <FormRow rowName="Email" placeholder="Email" name="email" type="email"/>
            </FormTile>
            <FormTile tileName="When">
                <FormRow rowName="Starts On" name="date" type="date"/>
                <FormRow rowName="Duration" placeholder="Number" name="duration" type="number"/>
            </FormTile>
            <Button disbaled={isSubmitting} type="submit">PUBLISH EVENT</Button>
          </Form>
        )}
      </Formik>
    );
}
export default Home;