import React from "react";
import { Switch, Route } from "react-router-dom";

import Display from "./components/Display";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import HeaderComp from "./HeaderComp";
import FooterComp from "./FooterComp";

class Presentation extends React.Component {
  state = { language: "en" };

  changeLanguage = n => {
    //1: english, 2: french, 3: polish
    if (n === 1) {
      this.setState({
        language: "en"
      });
    } else if (n === 2) {
      this.setState({
        language: "fr"
      });
    } else if (n === 3) {
      this.setState({
        language: "pl"
      });
    }
  };

  render() {
    return (
      <div>
        <HeaderComp lang={this.state.language} />

        <Switch>
          <Route
            exact
            path="/"
            /* component={Display}
            lang={this.state.language} */
            render={() => <Display lang={this.state.language} />}
          />
          <Route
            path="/skills"
            /* component={Skills} lang={this.state.language} */
            render={() => <Skills lang={this.state.language} />}
          />
          <Route
            path="/experience"
            /* component={Experience}
            lang={this.state.language} */
            render={() => <Experience lang={this.state.language} />}
          />
          <Route
            path="/contact"
            /* component={Contact}
            lang={this.state.language} */
            render={() => <Contact lang={this.state.language} />}
          />
        </Switch>

        <FooterComp
          lang={this.state.language}
          changeLang={this.changeLanguage}
        />
      </div>
    );
  }
}

export default Presentation;
