import React from "react";

export default function Register(props) {
  const { date, ratio } = props;
  return (
    <div className="flex h-12 justify-between items-center gap-2 self-stretch">
      <p className="flex flex-col justify-center flex-[1_0_0] self-stretch text-base">
        {date}
      </p>
      <p className="text-center text-base font-medium">{ratio}</p>
    </div>
  );
}
