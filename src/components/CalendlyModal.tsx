import { useEffect } from "react";
import { X } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  // Load Calendly widget script
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-[0_0_60px_rgba(6,182,212,0.3)] animate-scale-in flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-full transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-8">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-yellow-400 mb-4">
            Book Your Integration Audit
          </h2>

          {/* Block 1 - During the Call */}
          <div className="mb-4 p-4 sm:p-5 bg-slate-800/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
            <p className="text-cyan-400 font-semibold mb-3 text-[15px] sm:text-[18px]">
              In this session, we'll:
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3 text-slate-200 text-[15px] sm:text-base leading-[1.5]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center mt-0.5">
                  <span className="text-cyan-400 text-xs">✓</span>
                </span>
                <span>
                  Map your core systems and key workflows
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-200 text-[15px] sm:text-base leading-[1.5]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center mt-0.5">
                  <span className="text-cyan-400 text-xs">✓</span>
                </span>
                <span>
                  Spot the worst manual handoffs and re-entry points
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-200 text-[15px] sm:text-base leading-[1.5]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center mt-0.5">
                  <span className="text-cyan-400 text-xs">✓</span>
                </span>
                <span>
                  Decide whether a full Integration Audit is a good fit
                </span>
              </li>
            </ul>
          </div>

          {/* Calendly Embed */}
          <div
            className="calendly-inline-widget w-full rounded-xl overflow-hidden border border-cyan-400/10 mb-3"
            data-url="https://calendly.com/ernesto-clavesolutions/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f172a&text_color=e2e8f0&primary_color=22d3ee"
            style={{ minHeight: '550px', height: '550px' }}
          />

          {/* Block 2 - After the Call */}
          <div className="p-4 sm:p-5 bg-slate-800/30 backdrop-blur-sm border border-cyan-400/10 rounded-xl">
            <p className="text-cyan-400 font-semibold mb-3 text-[15px] sm:text-[18px]">
              After our meeting, you'll receive:
            </p>
            <ul className="space-y-2 text-slate-200 text-[15px] sm:text-base leading-[1.5] mb-3">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>A brief Integration Audit summary</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>An estimated range of annual friction cost</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>1–3 priority automation opportunities and a ballpark investment</span>
              </li>
            </ul>
            <p className="text-slate-400 text-sm italic leading-[1.4]">
              No obligation—this is yours to keep whether we work together or not.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}