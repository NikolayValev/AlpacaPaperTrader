import React, { Component } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Table from "../components/Table/Table.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import Chart from "../components/Chart/Chart.js"
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import {dailySalesChart} from "../variables/charts.js"
import styles from "../assets/jss/dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

class Dashboard extends Component {
  //const classes = useStyles();
  state = {
    searchNodes: ""
  };

  render(){

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="rose">
                <h4>Employees Stats</h4>

              </CardHeader>
              <CardBody>
                <p /*className={classes.cardCategoryWhite}*/>
                  New employees on 15th September, 2016</p>
              </CardBody>
              <CardFooter>
              </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <p> The fuck is this </p>
            </CardHeader>
            <CardBody>
              <h4 /*className={classes.cardTitle}*/>Daily Sales</h4>
              <p /*className={classes.cardCategory}*/>
                <span /*className={classes.successText}*/>
                  <ArrowUpward /*className={classes.upArrowCardCategory} *//> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div /*className={classes.stats}*/>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Chart/>
        </GridItem>
      </GridContainer>
    </div>
  );
}
}

export default Dashboard;
