"use client";

import { useState } from "react";

export const SecretMessage = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 w-[240px] p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-xl border border-gray-700">
      <p className="text-sm font-semibold tracking-widest uppercase text-gray-400">
        🔒 Secret Message
      </p>

      <div className="flex items-center justify-center w-full h-24 rounded-xl bg-gray-800 border border-gray-700 shadow-inner">
        <p className="text-5xl">{isOn ? "🔓" : "🔒"}</p>
      </div>

      <button
        onClick={() => setIsOn((prev) => !prev)}
        className={`w-full h-12 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all duration-200 ${
          isOn
            ? "bg-red-500 hover:bg-red-400 text-white"
            : "bg-yellow-500 hover:bg-yellow-400 text-black"
        }`}
      >
        {isOn ? "🔒 Lock" : "🔓 Unlock"}
      </button>

      {isOn && (
        <div className="w-full py-4 bg-emerald-900 border border-emerald-500 rounded-xl flex justify-center items-center ">
          <p className="text-emerald-400 font-bold text-lg">🎉 Congrats!</p>
        </div>
      )}
    </div>
  );
};
