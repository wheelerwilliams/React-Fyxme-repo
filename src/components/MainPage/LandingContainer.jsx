/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import SelectorComponent from "../../pages/SelectorPage";

const LandingContainer = ({ showMessage, handleOpenModal, handleCloseMessage, children }) => {
  return (
    <section className="hero-header overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="intro_layers_wrapper text-center text-xl-left">
              <div className="intro_layers">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingContainer;
