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
    let experienceDisplay = {
      educationTitle1: "BeCode (September 2018 – March 2019)",
      educationText1: "Web development and digital technologies training.",
      educationTitle2: "IEPSCF (2017-2018)",
      educationText2:
        "Bachelor in computer science and systems, 80 ECTS obtained (a bit more than the half).",
      educationTitle3: "Institut René Cartigny (2016)",
      educationText3:
        "Secondary qualification education, CESS and Qualification of Computer Technician obtained.",
      jobTitle1: "Student job at Bitler (2018)",
      jobText1: "Solving IT problems at customer’s homes.",
      jobTitle2: "Internship at Dubinfo (2016)",
      jobText2:
        "Fixing PC/Mac issues and various interventions (data recovery, setting up hardware and software)."
    };
    if (this.props.lang === "fr") {
      experienceDisplay = experienceTranslate.fr;
    } else if (this.props.lang === "pl") {
      experienceDisplay = experienceTranslate.pl;
    }
    return (
      <div style={displayDiv}>
        <Jumbotron style={displayContainer}>
          <div style={experienceContainer}>
            <Segment style={educationList}>
              <List>
                <List.Item style={educationListElements}>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="h4" style={educationHeaders}>
                      <a href="https://www.becode.org">
                        {experienceDisplay.educationTitle1}
                      </a>
                    </List.Header>
                    <List.Description>
                      {experienceDisplay.educationText1}
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item style={educationListElements}>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="h4" style={educationHeaders}>
                      <a href="https://www.iepscf-uccle.be/">
                        {experienceDisplay.educationTitle2}
                      </a>
                    </List.Header>
                    <List.Description>
                      {experienceDisplay.educationText2}
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item style={educationListElements}>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="h4" style={educationHeaders}>
                      <a href="http://www.enseignement.be/index.php?page=24797&etab_id=289">
                        {experienceDisplay.educationTitle3}
                      </a>
                    </List.Header>
                    <List.Description>
                      {experienceDisplay.educationText3}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>

            <Menu vertical style={experienceDiv}>
              <Menu.Item>
                <span style={educationHeaders}>
                  {experienceDisplay.jobTitle1}
                </span>
                <br />{" "}
                <p style={educationText}>
                  <br />
                  {experienceDisplay.jobText1}
                </p>
              </Menu.Item>

              <Menu.Item>
                <span style={educationHeaders}>
                  {experienceDisplay.jobTitle2}
                </span>
                <br />
                <p style={educationText}>
                  <br />
                  {experienceDisplay.jobText2}
                </p>
              </Menu.Item>
            </Menu>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Experience;
