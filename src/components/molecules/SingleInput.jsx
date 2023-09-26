import React from "react";
import InputLabel from "../atoms/InputLabel";
import InputField from "../atoms/InputField";
const InputInfo = [
  {
    idName: "firstName",
    labelName: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    value: "",
  },
  {
    idName: "lastName",
    labelName: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    value: "",
  },
  {
    idName: "email",
    labelName: "Email",
    type: "email",
    placeholder: "Enter your email",
    value: "",
  },
  {
    idName: "password",
    labelName: "Password",
    type: "password",
    placeholder: "Enter your password",
    value: "",
  },
];

const SingleInput = () => {
  return (
    <div>
      {InputInfo.map((data) => {
        return (
          <div className="">
            <InputLabel idName={data.idName} labelName={data.labelName} />
            <InputField
              type={data.type}
              idName={data.idName}
              placeholder={data.placeholder}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SingleInput;
