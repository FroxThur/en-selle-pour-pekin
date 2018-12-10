import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/AddCircleOutline";

import ResponsiveImg from "components/ResponsiveImg.jsx";
import { v4 } from "uuid";

const styles = () => ({
  gridList: {
    width: "100%",
    height: "100%"
  },
  icons: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

const FourImgsTile = ({ album, classes, handleOpenAlbum }) => {
  return (
    <div>
      <GridList
        cellHeight={"auto"}
        className={classes.gridList}
        cols={3}
      >
        {album.photos.slice(0, 4).map((photo, index) => {
          var colNum = 1;
          var rowNum = 1;
          if (index === 0) {
            colNum = 3;
            rowNum = 3;
          }
          return (
            <GridListTile key={v4()} cols={colNum} rows={rowNum}>
              <ResponsiveImg photo={photo} />
              {index === 3 ? (
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
          );
        })}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(FourImgsTile);
