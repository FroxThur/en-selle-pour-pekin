import React, { Component } from "react";

//material ui
import Modal from "@material-ui/core/Modal";

import MediaCard from "components/MediaCard.jsx";
import Carousel from "components/Carousel.jsx";

class MediaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      medias: null,
      carouselOpen: false,
      albumName: null
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
    const { loading, medias, albumName } = this.state;

    if (loading) return <div>Chargement des medias</div>;
    else if (!medias.length) return <div>Pas d&#39albums</div>;
    else
      return (
        <div>
          {this.state.carouselOpen ? (
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.carouselOpen}
              onClose={this.handleClose}
            >
              <Carousel
                album={medias.find(album => {
                  return albumName === album.name;
                })}
                handleClose={this.handleClose}
              />
            </Modal>
          ) : null}
          <MediaCard
            medias={medias}
            handleOpenAlbum={albumName => this.handleOpen(albumName)}
          />
        </div>
      );
  }
}

export default MediaPage;
