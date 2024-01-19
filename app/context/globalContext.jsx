"use client";
import React, { useState } from "react";
const GlobalContext = React.createContext();

function GlobalContextProvider({ children }) {
  const [asserts, setAsserts] = useState(0);
  const [total, setTotal] = useState(0);
  const [hide, setHide] = useState(true);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Posible respuesta");
  const [registers, setRegisters] = useState([]);

  const addRegister = (register) => {
    setRegisters([...registers, register]);
  };

  const updateAsserts = () => {
    setAsserts(asserts + 1);
  };

  const updateTotal = () => {
    setTotal(total + 1);
  };

  return (
    <GlobalContext.Provider
      value={{
        asserts,
        total,
        hide,
        setHide,
        updateAsserts,
        updateTotal,
        question,
        setQuestion,
        answer,
        setAnswer,
        registers,
        addRegister,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };
