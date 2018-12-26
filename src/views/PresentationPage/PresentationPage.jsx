import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import avatarImg from "assets/img/valentin-avatar.jpg";
import tonneauLogo from "assets/img/logos/tonneau.jpg";
import heinekenLogo from "assets/img/logos/heineken.png";
import rossignolLogo from "assets/img/logos/rossignol.jpg";
import clairLogo from "assets/img/logos/clair.webp";

const styles = theme => ({
  avatar: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: "50%"
  },
  logo: {
    height: "100px",
    borderRadius: "10px"
  }
});

const ProfilePage = ({ classes }) => {
  return (
    <React.Fragment>
      <img className={classes.avatar} src={avatarImg} alt="avatar" />
      <Typography variant="h4" gutterBottom>
        Le voyage
      </Typography>
      <Typography paragraph>
        14 000km, de la France à la chine en vélo. Je vais passer par plus de
        XXXX pays sur une durée de 8 mois.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Un voyage musical
      </Typography>
      <Typography paragraph>
        Je souhaite retracer musicalement le voyage. Pour cela je suis parti
        avec ​
      </Typography>
      <ul>
        <li>
          <Typography paragraph>
            un micro pour pouvoir enregistrer des musiciens rencontrés sur la
            route, une chorale, un bruit de train, bref tout ce qui pourra être
            intéressant.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            un piano USB pour pouvoir ajouter à cela des mélodies, des
            percussions, etc.
          </Typography>
        </li>

        <li>
          <Typography paragraph>
            un ordinateur pour gérer la production musicale.
          </Typography>
        </li>
      </ul>
      <Divider variant="middle" />

      <Typography variant="h4" gutterBottom>
        Partenaires
      </Typography>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item sm={3}>
          <img
            className={classes.logo}
            src={tonneauLogo}
            alt="logo tonneau de diogènne"
          />
        </Grid>
        <Grid item sm={3}>
          <img
            className={classes.logo}
            src={heinekenLogo}
            alt="logo heineken"
          />
        </Grid>
        <Grid item sm={3}>
          <img
            className={classes.logo}
            src={rossignolLogo}
            alt="logo Rossignol"
          />
        </Grid>
        <Grid item sm={3}>
          <img className={classes.logo} src={clairLogo} alt="logo Clair" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(ProfilePage);
