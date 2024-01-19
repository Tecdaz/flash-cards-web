"use client";
import React, { useContext } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Button } from "@nextui-org/react";
import { GlobalContext } from "@/app/context/globalContext";

export default function Top() {
  const { total, asserts } = useContext(GlobalContext);
  return (
    <div className="flex justify-between items-center self-stretch">
      <Button isIconOnly color="danger">
        <CancelOutlinedIcon />
      </Button>

      <p className="">
        {asserts}/{total}
      </p>
    </div>
  );
}
