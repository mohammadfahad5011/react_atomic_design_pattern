import React, { useContext } from "react";
import FormTitle from "../atoms/FormTitle";
import SingleInput from "../molecules/SingleInput";
import FormBtn from "../atoms/FormBtn";
import { dataContext } from "../../utils/DataContextApi";

const SignUpForm = () => {
  const { inputData } = useContext(dataContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputData, null, 2));
  };
  const singeFormSty = {
    width: "100%",
  };
  return (
    <form onSubmit={handelSubmit} style={singeFormSty}>
      <FormTitle>Sign Up</FormTitle>
      <SingleInput />
      <FormBtn />
    </form>
  );
};

export default SignUpForm;
