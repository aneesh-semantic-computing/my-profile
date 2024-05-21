import React from "react";
import Container from "./Container";

type HeadingProps = {
  title: string;
  description: string;
  anchorId?: string;
};

const SectionHeading = ({ title, description, anchorId }: HeadingProps) => {
  return (
    <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-6 lg:px-6">
      <div className="mx-auto max-w-screen-sm">
        <h2
          id={anchorId ?? "heading"}
          className="mb-4 text-4xl tracking-tight font-extrabold text-white"
        >
          {title}
        </h2>
        <p className="mb-2 font-light text-gray-500 lg:mb-4 sm:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
