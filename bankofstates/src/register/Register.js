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
  dob: Yup.string().required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  email: Yup.string().email("Invalid email").required("Required"),
});

const RegistrationForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Register</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              name="firstName"
              type="text"
              label="First Name"
            />
            {props.errors.firstName && props.touched.firstName ? (
              <div>{props.errors.firstName}</div>
            ) : null}
          </div>
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last Name"
            />
            {props.errors.lastName && props.touched.lastName ? (
              <div>{props.errors.lastName}</div>
            ) : null}
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-2 p-3">
            {/*
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                id="date-picker-dialog"
                label="Date of Birth"
                format="dd/MM/yyyy"
                value={props.values.dob}
                onChange={(value) => props.setFieldValue("dob", value)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
              */}
            <Field
              component={TextField}
              name="dob"
              type="date"
              label="Date Of Birth"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
            {props.errors.email && props.touched.email ? (
              <div>{props.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
            {props.errors.password && props.touched.password ? (
              <div>{props.errors.password}</div>
            ) : null}
          </div>
          <div className="col-lg-2 p-3">
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
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-4 text-center p-3">
            <Button
              variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
              className="register__btn"
            >
              Submit
            </Button>
          </div>
        </div>
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
        dob: "",
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
