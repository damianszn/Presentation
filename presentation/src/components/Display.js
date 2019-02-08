import React from "react";

import profile from "../profile.jpg";

import { Image, Icon, Segment } from "semantic-ui-react";
import { Jumbotron } from "reactstrap";
import {
  displayDiv,
  displayContainer,
  displayImage,
  displayText
} from "./componentStyle.js";

class Display extends React.Component {
  render() {
    return (
      <div style={displayDiv}>
        <Jumbotron style={displayContainer}>
          <br />

          <Image src={profile} style={displayImage} size="medium" bordered />

          <br />
          <Segment style={displayText}>
            <br />
            <p>
              I'm using this website as a way to practice my skills and display
              them. I plan to use it as a Portfolio/Vcard in the future and will
              try to keep it up to date. It's not responsive yet.
              <br />
              <Icon name="window minimize outline" />
              <br />I made it mostly with React and Semantic-UI.
            </p>
          </Segment>
        </Jumbotron>
      </div>
    );
  }
}

export default Display;
