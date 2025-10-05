"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "home", path: "/" },
    { name: "projects", path: "/project" },
    { name: "about me", path: "/about_me" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <header className="py-6 xl:py-12 text-white px-4 xl:px-0 mb-16 xl:mb-24">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        {/* Logo */}
            <Link href="/">
              <h1 className="text-4xl font-semibold cursor-pointer">
                <span className="inline-block">
                  {"Bruno".split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block transition-all duration-300 hover:text-accent animate-jump"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <span className="text-accent">.</span>
              </h1>
            </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
            <nav className="flex gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`capitalize font-medium hover:text-accent transition-all ${
                    pathname === link.path 
                      ? "text-accent border-b-2 border-accent" 
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
          </nav>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold bg-accent text-primary hover:bg-accent-hover h-[44px] px-8 min-w-[120px] transition-all duration-300 animate-pulse">
              Hire me
            </button>
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <div className="xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex justify-center items-center"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-[32px] text-accent"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu_Fries">
                <path d="M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"></path>
                <path d="M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"></path>
                <path d="M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"></path>
              </g>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-20 right-4 bg-primary border border-accent rounded-lg p-6 z-50">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.path}
                      className={`capitalize font-medium hover:text-accent transition-all ${
                        pathname === link.path 
                          ? "text-accent border-b-2 border-accent" 
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold bg-accent text-primary hover:bg-accent-hover h-[44px] px-8 min-w-[120px] transition-all duration-300">
                  Hire me
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

