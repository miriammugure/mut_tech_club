import React from "react";
import Meetings from "./Meetings";
import "./Events.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

function Events() {
  return (
    <div className="eventContainer">
      <div className="eventTitle">
        <h2>weekly events</h2>
      </div>
      <div className="eventBoxContainer">
        <Meetings
          eventLeader={"webster ifedha"}
          eventName={"cyber security"}
          timeIcon={<IoMdTime />}
          time={"Monday-(4:00 pm-7:00pm)"}
          locationIcon={<IoLocationSharp />}
          locationName={"computer lab F04"}
        />
        <Meetings
          eventLeader={"manase gunga"}
          eventName={"ui/ux"}
          timeIcon={<IoMdTime />}
          time={"Tuesday-(5:00 pm-8:00pm)"}
          locationIcon={<IoLocationSharp />}
          locationName={"computer lab F04"}
        />
        <Meetings
          eventLeader={"carolyne githenduka"}
          eventName={"web development"}
          timeIcon={<IoMdTime />}
          time={"wednesday-(6:00 pm-9:00pm)"}
          locationIcon={<IoLocationSharp />}
          locationName={"computer lab F04"}
        />
        <Meetings
          eventLeader={"stanley amunze"}
          eventName={"mobile apps development"}
          timeIcon={<IoMdTime />}
          time={"thursday-(4:00 pm-7:00pm)"}
          locationIcon={<IoLocationSharp />}
          locationName={"lab F04"}
        />
        <Meetings
          eventLeader={"paul karanja"}
          eventName={"cloud engineering"}
          timeIcon={<IoMdTime />}
          time={"friday-(3:00 pm-6:00pm)"}
          locationIcon={<IoLocationSharp />}
          locationName={"lab F04"}
        />
        <Meetings
          eventLeader={"evyonn mbithe"}
          eventName={"power platform"}
          timeIcon={<IoMdTime />}
          time={"saturday-(1:00 pm-4:00pm)"}
          locationIcon={<IoLocationSharp />}
          locationName={"lab F04"}
        />
      </div>
    </div>
  );
}

export default Events;
