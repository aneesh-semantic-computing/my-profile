import Link from "next/link";
import Image from "next/image";

import Container from "./Container";

type Props = {
    title: string;
    description: {
        content: {
          type: string;
          content: { text: string }[];
        }[]
    };
    cta_text: string;
    picture: {
        filename: string;
    }
}

const Hero = ({ title, description, cta_text, picture } : Props) => {
  return (
    <>
      <Container className="flex flex-wrap md:pt-28 pb-18">
        <div className="flex items-center w-full lg:w-1/2 lg:px-10 max-md:order-last">
          <div className="max-w-2xl mb-8 pr-3">
            <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
              {title}
            </h1>
            {description.content.filter((c) => c.type === 'paragraph').map((c, i) => <p key={i} className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">{c.content[0].text}</p>)}
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="#contact"
                className="px-7 py-3 text-white text-xl bg-indigo-600 rounded-md"
              >
                {cta_text}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 max-md:order-first">
          <Image
            src={picture.filename}
            width="529"
            height="529"
            className={"object-cover rounded-full lg:inline"}
            alt={title}
            loading="eager"
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;