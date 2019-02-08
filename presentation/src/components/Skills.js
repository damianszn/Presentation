import React from "react";

import { Menu, Header, Icon, Flag, Message } from "semantic-ui-react";
import { Jumbotron } from "reactstrap";
import {
  displayDiv,
  displayContainer,
  skillsMenu,
  skillsList,
  skillsListItems,
  skillsDescription
} from "./componentStyle.js";

class Skills extends React.Component {
  render() {
    return (
      <div style={displayDiv}>
        <Jumbotron style={displayContainer}>
          <Menu vertical style={skillsMenu}>
            <Menu.Item name="coding">
              <Header as="h4">Coding</Header>
              <ul style={skillsList}>
                <li style={skillsListItems} title="React.js">
                  <Icon loading name="react" size="large" color="blue" />
                </li>
                <li style={skillsListItems} title="HTML5">
                  <Icon name="html5" size="large" color="red" />
                </li>
                <li style={skillsListItems} title="CSS3">
                  <Icon name="css3" size="large" color="blue" />
                </li>
                <li style={skillsListItems} title="Javascript">
                  <Icon name="js" size="large" color="yellow" />
                </li>
                <li style={skillsListItems} title="Node.js">
                  <Icon loading name="node js" size="large" color="green" />
                </li>
              </ul>
            </Menu.Item>

            <Menu.Item name="tools">
              <Header as="h4">Tools</Header>
              <ul style={skillsList}>
                <li style={skillsListItems}>
                  <a href="https://github.com/">Github</a>
                </li>
                <li style={skillsListItems}>
                  <a href="https://code.visualstudio.com/">VS Code</a>
                </li>
                <li style={skillsListItems}>
                  <a href="https://www.mongodb.com/">MongoDB</a>
                </li>
              </ul>
            </Menu.Item>

            <Menu.Item name="languages">
              <Header as="h4">Languages</Header>
              <ul style={skillsList}>
                <li style={skillsListItems} title="Mastered">
                  <Flag name="france" />
                </li>
                <li style={skillsListItems} title="Business level">
                  <Flag name="gb" />
                </li>
                <li style={skillsListItems} title="Native tongue">
                  <Flag name="pl" />
                </li>
                <li style={skillsListItems} title="Beginner">
                  <Flag name="nl" />
                </li>
              </ul>
            </Menu.Item>
          </Menu>
          <Message
            header="Confused?"
            content="Hover on the icons to display name or details, click on the names to see their website."
            style={skillsDescription}
          />
        </Jumbotron>
      </div>
    );
  }
}

export default Skills;
