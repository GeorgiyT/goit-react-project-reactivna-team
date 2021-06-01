import React from "react";
import * as Yup from "yup";
import styles from "../DailyRateForm/CalorieForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthDailyRateOperation, getDailyRateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { Field, Form, Formik } from "formik";
import { isAuthenticatedSelector } from "../../redux/auth/authSelectors";

export default function CalorieForm({openModal}) {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthenticatedSelector);
  const validationSchema = Yup.object().shape({
    height: Yup.number()
    .min(100, "Мінімальне значенння 100 см.")
    .max(250, "Максимальне значення 250 см.")
    .required("Обов`язкове"),
    age: Yup.number().min(18, "Мінімум 18 років").max(100, "Максимум 100 років").required("Обов`язкове"),
    weight: Yup.number().min(20, "Мінімум 20 кг.").max(500, "Максимум 500 кг.").required("Обов`язкове"),
    desiredWeight: Yup.number()
    .min(20, "Мінімум 20 кг.")
    .max(500, "Максимум 500 кг.")
    .required("Обов`язкове")
    .when("weight", (weight, schema) => {
      return schema.test({
        test: desiredWeight => !!weight && desiredWeight < weight,
        message: "Бажана вага повина бути меншою від поточної"
      });
    }),
    bloodType: Yup.number().required("Обов`язкове")
  });
  const getNumbers = values => {
    const keys = Object.keys(values);
    keys.forEach(key => (values[key] = Number(values[key])));
    return values;
  };
  return (
    <div className="container">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          height: "",
          age: "",
          weight: "",
          desiredWeight: "",
          bloodType: ""
        }}
        onSubmit={values => {
          isAuth ? dispatch(AuthDailyRateOperation(getNumbers(values))) : dispatch(getDailyRateOperation(getNumbers(values)));
          if (openModal) {
       setTimeout(() => {
          openModal();
          }, 1000)
    }
        }}
        >
        {({ errors, touched, values }) => (
          <Form className={styles.form}>
            <h2 className={styles.title_form}>Просчитай свою суточную норму калорий прямо сейчас</h2>
            <div className={styles.wrapper_form}>
              <div className={styles.wrapper_input}>
                <label className={styles.label}>
                  <Field
                    placeholder=""
                    className={`${styles.input} ${errors.height && touched.height ? styles.error_input : ""}`}
                    name="height"
                    type="number"
                    values={values.height}
                  />
                  <p className={`${styles.label_value} ${errors.height && touched.height ? styles.error_label_value : ""}`}>
                    Рост*
                  </p>
                  {touched.height && errors.height && <div className={styles.error}>{errors.height}</div>}
                </label>
                <label className={styles.label}>
                  <Field
                    placeholder=""
                    className={`${styles.input} ${touched.age && errors.age ? styles.error_input : ""}`}
                    name="age"
                    type="number"
                    values={values.age}
                  />
                  <p className={`${styles.label_value} ${touched.age && errors.age ? styles.error_label_value : ""}`}>
                    Возраст*
                  </p>
                  {touched.age && errors.age && <div className={styles.error}>{errors.age}</div>}
                </label>
                <label className={styles.label}>
                  <Field
                    placeholder=""
                    className={`${styles.input} ${touched.weight && errors.weight ? styles.error_input : ""}`}
                    name="weight"
                    type="number"
                    values={values.weight}
                  />
                  <p className={`${styles.label_value} ${touched.weight && errors.weight ? styles.error_label_value : ""}`}>
                    Текущий вес*
                  </p>
                  {touched.weight && errors.weight && <div className={styles.error}>{errors.weight}</div>}
                </label>
              </div>
              <div className={styles.wrapper_input}>
                <label className={styles.label}>
                  <Field
                    placeholder=""
                    className={`${styles.input} ${touched.desiredWeight && errors.desiredWeight ? styles.error_input : ""}`}
                    name="desiredWeight"
                    type="number"
                    values={values.desiredWeight}
                  />
                  <p
                    className={`${styles.label_value} ${
                      touched.desiredWeight && errors.desiredWeight ? styles.error_label_value : ""
                    }`}
                  >
                    {" "}
                    Желаемый вес*
                  </p>
                  {touched.desiredWeight && errors.desiredWeight && <div className={styles.error}>{errors.desiredWeight}</div>}
                </label>
                <div className={styles.radio_container}>
                  <p className={styles.radio_title}>Группа крови*</p>

                  {touched.bloodType && errors.bloodType && <div className={styles.error_radio}>{errors.bloodType}</div>}

                  <div className={styles.radio_wrapper} role="group">
                    <Field id="first" type="radio" name="bloodType" value="1" />
                    <label htmlFor="first" className={styles.radio_label}>
                      1
                    </label>
                    <Field id="second" type="radio" name="bloodType" value="2" />
                    <label htmlFor="second" className={styles.radio_label}>
                      2
                    </label>
                    <Field id="third" type="radio" name="bloodType" value="3" />
                    <label htmlFor="third" className={styles.radio_label}>
                      3
                    </label>
                    <Field id="fourth" type="radio" name="bloodType" value="4" />
                    <label htmlFor="fourth" className={styles.radio_label}>
                      4
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.btn_form} type="submit">
              Похудеть
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
