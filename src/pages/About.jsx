import React from "react";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <div className="mx-auto w-5/6">
      <div>
        <img src={aboutImage} className="mt-5" />
        <p className="my-12 font-mono">
          SNEAKERS is the first technical apparel brand to apply two decades of
          pro sports level innovation and engineering to create a system of
          clothing that performs across every activity. With over 3 years in
          development, our fabrics and materials fuse natural elements with
          cutting-edge technology. Designed with the body in mind. Built to
          move, breathe, and sweat while you compete, live and recover. Created
          to inspire you to be your best, because whatever you do, life is a
          sport. We call our philosophy Lifeletics. Bringing together their
          collective experience in sports, design and manufacturing. SNEAKERS is
          founded by Xavier.
        </p>
      </div>
    </div>
  );
}

export default About;
