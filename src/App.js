import React, { Component } from "react";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";
import HomePage from "./pages/Home/Home"
import RentPage from "./pages/Rent/Rent"
import ContactPage from "./pages/Contact/Contact"
import RentCategoryPage from "./pages/Rent/Category/Category"

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChevronLeft,
  faMapMarkerAlt,
  faSearch,
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./App.css";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_URL}/graphql`
});

class App extends Component {
  render() {
    // console.log(process.env.REACT_APP_SERVER_URL);
    library.add([
      faFacebook,
      faLinkedin,
      faSearch,
      faHome,
      faChevronLeft,
      faMapMarkerAlt,
      faChevronCircleLeft,
      faChevronCircleRight
    ]);

    return (
      <BrowserRouter>
        <ScrollToTop>
          <ApolloProvider client={client}>
            <Switch>
              <Route path="/inicio" component={HomePage} />
              <Route path="/renta/:id" component={RentCategoryPage} />
              <Route path="/contacto" component={ContactPage} />
              <Route path="/renta" component={RentPage} />
              <Redirect to="/inicio" />
            </Switch>
          </ApolloProvider>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
