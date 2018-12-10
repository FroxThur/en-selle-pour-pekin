import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";
import greyColor from "@material-ui/core/colors/grey";
import classNames from "classnames";


import BgImgBikeLg from "assets/img/backgrounds/bg12x1440.jpg";
import BgImgBikeMg from "assets/img/backgrounds/bg12x900.jpg";

import BgImgRoadLg from "assets/img/backgrounds/bg3x1440.jpg";
import BgImgRoadMg from "assets/img/backgrounds/bg3x900.jpg";

import BgImgNightLg from "assets/img/backgrounds/bg9x1440.jpg";
import BgImgNightMg from "assets/img/backgrounds/bg9x900.jpg";

const styles = () => ({
  insideStyles: {
    color: greyColor[200],
    position: "absolute",
    top: "30%",
    right: "10%"
  },
  backGroundStyle: {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "50% -400px",
    height: "80vh",
    width: "100%",
    zIndex: -1
  },
  backGroundStyleSmall: {
    height: "40vh"
  },
  backGroundImg0: {
    backgroundImage: "url(" + BgImgBikeLg + ")",
    "@media(max-width: 900px)":{
      backgroundImage: "url(" + BgImgBikeMg + ")",
    }
  },
  backGroundImg1: {
    backgroundImage: "url(" + BgImgRoadLg + ")",
    "@media(max-width: 900px)":{
      backgroundImage: "url(" + BgImgRoadMg + ")",
    }
  },
  backGroundImg2: {
    backgroundImage: "url(" + BgImgNightLg + ")",
    "@media(max-width: 900px)":{
      backgroundImage: "url(" + BgImgNightMg + ")",
    }
  }
});

const ResponsiveBackground = ({ classes, location }) => {
  let backGroundImg = 0;
  let smallBackground = true;
  let showTitle = false;
  switch (location.pathname) {
    case "/":
      smallBackground = false;
      showTitle = true;
      break;
    case "/media":
      backGroundImg = 1;
      break;
    case "/carte":
      backGroundImg = 2;
      break;
    default:
      backGroundImg = 0;
  }

  return (
    <div
      className={classNames(classes.backGroundStyle, {
        [classes.backGroundStyleSmall]: smallBackground,
        [classes.backGroundImg0]: backGroundImg === 0,
        [classes.backGroundImg1]: backGroundImg === 1,
        [classes.backGroundImg2]: backGroundImg === 2
      })}
    >
      {showTitle ? (
        <div className={classes.insideStyles}>
          <Typography variant="h3" color="inherit" gutterBottom align="right">
            En selle pour Pékin
          </Typography>
          <Typography variant="h5" color="inherit" align="right">
            14 000 km à vélo, de la France à la Chine
          </Typography>
        </div>
      ) : null}
    </div>
  );
};

// Create a new component that is "connected" to the router
export default withRouter(withStyles(styles)(ResponsiveBackground));

/*    */
