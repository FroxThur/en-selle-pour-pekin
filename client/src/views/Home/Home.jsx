import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import Indicators from "components/Indicators.jsx";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  iframe: {
    width: "100%",
    height: window.innerHeight * 0.8,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    border: "0"
  }
});

const Home = ({ classes }) => {
  //setLocation(location.pathname);
  return (
    <Paper className={classes.root} elevation={1}>
      <Indicators />
      <Divider variant="middle" />

      <iframe
        className={classes.iframe}
        src="https://umap.openstreetmap.fr/fr/map/en-selle-pour-pekin_266919"
        title="OSMap iframe"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </Paper>
  );
};

export default withStyles(styles, { withTheme: true })(Home);
