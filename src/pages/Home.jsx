import React from "react";
import Gallery from "../components/Gallery";
import Novedades1 from ".././assets/novedades1.jpg";
import Novedades2 from ".././assets/novedades2.jpg";
import starting from ".././assets/starting.jpg";

export default function Home() {
  return (
    <div className="mx-auto w-5/6">
      <Gallery />
      <h1 className="text-6xl font-mono text-center my-8">
        New products every week
      </h1>
      <div className="mx-auto w-5/6 my-10">
        <h2 className="text-xl mb-2">Newness</h2>
        <div className="flex gap-5 mx-auto">
          <div className="w-3/6 h-4/5">
            <img src={Novedades1} className="h-fit" />
          </div>
          <div className="w-3/6 h-4/5">
            <img src={Novedades2} className="h-fit" />
          </div>
        </div>
      </div>
      <h1 className="text-6xl font-mono text-center my-8">
        We are just starting
      </h1>
      <div className="flex gap-5 mx-auto justify-center mb-10">
        <div className="w-3/6 h-4/5">
          <img src={starting} className="h-fit" />
        </div>
      </div>
    </div>
  );
}
