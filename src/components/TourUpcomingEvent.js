import React from "react";
import BookButton from "./BookButton";
import dateformat from "dateformat";

const TourUpcomingEvent = props => {
  let eventDateFormatted = dateformat(props.eventDate, "dd mmm yyyy");
  return (
    <tr>
      <td className="trip-date">
        <div>{eventDateFormatted}</div>
      </td>
      <td className="trip-action">
        <BookButton
          text="Book now"
          tour={props.tour}
          date={eventDateFormatted}
        />
      </td>
    </tr>
  );
};

export default TourUpcomingEvent;
