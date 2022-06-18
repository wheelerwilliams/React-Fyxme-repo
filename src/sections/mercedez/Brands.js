import React from 'react';

const Brands = () => {
    return (
        <section className="ls s-py-55 s-py-lg-75" id="partners">
            <div className="container-fluid">
                <div className="divider-3"></div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h4>Partners with:</h4>
                        <div className="owl-carousel partners-carousel" data-autoplay="true" data-center="true" data-loop="true" data-responsive-lg="6" data-responsive-md="6" data-responsive-sm="4" data-responsive-xs="3">
                            {/* eslint-disable-next-line*/}
                            <a href="#">
                                <img src="images/brands/3m2.jpg" alt=""/>
                            </a>
                            {/* eslint-disable-next-line*/}
                            <a href="#">
                                <img src="images/brands/ppg2.jpg" alt=""/>
                            </a>
                            {/* eslint-disable-next-line*/}
                            <a href="#" target="new">
                                <img src="images/brands/speedokote.jpg" alt=""/>
                            </a>
                            {/* eslint-disable-next-line*/}
                            <a href="#" target="new">
                                <img src="images/brands/apollo.jpg" alt=""/>
                            </a>
                            {/* eslint-disable-next-line*/}
                            <a href="#">
                                <img src="images/brands/honda.jpg" alt=""/>
                            </a>
                            {/* eslint-disable-next-line*/}
                            <a href="#">
                                <img src="images/brands/mercedes.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brands;