import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  // Mapping statuses to specific colors seen in your screenshots
  const statusStyles = {
    "on-track": "bg-[#064e3b] text-white", // Dark Emerald
    "almost-due": "bg-[#f59e0b] text-white", // Amber/Orange
    overdue: "bg-[#ef4444] text-white", // Red
  };

  return (
    <Link href={`/cardDetails/${friend.id}`}>
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50 flex flex-col items-center text-center hover:shadow-md transition-all cursor-pointer group">
        {/* Profile Image with subtle border */}
        <div className="relative w-24 h-24 mb-4">
          <Image
            src={friend.picture}
            alt={friend.name}
            fill
            className="rounded-full object-cover border-4 border-slate-50 group-hover:border-emerald-50 transition-colors"
          />
        </div>

        {/* Name: Bold and Dark */}
        <h3 className="font-extrabold text-[#1e293b] text-xl mb-1">
          {friend.name}
        </h3>

        {/* Days Since Contact: Muted blue-grey */}
        <p className="text-sm text-slate-400 font-medium mb-4">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags Section: Styled as small emerald badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#dcfce7] text-[#059669] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Main Status Badge: Rounded and shadowed */}
        <span
          className={`text-xs font-bold px-6 py-2 rounded-full shadow-sm capitalize ${
            statusStyles[friend.status.toLowerCase()] ||
            "bg-slate-100 text-slate-600"
          }`}
        >
          {friend.status.replace("-", " ")}
        </span>

        {/* Optional: Hidden Next Due Date revealed on hover or small text */}
        <p className="mt-4 text-[10px] text-slate-300 font-mono hidden group-hover:block">
          Next Due: {friend.next_due_date}
        </p>
      </div>
    </Link>
  );
};

export default FriendCard;
