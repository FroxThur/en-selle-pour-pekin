import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { v4 } from "uuid";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";

//import FourImgsTile from "components/FourImgsTile.jsx";
import LineGrid from "components/LineGrid.jsx";

const styles = () => ({
  gridList: {
    width: "100%",
    height: "100%"
  },
  mediaContent: {
    height: "180px"
  },
  icons: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

const MediaCard = ({ medias, classes, handleOpenAlbum }) => {
  return (
    <Grid
      container
      spacing={16}
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      {medias.map(media => {
        return (
          <Grid item sm={12} md={6} key={v4()}>
            <Card>
              <CardHeader
                disableTypography={false}
                title={
                  <Typography variant="h6" gutterBottom noWrap>
                    {media.name}
                  </Typography>
                }
                subheader={media.description}
              />
              <CardContent>
                {media.type === "photos_album" ? (
                  <LineGrid
                    className={classes.mediaContent}
                    album={media}
                    handleOpenAlbum={albumName => handleOpenAlbum(albumName)}
                  />
                ) : media.type === "YT_video" ? (
                  <div className={classes.mediaContent}>
                    <ReactPlayer
                      url={"https://www.youtube.com/watch?v=" + media.videoId}
                      height="100%"
                      width="100%"
                    />
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(styles)(MediaCard);
