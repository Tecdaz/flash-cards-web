"use client";
import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "@/app/context/globalContext";
import { Button, Spinner } from "@nextui-org/react";
import { getCard } from "@/utils/dataHandler";
export default function Card() {
  const [card, setCard] = useState(null);
  useEffect(() => {
    setCard(getCard());
  }, []);

  const updateCard = () => {
    console.log("updateCard");
    setCard(getCard());
  };

  const { hide, setHide, updateAsserts, updateTotal } =
    useContext(GlobalContext);
  return (
    <div className="flex min-h-96 p-2 flex-col items-center gap-4 flex-shrink-0 self-stretch bg-darkSurface rounded-xl">
      {card ? (
        <>
          <h2 className="self-stretch text-center font-medium text-lg">
            ¿{card.question}?
          </h2>
          <p
            className={`flex flex-col flex-[1_0_0] self-stretch text-center ${
              hide && "blur"
            }`}
          >
            {card.answer}
          </p>
        </>
      ) : (
        <Spinner className="h-full" size="lg" />
      )}

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
