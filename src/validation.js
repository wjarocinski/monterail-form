import * as yup from "yup";

const validationSchema = yup.object({
    title: yup.string().required("Title is required!").max(10)
})

export default validationSchema;