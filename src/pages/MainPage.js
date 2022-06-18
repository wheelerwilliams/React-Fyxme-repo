import React from "react";
import GetStarted from "../sections/GetStarted";
import WhyFyxme from "../sections/WhyFyxme";
import HowItWorks from "../sections/HowItWorks";
import ClientSay from "../sections/ClientSay";
import About from "../sections/About";
import Contact from "../sections/Contact";
// import Brands from '../sections/Brands';
import Footer from "../sections/Footer";
import FooterLinks from "../sections/FooterLinks";
import Landing from "../sections/Landing";
import Header from "../sections/Header";
import Menu from "../sections/Menu";
import { AppContext } from "./ContextProvider";
import MetaTags from "../sections/MetaTags";

class MainPage extends React.Component {
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
            <Menu handleOpenModal={this.context.openModal} />
          </div>
          <Landing
            showMessage={this.context.state.showMessage}
            handleOpenModal={this.context.openModal}
            handleCloseMessage={this.context.closeMessage}
          />
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

export default MainPage;
