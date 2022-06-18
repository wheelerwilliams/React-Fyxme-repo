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
          <h4>Why Fyxme?</h4>
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
              title="Industry Best Paint with Lifetime Guarantee"
              text="Our advanced computerized Envirobase® High Performance PPG paint color matching and advanced turbine application system will ensure your original paints color."
            />
          </div>
          <div className="col-lg-6 col-md-6 col-xl-6">
            {/* Col 2 */}
            <CardItem
              image="images/icons/ICONO5-01-min.png"
              alt="best quality"
              title="Dealership Quality"
              text="We have partnered with the auto industry’s best suppliers to ensure the tools and products we use achieve the same results you will find anywhere else."
            />
            <CardItem
              image="images/icons/ICONO3-01-min.png"
              alt="paint car scratch repair"
              title="Paint & Car Scratch Repair"
              text="Our mobile technicians can restore paint, repair, and fix minor scrapes or deep scratches on car doors, hoods, bumpers and fenders."
            />

            {/* Col 3 */}
          </div>
          <div className="col-lg-6 col-md-6 col-xl-6">
            <CardItem
              image="images/icons/ICONO2-01-min.png"
              alt="replacement parts"
              title="Bumper and Fender Replacement"
              text="If we can’t repair it, we will order bumper replacements and other parts and install them at your location."
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
