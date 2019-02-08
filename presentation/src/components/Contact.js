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
                  <Icon name="linkedin" color="blue" />
                  <List.Header>Linkedin</List.Header>
                </List.Content>
              </List.Item>
              <br />
              <List.Item>
                <List.Content>
                  <Icon name="github" />
                  <List.Header>Github</List.Header>
                </List.Content>
              </List.Item>
              <br />
              <List.Item>
                <List.Content>
                  <Icon name="mail" color="red" />
                  <List.Header>damian.kilian.szn@gmail.com</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Jumbotron>
      </div>
    );
  }
}

export default Contact;
