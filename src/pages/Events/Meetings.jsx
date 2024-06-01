import React from "react";

const Meetings = ({
  timeIcon,
  time,
  locationIcon,
  locationName,
  eventLeader,
  eventName,
}) => {
  return (
    <div className="eventBox">
      <div className="lName">
        <h4>{`leader:${eventLeader}`}</h4>
        <p>{eventName}</p>
      </div>
      <div className="event">
        {timeIcon} <p>{time}</p>
      </div>
      <div className="location">
        {locationIcon} <p>{locationName}</p>
      </div>
    </div>
  );
};

export default Meetings;
