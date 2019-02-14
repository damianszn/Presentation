/* 
    Most of the time i keep the attibutes ordered by SIZE/POSITION/STYLING */

/* HEADER /////////////////////////////////////////////////////// */

export const headerDiv = {
  width: "100vw",
  height: "12%",

  position: "relative",
  zIndex: 5,

  boxShadow: "0px 0px 20px 0px #222"
};

export const header = {
  width: "30vw",

  display: "inline",
  margin: 0,

  fontFamily: "Krub, sans-serif"
};

export const flexHeader = {
  display: "flex",
  alignContent: "space-evenly",
  justifyContent: "space-evenly"
};

export const navbar = {
  float: "right",
  padding: "1vh",

  fontFamily: "KoHo, sans-serif",
  fontWeight: "600"
};

/* FOOTER  ///////////////////////////////////////////////////////////////// */

export const footer = {
  width: "100vw",
  height: "10%",

  position: "relative",
  bottom: 0,
  zIndex: 5,
  display: "flex",
  alignContent: "space-between",
  justifyContent: "space-between",

  boxShadow: "0px -10px 20px -10px rgba(0,0,0,0.75)"
};

export const languagesDiv = {
  width: "25vh",

  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: 0
};

export const languagesFlags = {
  cursor: "pointer"
};

export const repoLink = {
  float: "right",

  color: "#grey"
};
