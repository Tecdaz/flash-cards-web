"use client";
import Top from "@/app/Components/Top";
import { GlobalContextProvider } from "./context/globalContext";
import Card from "@/app/Components/Card";
import { NextUIProvider } from "@nextui-org/react";
import Registers from "./Components/Registers";

export default function Home() {
  return (
    <NextUIProvider className="h-screen flex justify-center w-screen bg-black text-white dark">
      <GlobalContextProvider>
        <div className="flex flex-col items-center gap-2 p-4 max-w-[768px] w-full">
          <h1 className="self-stretch text-center text-2xl line leading-7 weight font-normal">
            Flash Cards Comu
          </h1>
          <Top />

          <Card />

          <Registers />
        </div>
      </GlobalContextProvider>
    </NextUIProvider>
  );
}
