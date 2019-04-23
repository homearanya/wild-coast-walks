import React from "react";
import PropTypes from "prop-types";
import { slugify } from "../../assets/utils/helpers";

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

let toursObject = {};

const HomePagePreview = props => {
  const { entry, fieldsMetaData } = props;
  const data = entry.getIn(["data"]).toJS();

  data.toursarea.section.forEach(section => {
    section.tours.forEach(tour => {
      const tourObject = fieldsMetaData.getIn([
        "toursarea",
        "section",
        "tours",
        "tour",
        "tours",
        tour.tour
      ]);
      toursObject[tour.tour] = tourObject;
    });
  });
  // if (data) {

  if (data && !Object.values(toursObject).some(e => !e)) {
    data.toursarea.section.forEach(section => {
      section.tours.forEach((tour, index) => {
        const tourName = tour.tour;
        tour.tour = {};
        tour.tour.frontmatter = toursObject[tourName].toJS();
        tour.tour.id = index;
        tour.tour.fields = {};
        tour.tour.fields.slug =
          "/tours/" +
          slugify(tour.tour.frontmatter.destination) +
          "/" +
          slugify(tour.tour.frontmatter.activity) +
          "/" +
          slugify(tourName) +
          "/";
      });
    });
    return (
      <React.Fragment>
        <SliderArea slider={data.slider} />
        <AboutArea aboutArea={data.aboutarea} />
        <ToursPopular toursArea={data.toursarea} />
      </React.Fragment>
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
