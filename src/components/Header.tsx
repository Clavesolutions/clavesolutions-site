import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Scale, HardHat, Package } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import claveLogo from "figma:asset/854450d11d24ba15fadcf1cf56a5a1632be9248b.png";

interface HeaderProps {
  onBookAuditClick: () => void;
}

export default function Header({ onBookAuditClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIndustriesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Services navigation - scroll on homepage, navigate on other pages
  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // On homepage, scroll to section
      const element = document.getElementById('how-we-think');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to homepage then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('how-we-think');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* LEFT: Logo/Wordmark */}
          <div
            onClick={() => {
              if (location.pathname === '/') {
                // Already on home page, scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                // Navigate to home page
                navigate('/');
              }
            }}
            className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-extrabold drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-all cursor-pointer"
          >
            <img
              src={claveLogo}
              alt="Clave Solutions Logo"
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
            />
            <div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">Clave</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400">Solutions</span>
            </div>
          </div>

          {/* DESKTOP: Center Navigation + Right CTA */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {/* Center Navigation Links */}
            <nav className="flex items-center gap-6 lg:gap-8">
              {/* Services Link */}
              <a
                href="#how-we-think"
                onClick={handleServicesClick}
                className="text-slate-300 hover:text-cyan-400 transition-colors relative group font-semibold"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
              
              <span className="text-cyan-400/60">|</span>
              
              {/* Industries Dropdown */}
              <div 
                className="relative" 
                ref={dropdownRef}
                onMouseEnter={() => setIndustriesDropdownOpen(true)}
                onMouseLeave={() => setIndustriesDropdownOpen(false)}
              >
                <Link
                  to="/industries"
                  className="text-slate-300 hover:text-cyan-400 transition-colors relative group font-semibold flex items-center gap-1"
                  onFocus={() => setIndustriesDropdownOpen(true)}
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform ${industriesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                </Link>
                
                {/* Dropdown Panel */}
                {industriesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-80">
                    {/* Invisible bridge to prevent gap issues */}
                    <div className="absolute top-0 left-0 right-0 h-2" />
                    
                    <div className="bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-[0_0_40px_rgba(6,182,212,0.2)] overflow-hidden animate-fade-in">
                      <div className="p-4">
                        {/* Overview link */}
                        <Link
                          to="/industries"
                          className="block px-4 py-3 text-sm text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors mb-2"
                          onClick={() => setIndustriesDropdownOpen(false)}
                        >
                          All industries →
                        </Link>
                        
                        <div className="h-px bg-cyan-400/10 my-2" />
                        
                        {/* Industry items */}
                        <Link
                          to="/legal-financial-operations-automation"
                          className="flex items-start gap-3 px-4 py-3 hover:bg-slate-800/50 rounded-lg transition-colors group"
                          onClick={() => setIndustriesDropdownOpen(false)}
                        >
                          <Scale className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              Legal & Financial
                            </div>
                            <div className="text-xs text-slate-400">
                              Clio, Lawmatics, QuickBooks, Xero
                            </div>
                          </div>
                        </Link>
                        
                        <Link
                          to="/construction-field-operations-automation"
                          className="flex items-start gap-3 px-4 py-3 hover:bg-slate-800/50 rounded-lg transition-colors group"
                          onClick={() => setIndustriesDropdownOpen(false)}
                        >
                          <HardHat className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                              Construction & Field Ops
                            </div>
                            <div className="text-xs text-slate-400">
                              Procore, Viewpoint, Sage, Excel
                            </div>
                          </div>
                        </Link>
                        
                        <Link
                          to="/retail-logistics-automation"
                          className="flex items-start gap-3 px-4 py-3 hover:bg-slate-800/50 rounded-lg transition-colors group"
                          onClick={() => setIndustriesDropdownOpen(false)}
                        >
                          <Package className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-white font-semibold group-hover:text-green-400 transition-colors">
                              Retail & Logistics
                            </div>
                            <div className="text-xs text-slate-400">
                              SAP, Epicor, WMS, Shopify, Amazon
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <span className="text-cyan-400/60">|</span>
              
              {/* ROI Calculator */}
              <Link
                to="/roi-calculator"
                className="text-slate-300 hover:text-cyan-400 transition-colors relative group font-semibold"
              >
                ROI Calculator
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>

            {/* Right CTA Button */}
            <button 
              className="px-6 lg:px-8 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 font-semibold whitespace-nowrap"
              onClick={onBookAuditClick}
            >
              Book Your Integration Audit
            </button>
          </div>

          {/* MOBILE: Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE: Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-cyan-400/10 py-4 space-y-4 animate-fade-in">
            {/* Services */}
            <a
              href="#how-we-think"
              onClick={(e) => {
                handleServicesClick(e);
                setMobileMenuOpen(false);
              }}
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2 font-semibold"
            >
              Services
            </a>
            
            {/* Industries Accordion */}
            <div>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between text-slate-300 hover:text-cyan-400 transition-colors py-2 font-semibold"
              >
                Industries
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileIndustriesOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-cyan-400/20 pl-4">
                  <Link
                    to="/industries"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors py-2"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                  >
                    All industries →
                  </Link>
                  
                  <Link
                    to="/legal-financial-operations-automation"
                    className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                  >
                    Legal & Financial
                  </Link>
                  
                  <Link
                    to="/construction-field-operations-automation"
                    className="block text-slate-300 hover:text-orange-400 transition-colors py-2"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                  >
                    Construction & Field Ops
                  </Link>
                  
                  <Link
                    to="/retail-logistics-automation"
                    className="block text-slate-300 hover:text-green-400 transition-colors py-2"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                  >
                    Retail & Logistics
                  </Link>
                </div>
              )}
            </div>
            
            {/* ROI Calculator */}
            <Link
              to="/roi-calculator"
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              ROI Calculator
            </Link>
            
            <button 
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 font-semibold"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookAuditClick();
              }}
            >
              Book Your Integration Audit
            </button>
          </div>
        )}
      </div>
    </header>
  );
}