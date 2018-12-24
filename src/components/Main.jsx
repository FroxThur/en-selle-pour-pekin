import React from "react";
import { Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

import Home from "views/Home/Home.jsx";
import MediaPage from "views/MediaPage/MediaPage.jsx";
import OSMapPage from "views/OSMapPage/OSMapPage.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const Main = ({ classes }) => (
  <Paper className={classes.root} elevation={1}>
    <Route exact path="/" component={Home} />
    <Route path="/carte" component={OSMapPage} />
    <Route path="/media" component={MediaPage} />
    <Route path="/presentation" component={PresentationPage} />
  </Paper>
);

export default withStyles(styles, { withTheme: true })(Main);
