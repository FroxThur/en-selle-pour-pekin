import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CloseIcon from "@material-ui/icons/Close";

import ResponsiveImg from "components/ResponsiveImg.jsx";

const styles = theme => ({
  root: {
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "block",
    width: "100%",
    height: "100%",
    flexGrow: 1
  },
  imageContainer: {
    height: "inherit",
    width: "inherit"
  },

  mobileStepper: {
    backgroundColor: "transparent"
  },
  buttonStepper: {
    color: theme.palette.grey[50]
  },
  dots: {
    backgroundColor: "rgba(255,255,255,0.3)"
  },
  dotActive: {
    backgroundColor: "rgba(255,255,255,0.7)"
  },
  buttonClose: {
    color: "rgba(255,255,255,0.7)",
    position: "absolute",
    top: theme.spacing.unit,
    right: theme.spacing.unit
  }
});

class Carousel extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme, album, handleClose } = this.props;
    const { activeStep } = this.state;
    const maxSteps = album.photo_count;
    const photosData = album.photos;
    return (
      <div className={classes.root}>
        <ResponsiveImg
          className={classes.imageContainer}
          photo={photosData[activeStep]}
          title={photosData[activeStep].name}
          timestamp={photosData[activeStep].updated_time}
        />

        <MobileStepper
          classes={{
            dot: classes.dots,
            dotActive: classes.dotActive
          }}
          position="bottom"
          steps={maxSteps}
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              className={classes.buttonStepper}
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Suivant
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              className={classes.buttonStepper}
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Précédent
            </Button>
          }
        />
        <Button className={classes.buttonClose} onClick={handleClose}>
          <CloseIcon />
        </Button>
      </div>
    );
  }
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  album: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Carousel);

/*

*/
