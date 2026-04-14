import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-emerald-100 px-6 py-12 md:px-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            KeenKeeper
          </h2>
          <p className="max-w-xl text-xs md:text-sm text-emerald-200 leading-relaxed font-light">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="flex flex-col items-center gap-4 mt-2">
            <span className="text-xs md:text-sm font-medium text-emerald-100">
              Social Links
            </span>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-950 hover:bg-emerald-100 transition-colors"
              >
                <i className="font-bold text-2xl">in</i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-950 hover:bg-emerald-100 transition-colors"
              >
                <i className="font-bold text-2xl">f</i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-950 hover:bg-emerald-100 transition-colors"
              >
                <i className="font-bold text-2xl">X</i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-8 mt-4 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-6 md:gap-0">
          <p className="text-[11px] md:text-xs text-emerald-300">
            &copy; {currentYear} KeenKeeper. All rights reserved.
          </p>
          <div className="flex gap-4 text-[11px] md:text-xs text-emerald-300">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
