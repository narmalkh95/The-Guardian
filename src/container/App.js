import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './homepage';
import NavBar from "../components/NavBar.jsx";
import ArticleDetails from "./articleDetails";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../../dist/css/index.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
              <NavBar />
              <Route exact path="/" component={HomePage} />
              <Route path="/articleDetails" component={ArticleDetails} />
          </div>
        </ScrollToTop>
  </Router>
    );
  }
}

export default App;
