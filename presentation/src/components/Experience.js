import React from "react";

import { List, Menu, Segment } from "semantic-ui-react";
import { Jumbotron } from "reactstrap";
import {
  displayDiv,
  displayContainer,
  experienceContainer,
  educationList,
  educationListElements,
  educationHeaders,
  educationText,
  experienceDiv
} from "./componentStyle.js";
import { experienceTranslate } from "../languages";

class Experience extends React.Component {
  render() {
    let experienceDisplay = (
      <Jumbotron style={displayContainer}>
        <div style={experienceContainer}>
          <Segment style={educationList}>
            <List>
              <List.Item style={educationListElements}>
                <List.Icon name="marker" />
                <List.Content>
                  <List.Header as="h4" style={educationHeaders}>
                    <a href="https://www.becode.org">
                      BeCode (September 2018 – March 2019)
                    </a>
                  </List.Header>
                  <List.Description>
                    Web development and digital technologies training.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item style={educationListElements}>
                <List.Icon name="marker" />
                <List.Content>
                  <List.Header as="h4" style={educationHeaders}>
                    <a href="https://www.iepscf-uccle.be/">
                      IEPSCF (2017-2018)
                    </a>
                  </List.Header>
                  <List.Description>
                    Bachelor in computer science and systems, 80 ECTS obtained
                    (a bit more than the half).
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item style={educationListElements}>
                <List.Icon name="marker" />
                <List.Content>
                  <List.Header as="h4" style={educationHeaders}>
                    <a href="http://www.enseignement.be/index.php?page=24797&etab_id=289">
                      Institut René Cartigny (2016)
                    </a>
                  </List.Header>
                  <List.Description>
                    Secondary qualification education, CESS and Qualification of
                    Computer Technician obtained.
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Segment>

          <Menu vertical style={experienceDiv}>
            <Menu.Item>
              <span style={educationHeaders}>Student job at Bitler (2018)</span>
              <br />{" "}
              <p style={educationText}>
                <br />
                Solving IT problems at customer’s homes.
              </p>
            </Menu.Item>

            <Menu.Item>
              <span style={educationHeaders}>Internship at Dubinfo (2016)</span>
              <br />
              <p style={educationText}>
                <br />
                Fixing PC/Mac issues and various interventions
                <br /> (data recovery, setting up hardware and software).
              </p>
            </Menu.Item>
          </Menu>
        </div>
      </Jumbotron>
    );
    if (this.props.lang === "fr") {
      experienceDisplay = experienceTranslate.fr;
    } else if (this.props.lang === "pl") {
      experienceDisplay = experienceTranslate.pl;
    }
    return <div style={displayDiv}>{experienceDisplay}</div>;
  }
}

export default Experience;
