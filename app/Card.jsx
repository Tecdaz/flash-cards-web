"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/app/context/globalContext";
import { Button } from "@nextui-org/react";
export default function Card() {
  const {
    question,
    answer,
    hide,
    setHide,
    updateAsserts,
    updateTotal,
    updateCard,
  } = useContext(GlobalContext);
  return (
    <div className="flex min-h-96 p-2 flex-col items-center gap-4 flex-shrink-0 self-stretch bg-darkSurface rounded-xl">
      <h2 className="self-stretch text-center font-medium text-lg">
        ¿{question}?
      </h2>
      <p
        className={`flex flex-col flex-[1_0_0] self-stretch text-center ${
          hide && "blur"
        }`}
      >
        {answer}
      </p>
      <div className="flex p-2 justify-between items-center self-stretch">
        {hide ? (
          <>
            <div></div>
            <Button
              color="primary"
              size="lg"
              onClick={() => {
                setHide(false);
              }}
            >
              Mostrar respuesta
            </Button>
            <div></div>
          </>
        ) : (
          <>
            <Button
              color="danger"
              size="lg"
              onClick={() => {
                setHide(true);
                updateTotal();
                updateCard();
              }}
            >
              Mal
            </Button>
            <Button
              color="success"
              size="lg"
              onClick={() => {
                setHide(true);
                updateTotal();
                updateAsserts();
                updateCard();
              }}
            >
              Bien!
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
