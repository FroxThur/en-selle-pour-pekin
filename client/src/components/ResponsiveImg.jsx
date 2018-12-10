import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import { Picture } from "react-responsive-picture";

const styles = theme => ({
  root: {
    color: theme.palette.grey[50],
    textAlign: "center"
  },
  photoStyle: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  photoTitle: {
    position: "absolute",
    left: "50%",
    padding: "5px",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: "25px",
    transform: "translate(-50%)",
    zIndex: theme.zIndex.modal,
    "@media(max-width: 900px)":{
      width: "80%"
    }
  },
  photoTimestamp: {
    position: "absolute",
    bottom: 0,
    right: 0
  }
});

class ResponsiveImg extends Component {
  render() {
    const { photo, classes, title, timestamp } = this.props;

    const imageLg = photo.photoResLg; //Large
    const imageMd = photo.photoResMd; //medium
    const imageSm = photo.photoResSm; //small


    return (
      <div className={classes.root}>
        <div className={classes.photoTitle}>
          <Typography variant="h6" color="inherit" align="center">
            {title}
          </Typography>
          <Typography variant="subtitle1" align="right" color="inherit">
            {timestamp}
          </Typography>
        </div>
        <Picture
          className={classes.photoStyle}
          src={
            imageLg.source +
            " " +
            imageLg.width +
            "w, " +
            imageMd.source +
            " " +
            imageMd.width +
            "w, " +
            imageSm.source +
            " " +
            imageSm.width +
            "w"
          }
          sizes={"100vw"}
          type="image/jpeg"
          alt={photo.height + "x" + photo.width}
        />
      </div>
    );
  }
}
ResponsiveImg.propTypes = {
  photo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(ResponsiveImg);
