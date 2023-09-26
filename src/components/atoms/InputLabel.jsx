import React from "react";

const InputLabel = ({ idName, labelName }) => {
  const labelSty = {
    color: "#8CABFF",
    fontSize: "2rem",
    fontWeight: "600",
    display: "block",
  };
  return (
    <label style={labelSty} for={idName}>
      {labelName}
    </label>
  );
};

export default InputLabel;
