/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import LandingContainer from "../components/MainPage/LandingContainer";
import About from "../sections/About";
import ClientSay from "../sections/ClientSay";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import FooterLinks from "../sections/FooterLinks";
import GetStarted from "../sections/GetStarted";
import Header from "../sections/Header";
import HowItWorks from "../sections/HowItWorks";
import Menu from "../sections/Menu";
import MetaTags from "../sections/MetaTags";
import WhyFyxme from "../sections/WhyFyxme";
import { AppContext } from "./ContextProvider";

// import Brands from '../sections/Brands';
class MainPageV1 extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div id="canvas">
        <div id="box_wrapper">
          <MetaTags />
          <div className="header_absolute slide_absolute ds bs s-overlay">
            <Header
              showModal={this.context.state.showModal}
              handleOpenModal={this.context.openModal}
              handleCloseModal={this.context.closeModal}
              landingName="main"
            />
            <Menu handleOpenModal={this.context.openModal}
              staticUrl="landing"
            />
          </div>
          <LandingContainer
            showMessage={this.context.state.showMessage}
            handleOpenModal={this.context.openModal}
            handleCloseMessage={this.context.closeMessage}
          >
            <div className="divider-20 d-none d-lg-block d-xl-none"></div>

            <div className="intro_layer">
              <h2 className="intro_featured_word">
                Mobile Car Scratch & Bumper Repair
              </h2>
              <h5 className="subtitlepage">
                Dealership quality auto repair service at your home or office.
                Upfront pricing. No hidden fees.
              </h5>
            </div>
            <div
              className="intro_layer"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ul className="list1" style={{ textAlign: "left" }}>
                <li>Same day free estimate</li>
                <li>75% faster than most auto body shops</li>
                <li>Paint matching with lifetime guarantee</li>
                <li>No rental car needed</li>
              </ul>
            </div>
            <div className="intro_layer estimateButtonWrapper get-free-estimate">
              <div className="slide-button">
                <a
                  className="btn btn-small btn-maincolor estimateButton"
                  href="#"
                  onClick={this.context.openModal}
                >
                  Get FREE estimate now
                </a>
              </div>
            </div>
          </LandingContainer>
          <HowItWorks />
          <GetStarted />
          <WhyFyxme />
          <ClientSay />
          <About />
          <Contact handleOpenModal={this.context.openModal} />
          <Footer />
          <FooterLinks />
        </div>
      </div>
    );
  }
}

export default MainPageV1;
