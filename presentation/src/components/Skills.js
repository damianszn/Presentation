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
import { skillsTranslate } from "../languages";

export default class Skills extends React.Component {
  render() {
    let skillsDisplay = "Error";
    if (this.props.lang === "fr") {
      skillsDisplay = skillsTranslate.fr;
    } else if (this.props.lang === "pl") {
      skillsDisplay = skillsTranslate.pl;
    } else {
      console.log(this.props.lang);
      skillsDisplay = {
        coding: "Coding",
        tools: "Tools",
        languages: "Languages",
        flag1: "Mastered",
        flag2: "Business level",
        flag3: "Native tongue",
        flag4: "Beginner",
        msgTitle: "Confused ?",
        msgText:
          "Keep your mouse on icons to get more details. The tools have links to their websites."
      };
    }
    return (
      <div style={displayDiv}>
        <Jumbotron style={displayContainer}>
          <Menu vertical style={skillsMenu}>
            <Menu.Item name="coding">
              <Header as="h4">{skillsDisplay.coding}</Header>
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
              <Header as="h4">{skillsDisplay.tools}</Header>
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
              <Header as="h4">{skillsDisplay.languages}</Header>
              <ul style={skillsList}>
                <li style={skillsListItems} title={skillsDisplay.flag1}>
                  <Flag name="france" />
                </li>
                <li style={skillsListItems} title={skillsDisplay.flag2}>
                  <Flag name="gb" />
                </li>
                <li style={skillsListItems} title={skillsDisplay.flag3}>
                  <Flag name="pl" />
                </li>
                <li style={skillsListItems} title={skillsDisplay.flag4}>
                  <Flag name="nl" />
                </li>
              </ul>
            </Menu.Item>
          </Menu>
          <Message
            header={skillsDisplay.msgTitle}
            content={skillsDisplay.msgText}
            style={skillsDescription}
          />
        </Jumbotron>
      </div>
    );
  }
}
