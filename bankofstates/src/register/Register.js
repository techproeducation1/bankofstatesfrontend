import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import "./Register.css";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const RegistrationForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Register</legend>
      <Form>
        <Field
          component={TextField}
          name="firstName"
          type="text"
          label="FirstName"
        />
        {props.errors.firstName && props.touched.firstName ? (
          <div>{props.errors.firstName}</div>
        ) : null}
        <br />
        <Field
          component={TextField}
          name="lastName"
          type="text"
          label="lastName"
        />
        {props.errors.lastName && props.touched.lastName ? (
          <div>{props.errors.lastName}</div>
        ) : null}
        <br />
        <Field component={TextField} name="email" type="email" label="Email" />
        {props.errors.email && props.touched.email ? (
          <div>{props.errors.email}</div>
        ) : null}
        <br />
        <Field
          component={TextField}
          type="password"
          label="Password"
          name="password"
        />
        {props.errors.password && props.touched.password ? (
          <div>{props.errors.password}</div>
        ) : null}
        <br />
        <Field
          component={TextField}
          type="password"
          label="Confirm Password"
          name="confirmPassword"
        />
        {props.errors.confirmpassword && props.touched.confirmpassword ? (
          <div>{props.errors.confirmpassword}</div>
        ) : null}
        {props.isSubmitting && <LinearProgress />}
        <br />
        <Button
          variant="contained"
          color="primary"
          disabled={props.isSubmitting}
          onClick={props.submitForm}
          className="register__btn"
        >
          Submit
        </Button>
      </Form>
    </fieldset>
  </div>
);
const Register = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
          alert(JSON.stringify(values));
        }, 500);
        actions.resetForm();
      }}
      component={RegistrationForm}
    ></Formik>
  );
};
export default Register;
