import React, { Component } from "react";

import MediaCard from "components/MediaCard.jsx";

class MediaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      medias: null
    };
  }

  handleOpen(albumName) {
    this.setState({ carouselOpen: true, albumName: albumName });
  }

  handleClose = () => {
    this.setState({ carouselOpen: false });
  };

  //todo : if pictures are in local storage, do not update
  componentDidMount() {
    fetch("/api/getData")
      .then(res => res.json())
      .then(medias => {
        localStorage.setItem("albumData", JSON.stringify(medias));
        this.setState(() => ({
          loading: false,
          medias: medias
        }));
      })
      .catch(error => console.error(error));
  }

  render() {
    const { loading, medias } = this.state;

    if (loading) return <div>Chargement des medias</div>;
    else if (!medias.length) return <div>Pas d&#39albums</div>;
    else {
      return (
        <React.Fragment>
          <MediaCard medias={medias} />
        </React.Fragment>
      );
    }
  }
}

export default MediaPage;
