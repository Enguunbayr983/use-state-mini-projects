"use client";

import { useState } from "react";

export const ScoreBoard = () => {
  const [isScored, setIsScored] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 w-[240px] p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-xl border border-gray-700">
      <p className="text-sm font-semibold  text-gray-400">🔢 Score Board</p>

      <div className="flex items-center justify-center w-full h-24 rounded-xl bg-gray-800 border border-gray-700 shadow-inner">
        <p className="text-5xl font-extrabold text-white tabular-nums">
          {isScored}
        </p>
      </div>

      <div className="flex justify-center gap-4 w-full">
        <button
          onClick={() => setIsScored(() => isScored + 1)}
          className="flex-1 h-12 rounded-xl bg-gray-900 hover:bg-emerald-400  text-white text-3xl font-bold shadow-lg transition-all duration-200"
        >
          +
        </button>

        <button
          onClick={() => setIsScored(() => isScored - 1)}
          className="flex-1 h-12 rounded-xl bg-gray-900 hover:bg-red-400  text-white text-3xl font-bold shadow-lg transition-all duration-200"
        >
          −
        </button>
      </div>
    </div>
  );
};
