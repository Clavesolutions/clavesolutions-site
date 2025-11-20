import { Link } from "react-router-dom";
import claveLogo from "figma:asset/854450d11d24ba15fadcf1cf56a5a1632be9248b.png";

interface FooterProps {
  onBookAuditClick: () => void;
}

export default function Footer({ onBookAuditClick }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black py-16 px-4 sm:px-6 border-t border-slate-800">
      {/* Background pattern - subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.01)_1px,transparent_1px)] bg-[size:72px_72px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand / Location */}
          <div className="space-y-6">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity w-fit"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-cyan-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <img 
                  src={claveLogo} 
                  alt="Clave Solutions" 
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>
              <span className="text-white font-semibold text-lg">ClaveSolutions.ai</span>
            </a>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed">
              Custom automations and integrations for growing businesses.
            </p>

            {/* Location */}
            <p className="text-slate-500 text-sm">
              Based in Louisville, KY<br />
              Working with teams across North America.
            </p>

            {/* Email */}
            <div>
              <a 
                href="mailto:hello@clavesolutions.ai"
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors inline-block"
              >
                hello@clavesolutions.ai
              </a>
            </div>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/legal-financial-operations-automation" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Legal & Financial
                </Link>
              </li>
              <li>
                <Link to="/construction-field-operations-automation" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Construction & Field Operations
                </Link>
              </li>
              <li>
                <Link to="/retail-logistics-automation" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Retail & Logistics
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  All Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onBookAuditClick();
                  }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Integration Audit
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onBookAuditClick();
                  }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Custom Integrations
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onBookAuditClick();
                  }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Automation & Workflow Design
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onBookAuditClick();
                  }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Advisory & Training
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/roi-calculator" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 ClaveSolutions.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}