import React from 'react';
import FooterLinks from '../sections/FooterLinks';
import Header from '../sections/Header';
import Terms from '../sections/Terms';
import Footer from '../sections/Footer';
import Menu from '../sections/Menu';
import MetaTags from '../sections/MetaTags';

class TermsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }

  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div id="canvas">
        <div id="box_wrapper">
          <MetaTags />
          <div className="header_absolute slide_absolute ds bs s-overlay">
            <Header 
              showModal={this.state.showModal}
              handleOpenModal={this.handleOpenModal}
              handleCloseModal={this.handleCloseModal}/>
              <Menu handleOpenModal={this.handleOpenModal}/>
          </div>
          <Terms/>
          <Footer/>
          <FooterLinks/>
        </div>
      </div>
    );
  }
}

export default TermsPage;
