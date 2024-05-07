"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const HeroHeading = () => {
  return (
    <h1 className="text-5xl font-bold leading-snug tracking-tight max-lg:pt-10 md:text-6xl lg:text-7xl lg:leading-tight xl:text-8xl xl:leading-tight text-white">
      I am a <br />
      <ReactTyped
        strings={["Developer", "Freelancer", "Consultant"]}
        typeSpeed={50}
        loop
        backSpeed={20}
        cursorChar="|"
        showCursor={true}
      />
    </h1>
  );
};

export default HeroHeading;
