// app/timeline/layout.jsx

export const metadata = {
  title: "Timeline | KeenKeeper Ritual History",
  description:
    "Review your past communication rituals and connection cycles. Your history is etched here.",
  openGraph: {
    title: "KeenKeeper Timeline",
    description:
      "I solemnly swear I am up to no good—viewing my friendship history.",
    images: ["/og-timeline.png"], // Optional: specialized image for the timeline
  },
};

export default function TimelineLayout({ children }) {
  return <>{children}</>;
}
