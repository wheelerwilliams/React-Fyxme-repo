import React from "react";
import ModalPage from "../pages/ModalPage";

const Header = ({
  showModal,
  handleOpenModal,
  handleCloseModal,
  landingName,
}) => {
  return (
    <section
      className="page_toplogo ds s-overlay s-pt-10 s-pb-5 s-py-lg-30"
      id="top"
    >
      <ModalPage
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        landingName={landingName}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="d-lg-flex justify-content-lg-end align-items-lg-center">
              <div className="mr-auto">
                <div className="d-none d-lg-flex justify-content-center justify-content-lg-start">
                  <a href="/" className="logo">
                    <img src="images/logo-fyxme-white-orange-2.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="d-flex justify-lg-content-end align-items-center meta-icons">
                <div className="media">
                  <div className="icon-styled color-main fs-20">
                    <i className="ico-email"></i>
                  </div>
                  <div className="media-body">
                    <a href="mailto:info@fyxme.com">
                      <h6>Mail Us</h6>
                      <p className="fw-400">info@fyxme.com</p>
                    </a>
                  </div>
                </div>
                <div className="media">
                  <div className="icon-styled color-main fs-20">
                    <i className="ico-phone-call"></i>
                  </div>
                  <div className="media-body">
                    <a href="tel:+19493567737">
                      <h6>Call or Text</h6>
                      <p className="fw-400">949-356-7737</p>
                    </a>
                  </div>
                </div>
                <div className="d-none d-xl-block">
                  {/* eslint-disable-next-line*/}
                  <a
                    href="#"
                    onClick={handleOpenModal}
                    className="btn btn-small btn-outline-maincolor btn-appointment"
                  >
                    Get FREE estimate now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
