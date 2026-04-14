"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "../Components/Footer";

export default function TimelinePage() {
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Load from local storage
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

  // Logic for Search
  const searchedHistory = history.filter((item) =>
    item.friendName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Logic for Filter
  const filteredHistory = history.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  const displayData =
    searchQuery.length > 0 ? searchedHistory : filteredHistory;

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 md:p-12 flex-grow w-full">
        <h1 className="text-3xl font-extrabold text-[#1e293b] mb-8">
          Timeline
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* 1. Search Bar UI */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* 2. Dropdown UI */}
          <select
            className="select select-bordered w-full md:w-48 bg-white text-slate-700 font-medium border-slate-200"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setSearchQuery(""); // Optional: clear search when filtering
            }}
          >
            <option value="All">Filter timeline</option>
            <option value="Text">Text</option>
            <option value="Call">Call</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="space-y-3">
          {displayData.length === 0 ? (
            <div className="bg-white p-10 rounded-xl text-center text-slate-400 border border-slate-100">
              {history.length === 0
                ? "No history yet. Start connecting!"
                : `No results found.`}
            </div>
          ) : (
            displayData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 transition-all hover:shadow-md hover:translate-x-1"
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
      <Footer />
    </div>
  );
}
