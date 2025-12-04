import { Scale, HardHat, Package, ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RotatingAudience from "./RotatingAudience";
import ClioIcon from "./icons/ClioIcon";
import LawmaticsIcon from "./icons/LawmaticsIcon";
import QuickBooksIcon from "./icons/QuickBooksIcon";
import XeroIcon from "./icons/XeroIcon";
import Microsoft365Icon from "./icons/Microsoft365Icon";
import ProcoreIcon from "./icons/ProcoreIcon";
import ViewpointIcon from "./icons/ViewpointIcon";
import SageIcon from "./icons/SageIcon";
import ExcelIcon from "./icons/ExcelIcon";
import SAPIcon from "./icons/SAPIcon";
import EpicorIcon from "./icons/EpicorIcon";
import ShopifyIcon from "./icons/ShopifyIcon";
import AmazonIcon from "./icons/AmazonIcon";

interface IndustriesSectionProps {
  onBookAuditClick: () => void;
}

export default function IndustriesSection({ onBookAuditClick }: IndustriesSectionProps) {
  const navigate = useNavigate();

  return (
    <section 
      id="industries" 
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-24 lg:py-32 px-4 sm:px-6"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:72px_72px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Eyebrow */}
        <p className="text-cyan-400 uppercase tracking-wider mb-4 sm:mb-6 text-center text-sm">
          Industries We Serve
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-4 sm:mb-6 leading-tight">
          Automation for teams that keep work moving.
        </h2>

        {/* Rotating Audience Box */}
        <div className="flex justify-center mb-4">
          <div className="backdrop-blur-lg bg-slate-900/60 rounded-xl px-6 py-4 max-w-4xl">
            <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed flex flex-wrap items-center justify-center gap-2">
              <span>We help</span>
              <RotatingAudience
                audiences={[
                  "law firms",
                  "accounting teams",
                  "contractors",
                  "field service teams",
                  "distributors",
                  "logistics operations",
                  "retail brands"
                ]}
                intervalMs={2500}
              />
              <span>connect the tools they already use.</span>
            </p>
          </div>
        </div>

        {/* Supporting text */}
        <div className="flex justify-center mb-10">
          <div className="backdrop-blur-md bg-slate-900/40 rounded-lg px-6 py-3 max-w-4xl">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-center">
              Whether you handle 5 cases a month or 500 orders a day, we design integrations and automations so work moves cleanly between CRMs, ERPs, practice management, accounting, and the rest of your stack—without manual updates or status chasing.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20">
          <button
            onClick={onBookAuditClick}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
          >
            Book Your Integration Audit
          </button>
          
          <button
            onClick={() => {
              const cardsSection = document.querySelector('#industry-cards');
              if (cardsSection) {
                cardsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors text-base sm:text-lg"
          >
            Explore industry examples ↓
          </button>
        </div>

        {/* 3-Card Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12" id="industry-cards">
          
          {/* Card 1: Legal & Financial */}
          <div 
            onClick={() => navigate('/legal-financial-operations-automation')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/legal-financial-operations-automation');
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="View Legal & Financial Firms automation solutions"
            className="group cursor-pointer transform transition-all duration-300 
                       hover:-translate-y-2 hover:scale-[1.01]
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm 
                          border border-cyan-400/20 rounded-2xl p-8 h-full
                          transition-all duration-300
                          group-hover:border-cyan-400/60 
                          group-hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)]
                          group-hover:bg-gradient-to-b group-hover:from-slate-800/60 group-hover:to-slate-900/60">
              
              <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6
                            transition-all duration-300
                            group-hover:bg-cyan-500/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <Scale className="w-8 h-8 text-cyan-400 transition-all duration-300 group-hover:text-cyan-300" />
              </div>
              
              <h3 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-cyan-50">
                Legal & Financial
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Matters, clients, and billing scattered across practice management, email, spreadsheets, and accounting.
              </p>
              
              {/* We automate */}
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
              <div className="flex items-center gap-3 mb-8 flex-wrap p-3 rounded-lg
                            transition-all duration-300
                            group-hover:bg-slate-800/40">
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Clio">
                  <ClioIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Lawmatics">
                  <LawmaticsIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="QuickBooks">
                  <QuickBooksIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Xero">
                  <XeroIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Microsoft 365">
                  <Microsoft365Icon className="w-full h-full" />
                </div>
                {/* More integrations indicator */}
                <div className="w-10 h-10 rounded-lg border-2 border-cyan-400/40 group-hover:border-cyan-400/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110" title="And more integrations">
                  <Plus className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:rotate-90" />
                </div>
              </div>
              
              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookAuditClick();
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full transition-all duration-300 font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  Book Legal Ops Audit
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/legal-financial-operations-automation');
                  }}
                  className="w-full text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 py-2 group/link"
                >
                  View Legal & Financial
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 2: Construction & Field Operations */}
          <div 
            onClick={() => navigate('/construction-field-operations-automation')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/construction-field-operations-automation');
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="View Construction & Field Operations automation solutions"
            className="group cursor-pointer transform transition-all duration-300 
                       hover:-translate-y-2 hover:scale-[1.01]
                       focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm 
                          border border-orange-400/20 rounded-2xl p-8 h-full
                          transition-all duration-300
                          group-hover:border-orange-400/60 
                          group-hover:shadow-[0_20px_60px_rgba(251,146,60,0.25)]
                          group-hover:bg-gradient-to-b group-hover:from-slate-800/60 group-hover:to-slate-900/60">
              
              <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6
                            transition-all duration-300
                            group-hover:bg-orange-500/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]">
                <HardHat className="w-8 h-8 text-orange-400 transition-all duration-300 group-hover:text-orange-300" />
              </div>
              
              <h3 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-orange-50">
                Construction & Field Operations
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Bids, change orders, and daily reports stuck between field apps, inboxes, and accounting.
              </p>
              
              {/* We automate */}
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
              <div className="flex items-center gap-3 mb-8 flex-wrap p-3 rounded-lg
                            transition-all duration-300
                            group-hover:bg-slate-800/40">
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Procore">
                  <ProcoreIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Viewpoint">
                  <ViewpointIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Sage">
                  <SageIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Excel">
                  <ExcelIcon className="w-full h-full" />
                </div>
                {/* More integrations indicator */}
                <div className="w-10 h-10 rounded-lg border-2 border-orange-400/40 group-hover:border-orange-400/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110" title="And more integrations">
                  <Plus className="w-5 h-5 text-orange-400 transition-transform duration-300 group-hover:rotate-90" />
                </div>
              </div>
              
              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookAuditClick();
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full transition-all duration-300 font-semibold hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]"
                >
                  Book Field Ops Audit
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/construction-field-operations-automation');
                  }}
                  className="w-full text-orange-400 hover:text-orange-300 transition-colors flex items-center justify-center gap-2 py-2 group/link"
                >
                  View Construction & Field Ops
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 3: Retail & Logistics */}
          <div 
            onClick={() => navigate('/retail-logistics-automation')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/retail-logistics-automation');
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="View Retail & Logistics automation solutions"
            className="group cursor-pointer transform transition-all duration-300 
                       hover:-translate-y-2 hover:scale-[1.01]
                       focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm 
                          border border-green-400/20 rounded-2xl p-8 h-full
                          transition-all duration-300
                          group-hover:border-green-400/60 
                          group-hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]
                          group-hover:bg-gradient-to-b group-hover:from-slate-800/60 group-hover:to-slate-900/60">
              
              <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6
                            transition-all duration-300
                            group-hover:bg-green-500/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <Package className="w-8 h-8 text-green-400 transition-all duration-300 group-hover:text-green-300" />
              </div>
              
              <h3 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-green-50">
                Retail & Logistics
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                For distributors and operators with orders, inventory and shipments split between ERP, WMS, TMS and sales channels.
              </p>
              
              {/* We automate */}
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
              <div className="flex items-center gap-3 mb-8 flex-wrap p-3 rounded-lg
                            transition-all duration-300
                            group-hover:bg-slate-800/40">
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="SAP">
                  <SAPIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Epicor">
                  <EpicorIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Amazon">
                  <AmazonIcon className="w-full h-full" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 transition-transform duration-300 group-hover:scale-105" title="Shopify">
                  <ShopifyIcon className="w-full h-full" />
                </div>
                {/* More integrations indicator */}
                <div className="w-10 h-10 rounded-lg border-2 border-green-400/40 group-hover:border-green-400/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110" title="And more integrations">
                  <Plus className="w-5 h-5 text-green-400 transition-transform duration-300 group-hover:rotate-90" />
                </div>
              </div>
              
              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookAuditClick();
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full transition-all duration-300 font-semibold hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                  Book Supply Chain Audit
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/retail-logistics-automation');
                  }}
                  className="w-full text-green-400 hover:text-green-300 transition-colors flex items-center justify-center gap-2 py-2 group/link"
                >
                  View Retail & Logistics
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom CTA */}
        <p className="text-center text-slate-400 text-lg">
          Not sure where you fit?{" "}
          <button
            onClick={onBookAuditClick}
            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors font-semibold"
          >
            Book Your Integration Audit
          </button>{" "}
          and we'll map it with you.
        </p>
      </div>
    </section>
  );
}