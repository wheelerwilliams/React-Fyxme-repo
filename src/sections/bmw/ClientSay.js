import React from 'react';

const ClientSay = () => {
    return (
        <section className="ds s-pt-55 s-pb-10 s-pt-lg-90 s-pb-lg-60 s-parallax testimonials-section" id="section_testimonials">
            <div className="container">
                <div className=" col-12 mb-50 text-center">
                    <h4>What our clients say BMW</h4>
                    <div className="divider-60 d-none d-xl-block"></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonials-slider owl-carousel" data-autoplay="true" data-loop="true" data-responsive-lg="1" data-responsive-md="1" data-responsive-sm="1" data-nav="true" data-dots="false">

                            <div className="quote-item">
                                <div className="quote-image">
                                    <img src="https://s3-media4.fl.yelpcdn.com/photo/ad04szYTy5sCaAoudjUIpA/120s.jpg" alt=""/>
                                </div>
                                <div className="quote-mark">
                                    <img src="images/quote.png" alt=""/>
                                </div>
                                <p>
                                    <em className=" fw-400">
                                        Got my car repaired here after some inconsiderate scum hit my parked car and left a deep scratch from my driver door to my rear quarter panel. Other shops were quoting me over $1K for the repairs and told me it would take over a week until I got my car back.  However, when I messaged Fxme, Sal quoted me less than $1K and told me he could repair everything in less than a day. The choice was obvious at that point! Sal did an amazing job with the repairs and my car looks brand new!  I highly recommend this dent/scratch repair shop and I will definitely be using them again for any other damages!
                                    </em>
                                </p>
                                <h6 className="quote-name fw-700">
                                    Christopher C.
                                </h6>
                                <p className="color-grey">
                                    San Diego, CA
                                </p>
                            </div>
                            <div className="quote-item">
                                <div className="quote-image">
                                    <img src="https://s3-media1.fl.yelpcdn.com/photo/wvOJhHTU6OQcyas9FWzR-g/120s.jpg" alt=""/>
                                </div>
                                <div className="quote-mark">
                                    <img src="images/quote.png" alt=""/>
                                </div>
                                <p>
                                    <em className="fw-400">
                                        Anthony at Fyxme came to fix my Honda 2013 Accord, he did an amazing job. I highly recommend this mobile car repair company. The gentleman Anthony saved me from having to go through my insurance and using my $500 deductible, which would have caused my insurance rates to go up. Thank you again Anthony at Fyxme for your great detail work.
                                    </em>
                                </p>
                                <h6 className="quote-name fw-700">
                                    James D.
                                </h6>
                                <p className="color-grey">
                                    Temecula, CA
                                </p>
                            </div>
                            <div className="quote-item">
                                <div className="quote-image">
                                    <img src="https://s3-media4.fl.yelpcdn.com/photo/Mon8bmUHHEii5durqkHo5Q/120s.jpg" alt=""/>
                                </div>
                                <div className="quote-mark">
                                    <img src="images/quote.png" alt=""/>
                                </div>
                                <p>
                                    <em className=" fw-400">
                                        The service was fast and convenient. I sent photos of the damage, and I wanted a quote they posted me a text promptly. On the day of my appointment, I was not able to get the technician name who repaired the corner bumper of my car, but he did an excellent job. Overall, from the person who helped me set up an appointment to the technician that repaired my bumper provided excellent service and were professional.
                                    </em>
                                </p>
                                <h6 className="quote-name fw-700">
                                    Kevin B.
                                </h6>
                                <p className="color-grey">
                                    El Monte, CA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientSay;