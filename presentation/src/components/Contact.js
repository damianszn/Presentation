import React from "react";

import { List, Icon, Segment } from "semantic-ui-react";
import { Jumbotron } from "reactstrap";
import {
  displayDiv,
  displayContainer,
  contactContainer
} from "./componentStyle.js";

class Contact extends React.Component {
  render() {
    return (
      <div style={displayDiv}>
        <Jumbotron style={displayContainer}>
          <Segment style={contactContainer}>
            <List animated verticalAlign="middle">
              <br />
              <List.Item>
                <List.Content>
                  <a href="https://www.linkedin.com/in/damian-s-917830a2/">
                    <Icon
                      name="linkedin"
                      color="blue"
                      size="huge"
                      title="LinkedIn"
                    />
                  </a>
                </List.Content>
              </List.Item>
              <br />
              <List.Item>
                <List.Content>
                  <a href="https://github.com/damianszn">
                    <Icon
                      name="github"
                      size="huge"
                      title="Github"
                      color="black"
                    />
                  </a>
                </List.Content>
              </List.Item>
              <br />
              <List.Item>
                <List.Content>
                  <a href="mailto:damian.kilian.szn@gmail.com">
                    <Icon name="mail" color="red" size="huge" />
                  </a>
                </List.Content>
                <List.Header>damian.kilian.szn@gmail.com</List.Header>
              </List.Item>
            </List>
          </Segment>
        </Jumbotron>
      </div>
    );
  }
}

export default Contact;
