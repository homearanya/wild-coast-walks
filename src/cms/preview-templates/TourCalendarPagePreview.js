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

import Banner from "../../components/Banner";

import "../../assets/css/tourCalendar.css";

let eventsObject = new Object();

const TourCalendarPagePreview = props => {
  const { entry, fieldsMetaData } = props;
  const data = entry.getIn(["data"]).toJS();

  // data.eventsarea.section.forEach(section => {
  //   section.events.forEach(event => {
  //     const eventObject = fieldsMetaData.getIn([
  //       "eventsarea",
  //       "section",
  //       "events",
  //       "event",
  //       "events",
  //       event.event
  //     ]);
  //     eventsObject[event.event] = eventObject;
  //   });
  // });
  // if (data) {

  // if (data && !Object.values(eventsObject).some(e => !e)) {
  //   data.eventsarea.section.forEach(section => {
  //     section.events.forEach((event, index) => {
  //       const eventName = event.event;
  //       event.event = {};
  //       event.event.frontmatter = eventsObject[eventName].toJS();
  //       event.event.id = index;
  //       event.event.fields = {};
  //       event.event.fields.slug =
  //         "/events/" +
  //         slugify(event.event.frontmatter.destination) +
  //         "/" +
  //         slugify(event.event.frontmatter.activity) +
  //         "/" +
  //         slugify(eventName) +
  //         "/";
  //     });
  //   });
  if (data && fieldsMetaData) {
    console.log("fieldsMetaData", fieldsMetaData);
    return (
      <React.Fragment>
        <Banner
          extraClass="grid"
          title1="Tour"
          title2="Calendar"
          text={data.blurb}
          breadcrumb="Calendar"
          imageBanner={data.imagebanner}
        />
      </React.Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
};

TourCalendarPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default TourCalendarPagePreview;
