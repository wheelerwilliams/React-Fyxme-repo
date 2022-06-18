/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SelectorComponent from "../../pages/SelectorPage";

const Landing = ({ showMessage, handleOpenModal, handleCloseMessage }) => {
  return (
    <section className="hero-header overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {showMessage ? (
              <div className="emergency-news">
                <h2>Your safety is our top priority</h2>
                <h3>While we remain "OPEN"</h3>
                <p>
                  We’re now adopting new health & safety procedures to
                  accommodate COVID-19 guidelines. Automotive repair is
                  unaffected by any California mandates.{" "}
                  <strong>
                    Our technicians are taking all necessary precautions to keep
                    you and themselves safe
                  </strong>
                  , including wearing masks and gloves during the repair
                  process.{" "}
                  <strong>
                    Our process does not require any physical contact with the
                    customer
                  </strong>
                  , so you can safely practice social distancing while still
                  having your car’s damage repaired in a timely manner.
                </p>
                <p>
                  <button onClick={handleCloseMessage}>
                    X Close this message
                  </button>
                </p>
              </div>
            ) : null}
            <div className="intro_layers_wrapper text-center text-xl-left">
              <div className="intro_layers">
                <div className="divider-20 d-none d-lg-block d-xl-none"></div>

                <div className="intro_layer">
                  <h2 className="intro_featured_word">
                    Mobile Car Scratch & Bumper Repair BMW
                  </h2>
                  <h5 className="subtitlepage">
                    Dealership quality auto repair service at your home or
                    office. Upfront pricing. No hidden fees.
                  </h5>
                </div>
                <div
                  className="intro_layer"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ul className="list1" style={{ textAlign: "left" }}>
                    <li>Same day free estimate</li>
                    <li>75% faster than most auto body shops</li>
                    <li>Paint matching with lifetime guarantee</li>
                    <li>No rental car needed</li>
                  </ul>
                </div>
                <SelectorComponent landingName="BMW" />
                <div className="intro_layer estimateButtonWrapper">
                  <div className="slide-button">
                    <a
                      className="btn btn-small btn-maincolor estimateButton"
                      href="#"
                      onClick={handleOpenModal}
                    >
                      Get FREE estimate now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
