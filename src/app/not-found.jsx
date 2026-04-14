"use client";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#020617] flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Cyber Background Animation (Scanning Grid) */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#064e3b 1px, transparent 1px), linear-gradient(90deg, #064e3b 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="z-10 text-center">
        {/* Archaic / Glitchy 404 */}
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-900 animate-pulse tracking-tighter">
          404
        </h1>

        <div className="mt-4">
          <h2 className="text-emerald-500 font-mono text-lg uppercase tracking-[0.3em] mb-2">
            System Error: Path Lost
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed mb-8">
            The connection to this sector has been severed. The data you seek
            has been archived or moved to a different dimension.
          </p>
        </div>

        {/* Cyber Button */}
        <Link href="/">
          <button className="group relative px-8 py-3 font-bold text-emerald-400 border border-emerald-500/50 rounded-none overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <span className="absolute inset-0 w-0 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative group-hover:text-emerald-950 flex items-center gap-2">
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              RETURN TO CORE
            </span>
          </button>
        </Link>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-900/20 blur-[120px] rounded-full z-0"></div>
    </main>
  );
}
