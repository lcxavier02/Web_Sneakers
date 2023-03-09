import React from "react";

function SneakerCard({
  sneakerName,
  sneakerImage,
  sneakerPrice,
  sneakerDescription,
}) {
  return (
    <div className="w-64 max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={sneakerImage} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{sneakerName}</div>
        <p class="text-gray-700 text-base">{sneakerDescription}</p>
      </div>
      <div class="px-6 pt-4 pb-2 mx-auto">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
          ${sneakerPrice}
        </span>
      </div>
    </div>
  );
}

export default SneakerCard;
