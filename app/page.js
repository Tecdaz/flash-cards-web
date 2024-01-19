"use client";
import Top from "@/app/Top";
import { GlobalContextProvider } from "./context/globalContext";
import Card from "@/app/Card";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider className="h-screen flex justify-center w-screen">
      <GlobalContextProvider>
        <div className="flex flex-col items-center gap-2 p-4 max-w-[768px] w-full">
          <h1 className="self-stretch text-center text-2xl line leading-7 weight font-normal">
            Flash Cards Comu
          </h1>
          <Top />
          <Card />
        </div>
      </GlobalContextProvider>
    </NextUIProvider>
  );
}
