// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import UserPage from "../pages/UserPage";
import OperatorPage from "../pages/OperatorPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/operator" element={<OperatorPage />} />
      </Routes>
    </Router>
  );
}
