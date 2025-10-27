import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultancyPage from "./pages/Consultancy";
import Home from "./pages/Home";
import PhilosophyPage from "./pages/PhilosophyPage";
import InsightsPage from "./pages/InsightsPage";
import WhoWeArePage from "./pages/WhoWeArePage";
import ContactPage from "./pages/ContactPage";
import CasesPage from "./pages/Cases";
import WecomCasePage from "./pages/Cases/Wecom";
import RitmoPorKmCasePage from "./pages/Cases/RitmoPorKm";
import FCRCasePage from "./pages/Cases/FCR";
import LeaoCasePage from "./pages/Cases/Leao";
import DevelopmentPage from "./pages/Development";
import TrainiginsPage from "./pages/Training";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultoria" element={<ConsultancyPage />} />
        <Route path="/desenvolvimento" element={<DevelopmentPage />} />
        <Route path="/treinamentos" element={<TrainiginsPage />} />
        <Route path="/filosofia" element={<PhilosophyPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/quem-somos" element={<WhoWeArePage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cases/wecom" element={<WecomCasePage />} />
        <Route path="/cases/ritmo-por-km" element={<RitmoPorKmCasePage />} />
        <Route path="/cases/fcr" element={<FCRCasePage />} />
        <Route path="/cases/representacoes-leao" element={<LeaoCasePage />} />
      </Routes>
    </Router>
  );
}

export default App;
