interface FinalCTAProps {
  onBookAuditClick: () => void;
}

export default function FinalCTA({ onBookAuditClick }: FinalCTAProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 md:py-28 px-4 sm:px-6 overflow-hidden border-t border-slate-800">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:72px_72px] z-0" />

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-radial-gradient opacity-20" style={{
        background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)'
      }}></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to stop losing time to disconnected systems?
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Let's map your flow and find the highest-impact automations using the tools you already use.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onBookAuditClick}
            className="px-8 md:px-10 py-3.5 md:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 font-semibold text-base md:text-lg w-full sm:w-auto"
          >
            Book Your Integration Audit
          </button>
          
          <button 
            onClick={onBookAuditClick}
            className="px-8 md:px-10 py-3.5 md:py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-full backdrop-blur-sm transition-all duration-300 font-semibold text-base md:text-lg w-full sm:w-auto"
          >
            Discuss a Specific Integration
          </button>
        </div>
      </div>
    </section>
  );
}