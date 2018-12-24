import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import Indicators from "components/Indicators.jsx";

const styles = theme => ({
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
    <React.Fragment>
      <Indicators />
      <Divider variant="middle" />

      <iframe
        className={classes.iframe}
        src="https://umap.openstreetmap.fr/fr/map/en-selle-pour-pekin_266919"
        title="OSMap iframe"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(Home);
