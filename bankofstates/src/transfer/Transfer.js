import React from "react";

import { Formik, Form, Field } from "formik";
import { Select, MenuItem, Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import service from "../service/bankService";
import { ToastContainer, toast } from "react-toastify";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import AccountInfo from "../account/AccountInfo";
import Transactions from "../account/Transactions";
import Divider from "@material-ui/core/Divider";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/typographyStyle.js";

const useStyles = makeStyles(styles);

const TransferSchema = Yup.object().shape({
  amount: Yup.string().required("Required"),
  recipientName: Yup.string().required("Required"),
});

const TransferForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Transfer</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-lg-2 text-center p-3">
            <FormControl className={classes.formControl}>
              <InputLabel id="handle">Handle</InputLabel>
              <Select
                labelId="handle"
                id="handle"
                value={handle}
                onChange={handleSelect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Ten">Ten</MenuItem>
                <MenuItem value="Twenty">Twenty</MenuItem>
                <MenuItem value="Thirty">Thirty</MenuItem>
              </Select>
              <FormHelperText>
                {errors.company && touched.company && errors.company}
              </FormHelperText>
            </FormControl>
          </div>
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              name="amount"
              type="number"
              label="Amount"
            />
          </div>
          <div> {props.isSubmitting && <LinearProgress />}</div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-4 text-center p-3">
            <Button
              variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </fieldset>
  </div>
);

const Transfer = () => {
  const [{ userInfo }, dispatch] = useStateValue();
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      {!userInfo && history.push("/login")}
      {userInfo && userInfo.user && (
        <div>
          <AccountInfo />
          <div>
            <Formik
              initialValues={{
                amount: null,
                recipientName: "",
              }}
              validationSchema={TransferSchema}
              onSubmit={(values, actions) => {
                service.transfer(values).then((response) => {
                  if (response.status === 200) {
                    const userInfo = response.data;
                    dispatch({
                      type: "UPDATE",
                      item: userInfo,
                    });
                    toast.success(userInfo.message, {
                      position: toast.POSITION.TOP_CENTER,
                    });
                    actions.resetForm();
                  }
                });
                actions.setSubmitting(false);
              }}
              component={TransferForm}
            ></Formik>
            <ToastContainer />
          </div>
          <Divider />
          <h1 className={classes.infoText}>Transactions</h1>
          <Transactions />
        </div>
      )}
    </div>
  );
};

export default Transfer;
