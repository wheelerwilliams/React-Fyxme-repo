import React from 'react';
import GetStarted from '../sections/mercedez/GetStarted';
import WhyFyxme from '../sections/mercedez/WhyFyxme';
import ClientSay from '../sections/mercedez/ClientSay';
import About from '../sections/mercedez/About';
import Contact from '../sections/mercedez/Contact';
import Brands from '../sections/mercedez/Brands';
import Footer from '../sections/Footer';
import FooterLinks from '../sections/FooterLinks';
import Landing from '../sections/mercedez/Landing';
import Header from '../sections/Header';
import Menu from '../sections/Menu';
import MetaTags from '../sections/mercedez/MetaTags';
import { AppContext } from './ContextProvider';

class Mercedez extends React.Component {
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
              landingName="Mercedes-Benz"
            />
            <Menu handleOpenModal={this.context.openModal} />
          </div>
          <Landing
            showMessage={this.context.state.showMessage}
            handleOpenModal={this.context.openModal}
            handleCloseMessage={this.context.closeMessage}
          />
          <GetStarted handleOpenModal={this.context.openModal}/>
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

export default Mercedez;
