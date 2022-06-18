import React from "react";
import ImageCard from "../components/GetStarted/ImageCard";

const GetStarted = () => {
  return (
    <section
      className="s-pt-55 s-pb-0 s-pt-md-50 s-pt-lg-140 s-pb-lg-145 ls ms text-center steps-section started-section"
      id="steps"
    >
      <div className="container">
        <div className="col-12 text-center mb-55">
          <h4>3 Easy Steps to Get Started</h4>
          <div className="divider-60 d-none d-xl-block"></div>
        </div>
        <div className="row c-mb-53 c-mb-lg-0">
          <ImageCard
            image="images/icons/HITW-ICON01-01.png"
            title="Upload Photos"
            text="Take multiple photos from a few angles."
          />
          <ImageCard
            image="images/icons/HITW-ICON02-01.png"
            title="FREE SAME DAY Estimate"
            text="We call, text, and email you the same day."
          />
          <ImageCard
            image="images/icons/HITW-ICON03-01-01.png"
            title="Schedule an Appointment"
            text="All jobs are completed same day as the appointment."
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
