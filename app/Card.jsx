"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/app/context/globalContext";

export default function Card() {
  const {
    question,
    answer,
    setQuestion,
    setAnswer,
    hide,
    setHide,
    updateAsserts,
    updateTotal,
  } = useContext(GlobalContext);
  return (
    <div className="flex h-[400px] p-2 flex-col items-center gap-4 flex-shrink-0 self-stretch bg-darkSurface rounded-xl">
      <h2 className="self-stretch text-center font-medium text-lg">
        ¿{question}?
      </h2>
      <p
        className={`flex flex-col justify-center flex-[1_0_0] self-stretch text-center ${
          hide && "blur"
        }`}
      >
        {answer}
      </p>
      <div className="flex p-2 justify-between items-center self-stretch">
        {hide ? (
          <>
            <div></div>
            <h1>hola</h1>
            <div></div>
          </>
        ) : (
          <>
            <p>1</p>
            <p>2</p>
          </>
        )}
      </div>
    </div>
  );
}
