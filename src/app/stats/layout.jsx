export const metadata = {
  title: "Chart | KeenKeeper Ritual History",
  description: "Your Friendship history recorder to chart",
  openGraph: {
    title: "KeenKeeper Timeline",
    description:
      "I solemnly swear I am up to no good—viewing my friendship history.",
    images: ["/og-timeline.png"],
  },
};

export default function TimelineLayout({ children }) {
  return <>{children}</>;
}
