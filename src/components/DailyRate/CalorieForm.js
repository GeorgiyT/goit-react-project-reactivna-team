import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "../DailyRate/CalorieForm.module.css";
export default function CalorieForm() {
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

  return (
    <>
      <Formik
        InitialValues={{
          height: "",
          age: "",
          weight: "",
          desiredWeight: "",
          bloodType: ""
        }}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <h2 className={styles.title_form}>Просчитай свою суточную норму калорий прямо сейчас</h2>
          <div className={styles.wrapper_form}>
            <div className={styles.wrapper_input}>
              <label className={styles.label}>
                <Field placeholder="" className={styles.input} name="height" type="number" min="100" max="250" required />
                <p className={styles.label_value}>Рост*</p>
                <div className={styles.error}></div>
              </label>
              <label className={styles.label}>
                <Field placeholder="" className={styles.input} name="age" type="number" min="18" max="100" required />
                <p className={styles.label_value}>Возраст*</p>
                <div className={styles.error}></div>
              </label>
              <label className={styles.label}>
                <Field placeholder="" className={styles.input} name="weight" type="number" min="20" max="500" required />
                <p className={styles.label_value}>Текущий вес*</p>
                <div className={styles.error}></div>
              </label>
            </div>
            <div className={styles.wrapper_input}>
              <label className={styles.label}>
                <Field placeholder="" className={styles.input} name="desiredWeight" type="number" min="20" max="500" required />
                <p className={styles.label_value}> Желаемый вес*</p>
                <div className={styles.error}></div>
              </label>
              <div className={styles.radio_container}>
                <p className={styles.radio_title}>Группа крови*</p>

                <div className={styles.error_radio}></div>

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
      </Formik>
    </>
  );
}
