import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";
import greyColor from "@material-ui/core/colors/grey";
import classNames from "classnames";

import BgImgBikeLg from "assets/img/backgrounds/bg12x1440.jpg";
import BgImgBikeMd from "assets/img/backgrounds/bg12x900.jpg";
import BgImgBikeSm from "assets/img/backgrounds/bg12x480.jpg";

import BgImgRoadLg from "assets/img/backgrounds/bg3x1440.jpg";
import BgImgRoadMd from "assets/img/backgrounds/bg3x900.jpg";
import BgImgRoadSm from "assets/img/backgrounds/bg3x480.jpg";

import BgImgNightLg from "assets/img/backgrounds/bg9x1440.jpg";
import BgImgNightMd from "assets/img/backgrounds/bg9x900.jpg";
import BgImgNightSm from "assets/img/backgrounds/bg9x480.jpg";

import BgImgLightLg from "assets/img/backgrounds/bgx1440.jpg";
import BgImgLightMd from "assets/img/backgrounds/bgx900.jpg";
import BgImgLightSm from "assets/img/backgrounds/bgx480.jpg";

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
    paddingTop: "80vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    backgroundAttachment: "fixed",
    WebkitbackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover"
  },
  backGroundStyleSmall: {
    paddingTop: "40vh"
  },
  backGroundImg0: {
    noWebp: {
      backgroundImage: "url(" + BgImgBikeLg + ")",
      "@media(max-width: 900px)": {
        backgroundImage: "url(" + BgImgBikeMd + ")"
      },
      "@media(max-width: 480px)": {
        backgroundImage: "url(" + BgImgBikeSm + ")"
      }
    }
  },
  backGroundImg1: {
    backgroundImage: "url(" + BgImgRoadLg + ")",
    "@media(max-width: 900px)": {
      backgroundImage: "url(" + BgImgRoadMd + ")"
    },
    "@media(max-width: 480px)": {
      backgroundImage: "url(" + BgImgRoadSm + ")"
    }
  },
  backGroundImg2: {
    backgroundImage: "url(" + BgImgNightLg + ")",
    "@media(max-width: 900px)": {
      backgroundImage: "url(" + BgImgNightMd + ")"
    },
    "@media(max-width: 480px)": {
      backgroundImage: "url(" + BgImgNightSm + ")"
    }
  },
  backGroundImg3: {
    backgroundImage: "url(" + BgImgLightLg + ")",
    "@media(max-width: 900px)": {
      backgroundImage: "url(" + BgImgLightMd + ")"
    },
    "@media(max-width: 480px)": {
      backgroundImage: "url(" + BgImgLightSm + ")"
    }
  }
});

const ResponsiveBackground = ({ classes, location, children }) => {
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
    case "/presentation":
      backGroundImg = 3;
      break;
    default:
      backGroundImg = 0;
  }

  return (
    <main
      className={classNames(classes.backGroundStyle, {
        [classes.backGroundStyleSmall]: smallBackground,
        [classes.backGroundImg0]: backGroundImg === 0,
        [classes.backGroundImg1]: backGroundImg === 1,
        [classes.backGroundImg2]: backGroundImg === 2,
        [classes.backGroundImg3]: backGroundImg === 3
      })}
    >
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
