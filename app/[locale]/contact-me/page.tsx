import ContactForm from "@/app/_components/ContactForm";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { getHomePageContent } from "@/app/helpers/fetchData";
import React from "react";

type Params = {
    params: {
        locale: string;
    }
}

const ContactMePage = async ({ params: { locale } }: Params) => {
  const content = await getHomePageContent(locale);
  return (
    <>
      <Navbar
        title={content.NavSection.title}
        cta_text={content.NavSection.cta_text}
      />
      <section className="dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-white-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-white-600 dark:text-slate-400">
                Let&apos;s connect and make things happen!
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-white-600 dark:text-slate-400">
                  Fillout the form and submit it. Upon receiving your email, I will get back to you to discuss further.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-blue-600 dark:text-white">
                        I am based in
                      </h3>
                      <p className="text-white-600 dark:text-slate-400">
                        Chertsey, Surrey
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-blue-600 dark:text-white">
                        Contact
                      </h3>
                      <p className="text-white-600 dark:text-slate-400">
                        Mobile: +44 7411 803369
                      </p>
                      <p className="text-white-600 dark:text-slate-400">
                        Mail: aneesh.anirudhan@yahoo.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-blue-600 dark:text-white">
                        Contactable hours
                      </h3>
                      <p className="text-white-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 18:00
                      </p>
                      <p className="text-white-600 dark:text-slate-400">
                        Saturday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ContactMePage;
