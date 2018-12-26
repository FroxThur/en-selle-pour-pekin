import React from "react";
import { withStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { ArrowUpward, MyLocation, Panorama } from "@material-ui/icons";

// core components
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import purpleColor from "@material-ui/core/colors/purple";
import indigoColor from "@material-ui/core/colors/indigo";
import tealColor from "@material-ui/core/colors/teal";
import lightGreenColor from "@material-ui/core/colors/lightGreen";

import ReactCountryFlag from "react-country-flag";


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexGrow: 1,
    paddingBottom: theme.spacing.unit * 2
  },
  gridItem: {
    maxWidth: 300
  },
  cardHeader1: {
    backgroundColor: purpleColor[200]
  },
  cardHeader2: {
    backgroundColor: indigoColor[200]
  },
  cardHeader3: {
    backgroundColor: tealColor[200]
  },
  cardHeader4: {
    backgroundColor: lightGreenColor[200]
  },
  countries: {
    display: "flex"
  },
  countryFlags: {
    padding: "1px"
  }
});

const Indicators = ({ classes, mapData }) => {
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={16}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item className={classes.gridItem} xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              classes={{
                root: classes.cardHeader1
              }}
              avatar={<ArrowUpward />}
              title="Distance parcourue"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {mapData.lastMarker.distance} km
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              classes={{
                root: classes.cardHeader2
              }}
              avatar={<MyLocation />}
              title="Position"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {mapData.lastMarker.description +
                  " - " +
                  mapData.lastMarker.place.country}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              classes={{
                root: classes.cardHeader3
              }}
              avatar={<MyLocation />}
              title="Jour"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {mapData.lastMarker.day}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              classes={{
                root: classes.cardHeader4
              }}
              avatar={<Panorama />}
              title="Pays traversés"
            />
            <CardContent>
              <div className={classes.countries}>
                {mapData.crossedCountry.map(countryCode => {
                  return (
                    <div
                      className={classes.countryFlags}
                      key={countryCode.toString()}
                    >
                      <ReactCountryFlag code={countryCode} svg />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Indicators);
