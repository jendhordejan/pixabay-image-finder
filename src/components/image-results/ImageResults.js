import React, { Component } from "react";
import GridList from "material-ui/GridList/GridList";
import GridListTile from "material-ui/GridList/GridTile";
import IconButton from "material-ui/IconButton";
import ZoomInIcon from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ImageResults extends Component {
  state = {
    open: false,
    currentImage: ""
  };

  handleOpen = img => {
    this.setState({ open: true, currentImage: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
                <IconButton
                  onClick={() => this.handleOpen(imageItem.largeImageURL)}
                >
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

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImage} alt="" style={{ width: "100%" }} />
        </Dialog>
      </div>
    );
  }
}

export default ImageResults;
