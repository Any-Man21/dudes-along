import Image from "next/image";
import Navbar from "./Components/Navbar";
import HomeSection from "./Components/HomeSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="mb-10">
        <HomeSection />
      </div>
      <Footer/>

    </div>
  );
}
