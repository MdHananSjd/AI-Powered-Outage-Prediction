// src/pages/LandingPage.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navbar from "../components/navbar";
import GlobeAnimation from "../components/Animation/GlobeAnimation";

export default function LandingPage() {
  return (
    <div className="h-screen w-screen bg-black relative">
      <Navbar />

      {/* 3D Globe */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <GlobeAnimation />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold text-orange-500 mb-4">GridShield AI</h1>
        <p className="text-lg text-gray-300 mb-8">
          Predictive power grid alerts for citizens and network operators.
        </p>
      </div>
    </div>
  );
}
