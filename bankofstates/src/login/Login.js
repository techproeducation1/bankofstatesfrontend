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

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting, errors, touched }) => (
        <div className="container">
          <fieldset>
            <legend>Login</legend>
            <Form>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <br />
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                className="login__btn"
              >
                Submit
              </Button>
            </Form>
          </fieldset>
        </div>
      )}
    </Formik>
  );
};
export default Login;
