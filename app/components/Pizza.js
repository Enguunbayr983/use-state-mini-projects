"use client";
import { useState } from "react";

const NotSelectedSize = [
  { id: "little", name: "Little", price: 15000 },
  { id: "mid", name: "Mid", price: 20000 },
  { id: "large", name: "Large", price: 25000 },
];

const NotSelectedAddon = [
  { id: "cheese", name: "Бяслаг", icon: "🧀", price: 2000 },
  { id: "mushroom", name: "Мөөг", icon: "🍄", price: 2000 },
  { id: "pepper", name: "Чинжүү", icon: "🌶️", price: 1000 },
];

export const Pizzaria = ({
  sizes = NotSelectedSize,
  addons = NotSelectedAddon,
  defaultSize = "mid",
  defaultAddons = ["cheese"],
}) => {
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedAddons, setSelectedAddons] = useState(defaultAddons);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-6 font-sans text-gray-800">
      {/* Header */}
      <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
        <span>🍕</span> Пицца угсрах
      </h2>

      {/* Size Section (Хэмжээ) */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 mb-2">Хэмжээ</p>
        <div className="grid grid-cols-3 gap-3">
          {sizes.map((size) => {
            const isSelected = selectedSize === size.id;
            return (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl border transition ${
                  isSelected
                    ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <span
                  className={`text-sm font-bold ${
                    isSelected ? "text-white" : "text-gray-800"
                  }`}
                >
                  {size.name}
                </span>
                <span
                  className={`text-xs mt-0.5 ${
                    isSelected ? "text-orange-100" : "text-gray-400"
                  }`}
                >
                  {size.price}₮
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Toppings Section (Нэмэлт) */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 mb-2">Нэмэлт</p>
        <div className="grid grid-cols-3 gap-3">
          {addons.map((addon) => {
            const isSelected = selectedAddons.includes(addon.id);
            return (
              <button
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl border transition ${
                  isSelected
                    ? "border-emerald-500 bg-emerald-500 text-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <span
                  className={`text-sm font-bold flex items-center gap-1 ${
                    isSelected ? "text-white" : "text-gray-800"
                  }`}
                >
                  <span>{addon.icon}</span> {addon.name}
                </span>
                <span
                  className={`text-xs mt-0.5 ${
                    isSelected ? "text-emerald-100" : "text-gray-400"
                  }`}
                >
                  +{addon.price}₮
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity Section (Тоо ширхэг) */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 mb-2">Тоо ширхэг</p>
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition">
            -
          </button>
          <span className="text-base font-bold w-4 text-center">1</span>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition">
            +
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100 my-4" />

      {/* Summary & Total Price */}
      <div>
        <p className="text-xs font-bold text-orange-500">
          Дунд пицца · 🧀 Бяслаг
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5">
          Нэг бүрийн үнэ: 22000₮
        </p>
        <p className="text-xl font-extrabold text-gray-900 mt-2">
          Нийт: 22000₮
        </p>
      </div>
    </div>
  );
};
