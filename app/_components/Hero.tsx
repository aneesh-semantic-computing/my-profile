import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import dynamic from "next/dynamic";
import { Profile } from "../types/Hero";

const HeroHeading = dynamic(() => import('./HeroHeading'), {
  loading: () => <p>Loading...</p>,
})

const Hero = ({ title, description, cta_text, picture }: Profile) => {
  return (
    <>
      <Container className="flex flex-wrap md:pt-28 pb-18">
        <div className="flex items-center w-full lg:w-1/2 lg:px-10 max-lg:order-last">
          <div className="max-w-2xl mb-8 pr-3">
            <HeroHeading />
            {description.content
              .filter((c) => c.type === "paragraph")
              .map((c, i) => (
                <p
                  key={i}
                  className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300"
                >
                  {c.content[0].text}
                </p>
              ))}
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/contact-me"
                className="px-7 py-3 text-white text-xl bg-indigo-600 rounded-md"
              >
                {cta_text}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 max-lg:order-first">
          <Image
            src={picture.filename}
            width="529"
            height="529"
            className={"object-cover rounded-full lg:inline"}
            alt={title}
            loading="eager"
            priority={true}
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
