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
  toolbar: theme.mixins.toolbar,
  mainContent: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

const App = ({ classes }) => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className={classes.toolbar} />
        <ResponsiveBackground />
        <ResponsiveNav />
        <main className={classes.mainContent}>
          <Main />
        </main>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default withStyles(styles, { withTheme: true })(App);
