import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import SchoolIcon from '@material-ui/icons/School';
import 'react-vertical-timeline-component/style.min.css';
const Education = () => {
  return (
    <div className='experience'>
       <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - present"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Yangon
            </h3>
            <p>Archaeology</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Education