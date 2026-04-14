"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To detect current URL

const Navbar = () => {
  const pathname = usePathname(); // This tells us where we are (e.g., "/" or "/timeline")

  const navLinks = [
    {
      id: "home",
      name: "Home",
      path: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      id: "timeline",
      name: "Timeline",
      path: "/timeline", // Make sure this matches your folder name in /app
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      id: "stats",
      name: "Stats",
      path: "/stats",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    },
  ];

  return (
    <nav className="navbar bg-white px-4 md:px-8 border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52 border border-slate-100"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                {/* Changed button to Link for mobile */}
                <Link
                  href={link.path}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    pathname === link.path
                      ? "text-emerald-800 font-bold bg-emerald-50"
                      : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <Link href="/">
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Keen
            </span>
            <span className="text-xl font-bold tracking-tight text-emerald-800">
              Keeper
            </span>
          </Link>
        </div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <div className="flex gap-2">
          {navLinks.map((link) => (
            /* Changed button to Link for desktop */
            <Link
              key={link.id}
              href={link.path}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-300 font-medium border-none
                ${
                  pathname === link.path
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-200"
                    : "text-slate-500 hover:text-emerald-800 hover:bg-emerald-50"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={link.icon}
                />
              </svg>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
