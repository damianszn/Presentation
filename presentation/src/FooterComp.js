import React from "react";

import { Segment, Flag, Icon } from "semantic-ui-react";
import { footer, languagesDiv, updateDate } from "./style";

class FooterComp extends React.Component {
  render() {
    return (
      <div>
        <Segment as="footer" style={footer}>
          <Segment style={languagesDiv}>
            <Flag name="gb" />
            <Flag name="france" />
            <Flag name="pl" />
          </Segment>
          <p style={updateDate}>
            <Icon name="save" color="grey" />
            Last update : 05-02-2019
          </p>
        </Segment>
      </div>
    );
  }
}

export default FooterComp;
