import React from "react";

const FooterLinks = () => {
  return (
    <section className="page_copyright ds ms s-pt-5 s-pb-5 s-py-lg-5">
      <div className="container">
        <div className="divider-2 d-none d-lg-block"></div>
        <div className="row align-items-center">
          <div className="divider-10 d-none d-lg-block"></div>
          <div className="col-md-6 text-left">
            <p>
              &copy; FYXME<span className="copyright_year">2019</span> All
              Rights Reserved
            </p>
          </div>
          <div className="col-md-6 text-right">
            <p>
              <a href="/terms-and-conditions">Terms and Conditions </a>|
              <a href="/privacy-policy"> Privacy Policy</a>
            </p>
          </div>
          <div className="divider-10 d-none d-lg-block"></div>
        </div>
      </div>
    </section>
  );
};

export default FooterLinks;
