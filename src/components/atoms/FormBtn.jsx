import React from "react";

const FormBtn = () => {
  const SignUpBtnSty = {
    padding: "15px 30px",
    outline: "none",
    color: "#fff",
    background: "#512B81",
    border: "none",
    fontSize: "1.5rem",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    marginTop: "50px",
  };
  return (
    <button type="submit" style={SignUpBtnSty}>
      Sign Up
    </button>
  );
};

export default FormBtn;
