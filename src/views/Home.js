import React from "react";
import { Formik } from "formik"
import validationSchema from "../validation";
import categories from "../mocks/categories.json";

import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import FormTile from "../components/FormTile/FormTile";
import CustomSelectInput from "../components/CustomSelectInput/CustomSelectInput";

import { Form, Button } from "../themes";

const initialValues = {
    //About
    title: "", 
    description: "", 
    category_id: "",
    paid_event: false,
    event_fee: "",
    reward: "",
    //Coordinator 
    coordinator: "",
    email: "",
    //When
    date: "",
    duration: ""
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
                <CustomTextInput inputLabel="Title *" placeholder="Make it short and clear" name="title" type="text"/>
                <CustomTextInput inputLabel="Description *" placeholder="Write about your event, be creative" name="description" type="textarea"/>
                <CustomSelectInput name="category_id" inputLabel="Category" placeholder="Select category (skills, interests, locations)" optionValues={categories}/>
            </FormTile>
            <FormTile tileName="Coordinator">
                <CustomTextInput inputLabel="Responsible *" placeholder="Responsible" name="coordinator" type="text"/>
                <CustomTextInput inputLabel="Email" placeholder="Email" name="email" type="email"/>
            </FormTile>
            <FormTile tileName="When">
                <CustomTextInput inputLabel="Starts On" name="date" type="date"/>
                <CustomTextInput inputLabel="Duration" placeholder="Number" name="duration" type="number"/>
            </FormTile>
            <Button disbaled={isSubmitting} type="submit">PUBLISH EVENT</Button>
          </Form>
        )}
      </Formik>
    );
}
export default Home;