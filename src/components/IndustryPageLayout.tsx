import { ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface PainPoint {
  title: string;
  description: string;
  icon: ReactNode;
}

interface Solution {
  title: string;
  description: string;
  timeline?: string;
  icon: ReactNode;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface IndustryPageLayoutProps {
  // Section 1: Pain Points
  painHeading: string;
  painPoints: PainPoint[];
  
  // Section 2: Solutions
  solutionHeading: string;
  solutions: Solution[];
  
  // Section 3: Process
  processHeading: string;
  processSteps: ProcessStep[];
  processTimeline?: string;
  
  // Section 4: CTA Band
  ctaBandHeading: string;
  ctaBandBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  
  // Section 5: FAQ
  faqs: FAQ[];
  
  // Handlers
  onBookAuditClick: () => void;
}

export default function IndustryPageLayout({
  painHeading,
  painPoints,
  solutionHeading,
  solutions,
  processHeading,
  processSteps,
  processTimeline,
  ctaBandHeading,
  ctaBandBody,
  ctaPrimary,
  ctaSecondary,
  faqs,
  onBookAuditClick,
}: IndustryPageLayoutProps) {
  return (
    <>      
      {/* Section 1: Pain Points - FROSTED DARK BACKGROUND */}
      <section className="relative pt-4 pb-12 sm:py-20 px-4 sm:px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-8 sm:mb-12 text-center">
            {painHeading}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  {point.icon}
                </div>
                
                <h3 className="text-xl text-white mb-3 font-semibold">
                  {point.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 2: Solutions */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-12 text-center">
            {solutionHeading}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                
                <h3 className="text-xl text-white mb-3 font-semibold">
                  {solution.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed mb-4">
                  {solution.description}
                </p>
                
                {solution.timeline && (
                  <div className="flex items-center gap-2 text-sm text-cyan-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{solution.timeline}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 3: Process */}
      <section className="relative py-20 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-4 text-center">
            {processHeading}
          </h2>
          
          {processTimeline && (
            <p className="text-center text-slate-400 mb-12">
              {processTimeline}
            </p>
          )}
          
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl text-white mb-3 font-semibold">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 4: CTA Band */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 to-slate-900/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-12 shadow-[0_0_60px_rgba(6,182,212,0.15)]">
            <h2 className="text-3xl sm:text-4xl text-white mb-6">
              {ctaBandHeading}
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              {ctaBandBody}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onBookAuditClick}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 font-semibold text-lg flex items-center gap-2 group"
              >
                {ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onBookAuditClick}
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/30 hover:border-cyan-400/50 text-cyan-400 rounded-full transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
              >
                {ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 5: FAQ */}
      <section className="relative py-20 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-12 text-center">
            Common Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <h3 className="text-xl text-white mb-4 font-semibold">
                  {faq.question}
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pre-Footer CTA Section */}
      <section className="relative py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={onBookAuditClick}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 text-lg font-semibold"
          >
            Book Your Integration Audit
          </button>
        </div>
      </section>
      
      <Footer onBookAuditClick={onBookAuditClick} />
    </>
  );
}