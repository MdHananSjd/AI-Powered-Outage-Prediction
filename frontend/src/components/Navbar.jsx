import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-black/70 text-white py-4 px-8 flex justify-between items-center fixed top-0 z-20">
      <h1 className="text-2xl font-bold text-orange-500">GridShield AI</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/user" className="hover:text-orange-400">User</Link>
        <Link to="/operator" className="hover:text-orange-400">Operator</Link>
      </div>
    </nav>
  );
}
