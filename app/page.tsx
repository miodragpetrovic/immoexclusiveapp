import Image from "next/image";
import Card from "././components/Card";
import SearchBox from "./components/SeachBox";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden z-0">
      {/* Background Images */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/wohnung.jpg')]"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="relative md:max-w-6xl mx-auto z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Website</h1>
        <p className="text-lg md:text-xl mb-6">
          Discover endless possibilities with our amazing services.
        </p>
        <SearchBox />
      </div>
    </div>
  );
}
