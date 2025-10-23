import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultancyPage from "./pages/Consultancy";
import Home from "./pages/Home";
import PhilosophyPage from "./pages/PhilosophyPage";
import InsightsPage from "./pages/InsightsPage";
import WhoWeArePage from "./pages/WhoWeArePage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultoria" element={<ConsultancyPage />} />
        <Route path="/filosofia" element={<PhilosophyPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/quem-somos" element={<WhoWeArePage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
