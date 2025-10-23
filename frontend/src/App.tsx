import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultancyPage from "./pages/Consultancy";
import Home from "./pages/Home";
import PhilosophyPage from "./pages/PhilosophyPage";
import InsightsPage from "./pages/InsightsPage";
import WhoWeArePage from "./pages/WhoWeArePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultoria" element={<ConsultancyPage />} />
        <Route path="/filosofia" element={<PhilosophyPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/quem-somos" element={<WhoWeArePage />} />
      </Routes>
    </Router>
  );
}

export default App;
