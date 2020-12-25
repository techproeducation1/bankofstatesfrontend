import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import "./Login.css";

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Login</legend>
      <Form>
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
        {props.isSubmitting && <LinearProgress />}
        <br />
        <Button
          variant="contained"
          color="primary"
          disabled={props.isSubmitting}
          onClick={props.submitForm}
          className="login__btn"
        >
          Submit
        </Button>
      </Form>
    </fieldset>
  </div>
);
const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
          alert(JSON.stringify(values));
        }, 500);
      }}
      component={LoginForm}
    ></Formik>
  );
};
export default Login;
