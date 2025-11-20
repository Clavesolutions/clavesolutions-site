import { useState } from "react";
import { Calculator, Users, Clock, DollarSign, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

interface ROICalculatorProps {
  onBookAuditClick: () => void;
}

interface CalculationResults {
  manualCostPerYear: number;
  potentialSavings: number;
  fteFreed: number;
  automationPercent: number;
}

export default function ROICalculator({ onBookAuditClick }: ROICalculatorProps) {
  const [people, setPeople] = useState(1);
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [rate, setRate] = useState(40);
  const [automationPercent, setAutomationPercent] = useState(40);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateROI = () => {
    const weeksPerYear = 52;
    const fteHoursPerYear = 2080;

    const manualHoursPerYear = people * hoursPerWeek * weeksPerYear;
    const manualCostPerYear = manualHoursPerYear * rate;
    const potentialSavings = manualCostPerYear * (automationPercent / 100);
    const fteFreed = (manualHoursPerYear * (automationPercent / 100)) / fteHoursPerYear;

    // Round money to nearest $100
    const roundedManualCost = Math.round(manualCostPerYear / 100) * 100;
    const roundedSavings = Math.round(potentialSavings / 100) * 100;
    // Round FTE to one decimal
    const roundedFTE = Math.round(fteFreed * 10) / 10;

    setResults({
      manualCostPerYear: roundedManualCost,
      potentialSavings: roundedSavings,
      fteFreed: roundedFTE,
      automationPercent,
    });

    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:72px_72px] z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-2xl p-4 backdrop-blur-sm">
              <Calculator className="w-10 h-10 text-cyan-400" />
            </div>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Operational Friction Calculator
          </h1>

          {/* H2 - SEO-aware subtitle */}
          <h2 className="text-xl sm:text-2xl text-slate-300 mb-3 leading-relaxed max-w-3xl mx-auto">
            Operational friction and automation ROI calculator
          </h2>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-slate-400 mb-3 leading-relaxed max-w-3xl mx-auto">
            See how much manual data entry and disconnected systems are really costing your team each year—and what you could save with automation.
          </p>

          {/* Micro note */}
          <p className="text-sm text-slate-500 mb-8">
            No email required to see your estimate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                document.getElementById('calculator-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 font-semibold w-full sm:w-auto"
            >
              Run the Calculator
            </button>

            <button
              onClick={onBookAuditClick}
              className="px-8 py-3.5 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-full backdrop-blur-sm transition-all duration-300 font-semibold w-full sm:w-auto"
            >
              Book Your Integration Audit
            </button>
          </div>
        </div>
      </section>

      {/* Calculator Section - Two Column Layout */}
      <section id="calculator-form" className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Form */}
            <div className="bg-slate-900/70 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Estimate your annual friction cost
              </h2>

              <div className="space-y-8">
                {/* Field 1 - People */}
                <div>
                  <label className="block text-white mb-3 font-medium">
                    How many people touch this workflow?
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                    <input
                      type="number"
                      value={people}
                      onChange={(e) => setPeople(Number(e.target.value))}
                      min="1"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-12 py-3.5 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    Include yourself and anyone who touches this workflow.
                  </p>
                </div>

                {/* Field 2 - Hours */}
                <div>
                  <label className="block text-white mb-3 font-medium">
                    Hours per week each person spends on manual updates, copy-paste or re-entry
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                    <input
                      type="number"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                      min="0.5"
                      step="0.5"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-12 py-3.5 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    Rough guesses are fine. If it varies, think about a busy week.
                  </p>
                </div>

                {/* Field 3 - Hourly Rate */}
                <div>
                  <label className="block text-white mb-3 font-medium">
                    Average fully-loaded hourly cost per person ($)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                    <input
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      min="10"
                      step="5"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-12 py-3.5 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    Use salary + benefits. If you're not sure, $35–$50/hr is common for most ops roles.
                  </p>
                </div>

                {/* Field 4 - Automation Percentage Slider */}
                <div>
                  <label className="block text-white mb-3 font-medium">
                    What percent of that time is avoidable with better integration and automation?
                  </label>
                  <div className="relative pt-2">
                    <input
                      type="range"
                      value={automationPercent}
                      onChange={(e) => setAutomationPercent(Number(e.target.value))}
                      min="10"
                      max="70"
                      step="5"
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                      style={{
                        background: `linear-gradient(to right, rgb(6 182 212) 0%, rgb(6 182 212) ${((automationPercent - 10) / 60) * 100}%, rgb(51 65 85) ${((automationPercent - 10) / 60) * 100}%, rgb(51 65 85) 100%)`
                      }}
                    />
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm text-slate-500">10%</span>
                      <span className="text-2xl font-bold text-cyan-400">{automationPercent}%</span>
                      <span className="text-sm text-slate-500">70%</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    Typical range for our clients is 30–60%.
                  </p>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-4 rounded-xl font-semibold shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate My Annual Friction Cost
                </button>
              </div>
            </div>

            {/* Right Column - Explainer Copy */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  What this calculator shows
                </h3>

                <p className="text-base text-slate-300 mb-6 leading-relaxed">
                  This isn't about cutting people. It's about seeing how much time your team loses to copy-paste work that software could move on its own.
                </p>

                <p className="text-base text-slate-300 mb-4 leading-relaxed">
                  We look at:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Time spent updating status, re-typing data, and fixing avoidable errors</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>The real cost of that time at your current salary levels</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>A realistic range of what automation can usually take off your plate</span>
                  </li>
                </ul>

                <p className="text-sm text-slate-500 italic">
                  In Integration Audits we refine these numbers based on your actual systems, workflows and volumes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Block */}
      {results && (
        <section id="results" className="relative py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-xl border-2 border-cyan-400/40 rounded-3xl p-8 sm:p-12 shadow-[0_0_60px_rgba(6,182,212,0.3)]">
              {/* Main Result */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-12 h-12 text-cyan-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  You're spending about <span className="text-cyan-400">{formatCurrency(results.manualCostPerYear)}</span> per year on manual handling for this workflow.
                </h2>
                <p className="text-xl sm:text-2xl text-slate-300">
                  If we automate <span className="font-semibold text-cyan-400">{results.automationPercent}%</span> of that, you could free up roughly <span className="font-semibold text-cyan-400">{formatCurrency(results.potentialSavings)}</span> per year.
                </p>
              </div>

              {/* Secondary Metrics */}
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 mb-6">
                <p className="text-lg text-center text-slate-200 mb-2">
                  That's about <span className="font-bold text-cyan-400 text-xl">{results.fteFreed} full-time roles</span> worth of capacity.
                </p>
              </div>

              {/* Interpretation */}
              <p className="text-base text-slate-300 leading-relaxed text-center max-w-2xl mx-auto">
                That doesn't mean you cut that many people. It means those hours can go into higher-value work—closing more matters, finishing jobs faster, serving more clients, or reducing burnout on your ops team.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* What We Usually Automate First */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            What we usually automate first
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-slate-900/70 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              <h3 className="text-xl font-bold text-white mb-3">
                Intake to core system, no re-typing
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Forms, emails and scanned docs flow straight into your CRM, ERP or practice management system with the right fields populated and documents attached.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900/70 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              <h3 className="text-xl font-bold text-white mb-3">
                Status updates without chasing people
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                When a case, job or order stage changes, downstream systems and dashboards update automatically so nobody has to ask "Where is this at?"
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900/70 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              <h3 className="text-xl font-bold text-white mb-3">
                Billing and reporting without spreadsheet gymnastics
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Time, milestones and quantities roll into invoices and reports without manual consolidation, so month-end and project reporting stop being fire drills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Tied to Numbers */}
      {results && (
        <section className="relative py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Want a detailed ROI estimate based on your real workflows?
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              In an Integration Audit, we map your actual flow across systems, refine these numbers, and outline 1–3 automation projects with ballpark investment and expected payback period.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onBookAuditClick}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 font-semibold w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Book Your Integration Audit
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* SEO Reinforcement Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-slate-950/30 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Workflow automation ROI, without ripping out your systems
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We focus on workflow automation and systems integration, not selling you another platform. Whether you rely on Clio and QuickBooks, Procore and Sage, or SAP, Epicor and a WMS, we connect the tools you already use so you see real ROI from automation—not another orphaned app.
          </p>
        </div>
      </section>
    </div>
  );
}