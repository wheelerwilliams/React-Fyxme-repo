import React from "react";
import ImageCard from "../components/HowItWorks/ImageCard";

/*
    1.  Take a picture of the damage and text or email to FYXME same day free estimate
    2.  Schedule an appointment and FYXME comes to your home or office
    3.  Our technicians review and explain the same day repair
    4.  We use environmentally safe products and leave no mess
    5.  We match the paint on site and offer a lifetime warranty
    6.  Same day service with most repairs between 3-6 hours

*/

const HowItWorks = () => {
  return (
    <section
      className="ls s-pt-55 s-pt-md-50 s-pb-50 s-pt-lg-100 s-pb-lg-50 service-section howitworks-section text-center text-lg-left c-gutter-0"
      id="works"
    >
      <div className="container">
        <div className=" col-12 mb-30 text-center">
          <h4>How It Works</h4>
        </div>
        <div className="row justify-content-center">
          <ImageCard
            image="/images/HITW-01-min.png"
            text="Take a picture of the damage and text or email to FYXME for a free estimate."
          />
          <ImageCard
            image="/images/HITW-02-min.png"
            text="Schedule an appointment and FYXME comes to your home or office."
          />
          <ImageCard
            image="/images/HITW-03-min.png"
            text="Our technicians review and explain the same day repair."
          />
          <ImageCard
            image="/images/HITW-04-min.png"
            text="We use environmentally safe products and leave no mess."
          />
          <ImageCard
            image="/images/HITW-05-min.png"
            text="We match the paint on site and offer a lifetime warranty."
          />
          <ImageCard
            image="/images/HITW-06-min.png"
            text="Same day service with most repairs between 3-6 hours."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
