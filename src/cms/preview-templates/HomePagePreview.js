import React from "react";
import PropTypes from "prop-types";
import { Location } from "@reach/router";
// import { slugify } from "../../assets/utils/helpers";

import "../../assets/css/open-sans.css";
import "../../assets/css/raleway.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";

import "../../assets/css/globalStyles.css";
import "../../assets/css/layout.css";
import "../../assets/css/responsive.css";

import SliderArea from "../../components/SliderArea";
import AboutArea from "../../components/AboutArea";
import ToursPopular from "../../components/ToursPopular";

import "../../assets/css/home-page.css";

let toursObject = new Object();

const HomePagePreview = props => {
  const { entry, fieldsMetaData } = props;
  const data = entry.getIn(["data"]).toJS();

  // data.servicesArea.services.forEach(service => {
  //   const serviceObject = fieldsMetaData.getIn([
  //     "servicesArea",
  //     "services",
  //     "service",
  //     "services",
  //     service.service
  //   ]);
  //   servicesObject[service.service] = serviceObject;
  // });

  if (data) {
    // if (data && !Object.values(servicesObject).some(e => !e)) {
    //   data.servicesArea.services.forEach((service, index) => {
    //     const serviceName = service.service;
    //     service.service = {};
    //     service.service.frontmatter = servicesObject[serviceName].toJS();
    //     service.service.id = index;
    //     service.service.fields = {};
    //     service.service.fields.slug = "/services/" + slugify(serviceName) + "/";
    //   });
    return (
      <Location>
        {({ location }) => {
          return (
            <React.Fragment>
              <SliderArea slider={data.slider} />;
            </React.Fragment>
          );
          // return <HomePageTemplate frontmatter={data} location={location} />;
        }}
      </Location>
    );
  } else {
    return <div>Loading...</div>;
  }
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HomePagePreview;
