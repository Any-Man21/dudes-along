import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "Total Friends", value: "10" },
    { label: "On Track", value: "3" },
    { label: "Need Attention", value: "6" },
    { label: "Interactions This Month", value: "12" },
  ];

  return (
    <div className="px-4 py-8 bg-slate-50 mx-15">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]"
            >
              <span className="text-3xl md:text-4xl font-bold text-emerald-900 mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
