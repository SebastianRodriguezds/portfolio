import { Timeline, Events, Event } from "vertical-timeline-component-react";
import {TimelineElement}  from "../models/timeline"

interface TimelineProps {
  timelineElements: TimelineElement[];
}

const customTheme = {
  borderDotColor: "#ffffff",
  descriptionColor: "#262626",
  dotColor: "#d0cdc4",
  eventColor: "#965500",
  lineColor: "#d0cdc4",
  subtitleColor: "#164863",
  titleColor: "#405b73",
  yearColor: "#9BBEC8",
};


export default function TimelineList({timelineElements}:TimelineProps ){
return(
  <div id ="timeline" className="timeline_container">
    <h2 className="timeline_container-title">Timeline</h2>
    <div className="timeline_container-items">
      <Timeline lang="en"
      theme={customTheme}
      // dateFormat="only-number"
      collapse
      withoutDay={true}
      >
       {timelineElements.map((ele) => (
        <Events
        title={`${ele.date.split('-')[0]} / ${ele.title}`}
          subtitle={ele.location}
          startDate="2020"
 
              defaultClosed
              key={ele.id}
              >
                <Event title="see more.." description={[ele.description]} />
        </Events>
       ))}

      </Timeline>
    </div>
  </div>
)
}