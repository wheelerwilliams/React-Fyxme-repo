import React from "react";

const GetStarted = ({ handleOpenModal }) => {
    return (
    <div>
        <section className="mercedes-section">
            <div className="container">
                <div className="col-12 text-center">
                    <h4>Specialized Service for Mercedes Benz</h4>
                    <p className="fs-20 color-dark">Where is the best place to go for Mercedes bumper and paint repair? At your house or office and when it is convenient for you. FYXME provides a unique opportunity to bring the Mercedes Benz auto repair to you.</p>
                    <p className="fs-20 color-dark">Our trained experts can provide Mercedes Benz bumper replacement or repair estimates online. We source the best materials certified for Mercedes Benz repairs. Now you can repair or replace your bumper or other paint damage to your Mercedes Benz all in the same day.</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src="images/mercedes/mercedes-all-in-min.png" alt="" className="mercedes-all-in"/>
                         <img src="images/mercedes/mercedes-all-in-mobile-min.png" alt="" className="mercedes-all-in-mobile"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="s-pt-55 s-pb-0 s-pt-md-50 s-pt-lg-100 s-pb-lg-100 ls ms text-center steps-section" id="steps">
            <div className="container">
                <div className="col-12 text-center mb-55">
                    <h4>How To Get Started</h4>
                    <p className="fs-20 color-dark">Get your Mercedes Benz Repaired in 3 easy steps</p>
                    <div className="divider-60 d-none d-xl-block"></div>
                </div>
                <div className="row c-mb-53 c-mb-lg-0">
                    <div className="col-12 col-lg-4 col-md-4">
                        <div className="steps">
                            <img src="images/step-1.jpg" alt=""/>
                            <div className="step-content">
                                <h6 className="fw-700">Upload your Photos</h6>
                                <p className="color-dark">Send us photos of your damaged bumper, frame or car scratches and dents.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4">
                        <div className="steps feature-step">
                            <img src="images/step-2.jpg" alt=""/>
                            <div className="step-content no-margin-bottom-h6">
                                <h6 className="fw-700">Receive a FREE</h6>
                                <h6 className="fw-700">SAME DAY</h6>
                                <h6 className="fw-700">Estimate</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4">
                        <div className="steps feature-step last-step">
                            <img src="images/step-3.jpg" alt=""/>
                            <div className="step-content">
                                <h6 className="fw-700">Schedule an Appointment </h6>
                                <p className="color-dark">Tell us a time and your location and we will come to you.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* eslint-disable-next-line*/}
                <a href="#" className="btn btn-small btn-maincolor estimateButton estimateButtonStarted" onClick={handleOpenModal}>Get FREE estimate now</a>

            </div>
        </section>
    </div>
    );
}

export default GetStarted;