import React from 'react';

const About = () => {
    return (
        <section className="ls s-pt-60 s-pb-0 s-pt-md-55 s-pb-md-45 s-pt-lg-145 s-pb-lg-115 c-mb-55 c-mb-md-0 text-center text-md-left side-section" id="about_section">
            <div className="divider-5 d-none d-mb-block"></div>
            <div className="cover-image s-cover-left"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="images/car_on_jack_eletric_sand_bumper.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="item-content content-left-padding">
                            <h3 className="special-heading">Licensed, Insured, and serving California BMW</h3>
                            <p>For years Fyxme has been servicing customers in Los Angeles, Irvine, Beverly Hills, Pasadena, San Marino, Brentwood, Manhattan Beach, Newport Beach, Laguna Beach, Santa Clarita, Van Nuys, West Hollywood, Culver City, Studio City, Costa Mesa, Redondo Beach, Hawthorne, Huntington Beach, Mission Viejo, San Clemente, Tustin, Villa Park, Coto de Caza, Laguna Hills, Dana Point, and other cities in LA metro area. </p>
                            <div className="row licence-images">
                                <div className="col-md-6">
                                    <img src="images/bar-image.png" alt=""/>
                                    <p>License Number- 295556 FYXME- 949-356-7737</p>
                                </div>
                                <div className="col-md-6 licence-image-2">
                                    <img src="images/DTSCLogo2.png" alt=""/>
                                     <p>California Environmental Protection Agency Identification (EPA ID) - CAL000445560</p>
                                </div>
                            </div>

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;