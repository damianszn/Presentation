import React from "react";
import { Link } from "react-router-dom";

/* import Display from "./components/Display";
import Skills from "./components/Skills";
import CV from "./components/CV";
import Contact from "./components/Contact"; */

import { Header, Icon, List, Segment } from "semantic-ui-react";
import { header, headerDiv, navbar } from "./style";

class HeaderComp extends React.Component {
  render() {
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
              <Link to="/skills">Skills</Link>
            </List.Item>
            <List.Item>
              <Link to="/experience">Experience</Link>
            </List.Item>
            <List.Item>
              <Link to="/contact">Contact</Link>
            </List.Item>
          </List>
          {/* <Switch>
            <Route exact path="/home" component={Display} />
            <Route path="/skills" component={Skills} />
            <Route path="/cv" component={CV} />
            <Route path="/contact" component={Contact} />
          </Switch> */}
        </Segment>
      </div>
    );
  }
}

export default HeaderComp;
