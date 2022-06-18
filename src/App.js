import React from "react";
import MainPage from "./pages/MainPage";
import Mercedez from "./pages/Mercedez";
import Bmw from "./pages/Bmw";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import GalleryPage from "./pages/GalleryPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Provider, { AppContext } from "./pages/ContextProvider";
import "./css/bootstrap.min.css";
import "./css/animations.css";
import "./css/font-awesome.css";
import "./css/main.css";
import Notifications from "react-notify-toast";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import ThankYou from "./pages/ThankYou";

import Reviews from "./pages/Reviews";
import MainPageV1 from "./pages/MainPageV1";

TagManager.initialize({ gtmId: "GTM-NWGNMZ" });

const trackingId = "UA-69662644-1";
ReactGA.initialize(trackingId);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Notifications />
        <Switch>
          <Route path="/gallery">
            <Provider>
              <AppContext.Consumer>
                {(context) => <GalleryPage />}
              </AppContext.Consumer>
            </Provider>
          </Route>
          <Route path="/terms-and-conditions">
            <Provider>
              <AppContext.Consumer>
                {(context) => <TermsPage />}
              </AppContext.Consumer>
            </Provider>
          </Route>
          <Route path="/privacy-policy">
            <Provider>
              <AppContext.Consumer>
                {(context) => <PrivacyPage />}
              </AppContext.Consumer>
            </Provider>
          </Route>
          <Route path="/mercedes">
            <Provider>
              <AppContext.Consumer>
                {(context) => <Mercedez />}
              </AppContext.Consumer>
            </Provider>
          </Route>
          <Route path="/bmw">
            <Provider>
              <AppContext.Consumer>{(context) => <Bmw />}</AppContext.Consumer>
            </Provider>
          </Route>
          <Route path="/thank-you">
            <Provider>
              <AppContext.Consumer>
                {(context) => <ThankYou />}
              </AppContext.Consumer>
            </Provider>
          </Route>
          <Route exact path="/reviews">
            <Provider>
              <AppContext.Consumer>
                {(context) => <Reviews />}
              </AppContext.Consumer>
            </Provider>
          </Route>
          <Route path="/landing">
            <Provider>
              <AppContext.Consumer>
                {(context) => <MainPageV1 />}
              </AppContext.Consumer>
            </Provider>
          </Route>
          <Route path="/">
            <Provider>
              <AppContext.Consumer>
                {(context) => <MainPage />}
              </AppContext.Consumer>
            </Provider>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
