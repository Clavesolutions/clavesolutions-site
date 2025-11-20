import { useEffect } from "react";
import { Scale, HardHat, Package, ArrowRight, Mail, Plus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopularAutomationsSection from "../components/PopularAutomationsSection";
import { useNavigate } from "react-router-dom";
import RotatingAudience from "../components/RotatingAudience";

// Import brand icons
import ClioIcon from "../components/icons/ClioIcon";
import LawmaticsIcon from "../components/icons/LawmaticsIcon";
import QuickBooksIcon from "../components/icons/QuickBooksIcon";
import XeroIcon from "../components/icons/XeroIcon";
import Microsoft365Icon from "../components/icons/Microsoft365Icon";
import ProcoreIcon from "../components/icons/ProcoreIcon";
import ViewpointIcon from "../components/icons/ViewpointIcon";
import SageIcon from "../components/icons/SageIcon";
import ExcelIcon from "../components/icons/ExcelIcon";
import SAPIcon from "../components/icons/SAPIcon";
import EpicorIcon from "../components/icons/EpicorIcon";
import ShopifyIcon from "../components/icons/ShopifyIcon";
import AmazonIcon from "../components/icons/AmazonIcon";

interface IndustriesOverviewPageProps {
  onBookAuditClick: () => void;
}

export default function IndustriesOverviewPage({ onBookAuditClick }: IndustriesOverviewPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Industries We Serve | Workflow Automation & Integrations | ClaveSolutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "See how ClaveSolutions helps legal & financial, construction & field operations, and retail & logistics teams reduce manual data entry and connect their systems with custom automations and integrations."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header onBookAuditClick={onBookAuditClick} />
      
      {/* Section 1: Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px] z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 mb-4 tracking-wide uppercase text-sm">
            Industries we serve
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Automation for teams that keep work moving.
          </h1>
          
          <div className="inline-block backdrop-blur-lg bg-slate-900/60 rounded-xl px-6 py-4 mb-4">
            <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed flex flex-wrap items-center justify-center gap-2">
              <span>We help</span>
              <RotatingAudience
                audiences={[
                  "law firms",
                  "accounting teams",
                  "construction companies",
                  "field service teams",
                  "distributors",
                  "logistics operations",
                  "retail & ecommerce brands"
                ]}
                intervalMs={2500}
              />
              <span>connect the tools they already use.</span>
            </p>
          </div>

          <div className="inline-block backdrop-blur-md bg-slate-900/40 rounded-lg px-6 py-3 mb-10">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you handle 5 cases a month or 500 orders a day, we design integrations and automations so work moves cleanly between CRMs, ERPs, practice management, accounting, and the rest of your stack—without manual updates or status chasing.
            </p>
          </div>

          {/* SEO H2 */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl text-slate-200 leading-tight">
              Automation and integration services for legal, construction, retail, and logistics operations
            </h2>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button
              onClick={onBookAuditClick}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
            >
              Book Your Integration Audit
            </button>
            
            <button
              onClick={() => {
                const industriesSection = document.querySelector('#industry-cards');
                if (industriesSection) {
                  industriesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors text-base sm:text-lg"
            >
              Explore industry examples ↓
            </button>
          </div>
        </div>
      </section>
      
      {/* Section 2: Industry Cards Grid */}
      <section className="relative py-20 px-4 sm:px-6" id="industry-cards">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Different industries. The same friction.
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              In every sector we serve, the pattern is similar: work lives in multiple systems, people re-type the same data, and clients or customers chase updates. We focus on the handoffs so your tools—and team—work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Card 1: Legal & Financial */}
            <div className="group bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-cyan-400" />
              </div>
              
              <h3 className="text-2xl text-white mb-4">
                Legal & Financial
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                For firms where matters, clients and billing live across Clio, email, spreadsheets and accounting.
              </p>
              
              {/* We automate micro-line */}
              <div className="mb-6">
                <p className="text-cyan-400 text-sm uppercase tracking-wide mb-2">
                  We automate:
                </p>
                <ul className="space-y-1.5 text-slate-200">
                  <li>• Intake & lead capture</li>
                  <li>• Matter setup & assignment</li>
                  <li>• Time tracking & billing sync</li>
                </ul>
              </div>

              {/* Tools row */}
              <div className="flex items-center gap-3 mb-8 flex-wrap">
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Clio">
                  <ClioIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Lawmatics">
                  <LawmaticsIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="QuickBooks">
                  <QuickBooksIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Xero">
                  <XeroIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Microsoft 365">
                  <Microsoft365Icon className="w-full h-full" />
                </div>
                {/* More integrations indicator */}
                <div className="w-10 h-10 rounded-lg border-2 border-cyan-400/40 hover:border-cyan-400/60 flex items-center justify-center transition-all duration-300 hover:scale-105" title="And more integrations">
                  <Plus className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              
              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onBookAuditClick}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full transition-all duration-300 font-semibold"
                >
                  Book Legal Ops Audit
                </button>
                
                <button
                  onClick={() => navigate('/legal-financial-operations-automation')}
                  className="w-full text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 py-2"
                >
                  View Legal & Financial
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Card 2: Construction & Field Operations */}
            <div className="group bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-orange-400/20 hover:border-orange-400/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,146,60,0.2)]">
              <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                <HardHat className="w-8 h-8 text-orange-400" />
              </div>
              
              <h3 className="text-2xl text-white mb-4">
                Construction & Field Operations
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                For teams juggling Procore, email and accounting while RFIs, change orders and daily reports pile up.
              </p>
              
              {/* We automate micro-line */}
              <div className="mb-6">
                <p className="text-orange-400 text-sm uppercase tracking-wide mb-2">
                  We automate:
                </p>
                <ul className="space-y-1.5 text-slate-200">
                  <li>• RFIs & change orders</li>
                  <li>• Daily reports & safety logs</li>
                  <li>• Job cost sync to accounting</li>
                </ul>
              </div>

              {/* Tools row */}
              <div className="flex items-center gap-3 mb-8 flex-wrap">
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Procore">
                  <ProcoreIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Viewpoint">
                  <ViewpointIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Sage">
                  <SageIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Excel">
                  <ExcelIcon className="w-full h-full" />
                </div>
                {/* More integrations indicator */}
                <div className="w-10 h-10 rounded-lg border-2 border-orange-400/40 hover:border-orange-400/60 flex items-center justify-center transition-all duration-300 hover:scale-105" title="And more integrations">
                  <Plus className="w-5 h-5 text-orange-400" />
                </div>
              </div>
              
              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onBookAuditClick}
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full transition-all duration-300 font-semibold"
                >
                  Book Field Ops Audit
                </button>
                
                <button
                  onClick={() => navigate('/construction-field-operations-automation')}
                  className="w-full text-orange-400 hover:text-orange-300 transition-colors flex items-center justify-center gap-2 py-2"
                >
                  View Construction & Field Ops
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Card 3: Retail & Logistics */}
            <div className="group bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-green-400/20 hover:border-green-400/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]">
              <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-green-400" />
              </div>
              
              <h3 className="text-2xl text-white mb-4">
                Retail & Logistics
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                For distributors and operators with orders, inventory and shipments split between ERP, WMS, TMS and sales channels.
              </p>
              
              {/* We automate micro-line */}
              <div className="mb-6">
                <p className="text-green-400 text-sm uppercase tracking-wide mb-2">
                  We automate:
                </p>
                <ul className="space-y-1.5 text-slate-200">
                  <li>• Order capture & routing</li>
                  <li>• Inventory sync across channels</li>
                  <li>• Shipment tracking & invoicing</li>
                </ul>
              </div>

              {/* Tools row */}
              <div className="flex items-center gap-3 mb-8 flex-wrap">
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="SAP">
                  <SAPIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Epicor">
                  <EpicorIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Amazon">
                  <AmazonIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5" title="Shopify">
                  <ShopifyIcon className="w-full h-full" />
                </div>
                {/* More integrations indicator */}
                <div className="w-10 h-10 rounded-lg border-2 border-green-400/40 hover:border-green-400/60 flex items-center justify-center transition-all duration-300 hover:scale-105" title="And more integrations">
                  <Plus className="w-5 h-5 text-green-400" />
                </div>
              </div>
              
              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onBookAuditClick}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full transition-all duration-300 font-semibold"
                >
                  Book Supply Chain Audit
                </button>
                
                <button
                  onClick={() => navigate('/retail-logistics-automation')}
                  className="w-full text-green-400 hover:text-green-300 transition-colors flex items-center justify-center gap-2 py-2"
                >
                  View Retail & Logistics
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Section 3: What Our Clients Have in Common */}
      <section className="relative py-20 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-12 text-center">
            Different industries. The same operational friction.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl text-white mb-3">
                Work that needs precision and speed
              </h3>
              <p className="text-slate-200 leading-relaxed">
                Whether it's a handful of active cases or hundreds of orders, teams rely on us when errors, delays, or status gaps create real business risk.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl text-white mb-3">
                Multiple systems that don't talk
              </h3>
              <p className="text-slate-300 leading-relaxed">
                CRMs, ERPs, practice management, spreadsheets and inboxes all holding pieces of the truth.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl text-white mb-3">
                People stuck in copy-paste mode
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Smart operators spending hours updating status, re-typing data and consolidating reports.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl text-white mb-3">
                Leadership that wants better visibility
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Owners and execs who want clean dashboards without punishing their teams.
              </p>
            </div>
          </div>
          
          <p className="text-center text-slate-400 text-lg">
            Our job is to remove the manual glue and let your systems move work on their own.
          </p>
        </div>
      </section>
      
      {/* Section 4: How We Work */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-12 text-center">
            How we work with operations teams
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                1
              </div>
              <h3 className="text-xl text-white mb-3">
                Integration Audit
              </h3>
              <p className="text-slate-300 leading-relaxed">
                We map how work actually moves across your systems today—from first contact to cash collected or delivery complete.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                2
              </div>
              <h3 className="text-xl text-white mb-3">
                Automation design
              </h3>
              <p className="text-slate-300 leading-relaxed">
                We decide where humans should add judgment and where software should move data, then design the integrations and automations around that.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                3
              </div>
              <h3 className="text-xl text-white mb-3">
                Build, launch and refine
              </h3>
              <p className="text-slate-300 leading-relaxed">
                We ship in stages, prove value on a narrow slice of the workflow, then expand once the automations are battle-tested.
              </p>
            </div>
          </div>
          
          <p className="text-center text-slate-500 text-sm">
            No big-bang cutovers. We protect your current operations while we modernize them.
          </p>
        </div>
      </section>
      
      {/* Section 5: Not Sure CTA */}
      <section className="relative py-20 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 to-slate-900/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-12 shadow-[0_0_60px_rgba(6,182,212,0.15)]">
            <h2 className="text-3xl sm:text-4xl text-white mb-6">
              Not sure which bucket you're in?
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              If your team is drowning in manual updates and disconnected systems, we can map your flow with you—even if you don't see your exact industry listed here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onBookAuditClick}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 font-semibold text-lg flex items-center gap-2 group w-full sm:w-auto"
              >
                Book Your Integration Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="mailto:hello@clavesolutions.ai"
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/30 hover:border-cyan-400/50 text-cyan-400 rounded-full transition-all duration-300 font-semibold text-lg backdrop-blur-sm flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                Email Us About Your Use Case
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 6: Mini FAQ */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-xl text-white mb-4">
                Do you only work with these three industries?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                No. These are where we have the deepest experience, but we also work with other operations-heavy teams that share the same challenges.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-xl text-white mb-4">
                Do you replace our existing systems?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Usually not. We connect and automate around the tools you already use so you see value sooner and avoid risky migrations.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-xl text-white mb-4">
                How do you price these projects?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Most projects are scoped after an Integration Audit, with clear deliverables and a fixed or phased fee. Typical engagements range from $2.5k to $50k+ depending on complexity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <PopularAutomationsSection />
      <Footer onBookAuditClick={onBookAuditClick} />
    </div>
  );
}