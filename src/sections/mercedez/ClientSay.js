import React from 'react';

const ClientSay = () => {
    return (
        <section className="ds s-pt-55 s-pb-10 s-pt-lg-90 s-pb-lg-60 s-parallax testimonials-section" id="section_testimonials">
            <div className="container">
                <div className=" col-12 mb-0 text-center">
                    <h4>What our clients say</h4>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonials-slider owl-carousel" data-autoplay="true" data-loop="true" data-responsive-lg="1" data-responsive-md="1" data-responsive-sm="1" data-nav="true" data-dots="false">

                            <div className="quote-item">
                                <div className="quote-mark">
                                    <img src="images/quote.png" alt=""/>
                                </div>
                                <p>
                                    <em className=" fw-400">
                                        Someone hit the rear door of my car in a parking lot. I did not want to use insurance and have my rates go up and the body shop quoted me 2 times more than the estimate from FYXME.  They came to my house and in 3 hours my car was done and looked brand new.”  
                                    </em>
                                </p>
                                <h6 className="quote-name fw-700">
                                    Gale, Mercedes Benz 300E
                                </h6>
                            </div>
                            <div className="quote-item">
                                <div className="quote-mark">
                                    <img src="images/quote.png" alt=""/>
                                </div>
                                <p>
                                    <em className="fw-400">
                                       I can’t believe I did not know I could have my Mercedes Benz bumper repaired at my house!  Great job, the paint matched perfectly
                                    </em>
                                </p>
                                <h6 className="quote-name fw-700">
                                    Jessica, S-Class Coupe
                                </h6>
                            </div>
                            <div className="quote-item">
                                <div className="quote-mark">
                                    <img src="images/quote.png" alt=""/>
                                </div>
                                <p>
                                    <em className=" fw-400">
                                       I accidentally scrapped the entire side of my car on my garage and thought it would cost thousands and takes days. FYXME came to my house and repaired and painted the damaged area in one day. Thank you, guys!
                                    </em>
                                </p>
                                <h6 className="quote-name fw-700">
                                    David, G-Wagon
                                </h6>
                            </div>
                            <div className="quote-item">
                                <div className="quote-mark">
                                    <img src="images/quote.png" alt=""/>
                                </div>
                                <p>
                                    <em className=" fw-400">
                                       My bumper was smashed by my son and FYXME replaced the bumper and matched the paint in the same day.! 
                                    </em>
                                </p>
                                <h6 className="quote-name fw-700">
                                    Sue. S-Class Sedan
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientSay;