import React from "react";

const ClientSay = () => {
  return (
    <section
      className="ds s-pt-55 s-pb-10 s-pt-lg-90 s-pb-lg-60 s-parallax testimonials-section"
      id="section_testimonials"
    >
      <div className="container">
        <div className="row">
          <div className=" col-12 mb-50 text-center">
            <h4>Fyxme Reviews</h4>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div class="reviews-badges">
          <a href="/reviews">
            <img
              src="https://embedsocial.com/api/source_image_badges/svg-badge-6-g/en/google/33534"
              alt="alt"
            />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div
            className="embedsocial-reviews"
            data-ref="3674c23387b1517620a66b7bf7896720420360ec"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
