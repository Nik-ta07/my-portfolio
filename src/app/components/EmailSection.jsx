'use client'; // Ensure this is at the top of the file

import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const EmailSection = ({ isDarkMode }) => { // Accept isDarkMode as a prop
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`grid md:grid-cols-2 my-12 py-24 gap-4 relative ${isDarkMode ? 'bg-background.dark' : 'bg-background.light'}`}>
      <div className="z-10">
        <h5 className={`text-3xl font-bold my-2 ${isDarkMode ? 'text-foreground.dark' : 'text-foreground.light'}`}>Let's Connect</h5>
        <p className={`mb-4 max-w-md ${isDarkMode ? 'text-foreground.dark' : 'text-foreground.light'}`}>
          I’m currently looking for new opportunities. Feel free to reach out!
        </p>
        <div className="flex space-x-4 mb-4">
          <Link href="https://github.com/yourusername" target="_blank" className="text-primary-light hover:text-primary transition">
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" className="text-primary-light hover:text-primary transition">
            <FaLinkedin className="h-6 w-6" />
          </Link>
        </div>
        <Link href="/Resume.pdf" target="_blank" className="inline-block bg-primary-light text-white py-2 px-4 rounded-lg hover:bg-primary transition duration-300">
          Download CV
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-4">
      <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Email"
              />
              <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your subject"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder=""Your message
              />
            </div>
        <button
          type="submit"
          className={`mt-4 p-3 rounded-lg bg-primary-light text-white hover:bg-primary transition duration-300`}
        >
          Send Message
        </button>
        {submitted && <p className={`mt-2 ${isDarkMode ? 'text-foreground.dark' : 'text-foreground.light'}`}>Thank you for subscribing!</p>}
      </form>
    </section>
  );
};

export default EmailSection;