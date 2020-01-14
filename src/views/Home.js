import React from "react";
import { Formik, Form } from "formik"
import validationSchema from "../validation";
import FormRow from "../components/FormRow/FormRow";
import FormTile from "../components/FormTile/FormTile";

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
        // validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
            console.log("submit")
          setSubmitting(true);
          //make async call or just console.log the values
          console.log(values);
          setSubmitting(false);
        }}>{({
          values,
          isSubmitting,
          touched,
          errors,
          handleSubmit
        }) => (
          <Form>
            <FormTile tileName="Coordinator">
                <FormRow rowName="Responsible" placeholder="Responsible" name="coordinator" type="text"/>
                <FormRow rowName="Duration" placeholder="Email" name="email" type="email"/>
            </FormTile>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
}
export default Home;