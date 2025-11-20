import { useEffect } from "react";
import { FileText, AlertCircle, DollarSign, Zap, ArrowRightLeft, BarChart3 } from "lucide-react";
import Header from "../components/Header";
import IndustryFloatingHero from "../components/IndustryFloatingHero";
import IndustryPageLayout from "../components/IndustryPageLayout";
import { legalIcons } from "../config/legalIcons";

interface LegalFinancialPageProps {
  onBookAuditClick: () => void;
}

export default function LegalFinancialPage({ onBookAuditClick }: LegalFinancialPageProps) {
  useEffect(() => {
    document.title = "Legal Workflow Automation & Clio Integrations | ClaveSolutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "ClaveSolutions helps law firms and legal teams automate intake, matter management, billing and reporting by connecting tools like Clio, Lawmatics, Xero and QuickBooks. Reduce manual data entry and status chasing across your legal workflows."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header onBookAuditClick={onBookAuditClick} />
      
      {/* Hero with Floating Icons */}
      <IndustryFloatingHero
        icons={legalIcons}
        heroH1="Automation for the full client journey"
        heroSubhead="We automate intake, matter management, billing, follow-ups, reviews, and referrals so your firm keeps relationships warm while your team focuses on casework, not admin."
        audienceLabel="Built for"
        audiences={[
          "solo attorneys",
          "small firms",
          "growing practices",
          "accounting teams",
          "in-house legal",
          "finance leaders"
        ]}
        automationLabel="We automate:"
        automations={[
          "intake & onboarding",
          "matter setup",
          "time & billing",
          "trust accounting sync",
          "client updates & reminders",
          "reporting & KPIs"
        ]}
        primaryCTA="Book Your Integration Audit"
        secondaryCTA="See ROI Calculator"
        onPrimaryCTAClick={onBookAuditClick}
        onSecondaryCTAClick={() => window.location.href = '/roi-calculator'}
      />
      
      {/* Rest of page content */}
      <IndustryPageLayout
        // Pain Points
        painHeading="Where legal and financial teams lose time today"
        painPoints={[
          {
            title: "Intake scattered across forms, email and phone",
            description: "New clients live in intake tools, emails and paper forms that someone has to key into Clio and your accounting system. Each new matter means 20-30 minutes of manual data entry.",
            icon: <FileText className="w-6 h-6 text-red-400" />,
          },
          {
            title: "Matters updated in one system but not the others",
            description: "Status changes, trust movements and case notes don't sync, so staff chase updates or work from stale information. Paralegals spend 5-8 hours weekly just reconciling systems.",
            icon: <AlertCircle className="w-6 h-6 text-red-400" />,
          },
          {
            title: "Billing and reporting stuck in spreadsheets",
            description: "Time entries and matter data are exported, massaged in Excel and double-checked before invoices go out. Month-end billing takes 2-3 days instead of hours.",
            icon: <DollarSign className="w-6 h-6 text-red-400" />,
          },
        ]}
        
        // Solutions
        solutionHeading="Automations that connect Clio, email, and accounting tools"
        solutions={[
          {
            title: "Intake → Clio → Accounting",
            description: "We integrate Clio and QuickBooks to automatically create or update contacts and matters from your intake tools and email, then sync the right data into accounting—no re-typing. New matters are billable within minutes, not days.",
            timeline: "Typical build: 2-3 weeks",
            icon: <ArrowRightLeft className="w-6 h-6 text-cyan-400" />,
          },
          {
            title: "Status, reminders and client updates",
            description: "Trigger tasks, reminders and client updates when a matter hits key milestones (filed, served, discovery, settlement), keeping everyone aligned without manual follow-ups.",
            timeline: "Typical build: 1-2 weeks",
            icon: <Zap className="w-6 h-6 text-cyan-400" />,
          },
          {
            title: "Billing, trust and reporting",
            description: "Pull time, fees and trust data into cleaner billing and matter reports so your partners see what's happening without spreadsheet gymnastics. Billing becomes a button click, not a multi-day project.",
            timeline: "Typical build: 2-4 weeks",
            icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
          },
        ]}
        
        // Process
        processHeading="How a Legal Ops Integration Audit works"
        processTimeline="Typical engagement: 4-8 weeks from audit to live automations"
        processSteps={[
          {
            number: "1",
            title: "Legal Ops Integration Audit",
            description: "We map how a matter moves from intake to settlement or close, and document your tools, templates and manual handoffs. You'll get a clear picture of where 80% of the friction lives.",
          },
          {
            number: "2",
            title: "Design the automations",
            description: "We decide where humans should add judgment vs. where software should move data, then design the integrations and automations around that. You approve the plan before we build anything.",
          },
          {
            number: "3",
            title: "Build, test and roll out",
            description: "We build in stages, start with a small group (1-2 attorneys or paralegals), then roll out to the wider team once the automations are battle-tested and refined based on real usage.",
          },
        ]}
        
        // CTA Band
        ctaBandHeading="Ready to stop re-typing the same client data in three systems?"
        ctaBandBody="Let's map your legal workflows and find the automations that free up your team without changing your core tools. Most firms see ROI within the first month."
        ctaPrimary="Book Legal Ops Audit"
        ctaSecondary="Talk About a Specific Integration"
        
        // FAQ
        faqs={[
          {
            question: "Do you replace Clio or our practice management system?",
            answer: "No. We work with your existing stack and connect it. The goal is fewer tools and cleaner handoffs, not a disruptive migration. Most firms keep using Clio, Lawmatics, and their accounting software—they just stop doing manual data entry between them.",
          },
          {
            question: "Can you integrate with our document management or e-signature tools?",
            answer: "In many cases, yes. During the audit we review the tools you use today (NetDocuments, iManage, DocuSign, etc.) and identify what can be integrated directly vs. via middleware. Document automation is often a high-value second phase.",
          },
          {
            question: "Do you handle trust accounting?",
            answer: "We don't replace your accountant, but we can help automate the data flows so trust movements and billing are more accurate and easier to reconcile. This typically means fewer late-night trust reconciliation sessions at month-end.",
          },
          {
            question: "What's the typical timeline and investment?",
            answer: "Most legal ops automations take 4-8 weeks from audit to go-live. Investment depends on complexity, but most firms see positive ROI within 30-60 days through time saved on manual data entry and fewer billing errors.",
          },
        ]}
        
        onBookAuditClick={onBookAuditClick}
      />
    </div>
  );
}