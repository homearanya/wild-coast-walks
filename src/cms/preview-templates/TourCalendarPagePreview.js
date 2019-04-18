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
import { UpcomingEventsTemplate } from "../../components/UpcomingEvents";

import "../../assets/css/tourCalendar.css";

let upcomingEvents = [];

const TourCalendarPagePreview = props => {
  const { entry, widgetFor, fieldsMetaData } = props;
  const data = entry.getIn(["data"]).toJS();

  const eventsSelection = fieldsMetaData.getIn(["eventsOrigin", "events"]);
  const toursSelection = fieldsMetaData.getIn(["toursOrigin", "tours"]);

  if (data && eventsSelection && toursSelection) {
    const eventsArray = Object.values(eventsSelection.toJS());
    const toursObject = toursSelection.toJS();
    eventsArray
      .filter(event => {
        return toursObject[event.tour];
      })
      .forEach(event => {
        const eventObject = {};
        eventObject.node = {};
        eventObject.node.id = event.date.toISOString();
        eventObject.node.frontmatter = {};
        eventObject.node.frontmatter.date = eventObject.node.id;
        eventObject.node.frontmatter.tour = {};
        eventObject.node.frontmatter.tour.frontmatter = toursObject[event.tour];
        eventObject.node.frontmatter.tour.fields = {};
        eventObject.node.frontmatter.tour.fields.slug =
          "/tours/" +
          slugify(toursObject[event.tour].destination) +
          "/" +
          slugify(toursObject[event.tour].activity) +
          "/" +
          slugify(event.tour) +
          "/";
        upcomingEvents.push(eventObject);
      });
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
        <UpcomingEventsTemplate upcomingEvents={upcomingEvents} />
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
