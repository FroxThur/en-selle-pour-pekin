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
  gridListItem: {
    height: "360px"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icons: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

function LineGrid(props) {
  const { album, classes, handleOpenAlbum } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {album.photos.map((photo, index) => (
          <GridListTile key={v4()} className={classes.gridListItem}>
            <img src={photo.photoResSm.source} alt="little" />
            {index === 0 ? (
              <GridListTileBar
                title={album.photo_count + " photos"}
                actionIcon={
                  <IconButton
                    className={classes.icons}
                    onClick={() => handleOpenAlbum(album.name)}
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
