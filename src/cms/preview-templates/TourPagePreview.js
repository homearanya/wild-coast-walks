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
      photoGalleryObject: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "component did update",
      this.props.entry.getIn(["data"]).toJS()
    );
    const data = prevProps.entry.getIn(["data"]).toJS();
    if (data) {
      data.photoGallery.photo.forEach(photo => {
        const ImageComponent = <Image imageSource={photo.image} />;
        if (!prevState.photoGalleryObject[photo.image]) {
          const imageSize = getRenderedSize(ImageComponent);
          if (imageSize.height > 0 && imageSize.width > 0) {
            const imageAspect =
              Math.round((imageSize.width / imageSize.height) * 1000) / 1000;
            this.setState(
              prevState =>
                (prevState.photoGalleryObject[photo.image] = imageAspect)
            );
          }
        }
      });
    }
  }

  render() {
    const { entry, widgetFor } = this.props;
    const data = entry.getIn(["data"]).toJS();
    console.log("tour page preview - data ", data);
    if (data) {
      return (
        <React.Fragment>
          <Banner
            extraClass="details-one"
            title1={data.tour_id}
            title2=""
            text={data.bannerblurb}
            breadcrumb="tour"
            imageBanner={data.imagebanner}
          />
          <TourInformation
            tourInfo={{
              html: widgetFor("body"),
              frontmatter: data
            }}
            photoGalleryObject={this.state.photoGalleryObject}
          />
        </React.Fragment>
      );
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
