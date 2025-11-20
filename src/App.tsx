import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingHero from "./components/FloatingHero";
import Header from "./components/Header";
import CalendlyModal from "./components/CalendlyModal";
import SEOIntroSection from "./components/SEOIntroSection";
import IndustriesSection from "./components/IndustriesSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import IndustriesOverviewPage from "./pages/IndustriesOverviewPage";
import LegalFinancialPage from "./pages/LegalFinancialPage";
import ConstructionFieldOpsPage from "./pages/ConstructionFieldOpsPage";
import RetailLogisticsPage from "./pages/RetailLogisticsPage";
import ROICalculatorPage from "./pages/ROICalculatorPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import NotFoundPage from "./pages/NotFoundPage";
import SiteMetadata from "./components/SiteMetadata";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);

  const HomePage = () => (
    <>
      <SiteMetadata />
      <Header onBookAuditClick={() => setIsCalendlyModalOpen(true)} />
      <FloatingHero onBookAuditClick={() => setIsCalendlyModalOpen(true)} />
      <SEOIntroSection />
      <IndustriesSection onBookAuditClick={() => setIsCalendlyModalOpen(true)} />
      <WhatWeDoSection onBookAuditClick={() => setIsCalendlyModalOpen(true)} />
      <FinalCTA onBookAuditClick={() => setIsCalendlyModalOpen(true)} />
      <Footer onBookAuditClick={() => setIsCalendlyModalOpen(true)} />
    </>
  );

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/industries" element={<IndustriesOverviewPage onBookAuditClick={() => setIsCalendlyModalOpen(true)} />} />
          <Route path="/legal-financial-operations-automation" element={<LegalFinancialPage onBookAuditClick={() => setIsCalendlyModalOpen(true)} />} />
          <Route path="/construction-field-operations-automation" element={<ConstructionFieldOpsPage onBookAuditClick={() => setIsCalendlyModalOpen(true)} />} />
          <Route path="/retail-logistics-automation" element={<RetailLogisticsPage onBookAuditClick={() => setIsCalendlyModalOpen(true)} />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage onBookAuditClick={() => setIsCalendlyModalOpen(true)} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage onBookAuditClick={() => setIsCalendlyModalOpen(true)} />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage onBookAuditClick={() => setIsCalendlyModalOpen(true)} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <CalendlyModal isOpen={isCalendlyModalOpen} onClose={() => setIsCalendlyModalOpen(false)} />
      </div>
    </Router>
  );
}