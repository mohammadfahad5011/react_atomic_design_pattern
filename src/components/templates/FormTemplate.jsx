import React from "react";
import SignUpForm from "../organisms/SignUpForm";
import FormImg from "../atoms/FormImg";
import "./FormTemplate.css";

const FormTemplate = () => {
  const formTemSty = {
    width: "1140px",
    margin: "0 auto",
    display: "flex",
    gap: "40px",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "40px",
    outline: "1px solid #8CABFF",
    outlineOffset: "15px",
  };
  return (
    <div className="">
      <div style={formTemSty}>
        <div className="form_left" style={{ width: "50%" }}>
          <div className="form_left-thum">
            <FormImg imgUrl={"http://via.placeholder.com/500x500"} />
          </div>
        </div>
        <div className="form_right" style={{ width: "50%", flexShrink: "0" }}>
          <SignUpForm />
        </div>
      </div>
      <div
        className="form_shap"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "-1",
        }}
      >
        <FormImg imgUrl="./formShap.svg" />
      </div>
    </div>
  );
};

export default FormTemplate;
