import * as Yup from 'Yup';

export const contactShema = Yup.object().shape({
fullname: Yup.string().required("It is necessary to enter the name and last name."),
photo : Yup.string().URL("The address is not valid").required("It is necessary to enter the address."),
mobile: Yup.number().required("It is necessary to enter the phone number."),
email: Yup.string().required("It is necessary to enter the address").email("The Email is not valid"),
job: Yup.string().nullable(),
group: Yup.string().required("You must select a group")
})