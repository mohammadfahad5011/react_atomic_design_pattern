import React, { useState } from "react";
export const dataContext = React.createContext();

const DataContextApi = ({ children }) => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <dataContext.Provider value={{ inputData, setInputData }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataContextApi;
