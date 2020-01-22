import * as yup from "yup";

const validationSchema = yup.object({
    title: yup.string().required("Title cannot be empty!"),
    description: yup.string().required("Description cannot be empty!").max(140),
    coordinator: yup.number().required("Responsible cannot be empty!"),
    email: yup.string().email("Email must be a valid email"),
    paid_event: yup.string(),
    event_fee: yup.number()
            .when("paid_event", {
                is: "paid",
                then: yup.number().required("Event fee is required").typeError("Event fee must be a number").min(1, "Event fee is required"),
                otherwise: yup.number("Fee must be a number")
            }),
    date: yup.date().required("Date is required!"),
    reward: yup.number().typeError('Reward must be a number'),
    duration: yup.number().typeError('Duration must be a number')
})

export default validationSchema;