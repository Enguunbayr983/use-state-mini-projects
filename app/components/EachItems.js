import { Data } from "./Data";

export const EachItems = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-lg font-bold mb-6">My Bag</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
        {Data.map((item) => {
          let borderColor = "";
          let rarityColor = "";
          let bgcolor = "";

          if (item.rarity === "common") {
            borderColor = "border-gray-500";
            rarityColor = "bg-gray-600 text-gray-100";
            bgcolor = "bg-gray-800";
          } else if (item.rarity === "rare") {
            borderColor = "border-blue-500";
            rarityColor = "bg-blue-600 text-blue-100";
            bgcolor = "bg-blue-800";
          } else if (item.rarity === "epic") {
            borderColor = "border-purple-500";
            rarityColor = "bg-purple-600 text-purple-100";
            bgcolor = "bg-purple-900";
          } else {
            borderColor = "border-yellow-400";
            rarityColor = "bg-yellow-600 text-yellow-100";
            bgcolor = "bg-yellow-900";
          }

          return (
            <div
              key={item.id}
              className={`${bgcolor} border-2 ${borderColor} rounded-xl shadow-sm p-6 flex flex-col items-center justify-center text-sm font-semibold hover:shadow-lg transition`}
            >
              <p className="text-3xl mb-2">{item.emoji}</p>

              <div className="flex flex-col items-center">
                <p className="text-white">{item.name}</p>
                <p className="text-gray-400">{item.type}</p>
              </div>

              <div className="flex items-center justify-around gap-3 mt-3">
                <p className={`${rarityColor} rounded-full px-3 py-1 text-xs`}>
                  {item.rarity}
                </p>

                <p className="text-gray-300">⚔️ {item.power}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
