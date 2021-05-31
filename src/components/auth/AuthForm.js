import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  loginOperation,
  registerOperation,
} from "../../redux/auth/authOperations";
import schema from "./validator/validator";
import style from "../auth/AuthForm.module.css";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";

const AuthForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <div className={style.auth_container}>
        {location.pathname === "/registration" ? (
          <h1 className={style.auth_title}> Регистрация</h1>
        ) : (
          <h1 className={style.auth_title}>Bход</h1>
        )}
        <Formik
          initialValues={{ email: "", password: "", username: "" }}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values);
            location.pathname === "/registration"
              ? dispatch(registerOperation(values, history))
              : dispatch(
                  loginOperation({
                    email: values.email,
                    password: values.password,
                  })
                );
          }}
        >
          {(
            { isSubmitting } ///___esli proizoshel subbmit
          ) => (
            <Form>
              <Field
                className="emailInput"
                type="email"
                name="email"
                placeholder="Write your email"
              />
              <ErrorMessage name="email" component="div" />

              <Field
                className="passwordInput"
                type="password"
                name="password"
                placeholder="Write your password"
              />
              <ErrorMessage name="password" component="div" />
              <Field
                className=""
                type="username"
                name="username"
                placeholder="Write your name"
              />
              <ErrorMessage name="email" component="div" />
              <button className="btnSign" type="submit" disabled={isSubmitting}>
                {location.pathname === "/registration"
                  ? "зарегистрироваться"
                  : "Bход"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

// const AuthForm = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const history = useHistory();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       username: ""
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
//       password: Yup.string().required("write valid password").min(6, "min 6 characters").max(12, "max 12 characters"),
//       email: Yup.string().email("Invalid email address").required("Required")
//     }),
//     onSubmit: values => {
//       location.pathname === "/registration"
//         ? dispatch(registerOperation(values, history))
//         : dispatch(loginOperation({ email: values.email, password: values.password }));
//     }
//   });

//   return (
//     <div className={style.auth_container}>
//       {location.pathname === "/registration" ? (
//         <h1 className={style.auth_title}> Регистрация</h1>
//       ) : (
//         <h1 className={style.auth_title}>Bход</h1>
//       )}
//       <form onSubmit={formik.handleSubmit} className={style.auth_form}>
//         <label className={style.auth_label}>
//           Email *
//           <input
//             className={style.auth_input}
//             id="email"
//             name="email"
//             type="email"
//             //   placeholder="Email *"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
//         </label>

//         <label className={style.auth_label}>
//           Password *
//           <input
//             className={style.auth_input}
//             id="password"
//             name="password"
//             type="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//           {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
//         </label>

//         {location.pathname === "/registration" ? (
//           <label className={style.auth_label_last}>
//             {" "}
//             Name *
//             <input
//               className={style.auth_input}
//               id="username"
//               name="username"
//               type="text"
//               onChange={formik.handleChange}
//               value={formik.values.username}
//             />
//             {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
//           </label>
//         ) : (
//           ""
//         )}

//         <div className={style.button_container}>
//           {location.pathname === "/registration" ? (
//             <>
//               {" "}
//               <button className={style.auth_button} type="submit">
//                 зарегистрироваться
//               </button>
//               {/* <Link to="/login" className={style.auth_link}>
//                 уже есть аккаунт
//               </Link> */}
//             </>
//           ) : (
//             <>
//               {" "}
//               <button className={style.auth_button} type="submit">
//                 Bход
//               </button>
//               {/* <Link to="/registration" className={style.auth_link}>
//                 Если у Вас нет аккаунта
//               </Link> */}
//             </>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

export default AuthForm;
