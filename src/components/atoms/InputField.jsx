import React, { useContext } from "react";
import { dataContext as DataContextApi } from "../../utils/DataContextApi";

const InputField = ({ type, idName, placeholder, value }) => {
  //   const [inputData, setInputData] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //   });

  const { inputData, setInputData } = useContext(DataContextApi);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const inputFieldSty = {
    marginTop: "10px",
    border: "1px solid #35155D",
    outline: "none",
    display: "block",
    maxWidth: "500px",
    width: "100%",
    padding: "15px",
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
    marginBottom: "15px",
  };

  return (
    <input
      style={inputFieldSty}
      type={type}
      id={idName}
      value={value}
      placeholder={placeholder}
      name={idName}
      onChange={handleInput}
    />
  );
};

export default InputField;
