import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
//import greyColor from "@material-ui/core/colors/grey";

import Favorite from "@material-ui/icons/Favorite";
import gitLabIcon from "assets/img/gitlab.svg";

const styles = theme => ({
  root: {
    display: "flex",
    padding: theme.spacing.unit * 4,
    textAlign: "center"
  },
  footerSpace: {
    flexGrow: 1
  },
  icon: {
    width: "18px",
    height: "18px"
  }
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.root}>
      <a
        href="https://gitlab.com/frox/en-selle-pour-pekin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant="overline" color="textPrimary">
          <img className={classes.icon} src={gitLabIcon} alt="Gitlab logo" />{" "}
          Fork me on GitLab
        </Typography>
      </a>
      <div className={classes.footerSpace} />
      <Typography variant="overline" color="textPrimary">
        &copy; {1900 + new Date().getYear()} , made with{" "}
        <Favorite className={classes.icon} /> by a coder for a biker
      </Typography>
    </footer>
  );
};
export default withStyles(styles)(Footer);
