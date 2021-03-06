import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import Indicators from "components/Indicators.jsx";

const styles = theme => ({
  iframe: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    border: "0"
    //pointerEvents: "none"
  }
});

class Home extends Component {
  //setLocation(location.pathname);
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      mapData: null
    };
  }

  componentDidMount() {
    fetch("esppData.json")
      .then(res => res.json())
      .then(esppData => {
        this.setState(() => ({
          loading: false,
          mapData: esppData.map
        }));
      })
      .catch(error => console.error(error));
  }

  render() {
    const { classes } = this.props;
    const { mapData, loading } = this.state;
    return (
      <React.Fragment>
        {loading ? (
          <div>Chargement des données</div>
        ) : (
          <Indicators mapData={mapData} />
        )}
        <iframe
          className={classes.iframe}
          width="100%"
          height={window.innerHeight * 0.6}
          frameBorder="0"
          allowfullscreen="true"
          title="uMap ifram"
          src="https://umap.openstreetmap.fr/fr/map/en-selle-pour-pekin_266919?scaleControl=true&miniMap=true&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=false&embedControl=false&datalayersControl=true&onLoadPanel=undefined&captionBar=false&fullscreenControl=true&locateControl=false&measureControl=false&editinosmControl=false"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
        <Divider variant="middle" />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);


