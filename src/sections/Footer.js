import React from "react";

const Footer = () => {
  return (
    <footer className="page_footer text-center text-md-left ds ms s-pt-65 s-pt-lg-35 s-pb-lg-0 c-gutter-40 main-footer">
      <div className="container">
        <div className="row">
          <div className="divider-20 d-none d-lg-block"></div>

          <div className="col-md-6 col-lg-4">
            <div className="widget widget_icons_list">
              <a href="#top" className="logo">
                <img src="images/logo-fyxme-white-orange-2.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4   order-md-3 order-lg-2">
            <div className="widget widget_page_links">
              <h3>Contact information</h3>
              <div className="media side-icon-box">
                <p className="media-body color-grey">
                  <span className="icon-styled color-main">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  {/* eslint-disable-next-line*/}
                  <a href="#">Los Angeles and Orange Counties</a>
                </p>
              </div>
              <div className="media side-icon-box">
                <p className="media-body color-grey">
                  <span className="icon-styled color-main">
                    <i className="fa fa-phone"></i>
                  </span>
                  <a href="te:9493567737">949-356-7737</a>
                </p>
              </div>
              <div className="media side-icon-box ">
                <p className="media-body color-grey">
                  <span className="icon-styled color-main">
                    <i className="fa fa-envelope"></i>
                  </span>
                  <a href="mailto:info@fyxme.com">info@fyxme.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 c-gutter-10   order-lg-4">
            <div className="widget widget_working_hours">
              <h3>Our Hours</h3>
              <ul>
                <li className="row">
                  <div className="color-grey col-12">
                    Monday-Friday:{" "}
                    <span className="color-darkgrey">
                      8.<sup>00</sup>am - 7.<sup>00</sup>pm
                    </span>
                  </div>
                </li>
                <li className="row">
                  <div className="color-grey col-12">
                    Saturday:{" "}
                    <span className="color-darkgrey">
                      9.<sup>00</sup>am - 4.<sup>00</sup>pm
                    </span>
                  </div>
                </li>
                <li className="row">
                  <div className="color-grey col-12">
                    Sunday: <span className="color-darkgrey">Closed</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
