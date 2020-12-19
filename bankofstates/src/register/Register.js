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
            <legend>Register</legend>
            <Form>
              <Field
                component={TextField}
                name="firstName"
                type="text"
                label="FirstName"
              />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <br />
              <Field
                component={TextField}
                name="lastName"
                type="text"
                label="lastName"
              />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <br />
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
              <br />
              <Field
                component={TextField}
                type="password"
                label="Confirm Password"
                name="confirmPassword"
              />
              {errors.confirmpassword && touched.confirmpassword ? (
                <div>{errors.confirmpassword}</div>
              ) : null}
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                className="register__btn"
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
export default Register;
