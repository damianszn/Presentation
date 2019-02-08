import React from "react";
import { Switch, Route } from "react-router-dom";

import Display from "./components/Display";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import HeaderComp from "./HeaderComp";
import FooterComp from "./FooterComp";

class Presentation extends React.Component {
  render() {
    return (
      <div>
        <HeaderComp />

        <Switch>
          <Route exact path="/" component={Display} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <FooterComp />
      </div>
    );
  }
}

export default Presentation;
