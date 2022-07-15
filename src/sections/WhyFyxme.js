import React from "react";

const CardItem = ({ image, title, text, alt }) => {
  return (
    <>
      <div className="media">
        <div className="icon-styled color-main fs-40">
          <img src={image} alt={alt || "someAlt"} />
        </div>
        <div className="media-body">
          <h6>{title}</h6>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

const WhyFyxme = () => {
  return (
    <section
      className="ls s-pt-55 s-pt-md-50 s-pb-50 s-pt-lg-100 s-pb-lg-50 service-section text-center text-lg-left c-gutter-0"
      id="service"
    >
      <div className="container">
        <div className=" col-12 mb-50 text-center">
          <h4>Mobile Services</h4>
          <div className="divider-60 d-none d-xl-block"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-xl-6">
            {/* Col 1 */}
            <CardItem
              image="images/icons/ICONO-01-min.png"
              alt="Save time and Money"
              title="Save time and Money"
              text="Don’t leave your car at a shop for days or weeks. We provide mobile bumper and body repair services at your home or office."
            />
            <CardItem
              image="images/icons/ICONO4-01-min.png"
              alt="paint matchinh"
              title="On-site Paint Matching"
              text="Advanced computerized Envirobase® High Performance color matching and application system ensures your vehicle’s original paint color."
            />
          </div>
          <div className="col-lg-6 col-md-6 col-xl-6">
            {/* Col 2 */}
            <CardItem
              image="images/icons/ICONO5-01-min.png"
              alt="dent removal"
              title="Dent Removal"
              text="High-quality car body repair to restore fenders, bumpers, doors, and hoods back to pre-accident condition."
            />
            <CardItem
              image="images/icons/ICONO3-01-min.png"
              alt="paint car scratch repair"
              title="Paint & Scratch Repair"
              text="PPG certified technicians touch up chipped or peeling car paint, and can fix everything from minor scrapes to deep scratches."
            />

            {/* Col 3 */}
          </div>
          <div className="col-lg-6 col-md-6 col-xl-6">
            <CardItem
              image="images/icons/ICONO2-01-min.png"
              alt="replacement parts"
              title="Bumper Repair or Replacement"
              text="Restore scratched, cracked, or dented bumpers to original condition. We offer front and rear bumper repair for all makes and models. If we can’t
              fix it, we will order fender or bumper replacements and parts and install them at your location."
            />
            {/* <CardItem
              image="images/icons/ICONO6-01-min.png"
              alt="dent repair"
              title="Dent Repair"
              text="We repair dented hoods, door dings, and bumper and fender
                  dents quickly and affordably, helping to restore your car back
                  to its original condition."
            />

            <CardItem
              image="images/icons/ICONO7-01-min.png"
              alt="minor accidents"
              title="Minor Accidents, Dents and Scratches"
              text="We fix car and truck fenders and bumpers, scratches on doors,
                  hood and door dents, Paintless Dent Removal (PDR) - almost
                  anything."
            />

            <CardItem
              image="images/icons/ICONO8-01-min.png"
              alt="no rental car needed"
              title="No rental Car Needed"
              text="We will come to you and if you need a ride to work we have
                partnered with UBER."
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFyxme;
