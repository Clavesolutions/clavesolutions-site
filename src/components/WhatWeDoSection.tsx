import { motion } from "motion/react";
import { FileText, Briefcase, Database, DollarSign, Star, CheckCircle, XCircle, AlertCircle, ArrowRight } from "lucide-react";

interface WhatWeDoSectionProps {
  onBookAuditClick: () => void;
}

export default function WhatWeDoSection({ onBookAuditClick }: WhatWeDoSectionProps) {
  return (
    <section id="how-we-think" className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Circuit Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6, 182, 212, 0.5) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }}></div>

      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30" style={{
        background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.08) 0%, transparent 70%)'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TWO-COLUMN LAYOUT - Text left, Flow right (stack on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Text Block - "How We Think" */}
          <div className="space-y-6">
            
            {/* Eyebrow */}
            <div className="text-cyan-400 uppercase tracking-widest text-xs font-semibold">
              HOW WE THINK
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-100 leading-tight mb-2">
              How we streamline your workflows with integrations and automation
            </h2>
            
            {/* H3 label for the two columns */}
            <h3 className="text-xl md:text-2xl text-slate-300 mb-4 mt-6">
              What usually happens vs. what we do instead
            </h3>
            
            {/* Intro text */}
            <div className="space-y-3 mb-8">
              <p className="text-slate-300 text-lg leading-relaxed">
                Most teams try to fix messy workflows by adding more tools and more people to "keep everything updated." That usually means extra spreadsheets, manual re-typing, and chasing status. We start with the systems you already use, map how a case, job, or order actually moves today, simplify the handoffs, then add integrations and automation so the work moves on its own.
              </p>
            </div>

            {/* Two Mini Cards - Side by side on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              {/* Card 1 - What usually happens - UPDATED COPY */}
              <div className="bg-slate-900/60 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:border-red-500/40 transition-all h-full">
                <div className="flex items-center gap-2 mb-5">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <h3 className="text-red-400 font-semibold">What usually happens</h3>
                </div>
                <ul className="space-y-3 text-slate-300 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 mt-0.5 text-base">•</span>
                    <span>New tool for every new problem</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 mt-0.5 text-base">•</span>
                    <span>Another coordinator hired just to keep systems updated</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 mt-0.5 text-base">•</span>
                    <span>Clients and team chasing dates, documents, and status in email and spreadsheets</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 - What we do instead - UPDATED COPY */}
              <div className="bg-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:border-cyan-500/40 transition-all h-full">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <h3 className="text-cyan-400 font-semibold">What we do instead</h3>
                </div>
                <ul className="space-y-3 text-slate-300 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-0.5 text-base">•</span>
                    <span>Map the real end-to-end flow (lead → work → cash → relationship)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-0.5 text-base">•</span>
                    <span>Decide where humans add judgment vs. where software should move data</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-0.5 text-base">•</span>
                    <span>Automate the critical handoffs between tools so work moves on its own</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: Flow Graphic - "Lifecycle We Map" */}
          <div className="space-y-3">
            
            {/* Main Blueprint Panel */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-2xl p-8 md:p-10 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)] border border-slate-700/50">
              
              {/* Circuit Grid Pattern Background */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(6, 182, 212, 0.4) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px'
              }}></div>

              {/* Subtle glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>

              {/* Caption Above Flow */}
              <div className="relative z-10 mb-8 pb-6 border-b border-slate-700/50">
                <p className="text-slate-200 text-base text-center font-medium leading-relaxed">
                  High-level lifecycle we map before we automate anything.
                </p>
              </div>

              {/* MAIN FLOW LINE - Continuous vertical connector with gradient to green - BEHIND EVERYTHING */}
              <div className="absolute left-[2.5rem] top-[5.5rem] h-[calc(100%-11rem)] w-1 bg-gradient-to-b from-cyan-500/50 via-cyan-500/70 via-cyan-400/60 via-blue-500/50 to-green-500/60 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)] z-0"></div>

              {/* Flow Stages */}
              <div className="relative z-20 space-y-5">
                
                {/* STAGE 1: Leads & Intake */}
                <div className="relative">
                  <div className="bg-slate-800/95 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                        <FileText className="w-5 h-5 text-cyan-400" />
                      </div>
                      {/* Text */}
                      <div className="flex-1 pt-1">
                        <div className="text-cyan-300 font-semibold mb-0.5">Leads & Intake</div>
                        <div className="text-slate-300 text-base leading-relaxed">Forms, email, calls</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Flow Pulse - Dot 1 */}
                  <motion.div
                    className="absolute left-[2.25rem] top-[4.5rem] w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_16px_rgba(6,182,212,1)]"
                    animate={{
                      y: [0, 68],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0,
                      repeatDelay: 8
                    }}
                  />
                </div>

                {/* STAGE 2: Cases / Jobs / Orders */}
                <div className="relative">
                  <div className="bg-slate-800/95 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                        <Briefcase className="w-5 h-5 text-cyan-400" />
                      </div>
                      {/* Text */}
                      <div className="flex-1 pt-1">
                        <div className="text-cyan-300 font-semibold mb-0.5">Cases / Jobs / Orders</div>
                        <div className="text-slate-300 text-base leading-relaxed">Active work in flight</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Flow Pulse - Dot 2 */}
                  <motion.div
                    className="absolute left-[2.25rem] top-[4.5rem] w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_16px_rgba(6,182,212,1)]"
                    animate={{
                      y: [0, 68],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                      repeatDelay: 8
                    }}
                  />
                </div>

                {/* STAGE 3: Core Systems - HIGHLIGHTED (the messy middle) */}
                <div className="relative">
                  {/* Extra Outer Glow Ring - emphasized for "messy middle" */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/20 rounded-xl blur-lg"></div>
                  
                  <div className="relative bg-slate-800/90 backdrop-blur-sm border-2 border-cyan-500/60 rounded-xl p-5 shadow-[0_0_32px_rgba(6,182,212,0.4)] hover:border-cyan-500/80 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Icon - Larger & Brighter */}
                      <div className="w-12 h-12 bg-cyan-500/30 border-2 border-cyan-500/70 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                        <Database className="w-6 h-6 text-cyan-300" />
                      </div>
                      {/* Text */}
                      <div className="flex-1 pt-1">
                        <div className="text-cyan-200 font-semibold text-lg mb-0.5">Core Systems</div>
                        <div className="text-slate-300 text-base mb-3 leading-relaxed">ERP • PMS • CRM</div>
                        
                        {/* App Icon Badges - Evenly Spaced */}
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-[10px] text-white font-bold shadow-lg" title="Clio">C</div>
                          <div className="w-7 h-7 bg-orange-600 rounded-md flex items-center justify-center text-[10px] text-white font-bold shadow-lg" title="Procore">P</div>
                          <div className="w-7 h-7 bg-blue-500 rounded-md flex items-center justify-center text-[10px] text-white font-bold shadow-lg" title="Salesforce">S</div>
                          <div className="w-7 h-7 bg-green-600 rounded-md flex items-center justify-center text-[10px] text-white font-bold shadow-lg" title="QuickBooks">Q</div>
                          <div className="w-7 h-7 bg-slate-700 rounded-md flex items-center justify-center text-[10px] text-slate-400 font-bold shadow-lg opacity-70">+6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Flow Pulse - Dot 3 */}
                  <motion.div
                    className="absolute left-[2.25rem] top-[5.5rem] w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_16px_rgba(6,182,212,1)]"
                    animate={{
                      y: [0, 68],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 4,
                      repeatDelay: 8
                    }}
                  />
                </div>

                {/* STAGE 4: Cash Collected */}
                <div className="relative">
                  <div className="bg-slate-800/95 backdrop-blur-md border border-emerald-500/40 rounded-xl p-4 hover:border-emerald-500/60 transition-all duration-300 shadow-lg">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(34,197,94,0.4)]">
                        <DollarSign className="w-5 h-5 text-emerald-400" />
                      </div>
                      {/* Text */}
                      <div className="flex-1 pt-1">
                        <div className="text-emerald-300 font-semibold mb-0.5">Cash Collected</div>
                        <div className="text-slate-300 text-base leading-relaxed">Revenue realized</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Flow Pulse - Dot 4 */}
                  <motion.div
                    className="absolute left-[2.25rem] top-[4.5rem] w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_16px_rgba(34,197,94,1)]"
                    animate={{
                      y: [0, 68],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 6,
                      repeatDelay: 8
                    }}
                  />
                </div>

                {/* STAGE 5: Relationships & Growth ✅ NEW - Final light-up state */}
                <div className="relative">
                  {/* Rich Green Glow - "final light-up" */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500/40 to-emerald-500/40 rounded-xl blur-xl"></div>
                  
                  <div className="relative bg-gradient-to-br from-emerald-900/70 to-green-900/70 backdrop-blur-sm border-2 border-green-400/70 rounded-xl p-4 shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:border-green-400/90 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Icon - Pulsing Star */}
                      <div className="w-10 h-10 bg-green-400/30 border-2 border-green-400/70 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.7)]">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            filter: [
                              "drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))",
                              "drop-shadow(0 0 12px rgba(34, 197, 94, 1))",
                              "drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Star className="w-5 h-5 text-green-300 fill-green-300" />
                        </motion.div>
                      </div>
                      {/* Text */}
                      <div className="flex-1 pt-1">
                        <div className="text-green-200 font-semibold mb-0.5">Relationships & Growth</div>
                        <div className="text-slate-300 text-sm">Reviews, referrals, repeat work</div>
                      </div>
                      {/* Success Indicator - Larger */}
                      <div className="text-green-300 text-3xl leading-none font-bold">✓</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Caption Below Graphic - FINAL VERSION */}
              <div className="relative z-10 mt-10 pt-6 border-t border-slate-700/50">
                <div className="space-y-2 text-center">
                  <p className="text-slate-200 text-lg leading-relaxed">
                    We map this lifecycle, then connect and automate the tools you already use so work flows cleanly without manual handoffs.
                  </p>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    Your team can focus on higher-value work instead of manual data babysitting.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* MICRO-CTA - Bottom of Section */}
        <div className="mt-12 text-center lg:text-left lg:max-w-3xl">
          <p className="text-slate-100 text-xl mb-4 leading-relaxed">
            Want to see this mapped for your firm?
          </p>
          <button
            onClick={onBookAuditClick}
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 inline-flex items-center gap-2"
          >
            Book Your Integration Audit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}