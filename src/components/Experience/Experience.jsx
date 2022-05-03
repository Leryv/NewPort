import React from "react";
import './Experience.css'

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="achievement">
        <div className="circle">7+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">200+</div>
        <span>Completed</span>
        <span>Project</span>
      </div>
      <div className="achievement">
        <div className="circle">32+</div>
        <span>Company</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
