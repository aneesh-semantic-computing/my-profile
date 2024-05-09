import React from "react";
import Image from "next/image";

type Props = {
  testimonials: {
    name: string;
    role: string;
    testimonial: string;
    picture: {
      filename: string;
    };
  }[];
};

const Testimonials = ({ testimonials }: Props) => {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Testimonials
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
              Below are testimonials from some of my amazing colleagues and peers with whom I had great pleasure to work with.
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            {testimonials?.map((testimonial: any) => (
              <figure
                key={testimonial.name}
                className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 lg:border-r bg-gray-800 border-gray-700"
              >
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-300">
                  <p className="my-4">
                    {testimonial.testimonial}
                  </p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image
                    className="w-9 h-9 rounded-full"
                    src={testimonial.picture.filename}
                    alt={testimonial.name}
                  />
                  <div className="space-y-0.5 font-medium text-left">
                    <div>{testimonial.name}</div>
                    <div className="text-sm font-light text-gray-300">
                    {testimonial.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/aneeshanirudhan"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
            >
              Show more...
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
