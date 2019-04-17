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
import DestinationsArea from "../../components/DestinationsArea";
import AssociatesArea from "../../components/AssociatesArea";

import "../../assets/css/about.css";

const AboutPagePreview = props => {
  const { entry, fieldsMetaData } = props;
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <React.Fragment>
        <Banner
          extraClass="about-banner"
          title1="About"
          title2="US"
          text={data.banner.blurb}
          breadcrumb="About us"
          imageBanner={data.banner.imagebanner}
        />
        {/* <AboutAdventures /> */}
        <AssociatesArea
          heading1={data.partnersarea.heading1}
          heading2={data.partnersarea.heading2}
          blurb={data.partnersarea.introduction}
          partners={data.partnersarea.partner}
        />
        <DestinationsArea
          heading1={data.destinationsarea.heading1}
          heading2={data.destinationsarea.heading2}
          blurb={data.destinationsarea.introduction}
          destinations={data.destinationsarea.destination}
        />
      </React.Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
};
AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
