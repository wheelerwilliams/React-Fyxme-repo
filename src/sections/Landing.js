/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SelectorComponent from "../pages/SelectorPage";

const Landing = ({ showMessage, handleOpenModal, handleCloseMessage }) => {
  return (
    <section className="hero-header overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="intro_layers_wrapper text-center text-xl-left">
              <div className="intro_layers">
                <div className="divider-20 d-none d-lg-block d-xl-none"></div>

                <div className="intro_layer">
                  <h2 className="intro_featured_word">
                    Mobile Car Scratch & Bumper Repair
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
                <SelectorComponent landingName="main" />
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
