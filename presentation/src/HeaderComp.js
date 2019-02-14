import React from "react";
import { Link } from "react-router-dom";

import { Header, Icon, List, Segment } from "semantic-ui-react";
import { header, headerDiv, navbar } from "./style";

import { headerTitles } from "./languages";

class HeaderComp extends React.Component {
  render() {
    let navbarTitles = {
      skills: "Skills",
      experience: "Experience",
      contact: "Contact"
    };
    if (this.props.lang === "fr") {
      navbarTitles = headerTitles.fr;
    } else if (this.props.lang === "pl") {
      navbarTitles = headerTitles.pl;
    }
    return (
      <div as="header" style={headerDiv}>
        <Segment>
          <Header as="h2" style={header}>
            <Icon name="code" />
            <Header.Content>
              <Link to="/">Portfolio</Link>
            </Header.Content>
          </Header>
          <List bulleted horizontal style={navbar}>
            <List.Item>
              <Link to="/skills">{navbarTitles.skills}</Link>
            </List.Item>
            <List.Item>
              <Link to="/experience">{navbarTitles.experience}</Link>
            </List.Item>
            <List.Item>
              <Link to="/contact">{navbarTitles.contact}</Link>
            </List.Item>
          </List>
        </Segment>
      </div>
    );
  }
}

export default HeaderComp;
