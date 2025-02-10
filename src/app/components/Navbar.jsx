'use client'; 

import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"; // Import icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <nav className={`fixed mx-auto top-0 left-0 right-0 z-10 ${isDarkMode ? 'bg-background.dark' : 'bg-background.light'} shadow-lg`}>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className={`text-3xl font-semibold ${isDarkMode ? 'text-primary' : 'text-primary'}`} style={{ fontFamily: 'Tangerine', color: '#4c0887' }}>
          Nikita
        </Link>
        <div className="flex items-center">
          <button onClick={toggleDarkMode} className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-primary-light' : 'hover:bg-primary-light'}`}>
            {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}

          </div>

          
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
              <li>
                <Link href="/Resume.pdf" target="_blank" className="bg-primary-light text-white py-2 px-4 rounded-lg hover:bg-primary transition duration-300">
                  Download CV
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;