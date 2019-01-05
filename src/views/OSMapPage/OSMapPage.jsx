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
      allowfullscreen="true"
      title="uMap ifram"
      src="https://umap.openstreetmap.fr/fr/map/en-selle-pour-pekin_266919?scaleControl=true&miniMap=true&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=false&embedControl=false&datalayersControl=true&onLoadPanel=undefined&captionBar=false&fullscreenControl=true&locateControl=false&measureControl=false&editinosmControl=false"
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
};

export default withStyles(styles)(OSMapPage);
