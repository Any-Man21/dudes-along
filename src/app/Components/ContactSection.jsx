import React from "react";
import friendsData from "../data/friends.json";
import FriendCard from "./FriendCard";

const ContactSection = () => {
  return (
    <section className="px-6 py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 px-2">
          Your Friends
        </h2>

        {/* The Grid: 1 column mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
