import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/AddCircleOutline";

import { v4 } from "uuid";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    overflow: "hidden"
  },
  icons: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  source: {
    height: "100%"
  }
});

function LineGrid(props) {
  const { album, classes, openLightbox } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {album.photos.slice(0,3).map((photo, index) => (
          <GridListTile key={v4()}>
            <a
              href={photo.photoResSm.source}
              onClick={event => openLightbox(index, event)}
            >
              <img
                src={photo.photoResSm.source}
                className={classes.source}
                alt="Album"
              />
            </a>
            <img src={photo.photoResSm.source} alt="little album" />
            {index === 0 ? (
              <GridListTileBar
                title={album.photo_count + " photos"}
                onClick={event => openLightbox(index, event)}
                actionIcon={
                  <IconButton
                    className={classes.icons}
                    onClick={event => openLightbox(index, event)}
                  >
                    <Add />
                  </IconButton>
                }
              />
            ) : null}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

LineGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  album: PropTypes.object.isRequired
};

export default withStyles(styles)(LineGrid);
