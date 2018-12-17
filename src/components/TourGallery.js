import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

export default class TourGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

    this.photos = this.props.photos.map((photo, index) => {
      return {
        src: photo.image.childImageSharp.fluid.src,
        srcSet: photo.image.childImageSharp.fluid.srcSet,
        sizes: photo.image.childImageSharp.fluid.sizes,
        width: photo.image.childImageSharp.fluid.aspectRatio,
        height: 1,
        alt: photo.alt,
        key: index
      };
    });

    this.images = this.props.photos.map((photo, index) => {
      let photoCaption = "";
      if (photo.caption && photo.caption.length > 0) {
        photoCaption = photo.caption;
      } else {
        photoCaption = photo.alt;
      }
      return {
        src: photo.image.childImageSharp.fluid.src,
        srcSet: photo.image.childImageSharp.fluid.srcSet,
        alt: photo.alt,
        caption: photoCaption
      };
    });
  }

  openLightbox(event, obj) {
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
    return (
      <div>
        <Gallery photos={this.photos} columns={3} onClick={this.openLightbox} />
        <Lightbox
          images={this.images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}
