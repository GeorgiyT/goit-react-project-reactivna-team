import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginOperation, registerOperation } from "../../redux/auth/authOperations";
import schema from "./validator/validator";
import style from "../auth/AuthForm.module.css";
import { useHistory, useLocation } from "react-router-dom";

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
          onSubmit={values => {
            console.log(values);
            location.pathname === "/registration"
              ? dispatch(registerOperation(values, history))
              : dispatch(loginOperation({ email: values.email, password: values.password }));
          }}
        >
          {(
            { isSubmitting } ///___esli proizoshel subbmit
          ) => (
            <Form className={style.auth_form}>
              <Field className={style.auth_input} type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />

              <Field className={style.auth_input} type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
              <Field className={style.auth_input_last} name="username" placeholder="Name" />
              <ErrorMessage name="email" component="div" />
              <div className={style.button_container}>
                <button className={style.auth_button} type="submit" disabled={isSubmitting}>
                  {location.pathname === "/registration" ? "зарегистрироваться" : "Bход"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AuthForm;
