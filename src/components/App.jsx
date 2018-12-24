import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import ResponsiveNav from "components/ResponsiveNav.jsx";
import Main from "components/Main.jsx";
import Footer from "components/Footer.jsx";
import ResponsiveBackground from "components/ResponsiveBackground";

const styles = theme => ({
  appBarSpace: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
});

const App = ({ classes }) => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <ResponsiveNav />
        <div className={classes.toolbar} />
        <ResponsiveBackground>
          <Main />
        </ResponsiveBackground>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default withStyles(styles, { withTheme: true })(App);
