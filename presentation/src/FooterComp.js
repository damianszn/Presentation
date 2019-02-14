import React from "react";

import { Segment, Flag, Icon } from "semantic-ui-react";
import { footer, languagesDiv, updateDate, languagesFlags } from "./style";

import { footerUpdate } from "./languages";

class FooterComp extends React.Component {
  render() {
    let footerText = (
      <p style={updateDate}>
        <Icon name="save" color="grey" />
        Last update : 14-02-2019
      </p>
    );
    if (this.props.lang === "fr") {
      footerText = footerUpdate.fr;
    } else if (this.props.lang === "pl") {
      footerText = footerUpdate.pl;
    }

    return (
      <div>
        <Segment as="footer" style={footer}>
          <Segment style={languagesDiv}>
            <Flag
              name="gb"
              onClick={() => this.props.changeLang(1)}
              style={languagesFlags}
            />
            <Flag
              name="france"
              onClick={() => this.props.changeLang(2)}
              style={languagesFlags}
            />
            <Flag
              name="pl"
              onClick={() => this.props.changeLang(3)}
              style={languagesFlags}
            />
          </Segment>
          {footerText}
        </Segment>
      </div>
    );
  }
}

export default FooterComp;
