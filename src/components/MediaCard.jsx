import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { v4 } from "uuid";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import GalleryLight from "components/GalleryLight.jsx";

const styles = theme => ({
  gridList: {
    width: "100%",
    height: "100%"
  },
  mediaContent: {
    paddingTop: theme.spacing.unit * 2
  }
});

const MediaCard = ({ medias, classes }) => {
  return (
    <React.Fragment>
      {medias.map((media, index) => {
        return (
          <div key={v4()}>
            <div className={classes.mediaContent}>
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
                  <GalleryLight
                    album={media}
                    showThumbnails
                    backdropClosesModal={true}
                  />
                ) : media.type === "YT_video" ? (
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=" + media.videoId}
                    width="100%"
                    controls={true}
                  />
                ) : null}
              </CardContent>
            </div>
            {index !== medias.length - 1 ? <Divider variant="middle" /> : null}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default withStyles(styles)(MediaCard);
