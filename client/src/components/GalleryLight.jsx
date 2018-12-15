import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import PropTypes from "prop-types";
import classNames from "classnames";

import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  gridList: {
    width: "100%",
    height: "100%"
  },
  mediaContent: {
    margin: "auto"
  },
  icons: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  button: {
    marginLeft: "auto"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class GalleryLight extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    event.preventDefault();
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  render() {
    const { classes } = this.props;
    const CarouselImages = this.props.album.photos.map(photo => {
      return {
        src: photo.photoResLg.source,
        width: photo.photoResLg.width,
        height: photo.photoResLg.height,
        thumbnail: photo.photoResSm.source,
        srcSet: [
          photo.photoResLg.source + " " + photo.photoResLg.width + "w",
          photo.photoResMd.source + " " + photo.photoResMd.width + "w",
          photo.photoResSm.source + " " + photo.photoResSm.width + "w"
        ],
        caption: photo.name
      };
    });

    const GalleryImages = CarouselImages.slice(0, 4);
    return (
      <div>
        <Gallery photos={GalleryImages} onClick={this.openLightbox} />
        <Lightbox
          images={CarouselImages}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          imageCountSeparator="/"
          backdropClosesModal={true}
        />
        <CardActions>
          <Button
            size="small"
            className={classes.button}
            onClick={e => this.openLightbox(e, { index: 0 })}
          >
            <AddIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            <Typography variant="button" noWrap>
              {this.props.album.photos.length + " photos"}
            </Typography>
          </Button>
        </CardActions>
      </div>
    );
  }
}

GalleryLight.propTypes = {
  album: PropTypes.object.isRequired
};

export default withStyles(styles)(GalleryLight);
