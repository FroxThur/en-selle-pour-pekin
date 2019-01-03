import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";
import greyColor from "@material-ui/core/colors/grey";

//import classNames from "classnames";

import bgStyle from "./style";

const styles = theme => ({
  insideStyles: {
    color: greyColor[800],
    position: "absolute",
    top: "30%",
    left: "10%"
  },
  backGroundStyle: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    backgroundAttachment: "fixed",
    WebkitBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover"
  }
});

const ResponsiveBackground = ({ classes, location, children }) => {
  let backGroundImg = 0;
  let showTitle = false;
  switch (location.pathname) {
    case "/":
      showTitle = true;
      break;
    case "/media":
      backGroundImg = 1;
      break;
    case "/carte":
      backGroundImg = 2;
      break;
    case "/partenaires":
      backGroundImg = 3;
      break;
    default:
      backGroundImg = 0;
  }

  return (
    <main className={classes.backGroundStyle} style={bgStyle[backGroundImg]}>
      {showTitle ? (
        <div className={classes.insideStyles}>
          <Typography variant="h3" color="inherit" gutterBottom align="left">
            En selle pour Pékin
          </Typography>
          <Typography variant="h5" color="inherit" align="left">
            14 000 km à vélo, de la France à la Chine
          </Typography>
        </div>
      ) : null}
      {children}
    </main>
  );
};

// Create a new component that is "connected" to the router
export default withRouter(withStyles(styles)(ResponsiveBackground));
