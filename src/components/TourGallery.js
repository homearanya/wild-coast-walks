import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

function convertPhotos(photos, photoGalleryObject) {
  return photos
    .filter(photo => photo.image)
    .map((photo, index) => {
      console.log("convertphotos", photo);
      return photo.image
        ? photo.image.childImageSharp
          ? {
              src: photo.image.childImageSharp.fluid.src,
              srcSet: photo.image.childImageSharp.fluid.srcSet,
              sizes: photo.image.childImageSharp.fluid.sizes,
              width: photo.image.childImageSharp.fluid.aspectRatio,
              height: 1,
              alt: photo.alt,
              key: index
            }
          : {
              src: photo.image,
              width: photoGalleryObject
                ? photoGalleryObject[photo.image]
                  ? photoGalleryObject[photo.image]
                  : 1
                : 1,
              height: 1,
              alt: photo.alt
            }
        : null;
    });
}

function convertImages(photos) {
  return photos
    .filter(photo => photo.image)
    .map((photo, index) => {
      console.log("convertimages", photo);
      let photoCaption = "";
      if (photo.caption && photo.caption.length > 0) {
        photoCaption = photo.caption;
      } else {
        photoCaption = photo.alt;
      }
      return photo.image
        ? photo.image.childImageSharp
          ? {
              src: photo.image.childImageSharp.fluid.src,
              srcSet: photo.image.childImageSharp.fluid.srcSet,
              alt: photo.alt,
              caption: photoCaption
            }
          : {
              src: photo.image,
              alt: photo.alt,
              caption: photoCaption
            }
        : null;
    });
}

export default class TourGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
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
    const photos = convertPhotos(
      this.props.photos,
      this.props.photoGalleryObject
    );
    const images = convertImages(this.props.photos);
    return (
      <div>
        <Gallery photos={photos} columns={3} onClick={this.openLightbox} />
        <Lightbox
          images={images}
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
