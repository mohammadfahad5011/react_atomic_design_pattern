import React from "react";

const FormTitle = ({ children }) => {
  const titleSty = {
    color: "#35155D",
    fontSize: "4rem",
    texAlign: "center",
    fontWeight: "800",
    marginBottom: "80px",
  };
  return <h1 style={titleSty}>{children}</h1>;
};

export default FormTitle;
