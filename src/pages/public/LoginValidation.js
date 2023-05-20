import * as Yup from "yup";
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string()
    .required("Password Must Fill")
    .min(3, "Password Min 3 Character"),
});
