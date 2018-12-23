import React from "react";
import { withRouter } from "react-router";
import { Parallax, Background } from "react-parallax";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import blueColor from "@material-ui/core/colors/blue";

import BgImgBike from "assets/img/backgrounds/bg12x1080.jpg";
import BgImgRoad from "assets/img/backgrounds/bg3x1080.jpg";
import BgImgNight from "assets/img/backgrounds/bg9x1080.jpg";

const styles = () => ({
  insideStyles: {
    color: blueColor[600],
    position: "absolute",
    top: "10%",
    left: "10%"
  }
});

const ResponsiveParallax = ({ classes, location }) => {
  let backGroundImg = BgImgBike;
  let windowRatio = 0.66;
  let showTitle = true;
  switch (location.pathname) {
    case "/":
      backGroundImg = BgImgBike;
      windowRatio = 75;
      showTitle = true;
      break;
    case "/media":
      backGroundImg = BgImgRoad;
      windowRatio = 50;
      showTitle = false;
      break;
    case "/carte":
      backGroundImg = BgImgNight;
      windowRatio = 50;
      showTitle = false;
      break;
    default:
      backGroundImg = BgImgBike;
      windowRatio = 50;
      showTitle = false;
  }

  return (
    <Parallax strength={200}>
      <Background style={{ height: windowRatio + "vh" }}>
        <img src={backGroundImg} alt="Background" />
      </Background>
      <div style={{ height: windowRatio + "vh" }}>
        {showTitle ? (
          <div className={classes.insideStyles}>
            <Typography variant="h3" color="inherit" gutterBottom>
              En selle pour Pékin
            </Typography>
            <Typography variant="h5" color="inherit">
              14 000 km, de Grenoble à Pékin
            </Typography>
          </div>
        ) : null}
      </div>
    </Parallax>
  );
};

// Create a new component that is "connected" to the router
export default withRouter(withStyles(styles)(ResponsiveParallax));

/*    */
