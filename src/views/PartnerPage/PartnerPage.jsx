import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import avatarImg from "assets/img/avatar.png";
import tonneauLogo from "assets/img/logos/tonneau.png";
import heinekenLogo from "assets/img/logos/heineken.png";
import rossignolLogo from "assets/img/logos/rossignol.png";
import clairLogo from "assets/img/logos/clair.png";
import chiaLogo from "assets/img/logos/chia-dos-mundos.png";

const styles = () => ({
  root: {
    textAlign: "center"
  },
  avatar: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "50%",
    marginBottom: "20px"
  },
  logo: {
    height: "100px",
    borderRadius: "10px"
  },
  divider: {
    marginTop: "20px",
    marginBottom: "20px"
  }
});

const ProfilePage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img className={classes.avatar} src={avatarImg} alt="avatar" />
      <Typography variant="h5" gutterBottom>
        14 000 km à vélo, 17 pays traversés entre Europe et Asie à la découverte
        du monde et de ses habitants.
      </Typography>
      <Divider variant="middle" className={classes.divider}/>
      <Typography variant="h5" gutterBottom >
        Merci à eux, sans qui l'aventure n'aurait pas été possible
      </Typography>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item sm={2}>
          <img
            className={classes.logo}
            src={tonneauLogo}
            alt="logo tonneau de diogènne"
          />
        </Grid>
        <Grid item sm={2}>
          <img
            className={classes.logo}
            src={heinekenLogo}
            alt="logo heineken"
          />
        </Grid>
        <Grid item sm={2}>
          <img
            className={classes.logo}
            src={rossignolLogo}
            alt="logo Rossignol"
          />
        </Grid>
        <Grid item sm={2}>
          <img className={classes.logo} src={clairLogo} alt="logo Clair" />
        </Grid>
        <Grid item sm={3}>
          <img className={classes.logo} src={chiaLogo} alt="logo Clair" />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ProfilePage);
