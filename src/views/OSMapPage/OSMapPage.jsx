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
      width="100%"
      height={window.innerHeight * 0.8}
      frameBorder="0"
      allowfullscreen
      src="https://umap.openstreetmap.fr/fr/map/en-selle-pour-pekin_266919?scaleControl=true&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=false&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&fullscreenControl=true&measureControl=false&editinosmControl=false"
      title="uMap ifram"
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
};

export default withStyles(styles)(OSMapPage);
