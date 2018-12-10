import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  iframe: {
    width: "100%",
    height: window.innerHeight * 0.8,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    border: "0"
  }
});

const OSMapPage = ({ classes }) => {
  return (
    <iframe
      className={classes.iframe}
      src="https://umap.openstreetmap.fr/fr/map/en-selle-pour-pekin_266919"
      title="OSMap iframe"
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
};

export default withStyles(styles)(OSMapPage);
