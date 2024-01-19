"use client";
import React, { useState } from "react";
import { getCard } from "@/utils/dataHandler";
const GlobalContext = React.createContext();
let card = getCard();
function GlobalContextProvider({ children }) {
  const [asserts, setAsserts] = useState(0);
  const [total, setTotal] = useState(0);
  const [hide, setHide] = useState(true);
  const [question, setQuestion] = useState(card ? card.question : "");
  const [answer, setAnswer] = useState(card ? card.answer : "");
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

  const updateCard = () => {
    card = getCard();
    setQuestion(card.question);
    setAnswer(card.answer);
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
        answer,
        registers,
        addRegister,
        updateCard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };
