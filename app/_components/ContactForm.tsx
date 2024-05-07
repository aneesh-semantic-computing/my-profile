import React from "react";
// import nodemailer from "nodemailer";

const ContactForm = () => {
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, // Use `true` for port 465, `false` for all other ports
    //     auth: {
    //       user: "maddison53@ethereal.email",
    //       pass: "jn7jnAPss4f63QBp6D",
    //     },
    //   });
  const sendEmail = async (formData: FormData) => {
    'use server';
    console.log(formData);
    // const info = await transporter.sendMail({
    //     from: `"${formData.get('name')}"<${formData.get('email')}>`, // sender address
    //     to: "aneesh.anirudhan@yahoo.com, aneesh.anirudhan@gmail.com, aneesh.anirudhan@outlook.com", // list of receivers
    //     subject: `My Portfolio ${formData.get('name')}`, // Subject line
    //     text: `${formData.get('message')}`, // plain text body
    //   });
    
    //   console.log("Message sent: %s", info.messageId);
  };
  return (
    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
      <h2 className="mb-4 text-2xl font-bold dark:text-white">
        Ready to Get Started?
      </h2>
      <form id="contactForm" action={sendEmail}>
        <div className="mb-6">
          <div className="mx-0 mb-1 sm:mb-4">
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="name"
                className="pb-1 text-xs uppercase tracking-wider"
              ></label>
              <input
                type="text"
                id="name"
                required
                autoComplete="given-name"
                placeholder="Your name"
                className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                name="name"
              />
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="email"
                className="pb-1 text-xs uppercase tracking-wider"
              ></label>
              <input
                type="email"
                id="email"
                required
                autoComplete="email"
                placeholder="Your email address"
                className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                name="email"
              />
            </div>
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="message"
              className="pb-1 text-xs uppercase tracking-wider"
            ></label>
            <textarea
              id="message"
              name="message"
              required
              cols={30}
              rows={5}
              placeholder="Write your message..."
              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
