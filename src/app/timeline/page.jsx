"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";

export default function TimelinePage() {
  const [history, setHistory] = useState([]);

  // Load from local storage when the page opens as Utsho vai showed
  useEffect(() => {
    const savedData = localStorage.getItem("contactHistory");
    if (savedData) {
      setHistory(JSON.parse(savedData));
    }
  }, []);

  const getIcon = (type) => {
    if (type === "Call") return "📞";
    if (type === "Text") return "💬";
    return "📹";
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-3xl font-extrabold text-[#1e293b] mb-8">
          Timeline
        </h1>

        <div className="space-y-3">
          {history.length === 0 ? (
            <div className="bg-white p-10 rounded-xl text-center text-slate-400">
              No history yet. Start connecting!
            </div>
          ) : (
            history.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-xl">
                  {getIcon(item.type)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">
                    {item.type} with {item.friendName}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {item.date}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
