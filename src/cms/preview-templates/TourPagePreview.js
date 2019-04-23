import React, { Component } from "react";
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

export default class TourPagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoGalleryObject: {},
      photoGalleryLoaded: false
    };
    this.sizeImage = this.sizeImage.bind(this);
  }
  sizeImage(e) {
    if (e) {
      const imageAspect =
        e.naturalHeight === 0 ? 1 : e.naturalWidth / e.naturalHeight;
      this.setState(prevState => {
        return (prevState.photoGalleryObject[
          e.getAttribute("src")
        ] = imageAspect);
      });
    }
  }
  photoGalleryLoaded() {
    this.setState({ photoGalleryLoaded: true });
  }
  render() {
    const { entry, widgetFor } = this.props;
    const data = entry.getIn(["data"]).toJS();

    if (data) {
      if (
        Object.values(this.state.photoGalleryObject).length ===
        data.photoGallery.photo.length
      ) {
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
              tourInfo={{ html: widgetFor("body"), frontmatter: data }}
              photoGalleryObject={this.state.photoGalleryObject}
            />
          </React.Fragment>
        );
      } else {
        if (!this.state.photoGalleryLoaded) {
          this.photoGalleryLoaded();
          return (
            <React.Fragment>
              {data.photoGallery.photo.map(photo => {
                return (
                  <img
                    key={photo.image}
                    ref={this.sizeImage}
                    src={photo.image}
                    style={{ display: "none" }}
                  />
                );
              })}
              <div>Loading...</div>
            </React.Fragment>
          );
        } else {
          return <div>Loading...</div>;
        }
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
