import * as yup from "yup";

export const signupFormValidation = yup.object().shape({
    first_name: yup.string().required("This field is required"),
    last_name: yup.string().required("This field is required"),
    email: yup
        .string()
        .email("This is not a valid email")
        .required("This field is required"),
    phone: yup
        .number()
        .typeError("This should be a number")
        .min(8, "This should be a minimum of 8 characters")
        .required("This field is required"),
    password1: yup
        .string()
        .min(8, "Password should be at least 8 characters")

        .required("This field is required"),
    password2: yup
        .string()
        .required("Confirm password is required")
        .oneOf([yup.ref("password1"), null], "Passwords must match"),
});
