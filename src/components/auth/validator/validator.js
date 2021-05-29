import * as yup from "yup";

// let schema = Yup.object({
//   username: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
//   password: Yup.string().required("write valid password").min(6, "min 6 characters").max(12, "max 12 characters"),
//   email: Yup.string().email("Invalid email address").required("Required")
// });

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required("write valid email").min(6, "min 6 characters").max(12, "max 12 characters")
});

export default schema;
