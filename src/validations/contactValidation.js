import * as yup from 'yup';
export const contactSchema = yup.object().shape({
fullname: yup.string().required("It is necessary to enter the name and last name."),
photo : yup.string().url("hhhhh"),
mobile: yup.number().required("It is necessary to enter the phone number."),
email: yup.string().required("It is necessary to enter the address").email("The Email is not valid"),
job: yup.string().nullable(),
group: yup.string().required("You must select a group")
})