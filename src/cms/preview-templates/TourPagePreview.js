import React, { Component } from "react";
import getRenderedSize from "react-rendered-size";
import PropTypes from "prop-types";

import "../../assets/css/open-sans.css";
import "../../assets/css/raleway.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";

import "../../assets/css/globalStyles.css";
import "../../assets/css/layout.css";
import "../../assets/css/responsive.css";

import Banner from "../../components/Banner";
import TourInformation from "../../components/TourInformation";

import "../../assets/css/tour.css";

const Image = ({ imageSource }) => {
  return <img src={imageSource} />;
};

export default class TourPagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      photoGalleryObject: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data) {
      prevState.data.photoGallery.photo.forEach(photo => {
        const ImageComponent = <Image imageSource={photo.image} />;
        if (!prevState.photoGalleryObject[photo.image]) {
          const imageSize = getRenderedSize(ImageComponent);
          if (imageSize.height > 0 && imageSize.width > 0) {
            const imageAspect = imageSize.width / imageSize.height;
            this.setState(
              prevState =>
                (prevState.photoGalleryObject[photo.image] = imageAspect)
            );
          }
        }
      });
    } else {
      const { entry } = prevProps;
      this.setState(
        prevState => (prevState.data = entry.getIn(["data"]).toJS())
      );
    }
  }

  render() {
    const { widgetFor } = this.props;
    if (this.state.data) {
      if (
        Object.values(this.state.photoGalleryObject).length ===
        this.state.data.photoGallery.photo.length
      ) {
        return (
          <React.Fragment>
            <Banner
              extraClass="details-one"
              title1={this.state.data.tour_id}
              title2=""
              text={this.state.data.bannerblurb}
              breadcrumb="tour"
              imageBanner={this.state.data.imagebanner}
            />
            <TourInformation
              tourInfo={{
                html: widgetFor("body"),
                frontmatter: this.state.data
              }}
              photoGalleryObject={this.state.photoGalleryObject}
            />
          </React.Fragment>
        );
      } else {
        return <div>Loading...</div>;
      }
    } else {
      return <div>Loading...</div>;
    }
  }
}

TourPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};
