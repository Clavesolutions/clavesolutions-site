import { useEffect } from "react";
import { ShoppingCart, Package, DollarSign, Zap, ArrowRightLeft, BarChart3 } from "lucide-react";
import Header from "../components/Header";
import IndustryFloatingHero from "../components/IndustryFloatingHero";
import IndustryPageLayout from "../components/IndustryPageLayout";
import { retailIcons } from "../config/retailIcons";

interface RetailLogisticsPageProps {
  onBookAuditClick: () => void;
}

export default function RetailLogisticsPage({ onBookAuditClick }: RetailLogisticsPageProps) {
  useEffect(() => {
    document.title = "Retail & Logistics Automation | SAP, Epicor, WMS Integrations | ClaveSolutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "ClaveSolutions helps retail, distribution and logistics teams automate order, inventory and shipment workflows by connecting SAP, Epicor, WMS, TMS, Shopify, Amazon and other systems. Reduce manual data entry and improve order-to-cash visibility."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header onBookAuditClick={onBookAuditClick} />
      
      {/* Hero with Floating Icons */}
      <IndustryFloatingHero
        icons={retailIcons}
        heroH1={<>Keep orders, inventory, and<br className="hidden md:block" /> shipments in sync automatically.</>}
        heroSubhead="We automate the flow between your sales channels, warehouse, and accounting so orders, stock, and invoices update themselves—without re-typing or chasing status."
        audienceLabel="Built for"
        audiences={[
          "distributors",
          "ecommerce brands",
          "3PLs"
        ]}
        automationLabel="We automate:"
        automations={[
          "order capture",
          "fulfillment",
          "replenishment",
          "invoicing"
        ]}
        primaryCTA="Book Your Integration Audit"
        secondaryCTA="See ROI Calculator"
        onPrimaryCTAClick={onBookAuditClick}
        onSecondaryCTAClick={() => window.location.href = '/roi-calculator'}
      />
      
      {/* Rest of page content */}
      <IndustryPageLayout
        // Pain Points
        painHeading="Where orders, inventory, and shipments fall out of sync"
        painPoints={[
          {
            title: "Orders keyed into multiple systems",
            description: "Online orders and EDI feeds are re-typed into ERP, WMS or TMS, creating delays and errors. Each order means 5-10 minutes of manual data entry, and at scale that's multiple FTEs just typing.",
            icon: <ShoppingCart className="w-6 h-6 text-red-400" />,
          },
          {
            title: "Inventory spread across spreadsheets and systems",
            description: "Stock levels don't match between ERP, warehouse and sales channels, so you oversell or sit on dead inventory. Customer service spends hours daily answering 'when will it ship?' questions.",
            icon: <Package className="w-6 h-6 text-red-400" />,
          },
          {
            title: "Shipments and billing out of sync",
            description: "Tracking and PODs live in one place, invoices in another, and someone reconciles them by hand. Month-end close takes days instead of hours because shipping and billing don't match.",
            icon: <DollarSign className="w-6 h-6 text-red-400" />,
          },
        ]}
        
        // Solutions
        solutionHeading="Automations that connect ecommerce, ERP, WMS, and TMS"
        solutions={[
          {
            title: "Order Intake and Allocation",
            description: "We sync Shopify, Amazon, and SAP so orders route into ERP and WMS automatically, with allocation rules that send work to the right warehouse first. Orders hit the warehouse floor in minutes, not hours.",
            timeline: "Typical build: 3-5 weeks",
            icon: <ArrowRightLeft className="w-6 h-6 text-cyan-400" />,
          },
          {
            title: "Inventory Sync and Alerts",
            description: "Keep key inventory levels in sync across ERP and sales channels, with simple alerts when items fall below reorder points. Reduce oversells and out-of-stocks without constant manual checks.",
            timeline: "Typical build: 2-4 weeks",
            icon: <Zap className="w-6 h-6 text-cyan-400" />,
          },
          {
            title: "Shipment and Billing Updates",
            description: "Push shipment status and tracking into ERP and customer-facing systems so invoices and customer updates stay in sync. Billing becomes automated instead of a multi-day reconciliation project.",
            timeline: "Typical build: 3-4 weeks",
            icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
          },
        ]}
        
        // Process
        processHeading="What a Supply Chain Integration Audit covers"
        processTimeline="Typical engagement: 6-12 weeks from audit to live automations"
        processSteps={[
          {
            number: "1",
            title: "Supply Chain Integration Audit",
            description: "We map your order-to-cash or order-to-delivery flow, from channels and ERP to WMS/TMS and invoicing. We identify where your team is doing manual reconciliation or 'swivel chair' data entry between systems.",
          },
          {
            number: "2",
            title: "Design the data flows and automations",
            description: "We define where systems should hand off to each other and where humans need to review or approve. You'll see exactly how orders, inventory updates, and shipment data will flow before we build anything.",
          },
          {
            number: "3",
            title: "Build, test and monitor",
            description: "We implement integrations in stages, monitor them closely during ramp-up, and adjust as volumes and business rules change. Most teams start with a single channel or warehouse, then expand once the flow is proven.",
          },
        ]}
        
        // CTA Band
        ctaBandHeading="Ready to stop updating ERP, WMS and sales channels by hand?"
        ctaBandBody="Let's map your order and inventory flows and find the automations that free up your ops and customer service teams. Most teams see ROI within the first 60-90 days."
        ctaPrimary="Book Supply Chain Audit"
        ctaSecondary="Discuss a Specific Integration"
        
        // FAQ
        faqs={[
          {
            question: "Do you replace our ERP or WMS?",
            answer: "No. We work with your existing systems. The goal is to connect them and remove manual handoffs, not introduce a new platform. Most teams keep using SAP, Epicor, NetSuite, or their WMS—they just stop doing manual data entry between them.",
          },
          {
            question: "Can you handle EDI feeds?",
            answer: "In many cases, yes. We can incorporate EDI feeds (850s, 856s, 810s, etc.) as inputs to your workflows so orders and status updates flow automatically. If you already have an EDI provider, we integrate with them; if not, we can help you evaluate options.",
          },
          {
            question: "Is this only for large enterprises?",
            answer: "No. We work with operations-focused teams that move a meaningful volume of orders and shipments, even if they don't consider themselves 'enterprise.' If you're doing manual data entry at scale (hundreds of orders per week or more), there's likely a strong ROI case.",
          },
          {
            question: "What's the typical timeline and investment?",
            answer: "Most supply chain automations take 6-12 weeks from audit to full go-live, depending on complexity and number of systems. Teams typically see ROI within 60-90 days through time saved, fewer errors, and faster order-to-cash cycles.",
          },
        ]}
        
        onBookAuditClick={onBookAuditClick}
      />
    </div>
  );
}