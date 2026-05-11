import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Download from "./pages/Download";
import PreRegister from "./pages/PreRegister";
import Docs from "./pages/Docs";
import Help from "./pages/Help";
import Community from "./pages/Community";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PreRegister />} />
        <Route path="/overview" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/community" element={<Community />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}
