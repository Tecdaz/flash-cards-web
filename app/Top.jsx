"use client";
import React, { useContext } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { GlobalContext } from "@/app/context/globalContext";

export default function Top() {
  const { total, asserts } = useContext(GlobalContext);
  return (
    <div className="flex justify-between items-center self-stretch">
      <CancelOutlinedIcon />
      <p className="">
        {asserts}/{total}
      </p>
    </div>
  );
}
