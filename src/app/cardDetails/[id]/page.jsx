import React from "react";
import Image from "next/image";
import Link from "next/link";
import friendsData from "../../data/friends.json";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

export default async function CardDetailPage({ params }) {
  const { id } = await params;
  const friend = friendsData.find((f) => f.id.toString() === id);

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-slate-800">
            Connection Lost
          </h1>
          <Link
            href="/"
            className="bg-emerald-800 text-white px-6 py-2 rounded-lg font-bold"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      <Navbar />
      <div className="min-h-screen p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="text-emerald-800 font-bold mb-6 md:mb-8 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
          >
            ← Back
          </Link>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* LEFT COLUMN: Profile & Actions */}
            <div className="lg:col-span-4 space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col items-center border border-slate-100">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6">
                  <Image
                    src={friend.picture}
                    alt={friend.name}
                    fill
                    className="rounded-full object-cover border-4 border-slate-50"
                  />
                </div>
                <h1 className="text-xl md:text-2xl font-extrabold text-slate-800">
                  {friend.name}
                </h1>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <span className="bg-red-100 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {friend.status}
                  </span>
                  {friend.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-slate-500 text-center text-sm italic leading-relaxed">
                  "{friend.bio}"
                </p>
                <p className="mt-2 text-[10px] text-slate-400 font-medium">
                  Preferred: email
                </p>
              </div>

              {/* Action Buttons: Snooze, Archive, Delete */}
              <div className="space-y-3">
                <button className="w-full bg-white py-4 px-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center gap-3 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors">
                  <span>🔔</span> Snooze 2 Weeks
                </button>
                <button className="w-full bg-white py-4 px-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center gap-3 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors">
                  <span>📥</span> Archive
                </button>
                <button className="w-full bg-white py-4 px-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center gap-3 text-red-500 font-bold text-sm hover:bg-red-50 transition-colors">
                  <span>🗑️</span> Delete
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Stats, Goals, Check-in */}
            <div className="lg:col-span-8 space-y-6">
              {/* Top Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                  <p className="text-3xl font-extrabold text-slate-800">
                    {friend.days_since_contact}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">
                    Days Since Contact
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                  <p className="text-3xl font-extrabold text-slate-800">
                    {friend.goal}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">
                    Goal (Days)
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                  <p className="text-xl font-extrabold text-slate-800">
                    {friend.next_due_date || "Feb 27, 2026"}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">
                    Next Due
                  </p>
                </div>
              </div>

              {/* Relationship Goal Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <button className="absolute top-6 right-6 text-[10px] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-md hover:bg-slate-50">
                  EDIT
                </button>
                <h2 className="font-bold text-slate-800 mb-4 text-lg">
                  Relationship Goal
                </h2>
                <p className="text-sm text-slate-600">
                  Connect every{" "}
                  <span className="font-extrabold text-slate-900">
                    {friend.goal} days
                  </span>
                </p>
              </div>

              {/* Quick Check-in Section */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="font-bold text-slate-800 mb-6 text-lg">
                  Quick Check-in
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all group border border-transparent hover:border-emerald-100">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      📞
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Call
                    </span>
                  </button>
                  <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all group border border-transparent hover:border-emerald-100">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      💬
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Text
                    </span>
                  </button>
                  <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all group border border-transparent hover:border-emerald-100">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      📹
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Video
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
