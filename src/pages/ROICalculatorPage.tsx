import { useEffect } from "react";
import Header from "../components/Header";
import ROICalculator from "../components/ROICalculator";
import Footer from "../components/Footer";

interface ROICalculatorPageProps {
  onBookAuditClick: () => void;
}

export default function ROICalculatorPage({ onBookAuditClick }: ROICalculatorPageProps) {
  // Set page title and meta description
  useEffect(() => {
    document.title = "Operational Friction ROI Calculator | ClaveSolutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Estimate how much manual data entry and disconnected systems are costing your team each year. Use ClaveSolutions' operational friction ROI calculator and see the potential savings from workflow automation and systems integration."
      );
    }
  }, []);

  return (
    <>
      <Header onBookAuditClick={onBookAuditClick} />
      <ROICalculator onBookAuditClick={onBookAuditClick} />
      <Footer onBookAuditClick={onBookAuditClick} />
    </>
  );
}