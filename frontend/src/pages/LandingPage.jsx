import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobeAnimation from "../components/Animations/GlobeAnimation";

export default function LandingPage() {
  return (
    <div className="h-screen w-screen bg-black relative flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <div className="flex-grow flex flex-col justify-center items-center text-center text-white z-10 px-4 relative">
        <h1 className="text-5xl font-bold text-orange-500 mb-4">
          GridShield AI
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Predictive power grid alerts for citizens and network operators.
        </p>
      </div>

      {/* Globe background */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-0">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <GlobeAnimation />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
