import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import Styles from './Forms.module.css'

const validationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  message: Yup.string()
    .min(20, "Minimum 20 characters")
    .required("This field is required"),
});

export const Forms = () => {

  const form = useRef();
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };


  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    emailjs.sendForm(
      "service_1pmozaf", 
      "template_22tqbos", 
      form.current, 
      "hGsv0H9z8rXZXY8cT")
      .then((result) => {
          console.log("Mensaje enviado", result.text);    
      }, (error) => {
          console.log("Todo ha fallado, el horror", error.text);
        });
    resetForm();
  };



  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched }) => (
        <Form className={Styles.form} ref={form}>
          <div className={Styles.namEmail}>
            <div className={Styles.inputName}>
              <label htmlFor="name">Your Name</label>
              <Field className={Styles.formField} type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className={Styles.errorMessage}/>
            </div>
            <div className={Styles.inputEmail}>
              <label htmlFor="email">Your Email</label>
              <Field className={Styles.formField}  type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className={Styles.errorMessage}/>
            </div>
          </div>
          <div className={Styles.input}>
            <label htmlFor="message">Your Message</label>
            <Field className={Styles.formFieldTxt} as="textarea" id="message" name="message" />
            <ErrorMessage name="message" component="div" className={Styles.errorMessage}/>
          </div>
          <button
            type="submit"
            disabled={
              Object.keys(errors).length > 0 ||
              Object.keys(touched).length === 0
            }
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};
