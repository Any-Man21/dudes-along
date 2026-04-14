"use client";
import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import Navbar from "@/app/Components/Navbar";
import Footer from "../Components/Footer";

const StatsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 1. Pull the data from localStorage
    const savedData = localStorage.getItem("contactHistory");
    if (savedData) {
      const history = JSON.parse(savedData);

      // 2. Count occurrences of each type
      const counts = history.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1;
        return acc;
      }, {});

      // 3. Format for Recharts
      const formattedData = [
        { name: "Call", value: counts["Call"] || 0, color: "#065f46" }, // Emerald 800
        { name: "Text", value: counts["Text"] || 0, color: "#8b5cf6" }, // Violet 500
        { name: "Video", value: counts["Video"] || 0, color: "#10b981" }, // Emerald 500
      ];

      setData(formattedData);
    }
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Friendship Analytics
          </h2>
          <p className="text-sm text-slate-500 mb-8">By Interaction Type</p>

          {/* 4. Chart Container */}
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60} // Makes it a doughnut chart
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Legend iconType="circle" verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StatsPage;
