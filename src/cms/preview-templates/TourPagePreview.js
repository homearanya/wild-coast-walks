import React from "react";
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

const TourPagePreview = props => {
  const { entry, widgetFor, widgetsFor, getAsset, fieldsMetaData } = props;
  const data = entry.getIn(["data"]).toJS();

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
          tourInfo={{ html: widgetFor("body"), frontmatter: data }}
        />
      </React.Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
};

TourPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default TourPagePreview;
