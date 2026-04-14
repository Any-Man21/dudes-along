import React from "react";
import StatsSection from "./StaticNumbers";
import ContactSection from "./ContactSection";

const HomeSection = () => {
  const stats = [
    { label: "Total Friends", value: "10" },
    { label: "On Track", value: "3" },
    { label: "Need Attention", value: "6" },
    { label: "Interactions This Month", value: "12" },
  ];
  return (
    <div>
      <section className="bg-slate-50 min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Friends to keep close in your life
          </h1>

          {/* Subtext - Using max-w-lg to keep it from stretching too wide on desktop */}
          <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* The Action Button */}
          <div className="flex justify-center">
            <button className="btn bg-emerald-900 hover:bg-emerald-950 text-white border-none px-8 flex items-center gap-2 normal-case font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add a Friend
            </button>
          </div>
        </div>
      </section>
      <StatsSection />
      <div className="mx-20">
        <ContactSection />
      </div>
    </div>
  );
};

export default HomeSection;
