import React from "react";

const About = () => {
  return (
    <section
      className="ls s-pt-60 s-pb-0 s-pt-md-55 s-pb-md-45 s-pt-lg-145 s-pb-lg-115 c-mb-55 c-mb-md-0 text-center text-md-left side-section"
      id="about_section"
    >
      <div className="divider-5 d-none d-mb-block"></div>
      <div className="cover-image s-cover-left"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://www.enviospronto.com/wp-content/uploads/2022/03/Rear-Truck-Shot-min.jpeg" alt="" />
          </div>
          <div className="col-md-6">
            <div className="item-content content-left-padding">
              <h3 className="special-heading">
                Licensed and insured in Southern California
              </h3>
              <p>
                Fyxme services customers in Los Angeles, Irvine, Beverly Hills,
                Pasadena, San Marino, Brentwood, Manhattan Beach, Newport Beach,
                Laguna Beach, Santa Clarita, Costa Mesa, Hawthorne, Santa Ana,
                Lake Forest, Anaheim, Yorba Linda, Orange, Fountain Valley,
                Brea, Buena Park, Fullerton, Huntington Beach, Mission Viejo,
                San Clemente, Tustin, Villa Park, Coto de Casa, Laguna Hills,
                Dana Point, and other Los Angeles and Orange County cities.
              </p>
              <div className="row licence-images">
                <div className="col-md-6">
                  <img src="images/bar-image.png" alt="" />
                  <p class='about-text-section'>License #- 295556</p>
                </div>
                <div className="col-md-6 licence-image-2">
                  <img src="images/DTSCLogo2.png" alt="" />
                  <p class='about-text-section'>
                  EPA ID- CAL000445560
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
