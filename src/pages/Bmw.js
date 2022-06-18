import React from 'react';
import GetStarted from '../sections/bmw/GetStarted';
import WhyFyxme from '../sections/bmw/WhyFyxme';
import ClientSay from '../sections/bmw/ClientSay';
import About from '../sections/bmw/About';
import Contact from '../sections/Contact';
import Brands from '../sections/Brands';
import Footer from '../sections/Footer';
import FooterLinks from '../sections/FooterLinks';
import Landing from '../sections/bmw/Landing';
import Header from '../sections/Header';
import Menu from '../sections/Menu';
import MetaTags from '../sections/bmw/MetaTags';
import { AppContext } from './ContextProvider';

class Bmw extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div id='canvas'>
        <div id='box_wrapper'>
          <MetaTags />
          <div className='header_absolute slide_absolute ds bs s-overlay'>
            <Header
              showModal={this.context.state.showModal}
              handleOpenModal={this.context.openModal}
              handleCloseModal={this.context.closeModal}
              landingName="BMW"
            />
            <Menu handleOpenModal={this.context.openModal} />
          </div>
          <Landing
            showMessage={this.context.state.showMessage}
            handleOpenModal={this.context.openModal}
            handleCloseMessage={this.context.closeMessage}
          />
          <GetStarted />
          <WhyFyxme />
          <ClientSay />
          <About />
          <Contact handleOpenModal={this.context.openModal} />
          <Brands />
          <Footer />
          <FooterLinks />
        </div>
      </div>
    );
  }
}

export default Bmw;
