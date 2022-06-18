import React, { useRef } from "react";

const Menu = ({
  handleOpenModal,
  showMenu = true,
  routesUrl = {},
  staticUrl = "",
}) => {
  const buttonMenu = useRef(null);
  const hideMenu = () => {
    if (showMenu && buttonMenu.current) {
      buttonMenu.current.click();
    }
  };
  return (
    <header className="page_header s-py-10 s-py-lg-0 ds ms s-overlay nav-bordered justify-nav-center">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="d-lg-none col-6">
            <a onClick={hideMenu} href="./" className="logo">
              <img src="images/logo-fyxme-white-orange-2.png" alt="" />
            </a>
          </div>
          <div className="col-5">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a onClick={handleOpenModal} href="#" className="estimate-button-mobile">Get estimate</a>
          </div>
          {showMenu ? (
            <div className="col-xl-12">
              <div className="nav-wrap">
                <nav className="top-nav">
                  <img
                    src="images/logo-fyxme-white-orange-2.png"
                    alt=""
                    className="logo-mobile"
                  />
                  <ul className="nav sf-menu">
                    <li>
                      <a
                        onClick={hideMenu}
                        href={`/${routesUrl.works || staticUrl || ""}#works`}
                      >
                        How it works
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={hideMenu}
                        href={`/${routesUrl.steps || staticUrl || ""}#steps`}
                      >
                        How to get started
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={hideMenu}
                        href={`/${
                          routesUrl.service || staticUrl || ""
                        }#service`}
                      >
                        Why Fyxme
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={hideMenu}
                        href={`/${
                          routesUrl.testimonials || staticUrl || ""
                        }#section_testimonials`}
                      >
                        What our clients say
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={hideMenu}
                        href={`/${
                          routesUrl.about || staticUrl || ""
                        }#about_section`}
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={hideMenu}
                        href="/terms-and-conditions"
                        className="terms-link"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={hideMenu}
                        href="/privacy-policy"
                        className="terms-link"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                  <div className="bottom-menu-mobile">
                    <a
                      onClick={hideMenu}
                      href="tel:9493567737"
                      className="call-us"
                    >
                      <i className="fa fa-phone"></i>{" "}
                      <strong>Need help?</strong>
                      <br />
                      Call us: <strong>949-356-7737</strong>
                    </a>
                    {/* eslint-disable-next-line*/}
                    <a
                      href={`/${routesUrl.index || staticUrl || ""}#`}
                      className="btn btn-small btn-outline-maincolor btn-appointment"
                      onClick={() => {
                        handleOpenModal();
                        hideMenu();
                      }}
                    >
                      Get FREE estimate now
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {showMenu ? (
        <>
          <span ref={buttonMenu} className="toggle_menu">
            <span></span>
          </span>
        </>
      ) : null}
    </header>
  );
};
export default Menu;
