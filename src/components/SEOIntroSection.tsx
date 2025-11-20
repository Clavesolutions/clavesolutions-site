export default function SEOIntroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 px-4 sm:px-6">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6, 182, 212, 0.5) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px'
      }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-100 mb-4 leading-tight">
          Workflow automation & system integrations for legal, construction, retail, and logistics teams
        </h2>
        
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          We connect tools like Clio, Procore, Shopify, QuickBooks, and SAP so work moves automatically between them.
        </p>
      </div>
    </section>
  );
}
