import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import { partners } from "./data/partners";

export default function App() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none">
        <div className="bg-[url('/grid.svg')] opacity-25 absolute inset-0"></div>
        <img
          src="/mesh.svg"
          className="opacity-25 absolute bottom-1 h-[600px]"
        />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>
      <div className="relative z-20">
        <NavBar />
        <Hero />
        <Slider images={partners} />
      </div>
    </>
  );
}
