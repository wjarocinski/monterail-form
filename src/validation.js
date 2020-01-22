import * as yup from "yup";

const validationSchema = yup.object({
    title: yup.string().required("Title cannot be empty!").max(10),
    description: yup.string().required("Description cannot be empty!").max(140),
    coordinator: yup.number().required("Responsible cannot be empty!"),
    email: yup.string().email("Email must be a valid email"),
    paid_event: yup.string(),
    event_fee: yup.number()
            .when("paid_event", {
                is: "paid",
                then: yup.number().required("Fee is required").min(1),
                otherwise: yup.number()
            }),
    date: yup.date().required("Date is required!"),

})

export default validationSchema;