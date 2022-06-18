import React from 'react';

const Contact = ({ handleOpenModal }) => {
    return (
        <section className="ls ms contact-section text-center text-md-left s-pt-55 s-pb-0 s-pt-lg-90 s-pb-lg-60" id="contacts">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-xl-6 col-md-6 col-10">
                        <div className="divider-55 d-md-none"></div>
                        <div className="item-content content-left-padding">
                            <h3 className="special-heading">Find Us </h3>
                            <p>We are a mobile auto body repair shop servicing Orange County and the Los Angeles metro area.</p>
                            <p>Our service trucks come from our corporate headquarters in Anaheim</p>
                            <h6 className="fw-700">Los Angeles</h6>
                            <div className="media side-icon-box">
                                <div className="icon-styled color-main">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <p className="media-body">Los Angeles Metropolitan Area</p>
                            </div>
                            <div className="media side-icon-box">
                                <div className="icon-styled color-main">
                                    <i className="fa fa-phone"></i>
                                </div>

                                <p className="media-body">949-356-7737</p>
                            </div>
                            <div className="media side-icon-box">
                                <div className="icon-styled color-main fs-14">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <p className="media-body links-grey">
                                    {/* eslint-disable-next-line*/}
                                    <a href="mailto:info@fyxme.com">info@fyxme.com</a>
                                </p>
                            </div>
                            {/* eslint-disable-next-line*/}
                            <a href="#" className="btn btn-small btn-outline-maincolor" onClick={handleOpenModal}>Get FREE estimate now</a>
                        </div>
                        <div className="divider-60 d-md-none"></div>
                    </div>

                    <div className="col-xl-6 col-md-6 col-12 no-padding">
                        {/* eslint-disable-next-line*/}
                        <img src="images/map-la-area.png" alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Contact;