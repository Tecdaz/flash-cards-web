import React, { useContext } from "react";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import Register from "./Register";
import { GlobalContext } from "@/app/context/globalContext";

export default function Registers() {
  const { registers } = useContext(GlobalContext);

  return (
    <div className="flex p-2 flex-col items-center gap-2 flex-[1_0_0] self-stretch">
      <div className="flex items-center gap-2 self-stretch">
        <FolderOutlinedIcon />
        <p className="flex h-12 flex-col justify-center flex-[1_0_0] text-lg font-medium">
          Registros
        </p>
      </div>
      {registers.map((register, index) => (
        <Register key={index} date={register.date} ratio={register.ratio} />
      ))}
    </div>
  );
}
