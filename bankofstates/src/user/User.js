import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AttachMoney from "@material-ui/icons/AttachMoney";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";

import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardFooter from "../components/Card/CardFooter.js";

import styles from "../styles/dashboardStyle.js";
const useStyles = makeStyles(styles);
const User = () => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <AccountBalance />
              </CardIcon>
              <p className={classes.cardCategory}>Balance</p>
              <h3 className={classes.cardTitle}>$ 100000</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AttachMoney />
              </CardIcon>
              <p className={classes.cardCategory}>Deposits</p>
              <h3 className={classes.cardTitle}>$ 34245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 1 Week
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <AccountBalanceWallet />
              </CardIcon>
              <p className={classes.cardCategory}>Withdrawals</p>
              <h3 className={classes.cardTitle}>$30000</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 1 Week
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Recipients</p>
              <h3 className={classes.cardTitle}>5</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Latest
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default User;
