import React, { useState, useEffect } from "react";
import BrandCard from "../components/BrandCard";
import brandData from "../../../brandData.json";

function Collections() {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    setBrand(brandData);
  }, []);

  return (
    <div className="mx-auto w-5/6 h-full">
      <h1 className="text-xl my-10">Popular Brands and Collections</h1>
      <div className="flex flex-wrap gap-12 mx-auto mb-10 justify-center">
        {brand.map((brand) => (
          <BrandCard
            key={brand.id}
            brandName={brand.brand}
            brandImage={brand.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default Collections;
