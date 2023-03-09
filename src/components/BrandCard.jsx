import React from "react";

function BrandCard({ brandName, brandImage }) {
  return (
    <div className="w-1/4 max-w-md rounded overflow-hidden shadow-lg">
      <img class="w-full" src={brandImage} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{brandName}</div>
      </div>
    </div>
  );
}

export default BrandCard;
