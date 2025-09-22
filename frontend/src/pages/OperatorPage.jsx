import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OperatorPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl font-bold">Operator Dashboard</h1>
      </main>
      <Footer />
    </div>
  );
}
