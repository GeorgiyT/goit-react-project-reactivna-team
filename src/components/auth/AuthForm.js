import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginOperation, registerOperation } from "../../redux/auth/authOperations";
import schema from "./validator/validator";
import style from "../auth/AuthForm.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import svg from "../../images/varification/symbol-defs.svg";

const AuthForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [showPassword, showSetPassword] = useState(false);
  const toggleShowPassword = () => showSetPassword(prevState => !prevState);
  return (
    <div className="container">
      <div className={style.auth_container}>
        {location.pathname === "/registration" ? (
          <h1 className={style.auth_title}> Регистрация</h1>
        ) : (
          <h1 className={style.auth_title}>Bход</h1>
        )}
        <Formik
          enableReinitialize
          initialValues={{ email: "", password: "", username: "" }}
          validationSchema={schema}
          onSubmit={values => {
            location.pathname === "/registration"
              ? dispatch(registerOperation({ ...values, username: values.username || values.email }, history))
              : dispatch(loginOperation({ email: values.email, password: values.password }));
          }}
        >
          {(
            { errors, touched } ///___esli proizoshel subbmit
          ) => (
            <Form className={style.auth_form}>
              <div className={style.form_group}>
                {location.pathname === "/registration" ? (
                  <>
                    {" "}
                    <label className={style.label}>
                      <Field
                        type="text"
                        name="username"
                        placeholder=" "
                        className={`${style.input} ${touched.username && errors.username && style.errorInput}`}
                      />
                      <p className={style.name}>Имя</p>
                      {touched.username && errors.username && <div className={style.error}>{errors.username}</div>}
                    </label>
                  </>
                ) : null}
                <label className={style.label}>
                  <Field
                    type="text"
                    name="email"
                    className={`${style.input} ${touched.email && errors.email && style.errorInput}`}
                  />
                  <p className={style.name}>Логин *</p>
                  {touched.email && errors.email && <div className={style.error}>{errors.email}</div>}
                </label>
                <label className={style.label}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className={`${style.inputPass} ${touched.password && errors.password && style.errorInput}`}
                  />
                  <button type="button" onClick={toggleShowPassword} className={style.button_eye_icon}>
                    {showPassword ? (
                      <svg className={style.eye_icon}>
                        <use href={`${svg}#icon-eye`}></use>
                      </svg>
                    ) : (
                      <svg className={style.eye_icon}>
                        <use href={`${svg}#icon-eye-hidden`}></use>
                      </svg>
                    )}
                  </button>
                  <p className={style.name}>Пароль *</p>
                  {touched.password && errors.password && <div className={style.error}>{errors.password}</div>}
                </label>
              </div>

              <div className={style.button_container}>
                <button className={style.auth_button} type="submit">
                  {location.pathname === "/registration" ? "зарегистрироваться" : "Bход"}
                </button>
                {location.pathname === "/registration" ? (
                  <Link to="/login" className={style.auth_link}>
                    {location.pathname === "/registration" ? "Быстрей худеть" : "Хочу зарегистрироваться"}
                  </Link>
                ) : (
                  <Link to="/registration" className={style.auth_link}>
                    {location.pathname === "/registration" ? "Уже есть аккаунт" : "Хочу зарегистрироваться"}
                  </Link>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthForm;

/* <div className={style.form_group_item}>
                  <Field className={style.auth_input} type="email" name="email" placeholder="Почта *" />
                  <ErrorMessage className={style.input_error} name="email" component="div" />
                </div>
                <div className={style.form_group_last}>
                  <Field
                    className={style.auth_input}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Пароль *"
                  />
                  <button onClick={toggleShowPassword} className={style.button_eye_icon}>
                    {showPassword ? (
                      <svg className={style.eye_icon}>
                        <use href={`${svg}#icon-eye`}></use>
                      </svg>
                    ) : (
                      <svg className={style.eye_icon}>
                        <use href={`${svg}#icon-eye-hidden`}></use>
                      </svg>
                    )}
                  </button>

                  <ErrorMessage className={style.input_error} name="password" component="div" />
                </div> */
