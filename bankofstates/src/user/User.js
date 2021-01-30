import React from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AttachMoney from "@material-ui/icons/AttachMoney";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import CardBody from "../components/Card/CardBody.js";

import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardFooter from "../components/Card/CardFooter.js";
import PlotlyChart from "../chart/PlotlyChart";
import styles from "../styles/dashboardStyle.js";
const useStyles = makeStyles(styles);
const barData = [
  {
    type: "bar",
    x: [
      "1-Jan-2020",
      "2-Jan-2020",
      "3-Jan-2020",
      "4-Jan-2020",
      "5-Jan-2020",
      "6-Jan-2020",
      "7-Jan-2020",
    ],
    y: [3000, 5000, 1000, 2000, 10000, 3800, 7000],
  },
];
const scatterData = [
  {
    type: "scatter",
    x: [
      "1-Jan-2020",
      "2-Jan-2020",
      "3-Jan-2020",
      "4-Jan-2020",
      "5-Jan-2020",
      "6-Jan-2020",
      "7-Jan-2020",
    ],
    y: [1000, 500, 300, 200, 100, 3000, 2500],
  },
];
const transferData = [
  {
    type: "funnel",
    x: [3500, 3000, 2800, 2500, 2000, 1000, 500],
    y: ["5/Jan", "8/Jan", "2/Jan", "1/Jan", "7/Jan", "3/Jan", "10/Jan"],
    hoverinfo: "percent total+x",
  },
];
const User = () => {
  const classes = useStyles();
  const [{ userInfo }] = useStateValue();
  const history = useHistory();
  return (
    <div>
      {!userInfo && history.push("/login")}
      {userInfo && userInfo.user && (
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <AccountBalance />
                  </CardIcon>
                  <p className={classes.cardCategory}>Balance</p>
                  <h3 className={classes.cardTitle}>
                    $ {userInfo.user.accountBalance}
                  </h3>
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
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="success">
                  <h4 color="white">Deposit Trends</h4>
                </CardHeader>
                <CardBody>
                  <PlotlyChart data={barData} />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="danger">
                  <h4 color="white">Withdrawal Trends</h4>
                </CardHeader>
                <CardBody>
                  <PlotlyChart data={scatterData} />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="info">
                  <h4 color="white">Transfer Trends</h4>
                </CardHeader>
                <CardBody>
                  <PlotlyChart data={transferData} />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      )}
    </div>
  );
};

export default User;
