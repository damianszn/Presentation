import React from "react";
import {
  Icon,
  Message,
  Header,
  Menu,
  Flag,
  List,
  Segment
} from "semantic-ui-react";
import { Jumbotron } from "reactstrap";
import { updateDate } from "./style";
import {
  skillsDescription,
  skillsList,
  skillsListItems,
  skillsMenu,
  displayContainer,
  educationHeaders,
  educationList,
  educationListElements,
  experienceDiv,
  experienceContainer,
  educationText
} from "./components/componentStyle";

//Header

export const headerTitles = {
  fr: {
    skills: "Compétences",
    experience: "Expérience",
    contact: "Contact"
  },
  pl: {
    skills: "Umiejętności",
    experience: "Doświadczenie",
    contact: "Kontakt"
  }
};

//Footer

export const footerUpdate = {
  fr: (
    <p style={updateDate}>
      <Icon name="save" color="grey" />
      Dernière mise à jour : 14-02-2019
    </p>
  ),
  pl: (
    <p style={updateDate}>
      <Icon name="save" color="grey" />
      Ostatnia aktualizacja : 14-02-2019
    </p>
  )
};

////////COMPONENTS//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//Display

export const displayTextTranslate = {
  fr: (
    <p>
      J'utilise ce site web comme terrain d'entraînement pour mes compétences.
      Je compte l'utiliser comme Portfolio/Vcard dans un futur proche et
      essayerai de le maintenir à jour. Il n'est pas encore responsive.
      <br />
      <Icon name="window minimize outline" />
      <br />
      J'ai fait presque tout le site avec React et Semantic-UI.
    </p>
  ),
  pl: (
    <p>
      Używam tej strony internetowej jako pola treningowego dla moich
      umiejętności. Zamierzam użyć go jako Portfolio / Vcard w niedalekiej
      przyszłości i postaram się go aktualizować. On jeszcze nie jest
      responsive.
      <br />
      <Icon name="window minimize outline" />
      <br />
      Zrobiłem prawie całą stronę z React i Semantic-UI.
    </p>
  )
};

//Skills////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export const skillsTranslate = {
  fr: (
    <Jumbotron style={displayContainer}>
      <Menu vertical style={skillsMenu}>
        <Menu.Item name="coding">
          <Header as="h4">Code</Header>
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
          <Header as="h4">Outils</Header>
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
          <Header as="h4">Langues</Header>
          <ul style={skillsList}>
            <li style={skillsListItems} title="Maîtrisé">
              <Flag name="france" />
            </li>
            <li style={skillsListItems} title="Bon niveau">
              <Flag name="gb" />
            </li>
            <li style={skillsListItems} title="Langue maternelle">
              <Flag name="pl" />
            </li>
            <li style={skillsListItems} title="Débutant">
              <Flag name="nl" />
            </li>
          </ul>
        </Menu.Item>
      </Menu>
      <Message
        header="Confus ?"
        content="Gardez votre souris sur les icônes pour plus de détails. 
          Un clic sur les outils vous redirigera vers leurs sites webs respectifs."
        style={skillsDescription}
      />
    </Jumbotron>
  ),
  pl: (
    <Jumbotron style={displayContainer}>
      <Menu vertical style={skillsMenu}>
        <Menu.Item name="coding">
          <Header as="h4">Kod</Header>
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
          <Header as="h4">Narzedzia</Header>
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
          <Header as="h4">Jezyki</Header>
          <ul style={skillsList}>
            <li style={skillsListItems} title="Opanowany">
              <Flag name="france" />
            </li>
            <li style={skillsListItems} title="Dobry poziom">
              <Flag name="gb" />
            </li>
            <li style={skillsListItems} title="Jezyk ojczysty">
              <Flag name="pl" />
            </li>
            <li style={skillsListItems} title="Poczatkujacy">
              <Flag name="nl" />
            </li>
          </ul>
        </Menu.Item>
      </Menu>
      <Message
        header="Zmieszany ?"
        content="Trzymaj myszkę na ikonie, aby uzyskać więcej szczegółów. Kliknięcie na narzędzia przekieruje Cię do odpowiednich stron internetowych."
        style={skillsDescription}
      />
    </Jumbotron>
  )
};

//Experience////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export const experienceTranslate = {
  fr: (
    <Jumbotron style={displayContainer}>
      <div style={experienceContainer}>
        <Segment style={educationList}>
          <List>
            <List.Item style={educationListElements}>
              <List.Icon name="marker" />
              <List.Content>
                <List.Header as="h4" style={educationHeaders}>
                  <a href="https://www.becode.org">
                    BeCode (Septembre 2018 – Mars 2019)
                  </a>
                </List.Header>
                <List.Description>
                  Formation en développement web et technologies numériques.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item style={educationListElements}>
              <List.Icon name="marker" />
              <List.Content>
                <List.Header as="h4" style={educationHeaders}>
                  <a href="https://www.iepscf-uccle.be/">IEPSCF (2017-2018)</a>
                </List.Header>
                <List.Description>
                  Bachelier en Informatique et Systèmes à Uccle, 80 ECTS
                  obtenus. (un peu plus que la moitié).
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
                  Secondaires de qualification à Ixelles, CESS et Qualification
                  de Technicien en informatique obtenus.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>

        <Menu vertical style={experienceDiv}>
          <Menu.Item>
            <span style={educationHeaders}>
              Job étudiant chez Bitler (2018)
            </span>
            <br />{" "}
            <p style={educationText}>
              <br />
              Résolution de problèmes informatiques à domicile.
            </p>
          </Menu.Item>

          <Menu.Item>
            <span style={educationHeaders}>Stage chez Dubinfo (2016)</span>
            <br />
            <p style={educationText}>
              <br />
              Réparations PC/Mac et diverses interventions <br />
              (récupération de données, installation de matériel/software).
            </p>
          </Menu.Item>
        </Menu>
      </div>
    </Jumbotron>
  ),
  pl: (
    <Jumbotron style={displayContainer}>
      <div style={experienceContainer}>
        <Segment style={educationList}>
          <List>
            <List.Item style={educationListElements}>
              <List.Icon name="marker" />
              <List.Content>
                <List.Header as="h4" style={educationHeaders}>
                  <a href="https://www.becode.org">
                    BeCode (Wrzesien 2018 – Marzec 2019)
                  </a>
                </List.Header>
                <List.Description>
                  Szkolenie tworzenia stron internetowych i technologii
                  cyfrowych.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item style={educationListElements}>
              <List.Icon name="marker" />
              <List.Content>
                <List.Header as="h4" style={educationHeaders}>
                  <a href="https://www.iepscf-uccle.be/">IEPSCF (2017-2018)</a>
                </List.Header>
                <List.Description>
                  Licencjat z informatyki i systemów w Uccle, 80 ECTS uzyskanych
                  (nieco ponad połowa).
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item style={educationListElements}>
              <List.Icon name="marker" />
              <List.Content>
                <List.Header as="h4" style={educationHeaders}>
                  <a href="http://www.enseignement.be/index.php?page=24797&etab_id=289">
                    Instytut René Cartigny (2016)
                  </a>
                </List.Header>
                <List.Description>
                  Szkoła srednia w Ixelles, CESS i uzyskanie kwalifikacji
                  technika komputerowego.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>

        <Menu vertical style={experienceDiv}>
          <Menu.Item>
            <span style={educationHeaders}>
              Praca studencka u Bitler (2018)
            </span>
            <br />{" "}
            <p style={educationText}>
              <br />
              Rozwiązywanie problemów z komputerem u klientów.
            </p>
          </Menu.Item>

          <Menu.Item>
            <span style={educationHeaders}>Staz utilise Dubinfo (2016)</span>
            <br />
            <p style={educationText}>
              <br />
              Naprawy komputerów PC i Mac oraz różne interwencje <br />{" "}
              (odzyskiwanie danych, instalacja sprzętu / oprogramowania).
            </p>
          </Menu.Item>
        </Menu>
      </div>
    </Jumbotron>
  )
};
