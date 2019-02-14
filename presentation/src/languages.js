import React from "react";
import { Icon } from "semantic-ui-react";
import { repoLink } from "./style";

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
    <p style={repoLink}>
      <a
        title="Clique ici pour voir le repo de ce projet."
        href="https://github.com/damianszn/Presentation"
      >
        <Icon name="github" color="grey" />
        https://github.com/damianszn/Presentation
      </a>
    </p>
  ),
  pl: (
    <p style={repoLink}>
      <a
        title="Kliknij tu zeby zobaczyc repository tego projektu."
        href="https://github.com/damianszn/Presentation"
      >
        <Icon name="github" color="grey" />
        https://github.com/damianszn/Presentation
      </a>
    </p>
  )
};

////////COMPONENTS//////////////////////////////////////////////////////////////

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

export const skillsTranslate = {
  fr: {
    coding: "Code",
    tools: "Outils",
    languages: "Langues",
    flag1: "Maîtrisé",
    flag2: "Bon niveau",
    flag3: "Langue maternelle",
    flag4: "Débutant",
    msgTitle: "Confus ?",
    msgText:
      "Gardez votre souris sur les icônes pour plus de détails. Un clic sur les outils vous redirigera vers leurs sites webs respectifs."
  },
  pl: {
    coding: "Kod",
    tools: "Narzedzia",
    languages: "Jezyki",
    flag1: "Opanowany",
    flag2: "Dobry poziom",
    flag3: "Jezyk ojczysty",
    flag4: "Poczatkujacy",
    msgTitle: "Zmieszany?",
    msgText:
      "Trzymaj myszkę na ikonie, aby uzyskać więcej szczegółów. Kliknięcie na narzędzia przekieruje Cię do odpowiednich stron internetowych."
  }
};

//Experience////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export const experienceTranslate = {
  fr: {
    educationTitle1: "BeCode (Septembre 2018 – Mars 2019)",
    educationText1:
      "Formation en développement web et technologies numériques.",
    educationTitle2: "IEPSCF (2017-2018)",
    educationText2:
      "Bachelier en Informatique et Systèmes à Uccle, 80 ECTS obtenus (un peu plus que la moitié).",
    educationTitle3: "Institut René Cartigny (2016)",
    educationText3:
      "Secondaires de qualification à Ixelles, CESS et Qualification de Technicien en informatique obtenus.",
    jobTitle1: "Job étudiant chez Bitler (2018)",
    jobText1: "Résolution de problèmes informatiques à domicile.",
    jobTitle2: "Stage chez Dubinfo (2016)",
    jobText2:
      "Réparations PC/Mac et diverses interventions (récupération de données, installation de matériel/software)."
  },
  pl: {
    educationTitle1: "BeCode (Wrzesien 2018 – Marzec 2019)",
    educationText1:
      "Szkolenie tworzenia stron internetowych i technologii cyfrowych.",
    educationTitle2: "IEPSCF (2017-2018)",
    educationText2:
      "Licencjat z informatyki i systemów w Uccle, 80 ECTS uzyskanych (nieco ponad połowa).",
    educationTitle3: "Instytut René Cartigny (2016)",
    educationText3:
      "Szkoła srednia w Ixelles, CESS i uzyskanie kwalifikacji technika komputerowego.",
    jobTitle1: "Praca studencka w firmie Bitler(2018)",
    jobText1: "Rozwiązywanie problemów z komputerem u klientów.",
    jobTitle2: "Staz u Dubinfo (2016)",
    jobText2:
      "Naprawy komputerów PC i Mac oraz różne interwencje (odzyskiwanie danych, instalacja sprzętu / oprogramowania)."
  }
};
