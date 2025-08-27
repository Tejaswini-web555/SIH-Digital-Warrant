import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductRegistration from "./pages/ProductRegistration";
import Dashboard from "./pages/Dashboard";
import ClaimWarranty from "./pages/ClaimWarranty";
import Verification from "./pages/Verification";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
        <Link to="/">Landing</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/claim">Claim Warranty</Link>
        <Link to="/verify">Verification</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<ProductRegistration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/claim" element={<ClaimWarranty />} />
        <Route path="/verify" element={<Verification />} />
      </Routes>
    </Router>
  );
}

export default App;
