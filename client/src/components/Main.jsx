import React from "react";
import { Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Home from "views/Home/Home.jsx";
import MediaPage from "views/MediaPage/MediaPage.jsx";
import OSMapPage from "views/OSMapPage/OSMapPage.jsx";
//import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
//import LoginPage from "views/LoginPage/LoginPage.jsx";
//import PhotosPage from "views/PhotosPage/PhotosPage.jsx";

const styles = theme => ({
  content: {
    padding: theme.spacing.unit * 3
  }
});

const Main = ({ classes }) => (
  <div className={classes.content}>
    <Route exact path="/" component={Home} />{" "}
    <Route path="/carte" component={OSMapPage} />
    <Route path="/media" component={MediaPage} />
  </div>
);

export default withStyles(styles, { withTheme: true })(Main);
