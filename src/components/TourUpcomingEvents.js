import React from "react";

import TourUpcomingEvent from "./TourUpcomingEvent";

const TourUpcomingEvents = props => {
  // sort events by date ascending
  props.tourEvents.sort((a, b) => {
    let aDate = new Date(a.frontmatter.date);
    let bDate = new Date(b.frontmatter.date);
    return aDate - bDate;
  });
  // filter out expired events
  let today = new Date();
  let currentEventsDates = [];
  props.tourEvents.forEach(event => {
    let eventDate = new Date(event.frontmatter.date);
    if (eventDate > today) {
      currentEventsDates.push(event.frontmatter.date);
    }
  });

  if (currentEventsDates.length === 0) {
    return null;
  }

  return (
    <div className="trip-pricing-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <div className="title-border">
                <h1>
                  {props.upcomingEventsInfo.heading1}{" "}
                  <span>{props.upcomingEventsInfo.heading2}</span>
                </h1>
              </div>
              <p>{props.upcomingEventsInfo.blurb}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="table-content table-responsive">
              <table>
                <thead>
                  <tr>
                    <td className="trip-date">
                      <div>Dates</div>
                    </td>
                    <td className="trip-action">
                      <div />
                    </td>
                  </tr>
                  <tr>
                    <td className="transparent" colSpan={4} />
                  </tr>
                </thead>
                <tbody>
                  {currentEventsDates.map((eventDate, index) => {
                    return (
                      <TourUpcomingEvent
                        key={index}
                        eventDate={eventDate}
                        tour={props.tour}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourUpcomingEvents;
