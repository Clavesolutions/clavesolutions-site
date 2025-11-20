export default function PopularAutomationsSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-slate-950/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-white text-center mb-12">
          Popular automations by industry
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Legal & Financial */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
            <h3 className="text-2xl text-cyan-400 mb-6">
              Legal & Financial – popular automations
            </h3>
            <ul className="space-y-4 text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                <span>Clio ↔ QuickBooks contact and matter sync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                <span>Intake forms → automatic matter creation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                <span>Email → tasks, reminders, and client status updates</span>
              </li>
            </ul>
          </div>

          {/* Construction & Field Operations */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-orange-400/20 rounded-2xl p-8 hover:border-orange-400/40 transition-all duration-300">
            <h3 className="text-2xl text-orange-400 mb-6">
              Construction & Field Operations – popular automations
            </h3>
            <ul className="space-y-4 text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                <span>Procore ↔ Sage / Viewpoint job and cost sync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                <span>Field reports → invoice and change-order workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                <span>RFIs and change orders → automatic approvals and notifications</span>
              </li>
            </ul>
          </div>

          {/* Retail & Logistics */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300">
            <h3 className="text-2xl text-green-400 mb-6">
              Retail & Logistics – popular automations
            </h3>
            <ul className="space-y-4 text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                <span>Shopify + Amazon → unified inventory and order sync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                <span>Orders → WMS / TMS for pick, pack, and ship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                <span>SAP ↔ ecommerce platforms to keep pricing and products aligned</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
