"use client";

import { useState } from "react";

export const ScoreBoard = () => {
  const [isScored, setIsScored] = useState(0);

  return (
    <div className="flex flex-col rounded-xl gap-[5px] w-[200px] justify-center bg-white">
      <p className="text-base text-center text-black">🔢Score</p>
      <p className="text-2xl text-center text-black"> {isScored}</p>
      <div className="flex justify-around">
        <button
          onClick={() => {
            setIsScored(isScored + 1);
          }}
          className="rounded-xl flex justify-center items-center bg-black text-gray text-3xl w-[50px]  "
        >
          +
        </button>
        <button
          onClick={() => {
            setIsScored(isScored - 1);
          }}
          className="rounded-full flex justify-center items-center bg-black text-gray text-3xl w-[50px]  "
        >
          -
        </button>
      </div>
    </div>
  );
};
