import React, { Component } from "react";
import GridList from "material-ui/GridList/GridList";
import GridListTile from "material-ui/GridList/GridTile";
import IconButton from "material-ui/IconButton";
import ZoomInIcon from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ImageResults extends Component {
  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(imageItem => (
            <GridListTile
              title={imageItem.tags}
              key={imageItem.id}
              subtitle={
                <span>
                  by <strong>{imageItem.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomInIcon color="white" />
                </IconButton>
              }
            >
              <img src={imageItem.largeImageURL} alt="" />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }
    return <div>{imageListContent}</div>;
  }
}

export default ImageResults;
