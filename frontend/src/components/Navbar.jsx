// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-6 bg-black/80 fixed top-0 z-20">
      <h1 className="text-2xl font-bold text-orange-500">GridShield</h1>
      <div className="space-x-6">
        <Link className="text-white hover:text-orange-400" to="/">Home</Link>
        <Link className="text-white hover:text-orange-400" to="/user">User</Link>
        <Link className="text-white hover:text-orange-400" to="/operator">Operator</Link>
      </div>
    </nav>
  );
}
