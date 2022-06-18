import React from "react";

import Footer from "../sections/Footer";
import FooterLinks from "../sections/FooterLinks";
import Header from "../sections/Header";
import Menu from "../sections/Menu";
import MetaTags from "../sections/MetaTags";
import ClientSay from "../sections/reviews/ClientSay";
import { AppContext } from "./ContextProvider";

class Reviews extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div id="canvas">
        <div id="box_wrapper">
          <MetaTags />
          <Header
            showModal={this.context.state.showModal}
            handleOpenModal={this.context.openModal}
            handleCloseModal={this.context.closeModal}
            landingName="main"
          />
          <Menu handleOpenModal={this.context.openModal} 
            routesUrl={{
              testimonials: "reviews",
            }}
           />
          <div>
            {/* <WhyFyxme /> */}
            <ClientSay />
          </div>
          <Footer />
          <FooterLinks />
        </div>
      </div>
    );
  }
}

export default Reviews;
